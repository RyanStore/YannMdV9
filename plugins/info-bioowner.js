let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : 𝚈𝚊𝚗𝚗𝙼𝚍
*✉️ Nama RL* : 𝓡𝔂𝓪𝓷 𝓐𝓭𝓲𝓽𝔂𝓪 𝓟𝓻𝓪𝓽𝓪𝓶𝓪
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 12 Agustus 1997
*🎨 Umur* : 24+
*🧩 Hobby* : Recode script bot, Experimen Dong 😎☝️
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indo, Jawa Barat,Bandung,Cimahi
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @ryannn.store
*🇫  Facebook* : Ga Tau Dh Ilang 
*🐈 Github:* RyanStore

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler