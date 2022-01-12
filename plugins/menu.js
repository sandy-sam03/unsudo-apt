let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) throw 'welcome to spam bot\n\ntag any image and use command\ncheck .s first to know if media is convertible or not\nCommand are below\n\n.nekonsfw = hentai\n.i <query> = for image\n.25 = 25 sticker\n.50 = 50 sticker\n\nenjoy'
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 Not Found'
  conn.sendFile(m.chat, url, 'gimage', `
`.trim(), m)
}
handler.command = /^(menu|help)$/i

handler.premium = false

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
