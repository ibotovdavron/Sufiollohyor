/* Sayt ma'lumotlarini shu faylda o'zgartiring. Bu versiyada ma'lumotlar kod ichida saqlanadi. */
window.SITE_DATA = {
  siteName: "Bilim Maydoni",
  contact: { address: "Oltinsoy tumani", email: "", phone: "" },
  news: [
    {title:"Yangi o‘quv imkoniyatlari",date:"E’lon",description:"Ta’lim yangiliklari va markazdagi muhim xabarlar shu yerda e’lon qilinadi.",image:"reference-home.jpg"},
    {title:"Bilimlar bellashuvi",date:"Musobaqa",description:"O‘quvchilar o‘z bilim va mahoratlarini sinab ko‘rishlari mumkin.",image:"reference-competitions.jpg"},
    {title:"Ustozlar jamoasi",date:"Ma’lumot",description:"Tajribali ustozlar va ular o‘qitadigan fanlar bilan tanishing.",image:"reference-teachers.jpg"}
  ],
  competitions: [
    {title:"Matematika bellashuvi",category:"Matematika",description:"Mantiqiy fikrlash va masala yechish bo‘yicha bilimlar bellashuvi.",date:"Sana e’lon qilinadi"},
    {title:"Zakovat musobaqasi",category:"Jamoaviy o‘yin",description:"Jamoa bilan fikrlash, tezkorlik va umumiy bilimlarni sinash.",date:"Sana e’lon qilinadi"},
    {title:"Fan olimpiadasi",category:"Olimpiada",description:"Fan bo‘yicha bilimlarni chuqur sinovdan o‘tkazish.",date:"Sana e’lon qilinadi"},
    {title:"Tezkor hisoblash",category:"Matematika",description:"Hisoblash aniqligi va tezligini rivojlantirishga qaratilgan bellashuv.",date:"Sana e’lon qilinadi"},
    {title:"Mantiqiy masalalar",category:"Mantiq",description:"Qiziqarli mantiqiy topshiriqlarni yechish musobaqasi.",date:"Sana e’lon qilinadi"},
    {title:"Bilimlar sinovi",category:"Umumiy bilim",description:"Turli mavzulardagi savollar orqali bilimlarni tekshirish.",date:"Sana e’lon qilinadi"},
    {title:"Fizika sinovi",category:"Fizika",description:"Fizik tushunchalar va masalalar bo‘yicha bilimlar sinovi.",date:"Sana e’lon qilinadi"},
    {title:"Ingliz tili tanlovi",category:"Ingliz tili",description:"Lug‘at boyligi va til ko‘nikmalariga oid bellashuv.",date:"Sana e’lon qilinadi"},
    {title:"Yosh tadqiqotchilar",category:"Loyiha",description:"Ijodiy g‘oyalar va kichik loyihalarni taqdim etish.",date:"Sana e’lon qilinadi"}
  ],
  teachers: [
    {name:"Ustoz 1",subject:"Matematika",experience:"Ma’lumot kiritiladi",bio:"Bu namunaviy profil. Ustozning tarjimai holi, tajribasi va dars berish yo‘nalishini shu yerga kiriting."},
    {name:"Ustoz 2",subject:"Fizika",experience:"Ma’lumot kiritiladi",bio:"Bu namunaviy profil. Ustozning tarjimai holi, tajribasi va dars berish yo‘nalishini shu yerga kiriting."},
    {name:"Ustoz 3",subject:"Ingliz tili",experience:"Ma’lumot kiritiladi",bio:"Bu namunaviy profil. Ustozning tarjimai holi, tajribasi va dars berish yo‘nalishini shu yerga kiriting."},
    {name:"Ustoz 4",subject:"Ona tili",experience:"Ma’lumot kiritiladi",bio:"Bu namunaviy profil. Ustoz haqidagi to‘liq ma’lumotni shu yerda yozing."},
    {name:"Ustoz 5",subject:"Matematika",experience:"Ma’lumot kiritiladi",bio:"Bu namunaviy profil. Ustoz haqidagi to‘liq ma’lumotni shu yerda yozing."},
    {name:"Ustoz 6",subject:"Fizika",experience:"Ma’lumot kiritiladi",bio:"Bu namunaviy profil. Ustoz haqidagi to‘liq ma’lumotni shu yerda yozing."},
    {name:"Ustoz 7",subject:"Ingliz tili",experience:"Ma’lumot kiritiladi",bio:"Bu namunaviy profil. Ustoz haqidagi to‘liq ma’lumotni shu yerda yozing."}
  ],
  ranking: [
    {name:"O‘quvchi 1",className:"5-sinf",subject:"Matematika",stars:25,status:"Faol",score:250},
    {name:"O‘quvchi 2",className:"5-sinf",subject:"Matematika",stars:22,status:"Faol",score:220},
    {name:"O‘quvchi 3",className:"6-sinf",subject:"Fizika",stars:20,status:"Faol",score:200},
    {name:"O‘quvchi 4",className:"6-sinf",subject:"Ingliz tili",stars:18,status:"Faol",score:180},
    {name:"O‘quvchi 5",className:"7-sinf",subject:"Matematika",stars:16,status:"Faol",score:160},
    {name:"O‘quvchi 6",className:"7-sinf",subject:"Fizika",stars:14,status:"Faol",score:140}
  ],
  results: [
    {title:"Matematika bo‘yicha oylik natija",description:"Namunaviy natija. Haqiqiy ballar va sanalarni data.js faylida yangilang.",category:"Matematika"},
    {title:"Zakovat musobaqasi natijalari",description:"Ishtirokchilar va jamoalar natijalarini shu bo‘limda e’lon qiling.",category:"Musobaqa"},
    {title:"Fan olimpiadasi",description:"Olimpiada natijalari va g‘oliblar haqidagi ma’lumotlar.",category:"Olimpiada"}
  ]
};