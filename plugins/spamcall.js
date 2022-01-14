let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, `Thand rakh 0
contoh: 
.spamcall 087128356789
Ye galat❌!
.spamcall 87122828789
Ye sahi✅`, m)

  await m.reply('Whait..')
    let res = await fetch(`https://caliphapi.com/api/spamcall?no=${text}&apikey=ELYASXD`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let hasil = `${json.result}
`

    m.reply(hasil)
}
handler.help = ['spamcall'].map(v => v + ' <no target>')
handler.tags = ['premium']
handler.command = /^(spamcall)$/i

module.exports = handler
