# Retail Site 

## Description 

The purpose of this project was to build the back end of an e-commerce site using Node.js, Express.js, and Sequelize. The database contains categories, products, and tags which can be created, updated, or deleted using CRUD operations. The API routes were tested with Insomnia. 

While working on this project, I learned how to use and define Sequelize models with a variety of data types. I improved my understanding of RESTful API principles and CRUD operations. I also learned how to use Insomnia effectively to test a variety of routes that simulate client-side interactions. 

## Installation 

To install this application, clone the repository to your local machine and then open the integrated terminal and run "npm install." Edit the .env-example file to include your own username and password. 

Next open the mysql shell and run the command "source db/schema.sql;" to create the necessary datatbase. Exit the mysql shell and then enter the command "npm run seed" to seed the database. 

Finally, enter the command "npm run start" to start the server. 

## Usage 

To use this application, you will need Insomnia or something similar to interact with the data. 

Open Insomnia and enter the base url http://localhost:3001/api  to get started. 

To view all categories, add /categories to the base url and perfomr a GET request.
To view a single category by its id, add /categories/{id number} to the base url and perform a GET reqeust.
To update a category, add /categories/{id number} to the base url, then enter your preferred changes in the body and perform a put request. 
To create a new category, add /categories to the base url, then enter your new category in the body and perform a POST request. 
To delete a category, add /categories/{id number} to the base url and perform a DELETE request. 

To view all products, add /products to the base url and perfomr a GET request.
To view a single product by its id, add /products/{id number} to the base url and perform a GET reqeust.
To update a product, add /products/{id number} to the base url, then enter your preferred changes in the body and perform a put request. 
To create a new product, add /products to the base url, then enter your new product in the body and perform a POST request. 
To delete a product, add /products/{id number} to the base url and perform a DELETE request. 

To view all tags, add /tags to the base url and perfomr a GET request.
To view a single tag by its id, add /tags/{id number} to the base url and perform a GET reqeust.
To update a tag, add /tags/{id number} to the base url, then enter your preferred changes in the body and perform a put request. 
To create a new tag, add /tags to the base url, then enter your new tag in the body and perform a POST request. 
To delete a tag, add /tags/{id number} to the base url and perform a DELETE request. 

## Credits 

I used [this guide](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/) to learn more about sequelize queries. 

## License 

This project was created for educational purposes and does not have a license. 

## Walkthrough 

[Click here](https://drive.google.com/file/d/1cFNnFPn3alxZprc1TDG6rgVLDKiFiGrO/view?usp=sharing) to see a walkthrough video.