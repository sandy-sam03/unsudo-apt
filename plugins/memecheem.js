let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://meme-api.herokuapp.com', '/gimme/cheemsburbgerlore'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Err!'
  conn.sendFile(m.chat
, json.url, 'a89.png', json.title, m)
}

handler.help = ['cheem']
handler.tags = ['internet']

handler.command = /^(cheem)$/i

handler.group = false

module.exports = handler
