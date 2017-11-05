# Udacity React Nanodegree - Project 3 - 'UdaciCards' - Completed

## Running the Project
This application is expected to function in both android and IOS environments
* Clone this Git Repository
* run `npm install`
* Start App
    * Development Mode: run `yarn start` or `npm start`
    * IOS Mode: `npm run ios`
    * Android Mode: `npm run android`
* View https://github.com/react-community/create-react-native-app for more in-depth instructions

## Project Overview
For the UdaciCards project, you will build a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## Why this project?
This project encompasses the fundamental aspects of building a native application including handling infinite lists, routing, and user input. By building this project, you will gain an understanding of how to use React Native to build an iOS and Android application.

## Specification
You'll create your project using create-react-native-app. There will be no starter code that you need to download.

The specification provided below is the minimum required for this project. You may extend your project as you like, however.

**Specific Requirements:**
* Use create-react-native-app to build your project, 
* Allow users to create a deck which can hold an unlimited number of cards.
* Allow users to create a deck which can hold an unlimited number of cards.
* The front of the card should display the question.
* The back of the card should display the answer.
* Users should be able to quiz themselves on a specific deck and receive a score once they're done.
* Users should receive a notification to remind themselves to study if they haven't already for that day.

**Views**
* Default (Root)
    * displays the title of each Deck
    * displays the number of cards in each deck
* Individual Deck View
    * displays the title of the Deck
    * displays the number of cards in the deck
    * displays an option to start a quiz on this specific deck
    * An option to add a new question to the deck
* Quiz View
    * displays a card question
    * an option to view the answer (flips the card)
    * a "Correct" button
    * an "Incorrect" button
    * the number of cards left in the quiz
    * Displays the percentage correct once the quiz is complete
* New Deck View
    * An option to enter in the title for the new deck
    * An option to submit the new deck title
* New Question View
    * An option to enter in the question
    * An option to enter in the answer
    * An option to submit the new question