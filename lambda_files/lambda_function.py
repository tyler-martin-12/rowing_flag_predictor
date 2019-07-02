import sklearn
import joblib
import pandas as pd

model = joblib.load('model.pkl')
#print(type(model))

def lambda_handler(event, context):    
    p = event['queryStringParameters']

    print("Event params: " + str(p))

    x = pd.DataFrame.from_dict(p, orient='index').transpose()

    pred = model.predict_proba(x)[0][1]
    
    #pred = 36

    result = 'Prediction ' + str(pred)
    
    return {  "body": result }