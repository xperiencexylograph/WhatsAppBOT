exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️

Odzay Osbourne BOT ✨

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───


╭───「 *INFO BOT!* 」
   
├≽️⚜ *AUTHOR*: Odzay Osbourne
├≽️⚜ *SCRIPT ORIGINAL BY*: ABDUL MUTTAQIN / FDCIABDUL

♻️ *JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!*
♻️ *MAU DONASI? SILAHKAN KETIK #donate*
 
├───≽️「 *INFORMASI COVID-19 TERBARU!* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
 
├≽️☎️ WA : *${whatsapplu}*

├≽️💥 *Instagram* : ${grupch3}
├≽️💥 *Group WhatsApp* ; ${grupch2}
├≽️💥 *YouTube* : ${grupch2}
 
├≽️   📍*MADE BY ${BotName}*📍
╰ ───`
}
