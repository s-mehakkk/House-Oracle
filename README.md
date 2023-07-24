# House-price-prediction

The project aims to create a sophisticated real estate platform that leverages data analytics and machine learning to provide valuable insights and accurate price predictions for Homes in different areas of Banglore City. This full-stack application combines an interactive user interface with an Express.js backend to serve as a robust housing prediction platform.

The application's core feature is the machine learning model, trained using linear regression techniques, to predict house prices based on essential parameters, including total square feet, number of bedrooms, bathrooms, and location. This model has been trained on the Bangalore home prices dataset of historical housing prices available on Kaggle.com.

Data loading, cleaning, outlier detection, and feature engineering are key steps. Outliers are removed to enhance model accuracy. Feature engineering helps extract valuable information from the dataset, just as creating the price per square foot column helped analyze data further and even remove more outliers. The categorical features were handled accordingly, some by one-hot encoding and some by converting to number values after data cleaning. K-Fold Cross Validation is performed to assess the model's reliability and generalizability. The model has an accuracy score of 87%, supported by cross-validation.

The project's front end is a user-friendly and intuitive web interface designed to predict house prices. The is to provide information such as the area in square feet, the number of bedrooms (BHK), the number of bathrooms, and the location as input for the regression model. The prediction result provides the estimated value after clicking the "Estimate Price" button. The Node.js application serves as the HTTP request handler for the UI application.

## Features
- A real estate platform utilizing data analytics and machine learning
- Predicting house prices based using a linear regression model
- Simple UI for easy interaction

## UI preview

<img width="1439" alt="House_price_prediction_UI" src="https://github.com/s-mehakkk/House-price-prediction/assets/75841992/8b997ef4-0d1f-4dc4-be6e-e4df1e2d205c">


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
- For the server, run the `npm install` command to install dependencies.
- If you wish to run the .ipynb file on your local machine, install all the dependencies mentioned in the 'requirements.txt' file using the `pip install <dependancy>` command.

## Usage
[Provide usage instructions and examples. Describe how users can use your project.]
- Start the server using the `node index.js` command. It will start at `http://localhost:8081`.
- Open the `app.html` file in your browser.
- Give valid inputs on the UI and click the 'Estimate Price' button.
- Predicted price will be shown in the yellow box below.

*Background credits: unsplash.com/@gettyimages*
