# Cambridge rowing flag predictor
Weather data is from the [DarkSky API](https://darksky.net/dev)

## Using Alexa skill
Enable skill search `Cambridge rowing flag prediction`

Invocation `open flag prediction`

Getting prediction `today at 2 pm`

or `flag prediction for today at 2 pm`

## Problem statement
I wanted to create an algorithm to predict the flag color (https://www.cucbc.org/flag) for rowing conditions in Cambridge, UK based on forecasted weather. Knowing the likely color in advance would help crews cancel or reschedule outings.

In addition, the flag is not always operational, like during holidays, and it would be useful for rowers still rowing in this time to know about predicted weather conditions to schedule outings.


## Gathering data
Historical flag data was collected from two sources

1. [Tweets](https://twitter.com/cucbc) from the last 5 years 

2. Hourly checks of the flag in the past 6 months

See `data/data_generator.py` for details of (2). From a long list of weather details four features were selected: precipitation intensity (0-1), precipitation probablity (0-1), temperature (F), and wind speed (mph). Visibility would also be useful but seems to not have been recorded by DarkSky. Therefore these four variables were collected concurrently with the flag data (color, time).

## Making prediction model

The data from the about sources was merged into a DataFrame(`data/csvs/merged_df.csv`). Using this, several models and metrics were explored after doing some exploratry data analysis.

<img src="data/figs/data_viz.png" width="700">

<img src="data/figs/param_sweep.png" width="700">
 
<img src="data/figs/model_comparison_2.png" width="700">




## Creating API on AWS Lambda

This makes the API endpoint executable with the following
`https://mv7r9rtnef.execute-api.us-west-2.amazonaws.com/dev/flag-lambda-dev-predict?x0=${precipIntensity}&x1=${precipProbability}&x2=${temperature}&x3=${windSpeed}`

For example, using `precipIntensity` of 0, `precipProbability` of 0, `temperature` of 67, and `windSpeed` of 0:
`https://mv7r9rtnef.execute-api.us-west-2.amazonaws.com/dev/flag-lambda-dev-predict?x0=0&x1=0&x2=67&x3=0`

Which results in the following prediction
`Prediction 0.07932057`

## Creating Alexa skill

## Resources

[Number Geek Tutorial](https://gist.github.com/muttoni/0b1ee638f6c74a0681f9d694cf11ef63)

[AWS Cloud 9 // Lambda Tutorial](https://medium.com/snapdocs-product-blog/model-services-for-the-cloud-from-the-cloud-or-cloud9-lambda-gateway-data-in-use-d161de65a9cf)

[TF --> Lambda Tutorial](https://medium.com/tooso/serving-tensorflow-predictions-with-python-and-aws-lambda-facb4ab87ddd#.v01eyg8kh)

