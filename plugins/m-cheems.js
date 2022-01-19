let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ').split('|')

  if (!args[0]) throw 'Masukkan Parameter'

  m.reply('*[ ❗ ] Wait,Proses...*')

  let res = `https://api.memegen.link/images/doge/text1/text2
  conn.sendFile(m.chat, res, 'doge.jpg', `🌚⚡`, m, false)

}

handler.help = ['cheems'].map(v => v + ' <text|text>')

handler.tags = ['maker']

handler.command = /^(cheems)$/i

handler.register = false

module.exports = handler
