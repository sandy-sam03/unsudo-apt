import praw, os, random, requests, schedule
from time import sleep
reddit = praw.Reddit(
    client_id="sjAd1LOtxmlJWNZ7cuMGWg",
    client_secret="izHyy-ynwCppgsHFJTrkdlLWaJ9TVw",
    user_agent="ris",
    username="Dank_ka_choda-",
    password="rishabh2003",
    ratelimit_seconds=1000,
)
print("logged")
#subreddit = reddit.subreddit('test')
def meme():
  i = 0
  for sm in reddit.subreddit('memes').top(limit=10000):
    i += 1
    #s = 0
    print(i)
    if i > 402:
      #s += 1
      #im = s + '.jpg'
      if 'jpg' in sm.url:
        with open('img.jpg', 'wb') as image:
                image.write(requests.get(sm.url).content)
                image.close()
        print('* Image saved successfully')
        title = 'memes ep.' + str(i)
        sr = ['terriblefacebookmemes', 'meme', 'HolUp']
        reddit.subreddit(random.choice(sr)).submit_image(title, 'img.jpg')
        print(sr, "Image posted")
        sleep(900)
      if 'png' in sm.url:
        with open('img.png', 'wb') as image:
          image.write(requests.get(sm.url).content)
          image.close()
        print('* Image saved successfully')
        title = 'memes ep.' + str(i)
        reddit.subreddit("HolUp").submit_image(title, 'img.png')
        print("Image posted")
        sleep(900)
meme()
def upvote():
  f = 0
  for comment in reddit.redditor("Dangerous_Salary_388").comments.new(limit=None):
    if comment.id not in open("upvoted.txt", "r").read():
      f += 1
      print(comment.body)
      comment.upvote()
      open("upvoted.txt", "a").write(comment.id + " ")
      if f == 10:
        break
    print("done")
