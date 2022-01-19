let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ').split('|')

  if (!args[0]) throw 'Masukkan Parameter'

  m.reply('*[ ❗ ] Wait,Proses...*')

  let res = `https://api.memegen.link/images/dragon/text1/text2
  conn.sendFile(m.chat, res, 'dragon.jpg', `🌚⚡`, m, false)

}

handler.help = ['dragon'].map(v => v + ' <text|text>')

handler.tags = ['maker']

handler.command = /^(dragon)$/i

handler.register = false

module.exports = handler
