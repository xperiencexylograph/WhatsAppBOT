exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU DONASI ${BotName}*
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️

Mau Donasi? ✨

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╭───「 *Silahkan Donasi Dibawah Ini* 」

├≽️⚜ *OVO*: 0858-9102-7666
├≽️⚜ *PULSA*: 0858-9102-7666
├≽️⚜ *GOPAY*: 0858-9102-7666
 
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
