from instagrapi import Client
from instagrapi.types import Usertag, Location, List
import time
import glob, os
# set instagram credentials
ACCOUNT_USERNAME='comedy_cementary'
ACCOUNT_PASSWORD='Rishabh@2021'
cl = Client()
cl.login(ACCOUNT_USERNAME, ACCOUNT_PASSWORD)

user_id = cl.user_id_from_username(ACCOUNT_USERNAME)
print(user_id)
user = cl.user_info_by_username(ACCOUNT_USERNAME)
print(user)
while True:
    try:
        os.chdir("/root/i/an/")
        for file in glob.glob("new*"):
            medias = cl.photo_upload(path=file, caption='IS THIS DANK')
            os.remove(file)
            print(file)
            time.sleep(3600)
    except:
        os.remove(file)
        print('error' + file)
        print("errror bypass")
    time.sleep(3600)
