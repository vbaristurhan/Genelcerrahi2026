window.CASES = [
  {
    "id": "appendix",
    "title": "Akut apandisit",
    "opening": "27 yaşında kadın; 18 saattir periumbilikal başlayıp sağ alt kadrana yerleşen ağrı, bulantı. TA 118/72, nabız 96, ateş 37.8 °C. Son adet tarihini net hatırlamıyor. Lokal hassasiyet var; yaygın defans yok.",
    "source": {
      "label": "WSES Jerusalem Guidelines, 2025 edition (2026 publication)",
      "url": "https://pubmed.ncbi.nlm.nih.gov/41604201/"
    },
    "stages": [
      {
        "title": "İlk değerlendirme",
        "clinical": "Hasta henüz laboratuvar veya görüntüleme ile değerlendirilmedi. Öncelikli yaklaşımınız?",
        "good": "Gebelik olasılığı, jinekolojik ve üriner ayırıcı tanı; analjezi, sıvı ihtiyacı ve laboratuvarı birlikte değerlendirmek",
        "bad": "Ağrıyı maskeleyebileceği için analjezi vermeden tanıyı beklemek",
        "explanation": "Analjezi tanısal değerlendirme ile birlikte yürütülür; üreme çağında gebelik ve ayırıcı tanı araştırılır.",
        "rescue": "Ağrı sürüyor. Henüz gebelik durumu ve ayırıcı tanılar değerlendirilmedi. Yeniden yaklaşım seçin.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Görüntüleme",
        "clinical": "β-hCG negatif. WBC 14.800/mm³, CRP 56 mg/L. USG’de apendiks izlenemiyor; klinik şüphe devam ediyor.",
        "good": "Uygun düşük doz kontrastlı BT ile tanıyı ve komplikasyonu değerlendirmek",
        "bad": "Apendiks görünmediği için apandisiti dışlayıp taburcu etmek",
        "explanation": "Tanısal olmayan USG hastalığı dışlamaz. Devam eden şüphede ek görüntüleme gerekir.",
        "rescue": "Ağrı ve sağ alt kadran hassasiyeti devam ediyor; negatif değil, tanısal olmayan USG raporu var.",
        "alt": "Hastanede yakın seri muayene; şüphe sürerse ek görüntüleme",
        "critical": false
      },
      {
        "title": "Tedavi seçimi",
        "clinical": "BT: 11 mm apendiks, çevresel yağlı doku inflamasyonu; apendikolit, apse veya perforasyon yok. Hasta ameliyatı tercih ediyor; laparoskopi ekibi mevcut.",
        "good": "Bilgilendirme, preoperatif antibiyotik ve laparoskopik apendektomi planlamak",
        "bad": "Onam almadan antibiyotik tedavisini zorunlu tek seçenek olarak sunmak",
        "explanation": "Seçilmiş komplike olmayan hastada antibiyotik seçeneği tartışılabilir; hasta tercihi ve cerrahi imkân önemlidir.",
        "rescue": "Hasta seçeneklerin kendisine açıklanmasını istiyor; komplikasyon bulgusu hâlâ yok.",
        "alt": "Antibiyotik seçeneğinin başarısızlık/nüks riskini açıklayıp hasta ile yeniden ortak karar vermek",
        "critical": false
      },
      {
        "title": "Ameliyat bulgusu",
        "clinical": "Laparoskopide komplike olmayan apandisit; apendiks çıkarıldı, kaynak kontrolü tam.",
        "good": "Rutin dren ve uzatılmış postoperatif antibiyotik kullanmamak",
        "bad": "Her hastaya dren ve yedi günlük antibiyotik uygulamak",
        "explanation": "Komplike olmayan, yeterli cerrahi tedavi uygulanmış olguda rutin uzatılmış antibiyotik gerekmez.",
        "rescue": "Operasyon notu perforasyon ve kontaminasyon olmadığını doğruluyor. Postoperatif planı yeniden değerlendirin.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Taburculuk",
        "clinical": "Hasta oral alabiliyor, mobil, ağrı oral ilaçla kontrol ediliyor ve vital bulguları normal.",
        "good": "Yara bakımı, patoloji takibi, kontrol ve alarm bulgularını açıklayarak taburcu etmek",
        "bad": "Kontrol ve geri başvuru bilgisi vermeden taburcu etmek",
        "explanation": "Taburculuk güvenliği yalnızca vital bulgulardan ibaret değildir; takip ve alarm bulguları açıklanır.",
        "rescue": "Hasta evde ateş veya artan ağrı olursa ne yapacağını bilmiyor. Taburculuk bilgilendirmesini tamamlayın.",
        "alt": null,
        "critical": false
      }
    ]
  },
  {
    "id": "biliary",
    "title": "Akut kolesistit / koledokolitiazis",
    "opening": "64 yaşında kadın; sağ üst kadran ağrısı, titreme ve sarılık. TA 92/58, nabız 118, ateş 39 °C, yeni başlayan konfüzyon. Safra taşı öyküsü var.",
    "source": {
      "label": "WSES acute calculous cholecystitis, 2020",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7643471/"
    },
    "stages": [
      {
        "title": "İlk müdahale",
        "clinical": "Hipotansiyon ve bilinç değişikliği mevcut.",
        "good": "Sepsis değerlendirmesi, IV antibiyotik, kontrollü sıvı resüsitasyonu, monitörizasyon ve acil uzman desteğini eş zamanlı başlatmak",
        "bad": "Ağrıyı safra koliği olarak değerlendirip oral ilaçla taburcu etmek",
        "explanation": "Biliyer enfeksiyonla ilişkili organ disfonksiyonu acil resüsitasyon ve kaynak kontrolü planı gerektirir.",
        "rescue": "TA 86/52; konfüzyon devam ediyor. Biliyer enfeksiyon ve organ disfonksiyonu düşünülmeli.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Odağın değerlendirilmesi",
        "clinical": "İlk resüsitasyon sürüyor. Bilirubin 5.8 mg/dL, ALP yüksek, kreatinin 1.8 mg/dL.",
        "good": "Yatak başı USG ile safra kesesi ve koledoğu değerlendirmek; drenaj planını eş zamanlı yürütmek",
        "bad": "Önce elektif MRCP randevusu alıp resüsitasyonu ertelemek",
        "explanation": "Görüntüleme, instabil hastada tedavi ve drenajı geciktirmemelidir.",
        "rescue": "MRCP için bekleniyor; hastada organ disfonksiyonu sürüyor. Acil yolu yeniden seçin.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Kaynak kontrolü",
        "clinical": "USG: taşlı, duvarı kalın safra kesesi; koledok 12 mm ve distal taş. Enfeksiyonla birlikte biliyer obstrüksiyon var.",
        "good": "Resüsitasyonla birlikte acil ERCP ve biliyer drenaj için ekip hazırlamak",
        "bad": "Yalnız antibiyotik verip koledok taşını haftalar sonra değerlendirmek",
        "explanation": "Şiddetli kolanjitte obstrüksiyonun giderilmesi temel kaynak kontrolüdür.",
        "rescue": "Antibiyotik başlanmasına rağmen hipotansiyon sürüyor; koledok obstrüksiyonu giderilmedi.",
        "alt": null,
        "critical": true
      },
      {
        "title": "ERCP sonrası",
        "clinical": "Drenaj başarılı, taş çıkarıldı; 48 saat sonra organ disfonksiyonu geriliyor. Anestezi değerlendirmesi sonrası operabl. Kolesistit devam ediyor.",
        "good": "Aynı yatışta uygun zamanda laparoskopik kolesistektomi planlamak",
        "bad": "Taş koledoktan çıkarıldığı için safra kesesine yönelik hiçbir plan yapmamak",
        "explanation": "Operabl hastada erken kolesistektomi tekrarlayan biliyer olayları önlemek için değerlendirilir.",
        "rescue": "Hasta iyileşiyor fakat safra kesesinde taş ve inflamasyon var; kalıcı tedavi planı yok.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Zor safra kesesi",
        "clinical": "Ameliyatta ciddi inflamasyon var; kritik güvenlik görünümü elde edilemiyor.",
        "good": "Diseksiyonu durdurup subtotal kolesistektomi veya uygun diğer güvenli çıkış stratejisini değerlendirmek",
        "bad": "Anatomi belirsizken görülen ilk tübüler yapıyı kliplemek",
        "explanation": "Belirsiz anatomiyle diseksiyon safra yolu yaralanması riski taşır. Güvenli çıkış stratejisi gerekir.",
        "rescue": "Anatomik yapılar ayırt edilemiyor. Kliplemeden önce yaklaşımı yeniden belirleyin.",
        "alt": null,
        "critical": true
      }
    ]
  },
  {
    "id": "colon",
    "title": "Kolorektal kanser ve obstrüksiyon",
    "opening": "71 yaşında erkek; dört gündür gaz-gaita çıkaramama, distansiyon ve kusma. Üç ayda 7 kg kayıp. TA 116/70, nabız 104. Defans yok.",
    "source": {
      "label": "ESGE malignant colonic obstruction, 2020",
      "url": "https://pubmed.ncbi.nlm.nih.gov/32259849/"
    },
    "stages": [
      {
        "title": "Başlangıç",
        "clinical": "Kusma ve belirgin distansiyon mevcut.",
        "good": "Oral alımı kesmek, IV sıvı-elektrolit ve diürezi değerlendirmek; kusmaya göre NG dekompresyon ve cerrahi değerlendirme",
        "bad": "Lavman ve oral laksatif verip evde beklemesini önermek",
        "explanation": "Tam obstrüksiyon şüphesinde stabilizasyon ve acil değerlendirme gerekir.",
        "rescue": "Kusma devam ediyor; dehidratasyon gelişiyor. İlk yaklaşımı düzeltin.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Tanı",
        "clinical": "Resüsitasyon sonrası hemodinamik olarak stabil.",
        "good": "Kontrastlı abdominopelvik BT ile obstrüksiyon düzeyi, iskemi ve perforasyonu değerlendirmek",
        "bad": "Tam bağırsak hazırlığı ile acil tarama kolonoskopisi yapmak",
        "explanation": "Akut obstrüksiyonda BT anatomiyi ve komplikasyonları değerlendirir; tam oral hazırlık uygun değildir.",
        "rescue": "Distansiyon sürüyor; obstrüksiyonun düzeyi ve perforasyon riski bilinmiyor.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Dekompresyon stratejisi",
        "clinical": "BT: obstrükte sigmoid tümör, proksimal dilatasyon; serbest hava/iskemi yok. Hasta stabil. Deneyimli stent ve kolorektal cerrahi ekipleri var.",
        "good": "Hasta ile stentin cerrahiye köprü olarak risk/yararını ve acil cerrahi alternatiflerini tartışıp multidisipliner karar vermek",
        "bad": "Perforasyon olasılığını değerlendirmeden stenti her hastada zorunlu uygulamak",
        "explanation": "Seçilmiş sol kolon obstrüksiyonunda stent bir seçenektir; cerrahi de geçerli alternatiftir.",
        "rescue": "Hasta işlem riskleri ve alternatifleri açıklanmadığını belirtiyor. Kararı kişiselleştirin.",
        "alt": "Hasta tercihi ve risklere göre acil rezeksiyon/dekompresyon cerrahisi planlamak",
        "critical": false
      },
      {
        "title": "Yeni klinik durum",
        "clinical": "Dekompresyon girişimi öncesinde ağrı yaygınlaşıyor, TA 88/54, defans var. Yeni BT’de serbest hava görülüyor.",
        "good": "Resüsitasyon, antibiyotik ve acil cerrahi kaynak kontrolü; stent planını iptal etmek",
        "bad": "Perforasyona rağmen stent planına devam etmek",
        "explanation": "Perforasyon ve instabilite cerrahi kaynak kontrolü gerektirir; stent uygun değildir.",
        "rescue": "Peritonit ve hipotansiyon sürüyor. Kaynak kontrolü gecikiyor.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Operatif strateji",
        "clinical": "Laparotomide tümör proksimalinde perforasyon, yaygın kontaminasyon; vazopressör ihtiyacı var.",
        "good": "Fizyoloji ve kontaminasyona göre rezeksiyon, stoma/damage-control yaklaşımını seçmek",
        "bad": "Her koşulda korumasız primer anastomoz yapmak",
        "explanation": "Anastomoz kararı fizyoloji, perfüzyon ve kontaminasyona göre bireyselleştirilir. Bu tabloda güvenli kaynak kontrolü önceliklidir.",
        "rescue": "Hasta vazopressör kullanıyor ve kontaminasyon yaygın. Rekonstrüksiyon kararını yeniden değerlendirin.",
        "alt": null,
        "critical": true
      }
    ]
  },
  {
    "id": "diverticular",
    "title": "Divertikülit ve apse",
    "opening": "62 yaşında erkek; 24 saattir sol alt kadran ağrısı ve ateş. TA 128/76, nabız 102, ateş 38.4 °C. Lokal hassasiyet; yaygın peritonit yok. WBC 17.200, CRP 196 mg/L.",
    "source": {
      "label": "WSES acute colonic diverticulitis, 2020",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7206757/"
    },
    "stages": [
      {
        "title": "İlk değerlendirme",
        "clinical": "Komplike hastalık henüz dışlanmadı.",
        "good": "IV destek, analjezi ve kontrastlı BT ile hastalığın yaygınlığını değerlendirmek",
        "bad": "Akut fazda tanı için kolonoskopiyi ilk işlem seçmek",
        "explanation": "Akut komplike divertikülit şüphesinde BT tercih edilir; akut kolonoskopi rutin ilk değerlendirme değildir.",
        "rescue": "Endoskopi ekibi akut inflamasyon nedeniyle işlemi erteliyor; tanısal değerlendirme tamamlanmadı.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Apse yönetimi",
        "clinical": "BT: 6 cm drenaja uygun perikolik apse; serbest hava yok. Hasta stabil; girişimsel radyoloji erişilebilir.",
        "good": "IV antibiyotik ve perkütan drenaj ile kaynak kontrolü planlamak",
        "bad": "Yalnız oral antibiyotikle taburcu etmek",
        "explanation": "Büyük, erişilebilir apse için antibiyotikle birlikte drenaj uygun bir seçenektir.",
        "rescue": "Ağrı ve ateş sürüyor; büyük apse için kaynak kontrolü sağlanmadı.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Tedavi yanıtı",
        "clinical": "Drenaj sonrası 24 saatte ateş sürüyor, dren çıkışı çok az. TA normal, peritonit yok.",
        "good": "Dren açıklığı/pozisyonu, kültür ve yeniden görüntüleme ihtiyacını değerlendirip tedaviyi uyarlamak",
        "bad": "Dren yerleştirildiği için ateşi önemsememek",
        "explanation": "Klinik yanıtsızlık rezidü apse, dren sorunu ve kontrolsüz enfeksiyon açısından yeniden değerlendirilir.",
        "rescue": "Ateş devam ediyor; dren işlevi doğrulanmadı. Kaynak kontrolünü yeniden değerlendirin.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Başarısız kaynak kontrolü",
        "clinical": "Drenaj revizyonuna rağmen yaygın defans, TA 90/56 ve yükselen laktat gelişiyor.",
        "good": "Sepsis resüsitasyonu ve acil cerrahi kaynak kontrolü planlamak",
        "bad": "Sadece antibiyotiği değiştirerek birkaç gün daha beklemek",
        "explanation": "Peritonit ve instabilite varlığında yetersiz kaynak kontrolü cerrahi değerlendirme gerektirir.",
        "rescue": "Yaygın peritonit ve hipotansiyon sürüyor; cerrahi kaynak kontrolü gecikiyor.",
        "alt": null,
        "critical": true
      },
      {
        "title": "İyileşme sonrası",
        "clinical": "Kaynak kontrolü sağlandı, hasta iyileşti. Daha önce kolonoskopi yapılmamış.",
        "good": "İyileşme sonrası kolon değerlendirmesi planlamak; elektif cerrahiyi riskler ve hastanın durumu üzerinden tartışmak",
        "bad": "Atak geçirdiği için herkese zorunlu elektif kolektomi önermek",
        "explanation": "Komplike atak sonrası maligniteyi dışlamak için kolon değerlendirmesi önemlidir; elektif cerrahi bireyselleştirilir.",
        "rescue": "Hasta takip ve elektif cerrahi gerekçesini soruyor. Planı bireyselleştirin.",
        "alt": null,
        "critical": false
      }
    ]
  },
  {
    "id": "leak",
    "title": "Anastomoz kaçağı",
    "opening": "Rektum kanseri için anterior rezeksiyon yapılan 59 yaşındaki hasta, postoperatif 5. günde. Nabız 118, ateş 38.5 °C, pelvik ağrı, ileus. TA 110/68, CRP 260 mg/L.",
    "source": {
      "label": "Management of Acute Anastomotic Leaks, 2021",
      "url": "https://pubmed.ncbi.nlm.nih.gov/34853561/"
    },
    "stages": [
      {
        "title": "Komplikasyonu fark etme",
        "clinical": "Yeni taşikardi, ateş ve ileus var.",
        "good": "Kaçak ve diğer sepsis odaklarını değerlendirerek kıdemli cerrahı bilgilendirmek; muayene, laktat, laboratuvar ve resüsitasyon ihtiyacını değerlendirmek",
        "bad": "Bulguları normal postoperatif süreç sayıp ertesi gün beklemek",
        "explanation": "Postoperatif taşikardi ve inflamasyon klinik kötüleşmeyle birlikte değerlendirilmelidir.",
        "rescue": "Taşikardi ve pelvik ağrı sürüyor; komplikasyon araştırılmadı.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Tanısal değerlendirme",
        "clinical": "Hasta stabil; yaygın peritonit yok.",
        "good": "IV kontrastlı abdominopelvik BT; anastomoz seviyesine göre uygun enteral/rektal kontrastı radyolojiyle değerlendirmek",
        "bad": "Tek normal laktat sonucu ile kaçağı dışlamak",
        "explanation": "Normal bir laboratuvar sonucu kaçağı dışlamaz. Görüntüleme klinik şüpheyi değerlendirmeye yardımcıdır.",
        "rescue": "Laktat normal olsa da ateş ve taşikardi devam ediyor. Tanısal planı tamamlayın.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Lokalize kaçak",
        "clinical": "BT: anastomoz çevresinde 5 cm drenaja uygun koleksiyon; hasta stabil, yaygın peritonit yok. Koruyucu ileostomi mevcut.",
        "good": "Antibiyotik ve görüntüleme eşliğinde drenaj; yakın klinik takip ile kaynak kontrolünü değerlendirmek",
        "bad": "Sadece oral antibiyotikle taburcu etmek",
        "explanation": "Stabil ve lokalize kaçakta uygun drenaj ve antibiyotik seçeneği değerlendirilir.",
        "rescue": "Ateş sürüyor; koleksiyona yönelik kaynak kontrolü yok.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Klinik kötüleşme",
        "clinical": "Drenaja rağmen fekaloid çıkış, yaygın defans ve TA 84/50 gelişiyor.",
        "good": "Yoğun bakım desteği, resüsitasyon ve acil operatif kaynak kontrolü",
        "bad": "BT’yi normalleşene kadar her gün tekrarlayıp ameliyatı ertelemek",
        "explanation": "İnstabilite ve peritonitte görüntüleme kaynak kontrolünü geciktirmemelidir.",
        "rescue": "Hipotansiyon sürüyor; yaygın kontaminasyon olasılığı var.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Ameliyatta karar",
        "clinical": "Anastomozun geniş kısmı ayrılmış, uçlarda iskemi var; hasta vazopressör gerektiriyor.",
        "good": "İskemik/destabil anastomozu kontrol edip rezeksiyon-stoma gibi güvenli kaynak kontrolü stratejisi seçmek",
        "bad": "İskemik uçları aynı şekilde yeniden birleştirmek",
        "explanation": "Cerrahi strateji doku canlılığı, fizyoloji ve kontaminasyona göre seçilir.",
        "rescue": "Anastomoz uçları iskemik ve hasta instabil. Rekonstrüksiyon kararını yeniden değerlendirin.",
        "alt": null,
        "critical": true
      }
    ]
  },
  {
    "id": "bleed",
    "title": "GİS kanama",
    "opening": "68 yaşında erkek; hematemez ve melena, NSAİİ kullanımı. TA 88/54, nabız 124, soğuk ekstremiteler. Bilinen siroz veya kardiyovasküler hastalık yok.",
    "source": {
      "label": "ACG Upper Gastrointestinal and Ulcer Bleeding, 2021",
      "url": "https://pubmed.ncbi.nlm.nih.gov/33929377/"
    },
    "stages": [
      {
        "title": "Resüsitasyon",
        "clinical": "Hasta aktif kanıyor ve hipotansif.",
        "good": "Havayolu riskini değerlendirmek, geniş damar yolları, kan grubu/çapraz karşılaştırma ve hemodinamiye göre sıvı-kan resüsitasyonu başlatmak",
        "bad": "Hemoglobin sonucu gelene kadar müdahale etmemek",
        "explanation": "Aktif şokta transfüzyon ve resüsitasyon kararı yalnız hemoglobin eşiğine bağlanmaz.",
        "rescue": "Hipotansiyon sürüyor; laboratuvar beklenirken resüsitasyon yapılmadı.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Sonraki adım",
        "clinical": "İlk resüsitasyonla TA 112/70; Hb 6.6 g/dL. Aktif kusma azaldı.",
        "good": "Eritrosit transfüzyonu ve klinik izlem; resüsitasyon sonrası ilk 24 saatte üst endoskopi planlamak",
        "bad": "Stabilize olduğu için Hb 6.6 değerine rağmen taburcu etmek",
        "explanation": "Stabilize hastada da ciddi anemi tedavisi ve erken endoskopik değerlendirme gerekir.",
        "rescue": "Belirgin anemi ve yakın dönem aktif kanama var; taburculuk güvenli değil.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Endoskopik hemostaz",
        "clinical": "Endoskopi: duodenal ülserde aktif kanama; klip ve termal yöntem mevcut.",
        "good": "Klip/termal hemostaz; adrenalin kullanılırsa ikinci bir hemostaz yöntemiyle kombine etmek",
        "bad": "Yalnız adrenalin enjeksiyonunu kesin tedavi saymak",
        "explanation": "Adrenalin monoterapisi yerine etkili ikinci yöntemle kombinasyon gerekir.",
        "rescue": "Endoskopist kalıcı hemostaz yöntemi soruyor. Planı tamamlayın.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Tekrar kanama",
        "clinical": "İlk hemostaz ve PPI sonrası yeniden hematemez; resüsitasyonla stabil.",
        "good": "Resüsitasyon ve tekrar endoskopik hemostaz; başarısızsa embolizasyon/cerrahi değerlendirme",
        "bad": "İlk endoskopi yapıldığı için tekrar kanamayı izlemekle yetinmek",
        "explanation": "Tekrar kanama aktif yeniden müdahale gerektirir.",
        "rescue": "Hematemez devam ediyor; tekrar hemostaz planlanmadı.",
        "alt": null,
        "critical": true
      },
      {
        "title": "İkincil korunma",
        "clinical": "Tekrar hemostaz başarılı, hasta stabil.",
        "good": "PPI tedavisi, H. pylori değerlendirmesi/eradikasyonu ve NSAİİ ihtiyacını yeniden düzenlemek",
        "bad": "Yalnız taburculuk yapıp ülser nedenini araştırmamak",
        "explanation": "Tekrar kanamayı azaltmak için ülser etiyolojisi ve ilaçlar ele alınır.",
        "rescue": "Hasta NSAİİ’ye aynı şekilde devam etmeyi planlıyor. Uzun dönem planı tamamlayın.",
        "alt": null,
        "critical": false
      }
    ]
  },
  {
    "id": "sbo",
    "title": "İnce bağırsak obstrüksiyonu",
    "opening": "55 yaşında kadın; geçirilmiş abdominal cerrahi, kramp tarzında ağrı, bilious kusma ve gaz çıkaramama. TA 120/74, nabız 98. Distansiyon var; peritonit yok.",
    "source": {
      "label": "Bologna ASBO guidelines, 2017 update (2018)",
      "url": "https://pubmed.ncbi.nlm.nih.gov/29946347/"
    },
    "stages": [
      {
        "title": "İlk yaklaşım",
        "clinical": "Sıvı kaybı ve obstrüksiyon şüphesi mevcut.",
        "good": "Oral alımı kesmek, IV sıvı/elektrolit, NG dekompresyon ve seri muayene başlatmak",
        "bad": "Oral laksatif verip taburcu etmek",
        "explanation": "Obstrüksiyonda resüsitasyon, dekompresyon ve iskemi değerlendirmesi gerekir.",
        "rescue": "Kusma sürüyor; dehidratasyon artıyor.",
        "alt": null,
        "critical": true
      },
      {
        "title": "BT değerlendirmesi",
        "clinical": "Kontrastlı BT istenecek; önceki cerrahi adezyon olasılığını artırıyor.",
        "good": "Geçiş noktası, kapalı ans, duvar perfüzyonu ve serbest sıvıyı değerlendirmek",
        "bad": "Cerrahi öyküye dayanarak BT’siz kesin basit adezyon tanısı koymak",
        "explanation": "Adezyon olasılığı strangülasyon veya başka nedenleri dışlamaz.",
        "rescue": "Ağrı sürüyor; strangülasyon ve alternatif nedenler henüz dışlanmadı.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Konservatif tedavi",
        "clinical": "BT: tek geçiş noktası, adezyon lehine; kapalı ans, iskemi ve peritonit yok. Hasta stabil.",
        "good": "Yakın izlemle konservatif tedavi; uygun hastada suda çözünen kontrast protokolünü değerlendirmek",
        "bad": "İskemi riski için takip yapmadan üç gün beklemek",
        "explanation": "Konservatif tedavi aktif seri muayene ve yeniden değerlendirme içerir.",
        "rescue": "İzlem planı yok; yeni bulguların nasıl değerlendirileceği belirlenmedi.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Yeni bulgular",
        "clinical": "12 saat sonra ağrı sürekli, defans gelişmiş. Nabız 124, laktat 4.1. Yeni BT: kapalı ans ve azalmış duvar kontrastlanması.",
        "good": "Resüsitasyonla birlikte acil cerrahi eksplorasyon planlamak",
        "bad": "Konservatif tedaviyi 72 saate tamamlamak için beklemek",
        "explanation": "Strangülasyon/iskemi şüphesinde konservatif gözlem sonlandırılır.",
        "rescue": "Peritonit ve iskemi bulguları sürüyor; bekleme güvenli değil.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Ameliyat",
        "clinical": "Tek adezyon bandı açıldı; bir segment açıkça nekrotik.",
        "good": "Nekrotik segmenti rezeke edip rekonstrüksiyonu fizyoloji ve kalan bağırsak canlılığına göre seçmek",
        "bad": "Nekrotik segmenti yalnız bandı açarak bırakmak",
        "explanation": "Canlı olmayan bağırsak bırakılmaz; şüpheli canlılıkta yeniden değerlendirme/second-look düşünülebilir.",
        "rescue": "Segmentte nekroz kesin; kaynak kontrolü tamamlanmadı.",
        "alt": null,
        "critical": true
      }
    ]
  },
  {
    "id": "pancreas",
    "title": "Akut pankreatit",
    "opening": "46 yaşında kadın; sırta yayılan epigastrik ağrı, kusma. TA 118/74, nabız 104. Lipaz üst sınırın 8 katı. Safra taşı öyküsü var.",
    "source": {
      "label": "ACG Acute Pancreatitis, 2024",
      "url": "https://pubmed.ncbi.nlm.nih.gov/38857482/"
    },
    "stages": [
      {
        "title": "Tanı ve başlangıç",
        "clinical": "Tipik ağrı ve belirgin lipaz artışı var.",
        "good": "Klinik ve laboratuvarla tanı koymak; kontrollü kristalloid, analjezi, organ disfonksiyonu ve biliyer neden değerlendirmesi",
        "bad": "Tanı için herkese derhal kontrastlı BT zorunlu tutmak",
        "explanation": "Tipik ağrı ve enzim yükselişi tanıyı sağlayabilir; BT belirsizlik veya klinik seyir gerektirirse kullanılır.",
        "rescue": "BT bekleniyor, ancak tanı ölçütleri sağlanmış ve destek tedavisi henüz başlamamış.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Sıvı ve izlem",
        "clinical": "Kalp/böbrek yetmezliği yok. Hasta hipovolemik; idrar azalıyor.",
        "good": "Sıvıyı perfüzyon, BUN/kreatinin, diürez ve yüklenme bulgularıyla sık yeniden değerlendirmek",
        "bad": "Yanıtı değerlendirmeden sabit yüksek hızda günlerce sıvı vermek",
        "explanation": "Sıvı tedavisi hedeflere göre ayarlanır; aşırı yüklenme önlenir.",
        "rescue": "Sıvı dengesi kaydedilmemiş; perfüzyon ve yüklenme açısından yeniden değerlendirin.",
        "alt": null,
        "critical": false
      },
      {
        "title": "ERCP kararı",
        "clinical": "USG safra taşını gösteriyor; bilirubin normal, ateş/sarılık yok ve koledok geniş değil.",
        "good": "Kolanjit veya devam eden obstrüksiyon olmadığı için rutin acil ERCP yapmamak",
        "bad": "Tüm biliyer pankreatitlere acil ERCP yapmak",
        "explanation": "Biliyer neden tek başına acil ERCP endikasyonu değildir.",
        "rescue": "Kolanjit ve devam eden obstrüksiyon bulgusu yok; ERCP gerekçesini yeniden değerlendirin.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Beslenme ve antibiyotik",
        "clinical": "24 saatte ağrı azaldı, bulantı yok; organ yetmezliği veya enfeksiyon bulgusu yok.",
        "good": "Tolere ettiği ölçüde erken oral beslenme; profilaktik antibiyotik vermemek",
        "bad": "Lipaz normalleşene kadar açlık ve profilaktik antibiyotik uygulamak",
        "explanation": "Beslenme yalnız enzim normalleşmesine bağlanmaz; steril hastalıkta profilaktik antibiyotik önerilmez.",
        "rescue": "Hasta oral alabilecek durumda; enfeksiyon bulgusu yok. Tedavi planını düzeltin.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Nüksü önleme",
        "clinical": "Hafif biliyer pankreatit düzeldi; nekroz/koleksiyon yok ve hasta operabl.",
        "good": "Aynı yatışta kolesistektomi planlamak",
        "bad": "Nekroz olmamasına rağmen her hastada aylarca ertelemek",
        "explanation": "Hafif biliyer pankreatitte aynı yatışta kolesistektomi tekrarlayan olayları azaltmak için planlanır.",
        "rescue": "Hasta iyileşti, kalıcı biliyer tedavi planlanmadı.",
        "alt": null,
        "critical": false
      }
    ]
  },
  {
    "id": "trauma",
    "title": "Travma",
    "opening": "32 yaşında erkek; trafik kazası. TA 78/46, nabız 138, GKS 14. Sol üst kadranda hassasiyet; dış masif kanama yok. Travma ekibi mevcut.",
    "source": {
      "label": "WSES splenic trauma, 2017; follow-up consensus, 2022",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5562999/"
    },
    "stages": [
      {
        "title": "Birincil değerlendirme",
        "clinical": "Hasta şokta.",
        "good": "Travma ekibiyle ABCDE, kanama kontrolü, damar yolu, kan ürünleriyle resüsitasyon ve ısı kaybını önleme",
        "bad": "Önce ayrıntılı öykü alıp resüsitasyonu bekletmek",
        "explanation": "Hayatı tehdit eden yaralanmaların değerlendirilmesi ve tedavisi eş zamanlıdır.",
        "rescue": "Şok devam ediyor; birincil değerlendirme ve kanama resüsitasyonu gecikiyor.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Yatak başı tanı",
        "clinical": "Resüsitasyona rağmen TA 80/48. eFAST abdomen pozitif; toraksta acil patoloji yok.",
        "good": "Acil operatif kanama kontrolü için cerrahi ekibi hazırlamak",
        "bad": "Resüsitasyona yanıt vermeyen hastayı uzak BT ünitesine göndermek",
        "explanation": "İnstabil, intraperitoneal kanama şüphesi yüksek hastada BT kaynak kontrolünü geciktirmemelidir.",
        "rescue": "Hasta instabil ve FAST pozitif; BT’ye güvenli transfer sağlanamıyor.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Ameliyat bulgusu",
        "clinical": "Laparotomide ağır dalak hasarı ve kontrol edilemeyen kanama; hasta instabil.",
        "good": "Fizyolojiye uygun hızlı kanama kontrolü; gerekli ise splenektomi",
        "bad": "Organ korumak için kontrolsüz kanamaya rağmen uzun onarım denemesi",
        "explanation": "Organ koruma hemodinamik güvenliğin önüne geçmez.",
        "rescue": "Aktif kanama sürüyor; hızlı kontrol stratejisi gerekiyor.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Damage-control",
        "clinical": "Kanama kontrol edildi; hipotermi, asidoz ve koagülopati var.",
        "good": "Uygun damage-control sonlandırma ve yoğun bakımda fizyolojik düzeltme; yeniden operasyon planı",
        "bad": "Fizyoloji bozukken tüm rekonstrüksiyonu uzatmak",
        "explanation": "Cerrahi süre ve fizyoloji birlikte değerlendirilir; gerekirse aşamalı yaklaşım kullanılır.",
        "rescue": "Hipotermi ve koagülopati devam ediyor. Operasyon hedeflerini yeniden belirleyin.",
        "alt": null,
        "critical": false
      },
      {
        "title": "Splenektomi sonrası",
        "clinical": "Hasta iyileşti; splenektomi uygulanmış.",
        "good": "Yerel protokole göre aşılar, enfeksiyon/alarm bulguları ve takip konusunda plan oluşturmak",
        "bad": "Splenektomi sonrası enfeksiyon riskini açıklamadan taburcu etmek",
        "explanation": "Aspleni sonrası koruyucu önlemler ve ateşte erken başvuru eğitimi gerekir.",
        "rescue": "Hasta dalağının alınmasının sonraki bakımına etkisini bilmiyor. Taburculuk planını tamamlayın.",
        "alt": null,
        "critical": false
      }
    ]
  },
  {
    "id": "perianal",
    "title": "Anorektal acil / perianal sepsis",
    "opening": "58 yaşında diyabetik erkek; iki gündür perianal ağrı ve ateş. TA 100/64, nabız 116, ateş 38.9 °C. Ağrı görünür lezyona göre çok şiddetli; perineye yayılıyor.",
    "source": {
      "label": "WSES-AAST Anorectal emergencies, 2021",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8447593/"
    },
    "stages": [
      {
        "title": "İlk değerlendirme",
        "clinical": "Diyabet, sistemik bulgular ve orantısız ağrı var.",
        "good": "Perine/genital alanı muayene etmek, nekrotizan enfeksiyon ve sepsisi değerlendirip acil cerrahi desteği çağırmak",
        "bad": "Hemoroid kabul edip topikal tedaviyle taburcu etmek",
        "explanation": "Orantısız ağrı ve sistemik bulgular derin enfeksiyon/nekrotizan enfeksiyon için uyarıcıdır.",
        "rescue": "Ağrı artıyor; perineal yayılım henüz değerlendirilmedi.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Görüntüleme mi cerrahi mi?",
        "clinical": "Muayenede krepitasyon, morarma ve hızlı ilerleyen eritem. TA 86/52.",
        "good": "Resüsitasyon, geniş spektrum antibiyotik ve acil debridman; BT’yi cerrahiyi geciktirmemek üzere değerlendirmek",
        "bad": "MR randevusuna kadar antibiyotikle beklemek",
        "explanation": "İnstabil, nekrotizan enfeksiyon şüpheli hastada görüntüleme debridmanı geciktirmemelidir.",
        "rescue": "Hipotansiyon ve cilt bulguları ilerliyor; kaynak kontrolü gecikiyor.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Kaynak kontrolü",
        "clinical": "Operasyonda perineal fasya boyunca nekrotik doku var.",
        "good": "Tüm nekrotik dokuyu debride etmek, kültür almak ve yeniden değerlendirme planlamak",
        "bad": "Yalnız yüzeysel küçük apse insizyonu yapmak",
        "explanation": "Nekrotizan enfeksiyonda yüzeysel drenaj yeterli kaynak kontrolü sağlamaz.",
        "rescue": "Derin nekrotik dokular kalmış; debridmanın kapsamını yeniden değerlendirin.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Erken yeniden değerlendirme",
        "clinical": "İlk debridman sonrası yoğun bakımda; yara kenarında yeni nekroz görülüyor.",
        "good": "Acil yeniden cerrahi değerlendirme/debridman; kültüre göre antibiyotiği düzenlemek",
        "bad": "Yeni nekrozu normal yara iyileşmesi saymak",
        "explanation": "İlerleyen nekroz tekrar kaynak kontrolü gerektirir.",
        "rescue": "Yeni nekroz ilerliyor. Tekrar girişim gerekliliğini değerlendirin.",
        "alt": null,
        "critical": true
      },
      {
        "title": "Stoma kararı",
        "clinical": "Enfeksiyon kontrol edildi; sfinkterler sağlam, rektal yaralanma yok, dışkı kontaminasyonu kontrol edilebiliyor.",
        "good": "Fekal diversiyonu kontaminasyon, sfinkter/rek­tum hasarı ve yara bakımına göre bireyselleştirmek",
        "bad": "Her perineal enfeksiyonda zorunlu kalıcı kolostomi yapmak",
        "explanation": "Fekal diversiyon her olguda zorunlu değildir; anatomik ve klinik gereksinime göre seçilir.",
        "rescue": "Anatomik bütünlük korunmuş ve kontaminasyon kontrol altında. Diversiyon gerekçesini yeniden değerlendirin.",
        "alt": null,
        "critical": false
      }
    ]
  }
];
