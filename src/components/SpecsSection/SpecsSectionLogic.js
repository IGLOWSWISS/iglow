import { useState } from 'react';
import jacketLeds from '../../assets/images/jacket-leds.png';
import ergonomicRemote from '../../assets/images/ergonomic-remote.png';
import automaticBraking from '../../assets/images/automatic-braking.png';
import waterResistant from '../../assets/images/water-resistant.png';
import phonePocket from '../../assets/images/phone-pocket.png';
import creditCardPocket from '../../assets/images/credit-card-pocket.png';
import waterBottlePocket from '../../assets/images/water-bottle-pocket.png';
import retractableKeyholder from '../../assets/images/retractable-keyholder.png';
import emergencyCard from '../../assets/images/emergency-card.png';
import backpackCompatible from '../../assets/images/backpack-compatible.png';
import smartphoneApp from '../../assets/images/smartphone-app.png';

const IMAGES = [
  jacketLeds,
  ergonomicRemote,
  automaticBraking,
  waterResistant,
  phonePocket,
  creditCardPocket,
  waterBottlePocket,
  retractableKeyholder,
  emergencyCard,
  backpackCompatible,
  smartphoneApp,
];

const TRANSLATIONS = {
  fr: [
    {
      title: 'LED haute visibilité',
      details:
        "Restez visible grâce à des LED 360° haute intensité, pour être vu dans toutes les conditions.",
    },
    {
      title: 'Télécommande ergonomique au guidon',
      details:
        'Contrôlez facilement les clignotants sans quitter la route des yeux.',
    },
    {
      title: 'Détection automatique de freinage',
      details:
        'Des capteurs intelligents activent les feux de freinage automatiquement pour plus de sécurité.',
    },
    {
      title: 'Conception résistante à l’eau',
      details:
        'Tissu et fermetures éclair légers et imperméables pour rester au sec, vous et votre équipement.',
    },
    {
      title: 'Poche de charge pour téléphone',
      details:
        'Une poche sûre et accessible pour charger et garder votre téléphone à portée de main.',
    },
    {
      title: 'Poche carte bancaire',
      details:
        'Une poche pratique pour un accès rapide à votre carte bancaire et à vos petits essentiels.',
    },
    {
      title: 'Poche gourde',
      details:
        'Rangez facilement votre gourde pour y accéder à tout moment en déplacement.',
    },
    {
      title: 'Porte-clés rétractable',
      details:
        'Gardez vos clés en sécurité et à portée de main grâce au porte-clés rétractable intégré.',
    },
    {
      title: 'Carte d’urgence',
      details:
        'Conservez vos informations médicales pour un accès rapide par les secours en cas d’urgence.',
    },
    {
      title: 'Compatible avec sac à dos',
      details:
        'Conçu pour s’adapter confortablement par-dessus votre sac à dos sans compromettre son fonctionnement.',
    },
    {
      title: 'Application smartphone',
      details:
        'Contrôlez les signaux et suivez votre trajet facilement grâce à l’application smartphone intégrée.',
    },
  ],
  de: [
    {
      title: 'Hochsichtbare LEDs',
      details:
        'Bleiben Sie dank 360°-LEDs mit hoher Intensität sichtbar, bei jedem Wetter gesehen zu werden.',
    },
    {
      title: 'Ergonomische Lenker-Fernbedienung',
      details:
        'Steuern Sie die Blinker einfach, ohne den Blick von der Straße zu nehmen.',
    },
    {
      title: 'Automatische Bremserkennung',
      details:
        'Intelligente Sensoren aktivieren die Bremslichter automatisch für mehr Sicherheit.',
    },
    {
      title: 'Wasserabweisendes Design',
      details:
        'Leichtes, wasserdichtes Material und Reissverschlüsse halten Sie und Ihre Ausrüstung trocken.',
    },
    {
      title: 'Lade-Tasche für das Telefon',
      details:
        'Sichere, gut zugängliche Tasche, um Ihr Telefon zu laden und griffbereit zu halten.',
    },
    {
      title: 'Kreditkartentasche',
      details:
        'Praktische Tasche für schnellen Zugriff auf Ihre Kreditkarte und kleine Dinge.',
    },
    {
      title: 'Trinkflaschentasche',
      details:
        'Verstauen Sie Ihre Trinkflasche bequem und griffbereit unterwegs.',
    },
    {
      title: 'Einziehbarer Schlüsselhalter',
      details:
        'Halten Sie Ihre Schlüssel sicher und griffbereit dank des eingebauten einziehbaren Schlüsselhalters.',
    },
    {
      title: 'Notfallkarte',
      details:
        'Speichern Sie Ihre medizinischen Informationen für den schnellen Zugriff durch Ersthelfer im Notfall.',
    },
    {
      title: 'Rucksackkompatibel',
      details:
        'So konzipiert, dass es bequem über Ihrem Rucksack sitzt, ohne die Funktion zu beeinträchtigen.',
    },
    {
      title: 'Smartphone-App',
      details:
        'Steuern Sie die Signale und verfolgen Sie Ihre Route nahtlos mit der integrierten Smartphone-App.',
    },
  ],
  it: [
    {
      title: 'LED ad alta visibilità',
      details:
        'Resta visibile grazie ai LED a 360° ad alta intensità, per essere visto in ogni condizione.',
    },
    {
      title: 'Telecomando ergonomico sul manubrio',
      details:
        'Controlla facilmente le frecce senza distogliere lo sguardo dalla strada.',
    },
    {
      title: 'Rilevamento automatico della frenata',
      details:
        'Sensori intelligenti attivano automaticamente le luci di stop per maggiore sicurezza.',
    },
    {
      title: 'Design resistente all’acqua',
      details:
        'Tessuto e cerniere leggeri e impermeabili per restare asciutti, tu e il tuo equipaggiamento.',
    },
    {
      title: 'Tasca di ricarica per il telefono',
      details:
        'Tasca sicura e accessibile per ricaricare e tenere il telefono vicino a te.',
    },
    {
      title: 'Tasca porta carta di credito',
      details:
        'Tasca comoda per un accesso rapido alla carta di credito e ai piccoli oggetti essenziali.',
    },
    {
      title: 'Tasca porta borraccia',
      details:
        'Riponi comodamente la tua borraccia per averla sempre a portata di mano.',
    },
    {
      title: 'Portachiavi retrattile',
      details:
        'Tieni le chiavi al sicuro e a portata di mano grazie al portachiavi retrattile integrato.',
    },
    {
      title: 'Scheda di emergenza',
      details:
        'Conserva le tue informazioni mediche per un rapido accesso da parte dei soccorritori in caso di emergenza.',
    },
    {
      title: 'Compatibile con lo zaino',
      details:
        'Progettato per adattarsi comodamente sopra il tuo zaino senza comprometterne la funzionalità.',
    },
    {
      title: 'App per smartphone',
      details:
        'Controlla i segnali e monitora il tuo percorso senza sforzo con l’app per smartphone integrata.',
    },
  ],
  en: [
    {
      title: 'High Visibility LEDs',
      details:
        "Stay visible with 360° high-intensity LEDs, ensuring you're seen in all conditions.",
    },
    {
      title: 'Ergonomic Handlebar Remote Control',
      details:
        'Easily control turn signals without taking your eyes off the road.',
    },
    {
      title: 'Automatic Braking Detection',
      details:
        'Smart sensors activate brake lights automatically for added safety.',
    },
    {
      title: 'Water Resistant Design',
      details:
        'Lightweight, waterproof fabric and zippers keep you and your gear dry.',
    },
    {
      title: 'Charging phone pocket',
      details:
        'Secure, accessible pocket to charge and keep your phone close to you.',
    },
    {
      title: 'Credit Card Pocket',
      details:
        'Handy pocket for quick access to your credit card and small essentials.',
    },
    {
      title: 'Water Bottle Pocket',
      details:
        'Conveniently store your water bottle for easy access on the go.',
    },
    {
      title: 'Retractable Keyholder',
      details:
        'Keep your keys secure and within reach with the built-in retractable keyholder.',
    },
    {
      title: 'Emergency Card',
      details:
        'Store your medical info for quick access by first responders in case of an emergency.',
    },
    {
      title: 'Backpack Compatible',
      details:
        'Designed to fit comfortably over your backpack without compromising function.',
    },
    {
      title: 'Smartphone App',
      details:
        'Control signals and track your route seamlessly with the integrated smartphone app.',
    },
  ],
  es: [
    {
      title: 'LED de alta visibilidad',
      details:
        'Mantente visible gracias a LEDs de 360° de alta intensidad, para ser visto en todas las condiciones.',
    },
    {
      title: 'Mando ergonómico en el manillar',
      details:
        'Controla fácilmente los intermitentes sin apartar la vista de la carretera.',
    },
    {
      title: 'Detección automática de frenado',
      details:
        'Sensores inteligentes activan las luces de freno automáticamente para mayor seguridad.',
    },
    {
      title: 'Diseño resistente al agua',
      details:
        'Tejido ligero e impermeable y cremalleras que te mantienen seco a ti y a tu equipo.',
    },
    {
      title: 'Bolsillo de carga para el teléfono',
      details:
        'Bolsillo seguro y accesible para cargar y mantener tu teléfono cerca.',
    },
    {
      title: 'Bolsillo para tarjeta de crédito',
      details:
        'Bolsillo práctico para un acceso rápido a tu tarjeta de crédito y pequeños objetos esenciales.',
    },
    {
      title: 'Bolsillo para botella de agua',
      details:
        'Guarda cómodamente tu botella de agua para un fácil acceso en movimiento.',
    },
    {
      title: 'Llavero retráctil',
      details:
        'Mantén tus llaves seguras y a mano gracias al llavero retráctil integrado.',
    },
    {
      title: 'Tarjeta de emergencia',
      details:
        'Guarda tu información médica para un acceso rápido por parte de los socorristas en caso de emergencia.',
    },
    {
      title: 'Compatible con mochila',
      details:
        'Diseñado para encajar cómodamente sobre tu mochila sin comprometer su funcionalidad.',
    },
    {
      title: 'Aplicación para smartphone',
      details:
        'Controla las señales y sigue tu ruta sin esfuerzo con la aplicación integrada para smartphone.',
    },
  ],
  nl: [
    {
      title: 'LED’s met hoge zichtbaarheid',
      details:
        'Blijf zichtbaar dankzij 360° LED’s met hoge intensiteit, zodat u in alle omstandigheden gezien wordt.',
    },
    {
      title: 'Ergonomische afstandsbediening op het stuur',
      details:
        'Bedien eenvoudig de richtingaanwijzers zonder uw blik van de weg te halen.',
    },
    {
      title: 'Automatische remdetectie',
      details:
        'Slimme sensoren activeren automatisch de remlichten voor extra veiligheid.',
    },
    {
      title: 'Waterbestendig ontwerp',
      details:
        'Lichtgewicht, waterdicht materiaal en ritsen houden u en uw spullen droog.',
    },
    {
      title: 'Oplaadvak voor telefoon',
      details:
        'Veilig en toegankelijk vak om uw telefoon op te laden en dicht bij u te houden.',
    },
    {
      title: 'Vak voor bankpas',
      details:
        'Handig vak voor snelle toegang tot uw bankpas en kleine essentials.',
    },
    {
      title: 'Vak voor waterfles',
      details:
        'Berg uw waterfles gemakkelijk op voor snelle toegang onderweg.',
    },
    {
      title: 'Intrekbare sleutelhanger',
      details:
        'Houd uw sleutels veilig en binnen handbereik dankzij de ingebouwde intrekbare sleutelhanger.',
    },
    {
      title: 'Noodkaart',
      details:
        'Bewaar uw medische gegevens voor snelle toegang door hulpverleners in geval van nood.',
    },
    {
      title: 'Compatibel met rugzak',
      details:
        'Ontworpen om comfortabel over uw rugzak te passen zonder de functie te beïnvloeden.',
    },
    {
      title: 'Smartphone-app',
      details:
        'Bedien de signalen en volg uw route moeiteloos met de geïntegreerde smartphone-app.',
    },
  ],
  pt: [
    {
      title: 'LEDs de alta visibilidade',
      details:
        'Mantenha-se visível graças a LEDs de 360° de alta intensidade, para ser visto em todas as condições.',
    },
    {
      title: 'Controle remoto ergonômico no guidão',
      details:
        'Controle facilmente as setas sem tirar os olhos da estrada.',
    },
    {
      title: 'Detecção automática de frenagem',
      details:
        'Sensores inteligentes ativam as luzes de freio automaticamente para mais segurança.',
    },
    {
      title: 'Design resistente à água',
      details:
        'Tecido leve e impermeável e zíperes mantêm você e seu equipamento secos.',
    },
    {
      title: 'Bolso de carregamento para o telefone',
      details:
        'Bolso seguro e acessível para carregar e manter o telefone perto de você.',
    },
    {
      title: 'Bolso para cartão de crédito',
      details:
        'Bolso prático para acesso rápido ao seu cartão de crédito e pequenos essenciais.',
    },
    {
      title: 'Bolso para garrafa de água',
      details:
        'Guarde sua garrafa de água com praticidade para fácil acesso durante o trajeto.',
    },
    {
      title: 'Porta-chaves retrátil',
      details:
        'Mantenha suas chaves seguras e à mão graças ao porta-chaves retrátil integrado.',
    },
    {
      title: 'Cartão de emergência',
      details:
        'Guarde suas informações médicas para acesso rápido pelos socorristas em caso de emergência.',
    },
    {
      title: 'Compatível com mochila',
      details:
        'Projetado para se ajustar confortavelmente sobre sua mochila sem comprometer a função.',
    },
    {
      title: 'Aplicativo para smartphone',
      details:
        'Controle os sinais e acompanhe seu trajeto facilmente com o aplicativo integrado.',
    },
  ],
  hi: [
    {
      title: 'हाई विज़िबिलिटी LED',
      details:
        '360° हाई-इंटेंसिटी LED की मदद से हर परिस्थिति में स्पष्ट रूप से दिखें।',
    },
    {
      title: 'हैंडलबार पर एर्गोनॉमिक रिमोट कंट्रोल',
      details: 'सड़क से नज़र हटाए बिना आसानी से टर्न सिग्नल नियंत्रित करें।',
    },
    {
      title: 'ऑटोमैटिक ब्रेकिंग डिटेक्शन',
      details:
        'अतिरिक्त सुरक्षा के लिए स्मार्ट सेंसर ब्रेक लाइट्स को अपने आप चालू करते हैं।',
    },
    {
      title: 'वाटर रेज़िस्टेंट डिज़ाइन',
      details:
        'हल्का, वाटरप्रूफ कपड़ा और ज़िप आपको और आपके सामान को सूखा रखते हैं।',
    },
    {
      title: 'फ़ोन चार्जिंग पॉकेट',
      details: 'फ़ोन चार्ज करने और पास रखने के लिए सुरक्षित, सुलभ पॉकेट।',
    },
    {
      title: 'क्रेडिट कार्ड पॉकेट',
      details: 'क्रेडिट कार्ड और छोटी ज़रूरी चीज़ों तक त्वरित पहुँच के लिए सुविधाजनक पॉकेट।',
    },
    {
      title: 'वॉटर बॉटल पॉकेट',
      details: 'चलते-फिरते आसानी से उपयोग के लिए अपनी पानी की बोतल सुविधाजनक ढंग से रखें।',
    },
    {
      title: 'रिट्रैक्टेबल की-होल्डर',
      details:
        'बिल्ट-इन रिट्रैक्टेबल की-होल्डर की मदद से अपनी चाबियाँ सुरक्षित और पास रखें।',
    },
    {
      title: 'इमरजेंसी कार्ड',
      details:
        'आपातकाल में प्राथमिक उपचारकर्ताओं की त्वरित पहुँच के लिए अपनी मेडिकल जानकारी रखें।',
    },
    {
      title: 'बैकपैक कम्पैटिबल',
      details:
        'कार्यक्षमता से समझौता किए बिना आपके बैकपैक के ऊपर आराम से फ़िट होने के लिए डिज़ाइन किया गया।',
    },
    {
      title: 'स्मार्टफ़ोन ऐप',
      details:
        'इंटीग्रेटेड स्मार्टफ़ोन ऐप से सिग्नल नियंत्रित करें और अपना रूट आसानी से ट्रैक करें।',
    },
  ],
  ar: [
    {
      title: 'مصابيح LED عالية الوضوح',
      details: 'ابقَ مرئياً بفضل مصابيح LED عالية الكثافة بزاوية 360°، لتُرى في جميع الظروف.',
    },
    {
      title: 'جهاز تحكم عن بعد مريح على المقود',
      details: 'تحكم بسهولة في إشارات الانعطاف دون أن ترفع نظرك عن الطريق.',
    },
    {
      title: 'الكشف التلقائي عن الفرملة',
      details: 'تُفعّل أجهزة استشعار ذكية أضواء الفرامل تلقائياً لمزيد من الأمان.',
    },
    {
      title: 'تصميم مقاوم للماء',
      details: 'قماش وسحابات خفيفة الوزن ومقاومة للماء تحافظ على جفافك وجفاف معداتك.',
    },
    {
      title: 'جيب شحن الهاتف',
      details: 'جيب آمن وسهل الوصول لشحن هاتفك وإبقائه قريباً منك.',
    },
    {
      title: 'جيب بطاقة الائتمان',
      details: 'جيب عملي للوصول السريع إلى بطاقتك الائتمانية وأغراضك الصغيرة الأساسية.',
    },
    {
      title: 'جيب زجاجة الماء',
      details: 'احفظ زجاجة مياهك بسهولة للوصول إليها بسرعة أثناء التنقل.',
    },
    {
      title: 'حامل مفاتيح قابل للسحب',
      details: 'حافظ على مفاتيحك آمنة وفي متناول يدك بفضل حامل المفاتيح القابل للسحب المدمج.',
    },
    {
      title: 'بطاقة الطوارئ',
      details: 'احفظ معلوماتك الطبية لوصول سريع من قبل المسعفين في حالة الطوارئ.',
    },
    {
      title: 'متوافق مع حقيبة الظهر',
      details: 'مصمم ليلائم حقيبة ظهرك بشكل مريح دون التأثير على وظيفته.',
    },
    {
      title: 'تطبيق الهاتف الذكي',
      details: 'تحكم في الإشارات وتتبع مسارك بسلاسة عبر تطبيق الهاتف الذكي المدمج.',
    },
  ],
  ru: [
    {
      title: 'Светодиоды высокой видимости',
      details:
        'Оставайтесь заметными благодаря ярким светодиодам на 360°, которые обеспечивают видимость в любых условиях.',
    },
    {
      title: 'Эргономичный пульт на руле',
      details: 'Легко управляйте поворотниками, не отрывая взгляд от дороги.',
    },
    {
      title: 'Автоматическое определение торможения',
      details:
        'Умные датчики автоматически включают стоп-сигналы для дополнительной безопасности.',
    },
    {
      title: 'Водоотталкивающий дизайн',
      details:
        'Лёгкая водонепроницаемая ткань и молнии сохраняют сухими вас и ваше снаряжение.',
    },
    {
      title: 'Карман для зарядки телефона',
      details: 'Надёжный доступный карман для зарядки телефона и хранения его рядом с вами.',
    },
    {
      title: 'Карман для банковской карты',
      details: 'Удобный карман для быстрого доступа к банковской карте и мелочам.',
    },
    {
      title: 'Карман для бутылки воды',
      details: 'Удобно храните бутылку с водой для лёгкого доступа в пути.',
    },
    {
      title: 'Выдвижной брелок для ключей',
      details:
        'Храните ключи в безопасности и под рукой благодаря встроенному выдвижному брелоку.',
    },
    {
      title: 'Карта экстренной помощи',
      details:
        'Храните медицинскую информацию для быстрого доступа спасателей в случае чрезвычайной ситуации.',
    },
    {
      title: 'Совместимость с рюкзаком',
      details:
        'Разработан так, чтобы удобно сидеть поверх рюкзака, не мешая его использованию.',
    },
    {
      title: 'Приложение для смартфона',
      details:
        'Управляйте сигналами и отслеживайте маршрут благодаря встроенному приложению для смартфона.',
    },
  ],
  zh: [
    {
      title: '高能见度 LED 灯',
      details: '得益于360°高强度 LED 灯，让您在任何环境下都清晰可见。',
    },
    {
      title: '车把人体工学遥控器',
      details: '无需移开视线即可轻松控制转向灯。',
    },
    {
      title: '自动刹车感应',
      details: '智能传感器自动激活刹车灯，带来额外安全保障。',
    },
    {
      title: '防水设计',
      details: '轻盈防水面料与拉链，让您和装备始终保持干爽。',
    },
    {
      title: '手机充电口袋',
      details: '安全便捷的口袋，为手机充电并随身携带。',
    },
    {
      title: '信用卡口袋',
      details: '便于快速取用信用卡及其他小物件的实用口袋。',
    },
    {
      title: '水壶口袋',
      details: '方便存放水壶，随时取用。',
    },
    {
      title: '可伸缩钥匙扣',
      details: '内置可伸缩钥匙扣，让钥匙安全又触手可及。',
    },
    {
      title: '紧急信息卡',
      details: '存放您的医疗信息，紧急情况下便于急救人员快速查阅。',
    },
    {
      title: '兼容背包穿着',
      details: '专为舒适穿在背包外设计，不影响背包功能。',
    },
    {
      title: '智能手机应用',
      details: '通过内置应用轻松控制信号并追踪您的路线。',
    },
  ],
  ko: [
    {
      title: '고가시성 LED',
      details: '360° 고강도 LED로 어떤 환경에서도 눈에 띄게 보이세요.',
    },
    {
      title: '인체공학적 핸들바 리모컨',
      details: '시선을 도로에서 떼지 않고도 방향지시등을 간편하게 제어하세요.',
    },
    {
      title: '자동 제동 감지',
      details: '스마트 센서가 자동으로 제동등을 작동시켜 안전을 더합니다.',
    },
    {
      title: '방수 디자인',
      details: '가볍고 방수 기능을 갖춘 원단과 지퍼로 당신과 장비를 건조하게 지켜줍니다.',
    },
    {
      title: '휴대폰 충전 포켓',
      details: '휴대폰을 충전하고 가까이 보관할 수 있는 안전하고 접근성 좋은 포켓입니다.',
    },
    {
      title: '신용카드 포켓',
      details: '신용카드 및 소지품을 빠르게 꺼낼 수 있는 편리한 포켓입니다.',
    },
    {
      title: '물병 포켓',
      details: '이동 중에도 쉽게 꺼낼 수 있도록 물병을 편리하게 보관하세요.',
    },
    {
      title: '수납형 키홀더',
      details: '내장된 수납형 키홀더로 열쇠를 안전하고 가까이에 보관하세요.',
    },
    {
      title: '비상 연락 카드',
      details: '비상시 응급 요원이 빠르게 확인할 수 있도록 의료 정보를 보관하세요.',
    },
    {
      title: '백팩 호환',
      details: '기능을 해치지 않으면서 백팩 위에 편안하게 착용할 수 있도록 설계되었습니다.',
    },
    {
      title: '스마트폰 앱',
      details: '내장된 스마트폰 앱으로 신호를 제어하고 경로를 원활하게 추적하세요.',
    },
  ],
};

const SpecsSectionLogic = (lang = 'fr') => {
  const translations = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  const specs = translations.map((entry, index) => ({
    ...entry,
    image: IMAGES[index],
  }));

  const [openAccordionId, setopenAccordionId] = useState(1);

  const handleAccordionChange = (id) => (event, isExpanded) => {
    setopenAccordionId(id);
  };

  return {
    specs,
    openAccordionId,
    handleAccordionChange,
  };
};

export default SpecsSectionLogic;
