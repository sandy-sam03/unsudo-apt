let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://meme-api.herokuapp.com', '/gimme/JerkOffToDesiCelebs'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Err!'
  conn.sendFile(m.chat
, json.url, 'insta%.png', json.title, m)
}

handler.help = ['insta']
handler.tags = ['reddit']

handler.command = /^(insta)$/i

handler.group = false

module.exports = handler
