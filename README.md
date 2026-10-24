# Bilim Maydoni — GitHub Pages sayti

Bu loyiha 7 bo‘limli, yashil-oq dizayndagi, telefonda pastki menyusi doimiy ko‘rinadigan ommaviy saytning boshlang‘ich versiyasi.

## Fayllar
- `index.html` — Bosh menyu, yangiliklar va e’lonlar
- `competitions.html` — Musobaqalar, har sahifada 3 ta kartochka
- `teachers.html` — Ustozlar, qidiruv va profil oynasi
- `ranking.html` — O‘quvchilar reytingi
- `results.html` — Natijalar
- `about.html` — Sayt haqida
- `contact.html` — Bog‘lanish shakli
- `style.css` — Umumiy dizayn va animatsiyalar
- `data.js` — O‘zgartiriladigan barcha namunaviy ma’lumotlar
- `app.js` — Navigatsiya va sahifa funksiyalari
- `reference-*.jpg` — Siz yuborgan chizma rasmlari

## Telefonda GitHub Pages'ga joylash
1. ZIP faylni yuklab olib, telefonda oching.
2. GitHub'da yangi repository yarating yoki mavjud bo‘sh repository'ni oching.
3. Fayllarni repository'ning **asosiy (root) qismiga** yuklang. `index.html` ichma-ich papkada qolmasin.
4. Repository → **Settings** → **Pages** bo‘limiga kiring.
5. **Deploy from a branch** tanlang, branch sifatida `main`, papka sifatida `/(root)` belgilang va saqlang.
6. GitHub ko‘rsatgan Pages manzilini ochib tekshiring.

## Ma’lumotlarni o‘zgartirish
`data.js` faylini tahrirlang. `teachers`, `competitions`, `ranking`, `news`, `results` ro‘yxatlaridagi namunaviy yozuvlarni haqiqiy ma’lumotlar bilan almashtiring. Bog‘lanish sahifasi uchun `contact.email`, `contact.phone`, `contact.address` qiymatlarini to‘ldiring.

## Muhim
- Hozirgi ma’lumotlar `data.js` ichida saqlanadi; ularni o‘zgartirish uchun faylni qayta yuklash kerak.
- Bu versiyada admin paneli va ma’lumotlar bazasi yo‘q.
- Reyting ommaviy ko‘rinadi; faqat oshkor qilishga ruxsat etilgan ma’lumotlarni joylashtiring.
- Bog‘lanish formasi `contact.email` kiritilgach, qurilmadagi email dasturini ochadi; server orqali avtomatik yubormaydi.
- `reference-*.jpg` rasmlari chizmalarni eslab qolish uchun qo‘shilgan. Ularni sayt ko‘rinishida ishlatish shart emas.
