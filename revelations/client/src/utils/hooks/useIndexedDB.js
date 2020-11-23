import { useState, useEffect } from 'react';
export default function useIndexedDB() {
    const [request, setRequest] = useState(null);
    const [db, setDb] = useState(null);
    useEffect(()=>{
        const r = window.indexedDB.open("saveGame", 1);
        r.onupgradeneeded = (event) => {
            const database = event.target.result;
            database.createObjectStore("checkpoint");
        };
        r.onsuccess = (event) => setDb(event.target.result);
        r.onerror = function(event) {
            console.log("Woops! " + event.target.errorCode);
        };
        setRequest(r);
    },[]);
    const saveGame = (manager) => {
        if(db === null){
            return false;
        }else{
            const transaction = db.transaction(["checkpoint"], "readwrite");
            const store = transaction.objectStore("checkpoint");
            store.put(manager.getGameState(), "checkpoint");
            return true;
        };
    };
    const loadGame = () => {
        return new Promise ((res, rej) => {
            if(db === null){
                rej(false);
            }else{
                const transaction = db.transaction(["checkpoint"], "readwrite");
                const store = transaction.objectStore("checkpoint");
                try{
                    const req = store.get("checkpoint");
                    req.onsuccess = () => {
                        res(req.result);
                    }
                }catch(error){
                    console.log(error);
                    rej(false);
                };
            };
        });
    };
    return {saveGame, loadGame}
};