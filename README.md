<img width="212" alt="Screen Shot 2022-11-24 at 12 15 57 PM" src="https://user-images.githubusercontent.com/95496577/203852862-c1d27a46-5843-45d1-8d6e-a75b1d922675.png"> 

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Abstract](#abstract)
- [Deployed Link](#deployed-link)
- [Illustrations](#illustrations)
  - [Desktop](#desktop)
  - [Mobile](#mobile)
- [Application Wireframes](#application-wireframes)
  - [Main Page](#main-page)
  - [Search Results](#search-results)
- [Technology Stack](#technology-stack)
- [User Stories](#user-stories)
- [Context and Features](#context-and-features)
- [Future Features](#future-features)
- [Application Set-Up](#application-set-up)
- [Contributor LinkedIn](#contributor-linkedin)
- [Contributor GitHubs](#contributor-githubs)
- [Project Specs](#project-specs)

## Abstract

- Welcome to _World Wide Wears_ (_WWW_)! At _WWW_ we are dedicated to providing the latest and greatest trendy clothing items the world wide web has to offer. Please check out our Black Friday Deals available right now, and dare to explore our inventory of thousands of products. Check out our amazing collection of "wears" today!

## Deployed Link

- Check out our application [HERE!](https://world-wide-wears.vercel.app/) 

## Illustrations

### Desktop

<img width="1424" alt="Screen Shot 2022-11-25 at 2 11 38 PM" src="https://user-images.githubusercontent.com/95496577/204056412-15f80cd9-191a-4ed4-a387-aee6105bc0ef.png">

<img width="1425" alt="Screen Shot 2022-11-25 at 2 11 53 PM" src="https://user-images.githubusercontent.com/95496577/204056995-f8c03d22-8ce8-467c-9152-e039f943e738.png">

<img width="1428" alt="Screen Shot 2022-11-25 at 2 12 41 PM" src="https://user-images.githubusercontent.com/95496577/204056628-81e6f2a0-e4e6-41ec-b0e5-f269015af01f.png">

<img width="1401" alt="Screen Shot 2022-11-25 at 2 13 18 PM" src="https://user-images.githubusercontent.com/95496577/204056644-c94f0f2b-74f2-4798-a43b-48c9918053d5.png">

### Mobile

![IMG-0921](https://user-images.githubusercontent.com/95496577/204056681-7f614b75-a349-404b-8a45-b0a022512e49.jpg)

![IMG-0922](https://user-images.githubusercontent.com/95496577/204056691-427eddf9-b5f2-4736-a291-3afd483d0e0c.jpg)

![IMG-0923](https://user-images.githubusercontent.com/95496577/204056699-6824bc4c-6efd-4c05-92f3-4846b941b427.jpg)

![IMG-0925](https://user-images.githubusercontent.com/95496577/204056730-cd9c5e1d-c811-44f7-8134-7b39ad8ce1aa.jpg)

## Application Wireframes

### Main Page

![Main page](https://user-images.githubusercontent.com/95496577/203845921-c943cf27-330c-4638-8b15-ba2fa6eac4ae.png) 

### Search Results

![Search Results](https://user-images.githubusercontent.com/95496577/203845964-c1867b1c-ef13-4fde-9f2a-942de7c32d14.png) 

## Technology Stack

- CSS3 
- Cypress.io
- JSX
- React.js
- React Hooks
- React Router
- UUID v4

## User Stories

- As a user, I should be able to use a search bar and search button to search for products by clicking the search button or pressing enter on the keyboard. 

- As a user, I should see different product results based on search parameters.

- As a user, I should be able to navigate from page to page to see additional product results. 

- As a user, I should not see the previous button on the first page and the next button on the final page.

- As a user, I should be able to add items to my cart.

- As a user, I should be able to remove items from my cart.

- As a user, I should be able to confirm my purchase for the items in my cart.

## Context and Features

- _WWW_ allows users to explore thousands of products from around the world. Upon page load, the user is met with a home page advertising some of our hottest Black Friday sales. The navigation bar contains an application logo (which conveniently links back to the home page), a link to the `ABOUT US` page, a search box, and a link to the user’s `Cart`. The user is able to type any term into the search box and results will return based on the term. If there are no results for the term, a message will display informing the user. After receiving search results, the user is able to navigate between pages of results using forward and back buttons that display page locations. Every item on the page has an `Add To Cart` button. When the user clicks this button, it will be added to their cart. On the `Cart` page the user is able to see the total for the items they added to the cart, remove items from the cart, and confirm item purchases.  
 
- The application was designed from the ground up with the integration of _Searchspring’s Search API_ in mind.  The data organization, pagination features, and search term parameters make the experience of searching for clothing items on `WWW` fast, efficient, and easy to use. Our founder Michael Harrison is very thankful for the eCommerce optimization tools provided by _Searchspring_, without which _WWW_ would not be possible. 

## Future Features

Some future features I’d like to add to this application are:

- An individual product page with additional product details (description, colors available, sizes, etc.).
- Being able to retain cart items upon refresh with an API or local storage.
- More extensive pagination features. 

## Application Set-Up

1. Fork repository on GitHub.

2. `Git clone` the repository to your local machine.

3. `Cd` into the directory.

4. Run `npm install` in your terminal to install project dependencies.

5. Run `npm start` in the terminal to see the application in development mode on `http://localhost:3000/`. 

6. Run `npm run cypress` in the terminal to start Cypress, select _E2E Testing_, click _Start E2E Testing in Chrome_, and pick a E2E Spec to run tests for.   

7. When finished with the application and or testing, type `Control + C` in the terminal to stop running the application. 

## Contributor LinkedIn

- [Michael Harrison: LinkedIn](https://www.linkedin.com/in/michael-j-harrison57/)

## Contributor GitHubs

- [Michael Harrison: GitHub](https://github.com/mikeharrison57) 

## Project Specs

- The specs for this application can be found 
[here](https://docs.google.com/document/d/1PFjEI30K8DH3lWU4vQEHFYesInhP1Gdpq9KdjySkgbU/edit?usp=sharing)
