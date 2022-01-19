let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ').split('|')

  if (!args[0]) throw 'Masukkan Parameter'

  m.reply('*[ ❗ ] Wait,Proses...*')

  let res = `https://api.memegen.link/images/headaches/text1/text2
  conn.sendFile(m.chat, res, 'headaches.jpg', `🌚⚡`, m, false)

}

handler.help = ['headaches'].map(v => v + ' <text|text>')

handler.tags = ['maker']

handler.command = /^(headaches)$/i

handler.register = false

module.exports = handler
