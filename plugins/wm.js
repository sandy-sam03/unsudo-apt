const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, text }) => {
  let stiker = false
  try {
    let [packname, ...author] = text.split`|`
    author = (author || []).join`|`
    let q = m.quoted ? m.quoted : m
    let mime = m.quoted.mimetype || ''
    if (/webp/.test(mime)) {
      let img = await q.download()
      let out = await webp2png(img)
      if (!img) throw `reply sticker with ${usedPrefix + command} <packname>|<author>`
      sticker = await sticker(0, out, packname || '', author || '')
    } else if (/image/.test(mime)) {
      let img = await q.download()
      let link = await uploadImage(img)
      if (!img) throw `reply image with command ${usedPrefix + command} <packname>|<author>`
      sticker = await sticker(0, link, packname || '', author || '')
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) throw 'Maximum 10 seconds!'
      let img = await q.download()
      let link = await uploadFile(img)
      if (!img) throw `reply video with ${usedPrefix + command} <packname>|<author>`
      sticker = await sticker(0, link, packname || 'Nana-Md', author || 'Adul Alhy')
    }
  } finally {
    if (sticker) await conn.sendFile(m.chat, sticker,'','',m)
    else throw 'Reply the sticker!'
  }
}
handler.help = ['wm /take <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^(wm|take)$/i

module.exports = handler
