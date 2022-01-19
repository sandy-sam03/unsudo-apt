let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://coffee.alexflipnote.dev/random.json'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.file) throw 'Err!'
  conn.sendFile(m.chat
, json.file, 'navel%.png', json.title, m)
}

handler.help = ['cofee']
handler.tags = ['reddit']

handler.command = /^(cofee)$/i

handler.group = false

module.exports = handler
