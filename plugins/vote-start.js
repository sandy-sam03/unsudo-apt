let handler = async(m, { conn, text, usedPrefix }) => {
     conn.vote = conn.vote ? conn.vote : {}
     let id = m.chat
     if (id in conn.vote) {
         await conn.sendButton(m.chat, '_There are still votes in this chat!_', 'Rishabh-BOT', 'DELETE VOTE', `${usedPrefix}deletevote`, m)
         throw false
     }
     await conn.sendButton(m.chat, `Vote started!
*${usedPrefix}upvote* - for yes
*${usedPrefix}devote* - not to
*${usedPrefix}checkvote* - to check vote
*${usedPrefix}deletevote* - to delete vote`, 'Rishabh-BOT', 'UPVOTE', `${usedPrefix}upvote`, 'DEVOTE', `${usedPrefix}devote`, m)
     conn.vote[id] = [
         text,
         [],
         []
     ]
}
handler.help = ['startivote [reason]']
handler.tags = ['vote']
handler.command = /^(start|start)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler 
