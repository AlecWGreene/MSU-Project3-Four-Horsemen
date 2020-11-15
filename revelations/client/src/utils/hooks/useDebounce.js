import React, { useEffect, useState } from "react";

function useDebounce(value, delay){
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup
        return () => clearTimeout(timeout);
    }, [value, delay]);
}

export default useDebounce;