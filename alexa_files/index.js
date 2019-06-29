// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const fetch = require('node-fetch');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'When would you like the prediction for?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};


const GetPredictionIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GetPredictionIntent';
    },
    async handle(handlerInput) {
        const this_flag_time = handlerInput.requestEnvelope.request.intent.slots.flag_time.value;
        const this_flag_date = handlerInput.requestEnvelope.request.intent.slots.flag_date.value;
        
        console.log(this_flag_time);
        console.log(typeof this_flag_time);

        console.log(this_flag_date);
        console.log(typeof this_flag_date);
        
        
        // to time tuple
        var mytime = new Date(`${this_flag_date}  ${this_flag_time}`);
        mytime.setMinutes(0);
        
        var mytime_num = parseInt(mytime.getTime() / 1000);
        
        console.log(mytime_num);
        
        // decide if time is valid
        
        var now_time = Date.now();
        var now_time_num = parseInt(now_time / 1000);
        
        console.log(now_time_num);
        
        if(mytime_num > now_time_num + 48*60*60 ) {
            var speechText = `Sorry, the prediction time must be less than 48 hours into the future`;
        } else if(mytime_num < now_time_num - 1*60*60) {
            speechText = `Sorry, the prediction time must be in the future`;
        } else {
        


        // get weather prediction
        const dark_sky_key = 'my_dark_sky_key'; // changed to keep my API key secret
        const lat_num = '52.213268'; // Cambridge, UK lat long
        const lng_num = '0.123658';
        var url = `https://api.darksky.net/forecast/${dark_sky_key}/${lat_num},${lng_num},${mytime_num}`;
        
        console.log(url);
        
        // parse weather prediction
        const weather_response = await fetch(url);
        const weather_response_text = await weather_response.text();
        const obj = JSON.parse(weather_response_text);
        
        const weather = obj.currently
        const summary = weather.summary
        const precipIntensity = weather.precipIntensity
        const precipProbability = weather.precipProbability
        const temperature = weather.temperature
        const windSpeed = weather.windSpeed
        
        console.log(windSpeed);
        
        // get prediction
        const ML_url = `https://i8wamt3qgj.execute-api.us-east-1.amazonaws.com/default?x0=${precipIntensity}&x1=${precipProbability}&x2=${temperature}&x3=${windSpeed}`
        const ML_response = await fetch(ML_url);
        const ML_text = await ML_response.text();
        const prediction = parseFloat(ML_text.substr(10)).toFixed(2) * 100
        //const prediction_rounded = round()
    
        
        console.log(typeof prediction);
        console.log(prediction);
        
        speechText = `The weather will be ${summary} with a  ${prediction} percent chance of a yellow or red flag. Would you like to know the prediction at another time?`;
        
        }
        

        
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(`What time for the prediction?`)
            .getResponse();
    }
};


const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Sorry, I couldn't understand what you said. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelpIntentHandler,
        GetPredictionIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();
