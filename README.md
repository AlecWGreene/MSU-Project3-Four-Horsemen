# Ashen Void
A react-based Tower Defense game

## What is Ashen Void?
Ashen Void is an online tower defense game without a preset path or placement restrictions. The player loads into the cold emptiness of space with nothing but a planet to defend and waves of enemy spaceships looking to wreak havoc. Place walls to corrale the spaceships into strategic locations and then destroy them by building towers. Towers require Tower bases to be built, but can be bought, sold, and upgraded without removing the base itself. Each base must be placed on a wall segment. Each round a new set of enemies will spawn, and as they are destroyed the player can use the cash to build or upgrade their defenses. However, the walls must be placed in between rounds in order to guarantee that the creeps have a way through. Got to give them a fighting chance! 

## Why was Ashen Void created?
This game was completed as the final project in Michigan State University's full stack web development bootcamp by a team of students passionate for game development. Especially fond of tower defense games like Bloons Tower Defense or Canyon Tower Defense, we sought to add a different spin to the genre by adding more creative freedom to the strategies. While games like Sanctum 2 have implemented similar systems, we wanted to give that unique experience outside the scope of the hybrid-fps multiplayer frame-work.

## How was Ashen Void created?
Ashen Void utilizes the MERN stack to deliver its user experience. The cloud server is setup using Node.JS and Express, which uses MongoDB to manage user authentication and player saves. When the user navigates to the site, the game is delivered as a single page react application. From there, the player can navigate to the game page which initializes a custom built game engine utilizing the ECS architecture, and React will interface with a GameManager component that handles user inputs as well as all game logic or state management for the game itself. 

## How can I contribute?
If you are interested in contributing or making a mod/spin off, please create an Issue and if it fits within our plan for the game we will authorize a forked repo. Please consider the fact that this project was completed as a showcase of our skills as developers, and while we will consider any requests for contribution that we will not be obligated to do so.

## Credits

### Development Team
**Project Lead** -------------------------------- Alec Greene
**Front End** ----------------------------------- Maria Jimena Alvarez
**Back End/Sound Suite** ------------------------ Sebasatian Arrazola
**Input Handler** ------------------------------- Ron Pitts
**Game Engine/Renderer** ------------------------ Alec Greene

### Asset Credits
**Tower, Base, and Wall Sprites** --------------- Zintoki, https://zintoki.itch.io/ground-shaker
**Spaceship Sprites** --------------------------- Gisha, https://gisha.itch.io/spaceships-asset-pack

## Special Thanks
