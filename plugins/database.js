let handler = async (m, { usedPrefix, command, conn, text }) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let cap = `Database saat ini ${totalreg} User\nRegister saat ini ${rtotalreg} User`
conn.reply(m.chat, cap, fkontak)
}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(user|database|jumlahdatabase)$/i
handler.limit = true

export default handler