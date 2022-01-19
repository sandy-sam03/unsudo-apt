let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://api.waifu.pics/sfw', '/cry'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.image) throw 'Err!'
  let thumbnail = await (await fetch(json.image)).buffer()
  conn.sendFile(m.chat, json.image, 'meme.png', json.caption, m, 0, { thumbnail })
}

handler.help = ['cry']
handler.tags = ['expression']

handler.command = /^(cry)$/i

module.exports = handler
