let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/cuckold?APIKEY=4a8b9aba75823076', '', 'Ter-NTR', m)
}
handler.help = ['ntr']
handler.tags = ['nsfw']
handler.command = /^(cock)$/i

handler.group = true

module.exports = handler

