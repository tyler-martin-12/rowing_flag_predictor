import numpy
import pandas as pd
import joblib
from sklearn import linear_model
from sklearn.model_selection import train_test_split

df = pd.read_csv(
 "https://raw.githubusercontent.com/tyler-martin-12/rowing_flag_predictor/master/data/df.csv",index_col=0)

print(df.head())

x = df.copy().drop('label', axis=1)
y = df['label']

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=.3 , random_state=1)

lm = linear_model.SGDClassifier(alpha=.1,loss='log')
lm.fit(x_train, y_train)

joblib.dump(lm, 'model.pkl')