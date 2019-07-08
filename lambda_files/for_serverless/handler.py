import os
import sys
import json

import os
import sys
import json
"""
This is needed so that the script running on AWS will pick up the pre-compiled dependencies
from the vendored folder
"""
HERE = os.path.dirname(os.path.realpath(__file__))
sys.path.append(os.path.join(HERE, "vendored"))


import tensorflow as tf
import numpy as np

model = tf.keras.models.load_model('model.h5')


def validate_input(input_val):
    try:
        float_input = float(input_val)
        return float_input
    except ValueError:
        return None

def get_param_from_url(event, param_name):

    if 'queryStringParameters' in event:
        params = event['queryStringParameters']
    else:
        params = event
    return params[param_name]


def return_lambda_gateway_response(code, body):

    return {"statusCode": code, "body": body}


def predict(event, context):
    try:
        x0 = validate_input(get_param_from_url(event, 'x0')) # precipIntensity
        x1 = validate_input(get_param_from_url(event, 'x1')) # precipProbability
        x2 = validate_input(get_param_from_url(event, 'x2')) # temperature
        x3 = validate_input(get_param_from_url(event, 'x3')) # windSpeed

        if (x0 is not None) & (x1 is not None) & (x2 is not None) & (x3 is not None):
            x_list = np.array([x0,x1,x2,x3])
            x_to_pred = np.array(x_list).reshape(-1,4)
            p_green, p_yellow = model.predict(x_to_pred)[0]
        else:
            raise "Input parameter has invalid type: float expected"
    except Exception as ex:
        error_response = {
            'error_message': "Unexpected error",
            'stack_trace': str(ex)
        }
        return return_lambda_gateway_response(503, error_response)

    return return_lambda_gateway_response(200, 'Prediction ' + str(p_yellow))




