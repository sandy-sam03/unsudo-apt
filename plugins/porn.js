const dir = [
  'https://www.googleapis.com/drive/v3/files/1jnGQ_O2ctJpSzkfJQW8F6gTRMZTAQsiy?alt=media&key=AIzaSyBc6MHAQV3c0zmCJEXq6vLLXj5N3SYPzME',
  'https://www.googleapis.com/drive/v3/files/1L4DGCc87ZaSa_yc469cE2InoJvkxZEVP?alt=media&key=AIzaSyBc6MHAQV3c0zmCJEXq6vLLXj5N3SYPzME',
  'https://www.googleapis.com/drive/v3/files/15ubtHrsaVLcmbeYPGwb_oFw2gJei2vSe?alt=media&key=AIzaSyBc6MHAQV3c0zmCJEXq6vLLXj5N3SYPzME',
  'https://www.googleapis.com/drive/v3/files/1q4lJajkpryDHp28selD7Hy7VLP4tNDn8?alt=media&key=AIzaSyBc6MHAQV3c0zmCJEXq6vLLXj5N3SYPzME'
  'https://www.googleapis.com/drive/v3/files/1N1pOs6D9WQ3q16k064unq0G_z4aeZdju?alt=media&key=AIzaSyBc6MHAQV3c0zmCJEXq6vLLXj5N3SYPzME',
  'https://www.googleapis.com/drive/v3/files/1L4DGCc87ZaSa_yc469cE2InoJvkxZEVP?alt=media&key=AIzaSyBc6MHAQV3c0zmCJEXq6vLLXj5N3SYPzME'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dada.mp4', '', m)
}
handler.help = ['porn -under dev']
handler.tags = ['reddit']
handler.command = /^porn$/i

module.exports = handler
