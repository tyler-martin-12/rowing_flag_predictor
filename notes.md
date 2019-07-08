## sentence
Predicts the flag color (https://www.cucbc.org/flag) for rowing conditions in Cambridge, UK based on forecasted weather.

## description
This skill predicts the probablity of a yellow or red flag (https://www.cucbc.org/flag) up to 72 hours in the future and gives a summary of the forecasted weather. The flag color is set by the Cambridge University Combined Boat Clubs (CUCBC) for rowing conditions in Cambridge, UK based on current/forecasted weather conditions. Crews are restricted on yellow and red flags.

Weather data is from the DarkSky API.


## commands
scp mlmi_cluster2:/homes/tam66/Documents/side/flag/data_generator.py .

## serverless
https://raw.githubusercontent.com/tyler-martin-12/rowing_flag_predictor/master/data/df.csv

python -m pip install --target=./ numpy pandas scipy sklearn keras tensorflow


https://medium.com/tooso/serving-tensorflow-predictions-with-python-and-aws-lambda-facb4ab87ddd

H+lBaTW/zRW1qrDSSpKgynKNCoOURW5jLuCPER4i

export AWS_ACCESS_KEY_ID=AKIARTSHXQOJUDF3WPBN
export AWS_SECRET_ACCESS_KEY=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

# AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are now available for serverless to use
serverless deploy

AKIARTSHXQOJUDF3WPBN
H+lBaTW/zRW1qrDSSpKgynKNCoOURW5jLuCPER4i

serverless config credentials --provider aws --key AKIARTSHXQOJUDF3WPBN --secret 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 --overwrite


serverless deploy

https://b2jx7o3xe9.execute-api.us-west-2.amazonaws.com/dev/predict
&x=4.5
https://hdv31xevz2.execute-api.us-west-2.amazonaws.com/dev/predict&x=4

curl -X GET https://hdv31xevz2.execute-api.us-west-2.amazonaws.com/dev/predict --data '{ "queryStringParameters": {"x":"4"}}'


serverless invoke local --function predict -d '{"x": "4"}'

serverless invoke local --function predict --data '{ "queryStringParameters": {"x":"4"}}'

{
    "statusCode": 200,
    "body": "null"
}
serverless invoke local --function return_lambda_gateway_response

## ec2
ssh -i "my_key_pair.pem" ec2-user@ec2-54-212-26-38.us-west-2.compute.amazonaws.com
ssh -i "my_key_pair.pem" ubuntu@ec2-34-212-150-253.us-west-2.compute.amazonaws.com

arn:aws:s3:::my-ubuntu-bucket-69

sudo apt-get install -y zip python3-dev python3-pip
sudo pip3 install virtualenv 
sudo apt-get install python3-pip
sudo pip3 install virtualenv


sudo apt-get install python3
sudo apt install python3-pip

pip install virtualenv
sudo apt install virtualenv

virtualenv tf_env

pip uninstall virtualenv

pip3 install tensorflow


https://towardsdatascience.com/serving-tensorflow-models-serverless-6a39614094ff

https://vmm8yea5qg.execute-api.us-west-2.amazonaws.com/dev/predict


## works with queryStringParameters

curl -X GET https://gzkq7fl1qd.execute-api.us-west-2.amazonaws.com/dev/predict -d '{"queryStringParameters":{ "x": "4"}}'

serverless invoke --function predict --log -d '{"queryStringParameters":{ "x": "4"}}'

serverless deploy


## move to python 3.6
m3yiw0nxwf.execute

serverless invoke --function predict --log -d '{"queryStringParameters":{ "x": "4"}}'

serverless invoke --function predict --log -d '{"queryStringParameters":{ "x": "4"}}'

https://gzkq7fl1qd.execute-api.us-west-2.amazonaws.com/dev/predict


ssh -i "/Users/tyler/ec2/my_key_pair.pem" ubuntu@ec2-34-222-141-208.us-west-2.compute.amazonaws.com

sudo apt-get install python3-dev
sudo apt install python3-pip


pip3 install virtualenv

## kill

scp -i "/Users/tyler/ec2/my_key_pair.pem" test.py ubuntu@ec2-34-222-141-208.us-west-2.compute.amazonaws.com:~/build/
scp -i "/Users/tyler/ec2/my_key_pair.pem" model.h5 ubuntu@ec2-34-222-141-208.us-west-2.compute.amazonaws.com:~/build/


virtualenv --python=/usr/bin/python3 tf_env_keras
virtualenv --python=/usr/bin/python3 tf_kill
source tf_kill/bin/activate

pushd build
for f in $(cat /home/ubuntu/inotifywait.list); do
 if [ -f $f ]; then
  REL=$(dirname $f | cut -c 48-)
  mkdir -p $REL
  cp $f $REL
 fi
done

pushd /home/ubuntu/tf_kill/lib/python3.6/site-packages/

for f in $(cat $HOME/pydep.list); do
 cp "/home/ubuntutf_kill/lib/python3.6/site-packages/$f" "/home/ubuntu/build/$f" 2>/dev/null
done
popd


wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo apt install -y  epel-release-latest-7.noarch.rpm
rm epel-release-latest-7.noarch.rpm
sudo apt install -y inotify-tools
inotifywait -m -e access -o inotifywait.list --format "%w%f" -r tf_kill/lib/python3.6/site-packages/ &
# Make sure to save the PID so it can be killed later
INOTIFY="$!"


pushd build
python test.py
	

####################################################################################################
## ec2

virtualenv --python=/usr/bin/python3 tf_env_4
source tf_env_4/bin/activate

pip3 install tensorflow==1.11.0

python test.py

deactivate

touch ~/tf_env_3/lib/python3.6/site-packages/google/__init__.py
~
cd ~/tf_env_3/lib/python3.6/site-packages
~
find . -name "*.so" | xargs strip
find . -name \*.pyc -delete


*
zip -r ~/tf_env_3.zip . --exclude \*.pyc *.DS_Store /external/* /tensorflow/contrib/* /tensorflow/include/unsupported/* /tensorflow/examples/* /tensorboard*/* /pip*/* /setuptools*/* /wheel*/* easy_install* /keras_applications


scp -i "/Users/tyler/ec2/my_key_pair.pem" ubuntu@ec2-34-222-141-208.us-west-2.compute.amazonaws.com:~/tf_env_3.zip tf_env_3.zip
~


serverless deploy

GET - https://gzkq7fl1qd.execute-api.us-west-2.amazonaws.com/dev/predict

gzkq7fl1qd.execute


## new article

serverless install -u https://github.com/ryfeus/lambda-packs/tree/master/tensorflow/source -n tensorflow
cd tensorflow
serverless deploy
serverless invoke --function main --log

export AWS_ACCESS_KEY_ID=AKIARTSHXQOJUDF3WPBN
export AWS_SECRET_ACCESS_KEY=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

## other article

pyenv virtualenv 3.6.5 tflambdademo
pyenv activate tflambdademo



serverless invoke --function hello --log


serverless deploy --stage infer

## https://medium.com/@mike.p.moritz/running-tensorflow-on-aws-lambda-using-serverless-5acf20e00033


curl -X POST https://k0mrg6kfrj.execute-api.us-east-1.amazonaws.com/dev/infer -d '{"x":"4"}' --log
serverless invoke local --function infer -d '{"x": "4"}'


curl -X POST https://k0mrg6kfrj.execute-api.us-east-1.amazonaws.com/dev/infer -d '{"epoch": "1556995767", "input": {"age": ["34"], "workclass": ["Private"], "fnlwgt": ["357145"], "education": ["Bachelors"], "education_num": ["13"], "marital_status": ["Married-civ-spouse"], "occupation": ["Prof-specialty"], "relationship": ["Wife"], "race": ["White"], "gender": ["Female"], "capital_gain": ["0"], "capital_loss": ["0"], "hours_per_week": ["50"], "native_country": ["United-States"], "income_bracket": [">50K"]}}'


curl -X POST https://54rl5gnmj6.execute-api.us-east-1.amazonaws.com/dev/infer -d '{"foo": "bar"}'


serverless invoke --function infer --log -d '{"epoch": "1556995767", "input": {"age": ["34"], "workclass": ["Private"], "fnlwgt": ["357145"], "education": ["Bachelors"], "education_num": ["13"], "marital_status": ["Married-civ-spouse"], "occupation": ["Prof-specialty"], "relationship": ["Wife"], "race": ["White"], "gender": ["Female"], "capital_gain": ["0"], "capital_loss": ["0"], "hours_per_week": ["50"], "native_country": ["United-States"], "income_bracket": [">50K"]}}'

serverless invoke --function infer --log -d '{"body":{"input": {"age": ["34"], "workclass": ["Private"], "fnlwgt": ["357145"], "education": ["Bachelors"], "education_num": ["13"], "marital_status": ["Married-civ-spouse"], "occupation": ["Prof-specialty"], "relationship": ["Wife"], "race": ["White"], "gender": ["Female"], "capital_gain": ["0"], "capital_loss": ["0"], "hours_per_week": ["50"], "native_country": ["United-States"], "income_bracket": [">50K"]}}}'


## packs


git clone https://github.com/ryfeus/lambda-packs.git



###########################################################################################
serverless invoke --function predict --log -d '{ "x0": "4", "x1": "4", "x2": "4", "x3": "4"}'

chg7uc2mi4

https://i8wamt3qgj.execute-api.us-east-1.amazonaws.com/default?x0=${precipIntensity}&x1=${precipProbability}&x2=${temperature}&x3=${windSpeed}`
https://i8wamt3qgj.execute-api.us-east-1amazonaws.com/default?x0=4&x1=4&x2=4&x3=4
https://chg7uc2mi4.execute-api.us-west-2.amazonaws.com/dev/predict?x0=0&x1=0&x2=50&x3=5
https://mv7r9rtnef.execute-api.us-west-2.amazonaws.com/dev/predict?x0=0&x1=0&x2=50&x3=5
curl -X GET https://chg7uc2mi4.execute-api.us-west-2.amazonaws.com/dev/predict -d '{ "x0": "4", "x1": "4", "x2": "4", "x3": "4"}'

curl -X GET https://mv7r9rtnef.execute-api.us-west-2.amazonaws.com/dev/flag-lambda-dev-predict -H 'body' -d '{ "x0": "4", "x1": "4", "x2": "4", "x3": "4"}'








