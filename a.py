import praw, os, random, requests
from time import sleep
reddit = praw.Reddit(
    client_id="sjAd1LOtxmlJWNZ7cuMGWg",
    client_secret="izHyy-ynwCppgsHFJTrkdlLWaJ9TVw",
    user_agent="ris",
    username="Dank_ka_choda-",
    password="rishabh2003",
    ratelimit_seconds=900,
)
print("logged")
#subreddit = reddit.subreddit('test')
i = 0
for sm in reddit.subreddit('memes').top(limit=10000):
  i += 1
  #s = 0
  print(i)
  if i > 400:
    #s += 1
    #im = s + '.jpg'
    if 'jpg' in sm.url:
      with open('img.jpg', 'wb') as image:
              image.write(requests.get(sm.url).content)
              image.close()
      print('* Image saved successfully')
      title = 'memes ep.' + str(i)
      reddit.subreddit(random.choice['terriblefacebookmemes', 'meme', 'HolUp']).submit_image(title, 'img.jpg')
      sleep(900)
    if 'png' in sm.url:
      with open('img.png', 'wb') as image:
        image.write(requests.get(sm.url).content)
        image.close()
      print('* Image saved successfully')
      title = 'memes ep.' + str(i)
      reddit.subreddit("HolUp").submit_image(title, 'img.png')
      sleep(900)
