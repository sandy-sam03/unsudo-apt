let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ').split('|')

  if (!args[0]) throw 'Masukkan Parameter'

  m.reply('*[ ❗ ] Wait,Proses...*')

  let res = `https://api.memegen.link/images/ants/text1/text2
  conn.sendFile(m.chat, res, 'ants.jpg', `🌚⚡`, m, false)

}

handler.help = ['ants'].map(v => v + ' <text|text>')

handler.tags = ['maker']

handler.command = /^(ants)$/i

handler.register = false

module.exports = handler
