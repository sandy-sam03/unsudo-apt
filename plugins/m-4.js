let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ').split('|')

  if (!args[0]) throw 'Masukkan Parameter'

  m.reply('*[ ❗ ] Wait,Proses...*')

  let res = `https://api.memegen.link/images/dsm/text1/text2
  conn.sendFile(m.chat, res, 'dsm.jpg', `🌚⚡`, m, false)

}

handler.help = ['dsm'].map(v => v + ' <text|text>')

handler.tags = ['maker']

handler.command = /^(dsm)$/i

handler.register = false

module.exports = handler
