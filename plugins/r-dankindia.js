let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://meme-api.herokuapp.com', '/gimme/dankinindia'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Err!'
  conn.sendFile(m.chat
, json.url, 'dankindia%.png', json.title, m)
}

handler.help = ['dankindia']
handler.tags = ['reddit']

handler.command = /^(dankindia)$/i

handler.group = false

module.exports = handler
