# Yeni 8 vakalık sınav

Eski 10 acil vaka kullanılmaz. Yeni istemci, puanı ve kişisel raporu yalnız tamamlanmış oturumda sunucudan alır. Aday cevap anahtarı veya vaka bankasını indirmez. Tam ekran/odak olayları otomatik ceza oluşturmaz.

## Hazır olan kod
- Eşit vaka ağırlığı ve dört değerlendirme alanı (25 + 25 + 25 + 25).
- Karara özel klinik bağlam, açıklama, sonuç ve öğrenme hedefleri.
- Bitmiş oturumda puan, alan sonuçları, vaka sonuçları ve yazdır/PDF.
- Süresi dolan/erken bitirilen oturumlarda yanıtlanmayan alanları paydada tutma.
- Tekrarlanan puan kaydı, eksik rubric ve döngülü yolları reddetme.
- Vaka/rubric sürümünün oturum başlangıcında saklanması.

## Yayın için eksikler
1. Supabase projesi ve yetkili eğitmen hesabı henüz bağlı değil.
2. Meme vakasının önceki tam metni bulunamadı; mevcut yerel içerik özetten yeniden oluşturulmuş çalışma metnidir. Gerçek sınav aktivasyonu buna bağlı olarak engellidir.
3. Diğer vakaların aktarımı yapısal çalışma sürümüdür; klinik dal bağlamları ve önceki onaylı metinle tam eşleşmesi doğrulanmalıdır. Bu sürüm gerçek sınav için tamamlandı diye işaretlenmez.
4. Tarayıcı otomasyon kontrolü ortamda Chromium olmadığı için çalışmadı. JS sözdizimi ve puanlama testleri geçti.

## Kurulum
- Özel veritabanında schema.sql, ardından özel seed-new-private.sql uygulanır.
- clinical-exam fonksiyonu (index.ts ve scoring.mjs) sunucuya yüklenir.
- SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY/EXAM_SERVER_KEY, SITE_ORIGIN ve FIRST_NODE sunucu ayarıdır. Gizli anahtarlar hiçbir zaman config.js'e konulmaz.
- Eğitmen Auth hesabı oluşturulup exam_admins tablosuna eklenir.
- İstemcide config.js'e yalnız API URL ve yayınlanabilir anahtar girilir.
- İçerik doğrulaması tamamlanmadan active rubric oluşturulmaz.

Özel vaka bankası ve SQL seed dosyası herkese açık GitHub reposuna yüklenmemelidir.
