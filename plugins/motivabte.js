const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getmessage method, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu =`
─────〔 *Motivation* 〕─────

${pickRandom(global.motivation)}
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({

     templateMessage: {

         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/quotes.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍instagram',
               url: instagram
             }

           },
               {
           quickReplyButton: {
               displayText: 'Motivation',
               id: '.motivation',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['motivation']
handler.tags = ['quotes']
handler.command = /^(motivation)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.motivation = [
"Don't talk, act alone. Don't say, just show. Don't promise, just prove.",
"Never stop doing your best just because someone doesn't give You awards.",
"Work while they sleep. Learn while they party. Save while they spend. Live like they dream.",
"The key to success is to focus our conscious mind on things we desire, not things we fear.",
"Don't be afraid to fail. Fear being in the same place next year as You are today.",
"If we keep doing what we do, we will continue to get what we get.",
"If You can't cope with the stress You will not manage success.",
"Be stubborn about Your goals and flexible about Your methods.",
"Hard work beats talent when talent doesn't work hard.",
"Remember that the greatest lesson in life is usually learned from the worst times and from the worst mistakes.",
"Life is not about waiting for the storm passed, but learning to dance in the rain.",
"If his plan didn't work, change the plan not the goal.",
"Don't be afraid that your life will end; be afraid that your life never starts.",
"People who are really great are the people who make everyone feel great.",
"Experience is the teacher of the weight because she gives the test first, then lesson.",
"Knowing how much that needs to be known is the beginning of learning to live.",
"Success is not final, failure is not fatal. The most important thing is the courage to continue.",
"It is better to fail in originality than to succeed in imitation.",
"Dare to dream, but more importantly, dare to do the action behind your dreams.",
"Set Your goals high, and don't stop until You achieve it.",
"Develop success from failures. Discouragement and failure are two stepping stones are most definitely towards success.",
"Genius is one percent inspiration and ninety nine percent perspiration.",
"Success is where preparation and opportunity meet.",
"Perseverance failing 19 times and succeeding in the new chances 20.",
"The road to success and the road to failure are almost exactly the same.",
"Success usually comes to those who are too busy to look.",
"Don't postpone your work until tomorrow, while you can do it today.",
"20 years from now, you're probably more disappointed by the things that you could not do instead of that already.",
"Don't spend time beating on a wall hoping to transform it into a door.",
"The opportunity was like a sunrise. If you wait too long, you could miss it.",
"Life is made up of 10 percent what happens to you and 90 percent how you react to it.",
"There are three ways to achieve ultimate success: the first Way is to be kind. The second way is to be kind. The third way is to be good.",
"The number one reason people fail in life is because they listen to friends, family, and their neighbors.",
"Time is more valuable than money. You can get more money, but you cannot get more time.",
"Goal setting is the secret to an exciting future.",
"When we strive to become better than we are, everything around us will also be better.",
"Growth begins when we begin to accept our own weakness.",
"Do not ever give up when You still able to try again. No words over until You stop trying.",
"Willpower is the key to success. Successful people, trying hard whatever they feel by applying their desire to overcome apathy, doubt or fear.",
"Do not ever give up when You still able to try again. No words over until You stop trying.",
"Willpower is the key to success. Successful people, trying hard whatever they feel by applying their desire to overcome apathy, doubt or fear.",
"The first thing successful people do is to look at failure as a positive signal for success.",
"The hallmark of successful people is they always try hard to learn new things.",
"Success is getting what you want, happiness is wanting what you get.",
"Person a pessimist sees the difficulty in every opportunity. An optimist sees the opportunity in every difficulty.",
"Doubt kills more dreams than failure.",
"Do what you have to do until you can do what you want to do.",
"Optimistic is the one quality more associated with success and happiness than any other.",
"A tribute most high to a hard worker is not what he got from the job, but how developed he with the hard work of it.",
"The best way to begin is to stop talking and start doing.",
"Failure will never overtake if determination to succeed is strong enough."
]
