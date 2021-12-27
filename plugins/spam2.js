let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '.waifu', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.command = /^(bulk2)$/i

handler.limit = false

module.exports = handler
