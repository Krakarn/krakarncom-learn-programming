# Course

## Chapter Overview

- Intro
  - Getting Started
  - Toolbox
- Project
  - Root Folder
  - Initial Files
  - Hello World
- Variables
  - Constants
  - Mutables
- Primitive Data Types
  - Numbers
  - Strings
- Numeric Operations
- String Operations
- Boolean Algebra
- Control Structures
  - Conditionals
  - Loops
    - For Loop
    - While Loop
- Arrays
  - Creating Arrays
  - Using Arrays in Loops
  - Transforming Arrays
  - Filtering Arrays
- Objects
  - Creating Objects
  - Mutating Objects
- Functions
  - What are Functions?
  - Function Parameters
  - Returning Values
- Game
  - Game Structure
  - Constructing the Game Loop
  - Game State
  - Game Logic
  - Player Input

## Overall Goal

- Create a functioning text adventure
  - It should have multiple rooms
    - The player is inside one room at a time
    - The player has an inventory that consists of items
      - The player may look inside it's inventory and examine each item in it
      - The player may use items with other items or things of interest in the current room
    - Each room may have static things in it
      - A static thing has a short and long description
      - A static thing may have a use, like a button can be pressed
    - Each room may have items in it
      - An item has a short and a long description
      - An item may be picked up by the player
    - Each room may have npcs in it
      - An npc has a name and a description
      - A player may talk to an npc
      - An npc has it's own dialogue
        - A dialogue has a beginning, questions, and answers to the questions
    - Each room may have paths to other rooms
      - A path has a description
      - A path may be locked
      - A lock requires an opening mechanism
      - An opening mechanism can be a button that needs to be pressed or a key (item)
  - It should have a winning condition
    - When the player wins, the winning message is shown and the program ends
