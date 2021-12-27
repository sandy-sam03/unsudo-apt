let handler = async(m, { conn, usedPrefix }) => {
     let id = m.chat
     conn.vote = conn.vote ? conn.vote : {}
     if (!(id in conn.vote)) {
         await conn.sendButton(m.chat, `_*no voting in this group!*_`, 'Rishabh-BOT', 'START VOTE', `${usedPrefix}startivote`, m)
         throw false
     }
     delete conn.vote[id]
     m.reply(`Success!`)

}
handler.help = ['deletevote']
handler.tags = ['vote']
handler.command = /^(delete|delete)vote$/i
handler.group = true
handler.admin = true
module.exports = handler
