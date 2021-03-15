# Glowlens Technical Challenge


Requirements: Create a React App that uses a public api such as getty images to show a list of images and an image detail page


## Project Plan

Use react-router-dom to create two subcomponents that will live in one main component. The main component will call the API and then feed the data to the list component. Then the list component will pass the selected item to the item detail component through the main component so that it will load as a URL param on it’s own page. 

Public Image API:https://www.breakingbadapi.com/

API call for 10 images: https://www.breakingbadapi.com/api/characters?limit=10

### Deployed Demo

You can check out a deployed demo at: https://grolensimages.web.app/home
