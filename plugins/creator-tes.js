import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `ð Developer Bot `, `ð« Don't call me ð¥º`, `firdausryan3113@gmail.com`, `ð®ð© Indonesia`, `ð https://NoenkBotzz.github.io/`, `ð¤ Gada pawang nih senggol dong ð`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `ð¥ Bot WhatsApp ð£`, `ðµ Don't spam/call me ð¢`, `Nothing`, `ð®ð© Indonesia`, `ð https://www.youtube.com/@akira1981`, `ð¤ Hanya bot biasa yang kadang suka eror âº`]
  ], m)
  await conn.reply(m.chat, `Hallo kak @${m.sender.split(`@`)[0]} ð itu nomor ownerku , jangan di spam ya kakð`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Hallo kak @${m.sender.split(`@`)[0]} ð itu nomor team developerku, jangan di apa-apain ya kakð`, sentMsg, {mentions: [m.sender]})
  }
}
handler.command = /^(own)$/i

export default handler