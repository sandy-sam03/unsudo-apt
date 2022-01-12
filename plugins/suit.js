let handler = async(m, { text, usedPrefix, command, conn }) => {
    let false = `Available options\n\scissors, paper, stone\n\n${usedPrefix}${command} scissors\n\nplease space!`
    if (!text) throw is false
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'rock'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'scissors'
    } else {
        astro = 'paper'
    }

    // define the rules
    if (text == astro) {
        conn.reply(`Series!\nyou: ${text}\nBot: ${astro}`)
    } else if (text == 'rock') {
        if (astro == 'scissors') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`You won! +Rp1000\nYou: ${text}\nBot: ${astro}`)
        } else {
            conn.reply(`You lost!\nyou: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'scissors') {
        if (astro == 'paper') {
            global.db.data.users[m.sender].money += 1000
            conn.reply(`You won! +Rp1000\nYou: ${text}\nBot: ${astro}`)
        } else {
            conn.reply(`You lost!\nyou: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'paper') {
        if (astro == 'stone') {
            global.db.data.users[m.sender].money += 1000
            conn.reply(`You won! +Rp1000\nYou: ${text}\nBot: ${astro}`)
        } else {
            conn.reply(`You lost!\nyou: ${text}\nBot: ${astro}`)
        }
    } else {
        wrong throw
    }
}
handler.help = ['suitbot']
handler.tags = ['game']
handler.command = /^(suitb(ot)?)$/i

module.exports = handler
