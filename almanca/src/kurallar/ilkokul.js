var havuz=[
'A','E','K','O','L','M','R','N','T','I','S','U','Y',
'A','E','K','O','L','M','R','N','T','I','S','U','Y',
'A','E','K','O','L','M','R','N','T','I','S','U','Y',
'A','E','K','O','L','M','R','N','T','I','S','U','Y',
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Ä','Ö','Ü',
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Ä','Ö','Ü',
];                             //Havuzdaki harfler
var rastlantisal_oyuncu=1;     //Oyuna rastgele birinin başlaması için 1 yazılır 
var rastlantisal_harfler=1;    //Rastgele harf dağıtılması için 1 değeri yazılır. Her oyuncuya aynı harflerin dağıtılması için 0 seçilmelidir.
var sirali_harfler=0;          //Harfler havuzdaki sirayla verilecekse 1 değeri yazılı, dağınık olarak verilecekse 0 seçilmelidir
var havuzkaristir=1;           //Havuzdaki harfleri sürekli karıştırır.
var havuz_joker=1;             //Havuza eklenecek joker karakter sayısı
var kullanici_harf_sayisi=14;  //Kulanıcıya verilecek toplam joker dahil harf sayısı
var enkisa_kelime_uzunlugu=2;  //Kabul edilecek en kısa kelime uzunluğudur.
var kullanici_joker=1;         //Her oyuncuya verilecek joker karakter sayısı
var yuva_sayisi=30;	           //Toplam harf yuvası sayısı
var ivmeli_puan=0;             //Kazanılan puanın kelime uzunluğuna göre artması için 1 seçilmelidir.
var joker_puan=0;              //joker karakter kaç puan getirsin. puan eksiltmek için eksi değer girilecek
var kazanma_puani=0;           //Belirtilen puana ulaşıldığında oyun açılabilir. Eksi değer verildiğinde boşta kalan harf sayısı olarak değerlendirilir.0 tüm taşların kullanılmasını zorunlu kılar
var tasdongusu=1;              //Kullanılmayan taşlar havuza geri döner.
var kelimefiltre="*";          //Kelime grubu * girilirse filtrelemez ,alay yollu,	anatomi,	antropoloji,	argo,	askerlik,	bağlaç,	bilişim,	bitki bilimi,	biyoloji,	coğrafya,	denizcilik,	dil bilgisi,	dil bilimi,	din bilgisi,	edat,	edebiyat,	eğitim bilimi,	ekonomi,	eskimiş,	felsefe,	fizik,	fizyoloji,	geometri,	gök bilimi,	hakaret yollu,	halk ağzında,	hayvan bilimi,	hukuk,	isim,	jeoloji,	kaba konuşmada,	kimya,	madencilik,	mantık,	matematik,	mecaz,	meteoroloji,	mimarlık,	mineraloji,	mit.,	müzik,	nesnesiz,	ruh bilimi,	sıfat,	sinema,	spor,	şaka yollu,	tarih,	teklifsiz konuşmada,	teknik,	teknoloji,	televizyon,	tıp,	ticaret,	tiyatro,	toplum bilimi,	ünlem,	yardımcı fiil,	zamir,	zarf,
var jokerliyide_acikla=0;      //Oluşturulan kelimede joker kaakteri kullanıldıysa anlamı açıklanması isteniyorsa 1 yazılır, istenmiyorsa 0.
var yapayzeka=1;               //Yapay zeka çeşidi 0-4 arası değer girilir
temadegistir(0);               //Açılış temasını değiştirir
oyun_baslat();


//harfler_alfabetik=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Ä','Ö','Ü']; 
//harfler_istatistik=['A','E','K','O','L','M','R','N','T','I','S','U','Y','D','X','B','W','Z','G','P','H','C','V','Q','F','J'];
/*
YAPAY ZEKA   Taş Alma       Düşün      Taş Atma
	0         Gelen           -         Rasgele
	1         Gelen           +         Rasgele
	2         Gelen           +         Gereksiz
	3      Gelen/Havuz        +         Rastgele
	4      Gelen/Havuz        +         Gereksiz
*/