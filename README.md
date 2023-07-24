# House-price-prediction

The project aims to create a sophisticated real estate platform that leverages data analytics and machine learning to provide valuable insights and accurate price predictions for Homes in different areas of Banglore City. This full-stack application combines an interactive user interface with an Express.js backend to serve as a robust housing prediction platform.

The core feature of the application is the machine learning model, trained using linear regression techniques, to predict house prices based on essential parameters including total square foot, number of bedrooms, bathrooms, and location. This model has been trained on Bangalore home prices dataset of historical housing prices available on Kaggle.com.
Key steps include data loading, cleaning, outlier detection, and feature engineering. Outliers are removed to enhance model accuracy. Feature engineering helps extract valuable information from dataset, just as creating price per square foot column helped annalysing data further and even removing more outliers. The categorical features were handled accordingly, some by one hot encoding and some by converting to number values after data cleaning. K-Fold Cross Validation is performed to assess the model's reliability and generalizability. The model has a accuracy of 87%, supported by cross validation.

The front-end of the project is a user-friendly and intuitive web interface designed to predict house prices. The is to provide information such as the area in square feet, the number of bedrooms (BHK), the number of bathrooms, and the location as input for the regression model. Upon clicking the "Estimate Price" button, the prediction result is displayed providing the estimated value. The Node.js application serves as the hhtp request handler for the UI application.

## Features
- A real estate platform utilizing data analytics and machine learning
- Predicting house prices based using a linear regression model
- Simple UI for easy interaction

## UI preview


## Technologies Used
- Regression Model:
  -- Jupyter Notebook
  -- Python
  (Requirements file in Regression_model directory)
- Backend application
  -- Node.js
  -- Express.js
- Frontend application
  -- HTML
  -- CSS
  -- JavaScript

## Installation
- Clone this repository to your local machine.
- Change your working directory to the project folder.
- For the server, run `npm install` command for installing dependencies.
- If you wish to run the .ipynb file on your local, install all the dependencies metioned in the 'requirements.txt' file using `pip install <dependancy>` command.

## Usage
[Provide usage instructions and examples. Describe how users can use your project.]
- Start the server using `node index.js` command. It will start at `http://localhost:8081`.
- Open the `app.html` file in your browser.
- Give valid inputs on the UI and click 'Estimate Price' button.
- Predicted price will be shown in the yellow box bellow.

*Background credits: unsplash.com/@gettyimages*
