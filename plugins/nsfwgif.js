const fetch = require('node-fetch')
const FormData = require('form-data')
const { sticker } = require('../lib/sticker')
const gs = require('nekos.life')
const neko = new gs()

let handler  = async (m, { conn, text }) => {
  pp = (await neko.nsfw.nekoGif()).url
                     await sticker(false, pp, 'NSFW Neko', author).then(gege => {
                     conn.sendMessage(m.chat, { sticker: link:gege }, { quoted: m })
                     })
  //if (!text) throw 'Uhm...Teksnya?'
}
handler.help = ['nsfwneko']
handler.tags = ['sange']
handler.command = /^nsfwneko$/i


handler.fail = null

module.exports = handler

