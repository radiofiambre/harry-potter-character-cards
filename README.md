# Harry Potter Character Cards

This is the assessment exercise for Module 3 of the Adalab School's Web Development Bootcamp, Nov 2024 - Mar 2025.

It's an SPA built with React that connects to an API and displays a list of results using a combination of filters. It then displays these results individually on a detail page.

## Features

### Harry Potter Character List
A request is made to [this API](https://hp-api.onrender.com/api/characters) and the characters are rendered. The user will see a list of cards with a character photo (or a placeholder image if there is none), their name, and their species.
The characters are sorted alphabetically.

### Character Filtering
#### Filter by Name
The user types in the field, and the results are updated as they type. If no results are found, a message is displayed.

#### Filter by House
Using a selector, four options are chosen, and the list is updated. By default, results for Gryffindor are displayed.

### Form Reset
Clicking the Reset button clears the form results and returns the form to its initial state.

### Character Detail Page
Clicking on a card in the list loads a page displaying more information about the character, such as their gender, nicknames (if any), and their house crest.
There is a link to return to the main list. Upon returning, the user's input for searching by name remains unchanged.

### Not Found Page
If the user accesses a path that doesn't exist, a 404 page is displayed with a button to return to the list.

### Supported Paths
If the user refreshes the detail page or enters it manually, the details are loaded.

## Technologies

* React: The project is developed using this library and its features:
    * Component-based structure
    * Props and liftings
    * Hooks
    * Router

* Sass: For styling. Component-based structure with reset sheets and variables.

## Installation and Use
```
git clone https://github.com/radiofiambre/harry-potter-character-cards.git
cd harry-potter-character-cards
npm install
npm run dev
```