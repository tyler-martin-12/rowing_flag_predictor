import requests
from bs4 import BeautifulSoup
from datetime import datetime
import pandas as pd
import numpy as np
import urllib
import requests
import time
import json
import csv
from apscheduler.schedulers.blocking import BlockingScheduler
import httplib2
import os
import argparse

def get_color():
    url = 'https://www.cucbc.org/flag'
    code = requests.get(url)
    s = BeautifulSoup(code.text, 'html.parser')
    r = s.find_all('td')
    
    color = None
    
    for each in r:
        if 'currently' in each.text:
            color = each.text.split()[4]
    
    return color

def get_weather():
    now = datetime.now()
    dark_sky_key = '1428dbd5b7306e4a03b3568d92f660f2' #DarkSky
    lat_num,lng_num = 52.213268, 0.123658
    lat, lng = str(lat_num), str(lng_num)
    tt = str(int(time.mktime(now.timetuple())))
    
    url = 'https://api.darksky.net/forecast/' + dark_sky_key + '/' + lat + ',' + lng + ',' + tt
    r = requests.get(url)
    weather = r.json()
    
    summary = weather['currently']['summary']
    precipIntensity = weather['currently']['precipIntensity']
    precipProbability = weather['currently']['precipProbability']
    temperature = weather['currently']['temperature']
    windSpeed = weather['currently']['windSpeed']
    windBearing = weather['currently']['windBearing']

    return [now, summary, precipIntensity, precipProbability, temperature, windSpeed, windBearing]

def append_csv(line):
    with open('flag_data.csv', 'a') as writeFile:
        writer = csv.writer(writeFile)
        writer.writerow(line)

def job():
	color = get_color()
	weather = get_weather()
	weather.append(color)

	append_csv(weather)	
	print('did write')

scheduler = BlockingScheduler()
scheduler.add_job(job, 'interval', hours=1)
scheduler.start()





