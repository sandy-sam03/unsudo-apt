let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://neko-love.xyz/api/v1', '/slap'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.image) throw 'Err!'
  let thumbnail = await (await fetch(json.image)).buffer()
  conn.sendFile(m.chat, json.image, 'meme.gif', m, 0, { thumbnail })
}

//handler.help = ['meme2']
//handler.tags = ['internet']

handler.command = /^(slap)$/i

module.exports = handler
