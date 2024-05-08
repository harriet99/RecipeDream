#### Problem Overview
We wanted to help people try new recipes by providing them with the feature of searching by ingredients.
Trying new recipes can be challenging because people often don't know what they can make with the ingredients they have. 
It is usual for major food magazines and apps to categorize meals and provide information about ingredients. 
It doesn’t provide a list of meals that a user can currently make with the ingredients they currently have. 
We believe that people usually have ingredients for the meals  they usually eat, but we also assume that people sometimes want to try new meals with the ingredients. 
At that moment, we realized that people have a hard time finding out what they can make with the ingredients because they usually only know the recipes for the meals they typically try through our interviews.

#### Use Case
1. The user wants to include salt but finds there is sugar at the bottom of the salt. 
2. The user wants to exclude sugar because he has diabetes. 
3. The user then presses X to exclude sugar and add + to include salt. 
<img src="https://github.com/harriet99/RecipeDream/assets/79822409/ac31c6b5-307d-42fe-9662-b2d9c95d9cb9" width="500">

#### From Search to View
<img src="https://github.com/harriet99/RecipeDream/assets/79822409/47d4b5ef-c6ef-4b78-b05b-5ea9a7b329f6" width="1500">

#### Technical Discussion
- Data sources and flows: Primary data sources include user inputs of their available ingredients, ingredients users want to exclude, and an open-source recipe API(named Spoonacular API). The core of our application flow hinges on the user inputting their ingredients, and the system responding with relevant recipes.
- REST APIs Endpoints:
  - Search recipe by ingredient
    - GET https://api.spoonacular.com/recipes/complexSearch
  - Get each recipe information
    - GET https://api.spoonacular.com/recipes/{id}/information
    - This endpoint returns recipe information including the ingredients needed. To show the “missing ingredients” and the “ingredients that you have” list for each recipe, We used a For loop to iterate through every ingredient and see if it is in the user’s fridge.
- The Node.js server is for testing purposes. We collect all the user experience data into our server and then store them in the MongoDB database.

##### Overall Dataflow
<img width="500" alt="Picture6" src="https://github.com/harriet99/RecipeDream/assets/79822409/6c346da8-4d95-49db-a19e-ab3c64cd944e">

##### Frontend Dataflow
<img width="700" alt="Picture7" src="https://github.com/harriet99/RecipeDream/assets/79822409/431890a7-d81b-4ee5-9493-464cc2a5c2d2">
