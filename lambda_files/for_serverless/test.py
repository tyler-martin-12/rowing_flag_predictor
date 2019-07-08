## see https://github.com/jacopotagliabue/tensorflow_to_lambda_serverless
## and https://medium.com/tooso/serving-tensorflow-predictions-with-python-and-aws-lambda-facb4ab87ddd
## for source code and blog post

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

precipIntensity = 0
precipProbability = 0
temperature = 22
windSpeed = 5

x_list = np.array([precipIntensity,precipProbability,temperature,windSpeed])
x_to_pred = np.array(x_list).reshape(-1,4)
p_green, p_yellow = model.predict(x_to_pred)[0]

print(p_yellow)




