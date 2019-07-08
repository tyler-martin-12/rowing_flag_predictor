import os
import sys
import json
import configparser as ConfigParser
"""
This is needed so that the script running on AWS will pick up the pre-compiled dependencies
from the vendored folder
"""
HERE = os.path.dirname(os.path.realpath(__file__))
sys.path.append(os.path.join(HERE, "vendored"))
"""
Now that the script knows where to look, we can safely import our objects
"""
#from tf_regression import TensorFlowRegressionModel
"""
Declare here global objects living across requests
"""
# use Pythonic ConfigParser to handle settings
#Config = ConfigParser.ConfigParser()
#Config.read(HERE + '/settings.ini')
# instantiate the tf_model in "prediction mode"
#tf_model = TensorFlowRegressionModel(Config, is_training=False)
# just print a message so we can verify in AWS the loading of dependencies was correct
#print("loaded done!")

import tensorflow as tf
import numpy as np

model = tf.keras.models.load_model('nn_model')


precipIntensity = 0
precipProbability = 0
temperature = 22
windSpeed = 5


x_list = np.array([precipIntensity,precipProbability,temperature,windSpeed])
x_to_pred = np.array(x_list).reshape(-1,4)
value,_ = model.predict(x_to_pred)[0]

print(value)




