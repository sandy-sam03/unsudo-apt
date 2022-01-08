
const { sticker } = require('../lib/sticker')
const WSF = require('wa-sticker-formatter')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let wsf = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/webp/.test(mime)) {
      let img = await q.download()
      if (!img) throw `Error, try to reply to the photo/make sure the mime is correct ${usedPrefix + command}`
      wsf = new WSF.Sticker(img, {
        pack: global.packname,
        author: global.author,
        crop: false,
      })
    } else if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw `Error, try to reply to the photo/make sure the mime is correct ${usedPrefix + command}`
      wsf = new WSF.Sticker(img, {
        pack: global.packname,
        author: global.author,
        crop: false,
      })
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 120) throw '120 seconds max!'
      let img = await q.download()
      if (!img) throw `reply sticker with caption ${usedPrefix + command}`
      wsf = new WSF.Sticker(img, {
        pack: global.packname,
        author: global.author,
        crop: true,
      })
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else throw 'Error, try to reply to the photo/make sure the mime is correct'
    }
  } catch (e) {
    throw e
  }
  finally {
    if (wsf) {
      await wsf.build()
      const sticBuffer = await wsf.get()
     conn.sendFile(m.chat, sticBuffer, '','',m)
    }
    if (stiker) await conn.sendFile(m.chat, stiker, '','',m)
    // else throw `Gagal${m.isGroup ? ', balas gambarnya!' : ''}`
  }
}
handler.help = ['stiker ', 'stiker <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
