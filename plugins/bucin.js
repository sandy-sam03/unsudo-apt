let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.reply(m.chat, `“${pickRandom(global.bucin)}”`, '', '', m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
 "I choose to be alone, not because I'm waiting for the perfect one, but need someone who never gives up.",
  "A single person is created with a partner he has not found.",
  "Singles. Maybe that's God's way of saying 'Rest from wrong love'.",
  "Singles are young people who prioritize their personal development for a classier love later.",
  "I'm not looking for someone who is perfect, but I'm looking for someone who becomes perfect because of my strengths.",
  "People's boyfriends are our pending soul mates.",
  "Singles must pass. Everything has a time, when all loneliness becomes a togetherness with a halal lover. Be patient.",
  "Romeo was willing to die for juliet, Jack died because he saved Rose. The point is, if you want to live, be single.",
  "I look for people not from their strengths but I look for people from their sincerity.",
  "Madmates are not flip-flops, which are often confused. So continue to be in the proper struggle.",
  "If you become the guitar strings, I don't want to be the guitarist. Because I don't want to dump you.",
  "If loving you is an illusion, then let me imagine forever.",
  "Honey... My job is only to love you, not to fight fate.",
  "When I'm with you it feels like 1 hour is only 1 second, but when I'm away from you it feels like 1 day becomes 1 year.",
  "Kolak bananas know sumedang, even though the distance stretches my love will never disappear.",
  "I want to be the only one, not the one.",
  "I can't promise to be good. But I promise to always be by your side.",
  "If I become a representative of the people I will definitely fail, how can I think about the people if the only thing on my mind is you.",
  "Look at my garden, full of flowers. Look at your eyes, my heart is blooming.",
  "Promise to stay with me now, tomorrow, and forever."
  "Missing does not only arise because of the distance apart. But also because of desires that do not come true.",
  "You will never be far from me, wherever I go you are always there, because you are always in my heart, what is far away is only our bodies, not our hearts.",
  "I know in my every gaze, we are hindered by distance and time. But I believe that later we will definitely be united.",
  "Missing you without ever meeting is the same as creating a song that's never been sung.",
  "There are times when distance is always a barrier between me and you, but still in my heart we are always close.",
  "If this heart is not able to stem all the longing, what can I do but pray for you.",
  "Maybe at this moment I can only hold back this longing. Until the time comes when I can meet and release this longing with you.",
  "Through the turbulent longing in my heart, there sometimes I really need your loving hugs.",
  "In the cold of the night, I don't remember anymore; How often I think of you miss you too.",
  "Missing you is like rain that comes suddenly and lasts a long time. And even after the rain stops, I still miss you.",
  "Since knowing you, I want to continue to learn, learn to be the best for you.",
  "Do you know the difference between a pencil and your face? If you can erase the writing in pencil, but if your face nothing can erase it from my mind.",
  "It's not the National Examination tomorrow that I have to worry about, but the life test I went through after you left me.",
  "One thing about happiness at school that continues to cheer me up is being able to see your smile every day.",
  "Do you know the difference between going to school and going to your house? If you go to school, you will definitely bring books and pens, but if you go to yourhouse, I just bring my heart and love.",
  "I'm not sad if tomorrow is Monday, I'm sad if I don't meet you.",
  "My love moment is perpendicular to your love moment. Making our love a perfect equilibrium point.",
  "I am willing to take part in a running race around the world, as long as you are the finish line.",
  "My homework is to miss you. Stronger than Math, broader than Physics, stronger than Biology.",
  "My love for you is like a metabolism, which will not stop until you die.",
  "If the jelangkung is like you, come and pick me up, I'll take you home.",
  "Eat whatever I like as long as it's with you, including eating liver.",
  "Love is like a death sentence. If you don't get shot, you hang it.",
  "Loving you is like a drug: once you try to be an addiction, you don't try to make yourself curious, you leave it to make you addicted.",
  "I like snacking the most because snacking is delicious. Moreover, having you completely ...",
  "This world belongs only to the two of us. Everything else is just a contract.",
  "To me, all those days are Tuesdays. Tuesdays in Heaven when close to you...",
  "What if we both become a gang of criminals? I stole your heart and you stole mine.",
  "You are like the coffee I drank this morning. Bitter, but addictive.

]
