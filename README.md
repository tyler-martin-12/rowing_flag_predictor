# Cambridge rowing flag predictor
Weather data is from the [DarkSky API](https://darksky.net/dev)

## Using Alexa skill
Enable skill search `Cambridge rowing flag prediction`

Invocation `open flag prediction`

Getting prediction `today at 2 pm`

or `flag prediction for today at 2 pm`

## Gathering data
Historical flag data was collected from two sources

1. Tweets from the last 5 years

2. Hourly checks of the flag in the past 6 months

See `data_generator.py` for details

## Making prediction model

## Creating API on AWS Lambda

This makes the API endpoint executable with the following
`https://i8wamt3qgj.execute-api.us-east-1.amazonaws.com/default?x0=${precipIntensity}&x1=${precipProbability}&x2=${temperature}&x3=${windSpeed}`

For example, using `precipIntensity` of 0, `precipProbability` of 0, `temperature` of 50, and `windSpeed` of 50:
`https://i8wamt3qgj.execute-api.us-east-1.amazonaws.com/default?x0=0&x1=0&x2=50&x3=5`

Which results in the following prediction
`Prediction 0.00030347725002622685`

## Creating Alexa skill

## Resources

[Number Geek Tutorial](https://gist.github.com/muttoni/0b1ee638f6c74a0681f9d694cf11ef63)

[AWS Cloud 9 // Lambda Tutorial](https://medium.com/snapdocs-product-blog/model-services-for-the-cloud-from-the-cloud-or-cloud9-lambda-gateway-data-in-use-d161de65a9cf)