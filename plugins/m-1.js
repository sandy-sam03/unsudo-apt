let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ').split('|')

  if (!args[0]) throw 'Masukkan Parameter'

  m.reply('*[ ❗ ] Wait,Proses...*')

  let res = `https://api.memegen.link/images/aag/text1/text2
  conn.sendFile(m.chat, res, 'aag.jpg', `🌚⚡`, m, false)

}

handler.help = ['aag'].map(v => v + ' <text|text>')

handler.tags = ['maker']

handler.command = /^(aag)$/i

handler.register = false

module.exports = handler
