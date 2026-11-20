import React, { useState } from 'react';
import './Reserve.css';
import duoHelmetVest from '../../assets/images/iglow-duo-helmet-vest.jpg';

const Reserve = () => {
  const [currentLang, setCurrentLang] = useState('fr');
  const [reservationCounter] = useState(167);

  // Language content object
  const content = {
    fr: {
      tagline: "RÉSERVEZ DÈS AUJOURD'HUI VOTRE",
      title: 'Duo Casque et Gilet',
      highlight: 'IGLOW',
      beSeen: 'pour être vu !',
      payOnlyPrefix: 'en ne payant que',
      payOnlySuffix: '',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'SEULEMENT 99.-',
          flag: '🇨🇭',
          text: 'Réserver',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'SEULEMENT 99.-',
          flag: '🇪🇺',
          text: 'Réserver',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'SEULEMENT 99.-',
          flag: '🌍',
          text: 'Réserver',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'au lieu de',
      insteadOfSuffix: '',
      youSave: 'Vous économisez CHF 100.-',
      launchDate: 'LE 27 NOVEMBRE 2026',
      launchTextPrefix: 'Ouverture des ventes',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: '',
      socialProof: 'cyclistes ont déjà réservé leur gilet IGLOW',
      benefits: [
        {
          title: 'Accès Prioritaire',
          description: 'Black Friday Duo (casque + gilet) pour seulement <span style="color:#E30613; font-weight:900;">CHF 99.-</span> au lieu de <span class="price-struck" style="color:#666;">CHF 199.-</span>, soit un énorme rabais de <span style="color:#28a745; font-weight:900;">CHF 100.-</span> !',
        },
        {
          title: '-50% de réduction',
          description:
            'Prix le plus bas jamais proposé pour ce niveau de technologie',
        },
        {
          title: 'Livraison Prioritaire',
          description: 'Soyez parmi les premiers à recevoir votre gilet IGLOW',
        },
      ],
    },
    en: {
      tagline: 'RESERVE YOUR',
      title: 'Helmet and Vest Duo',
      highlight: 'IGLOW',
      beSeen: 'to be seen!',
      payOnlyPrefix: 'paying only',
      payOnlySuffix: '',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'ONLY 99.-',
          flag: '🇨🇭',
          text: 'Reserve',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'ONLY 99.-',
          flag: '🇪🇺',
          text: 'Reserve',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'ONLY 99.-',
          flag: '🌍',
          text: 'Reserve',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'instead of',
      insteadOfSuffix: '',
      youSave: 'You save CHF 100.-',
      launchDate: 'NOVEMBER 27, 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'Sales Opening',
      socialProof: 'cyclists have already reserved their IGLOW vest',
      benefits: [
        {
          title: 'Priority Access',
          description: 'Black Friday Duo (helmet + vest) for only <span style="color:#E30613; font-weight:900;">CHF 99.-</span> instead of <span class="price-struck" style="color:#666;">CHF 199.-</span>, a huge discount of <span style="color:#28a745; font-weight:900;">CHF 100.-</span>!',
        },
        {
          title: '+50% OFF',
          description: 'Lowest price ever offered for this level of technology',
        },
        {
          title: 'Priority Delivery',
          description: 'Be among the first to receive your IGLOW vest',
        },
      ],
    },
    de: {
      tagline: 'RESERVIEREN SIE JETZT IHRE',
      title: 'Helm- und Westen-Duo',
      highlight: 'IGLOW',
      beSeen: 'um gesehen zu werden!',
      payOnlyPrefix: 'und nur',
      payOnlySuffix: 'bezahlen',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'NUR 99.-',
          flag: '🇨🇭',
          text: 'Reservieren',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'NUR 99.-',
          flag: '🇪🇺',
          text: 'Reservieren',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'NUR 99.-',
          flag: '🌍',
          text: 'Reservieren',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'statt',
      insteadOfSuffix: '',
      youSave: 'Sie sparen CHF 100.-',
      launchDate: '27. NOVEMBER 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'Verkaufsstart',
      socialProof: 'Radfahrer haben bereits ihre IGLOW-Jacke reserviert',
      benefits: [
        {
          title: 'Prioritätszugang',
          description: 'Black Friday Duo (Helm + Weste) für nur <span style="color:#E30613; font-weight:900;">CHF 99.-</span> statt <span class="price-struck" style="color:#666;">CHF 199.-</span>, ein riesiger Rabatt von <span style="color:#28a745; font-weight:900;">CHF 100.-</span>!',
        },
        {
          title: '-50% Rabatt',
          description: 'Niedrigster Preis für diese Technologiestufe',
        },
        {
          title: 'Prioritätslieferung',
          description:
            'Gehören Sie zu den Ersten, die Ihre IGLOW-Jacke erhalten',
        },
      ],
    },
    es: {
      tagline: 'RESERVE HOY SU',
      title: 'Dúo Casco y Chaleco',
      highlight: 'IGLOW',
      beSeen: '¡para ser visto!',
      payOnlyPrefix: 'pagando solo',
      payOnlySuffix: '',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'SOLO 99.-',
          flag: '🇨🇭',
          text: 'Reservar',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'SOLO 99.-',
          flag: '🇪🇺',
          text: 'Reservar',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'SOLO 99.-',
          flag: '🌍',
          text: 'Reservar',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'en lugar de',
      insteadOfSuffix: '',
      youSave: 'Ahorras CHF 100.-',
      launchDate: '27 DE NOVIEMBRE DE 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'Apertura de ventas',
      socialProof: 'ciclistas ya han reservado su chaqueta IGLOW',
      benefits: [
        {
          title: 'Acceso Prioritario',
          description: 'Black Friday Duo (casco + chaleco) por solo <span style="color:#E30613; font-weight:900;">CHF 99.-</span> en lugar de <span class="price-struck" style="color:#666;">CHF 199.-</span>, ¡un enorme descuento de <span style="color:#28a745; font-weight:900;">CHF 100.-</span>!',
        },
        {
          title: '-50% de descuento',
          description: 'Precio más bajo ofrecido para este nivel de tecnología',
        },
        {
          title: 'Entrega Prioritaria',
          description: 'Sea de los primeros en recibir su chaqueta IGLOW',
        },
      ],
    },
    nl: {
      tagline: 'RESERVEER NU UW',
      title: 'Helm- en Vestduo',
      highlight: 'IGLOW',
      beSeen: 'om gezien te worden!',
      payOnlyPrefix: 'door slechts',
      payOnlySuffix: 'te betalen',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'SLECHTS 99.-',
          flag: '🇨🇭',
          text: 'Reserveren',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'SLECHTS 99.-',
          flag: '🇪🇺',
          text: 'Reserveren',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'SLECHTS 99.-',
          flag: '🌍',
          text: 'Reserveren',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'in plaats van',
      insteadOfSuffix: '',
      youSave: 'U bespaart CHF 100.-',
      launchDate: '27 NOVEMBER 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'Verkoop opening',
      socialProof: 'fietsers hebben al hun IGLOW-jas gereserveerd',
      benefits: [
        {
          title: 'Prioriteitstoegang',
          description: 'Black Friday Duo (helm + vest) voor slechts <span style="color:#E30613; font-weight:900;">CHF 99.-</span> in plaats van <span class="price-struck" style="color:#666;">CHF 199.-</span>, een enorme korting van <span style="color:#28a745; font-weight:900;">CHF 100.-</span>!',
        },
        {
          title: '-50% korting',
          description:
            'Laagste prijs ooit aangeboden voor dit technologieniveau',
        },
        {
          title: 'Prioriteitslevering',
          description: 'Wees een van de eersten die uw IGLOW-jas ontvangt',
        },
      ],
    },
    pt: {
      tagline: 'RESERVE HOJE SUA',
      title: 'Duo Capacete e Colete',
      highlight: 'IGLOW',
      beSeen: 'para ser visto!',
      payOnlyPrefix: 'pagando apenas',
      payOnlySuffix: '',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'APENAS 99.-',
          flag: '🇨🇭',
          text: 'Reservar',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'APENAS 99.-',
          flag: '🇪🇺',
          text: 'Reservar',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'APENAS 99.-',
          flag: '🌍',
          text: 'Reservar',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'em vez de',
      insteadOfSuffix: '',
      youSave: 'Você economiza CHF 100.-',
      launchDate: '27 DE NOVEMBRO DE 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'Abertura de vendas',
      socialProof: 'ciclistas já reservaram sua jaqueta IGLOW',
      benefits: [
        {
          title: 'Acesso Prioritário',
          description: 'Black Friday Duo (capacete + colete) por apenas <span style="color:#E30613; font-weight:900;">CHF 99.-</span> em vez de <span class="price-struck" style="color:#666;">CHF 199.-</span>, um enorme desconto de <span style="color:#28a745; font-weight:900;">CHF 100.-</span>!',
        },
        {
          title: '-50% de desconto',
          description:
            'Preço mais baixo já oferecido para este nível de tecnologia',
        },
        {
          title: 'Entrega Prioritária',
          description: 'Esteja entre os primeiros a receber sua jaqueta IGLOW',
        },
      ],
    },
    hi: {
      tagline: 'आज ही अपना रिजर्व करें',
      title: 'हेलमेट और जैकेट डुओ',
      highlight: 'IGLOW',
      beSeen: 'दिखने के लिए!',
      payOnlyPrefix: 'सिर्फ',
      payOnlySuffix: 'का भुगतान करके',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'केवल 99.-',
          flag: '🇨🇭',
          text: 'रिजर्व करें',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'केवल 99.-',
          flag: '🇪🇺',
          text: 'रिजर्व करें',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'केवल 99.-',
          flag: '🌍',
          text: 'रिजर्व करें',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: '',
      insteadOfSuffix: 'के बजाय',
      youSave: 'आप CHF 100.- बचाते हैं',
      launchDate: '27 नवंबर 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'बिक्री शुरुआत',
      socialProof: 'साइकिल चालकों ने पहले ही अपनी IGLOW जैकेट आरक्षित कर ली है',
      benefits: [
        {
          title: 'प्राथमिकता पहुंच',
          description: 'ब्लैक फ्राइडे डुओ (हेलमेट + जैकेट) सिर्फ <span style="color:#E30613; font-weight:900;">CHF 99.-</span> में, <span class="price-struck" style="color:#666;">CHF 199.-</span> के बजाय, यानी <span style="color:#28a745; font-weight:900;">CHF 100.-</span> की जबरदस्त छूट!',
        },
        {
          title: '-50% छूट',
          description: 'इस प्रौद्योगिकी स्तर के लिए सबसे कम कीमत',
        },
        {
          title: 'प्राथमिकता डिलीवरी',
          description:
            'अपनी IGLOW जैकेट प्राप्त करने वाले पहले लोगों में शामिल हों',
        },
      ],
    },
    ar: {
      tagline: 'احجز اليوم',
      title: 'ثنائي الخوذة والسترة',
      highlight: 'IGLOW',
      beSeen: 'لتكون مرئياً!',
      payOnlyPrefix: 'بدفع',
      payOnlySuffix: 'فقط',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'فقط 99.-',
          flag: '🇨🇭',
          text: 'احجز',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'فقط 99.-',
          flag: '🇪🇺',
          text: 'احجز',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'فقط 99.-',
          flag: '🌍',
          text: 'احجز',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'بدلاً من',
      insteadOfSuffix: '',
      youSave: 'توفر CHF 100.-',
      launchDate: '27 نوفمبر 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'افتتاح المبيعات',
      socialProof: 'راكبي الدراجات قد حجزوا بالفعل سترة IGLOW الخاصة بهم',
      benefits: [
        {
          title: 'وصول مفضل',
          description: 'بلاك فرايدي ديو (خوذة + سترة) بـ <span style="color:#E30613; font-weight:900;">CHF 99.-</span> فقط بدلاً من <span class="price-struck" style="color:#666;">CHF 199.-</span>، أي خصم ضخم قدره <span style="color:#28a745; font-weight:900;">CHF 100.-</span>!',
        },
        {
          title: '-50% خصم',
          description: 'أقل سعر يتم تقديمه لهذا المستوى من التكنولوجيا',
        },
        {
          title: 'تسليم مفضل',
          description: 'كن من أوائل من يتلقون سترة IGLOW الخاصة بك',
        },
      ],
    },
    ru: {
      tagline: 'ЗАБРОНИРУЙТЕ СЕГОДНЯ',
      title: 'Дуо шлем и жилет',
      highlight: 'IGLOW',
      beSeen: 'чтобы быть заметным!',
      payOnlyPrefix: 'заплатив всего',
      payOnlySuffix: '',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'ТОЛЬКО 99.-',
          flag: '🇨🇭',
          text: 'Забронировать',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'ТОЛЬКО 99.-',
          flag: '🇪🇺',
          text: 'Забронировать',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'ТОЛЬКО 99.-',
          flag: '🌍',
          text: 'Забронировать',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'вместо',
      insteadOfSuffix: '',
      youSave: 'Вы экономите CHF 100.-',
      launchDate: '27 НОЯБРЯ 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'Начало продаж',
      socialProof: 'велосипедистов уже забронировали свою куртку IGLOW',
      benefits: [
        {
          title: 'Приоритетный доступ',
          description: 'Black Friday Duo (шлем + жилет) всего за <span style="color:#E30613; font-weight:900;">CHF 99.-</span> вместо <span class="price-struck" style="color:#666;">CHF 199.-</span>, то есть огромная скидка <span style="color:#28a745; font-weight:900;">CHF 100.-</span>!',
        },
        {
          title: '-50% скидка',
          description: 'Самая низкая цена для этого уровня технологии',
        },
        {
          title: 'Приоритетная доставка',
          description: 'Будьте среди первых, кто получит свою куртку IGLOW',
        },
      ],
    },
  };

  const languages = [
    { code: 'fr', name: 'FR', flagClass: 'flag-fr' },
    { code: 'en', name: 'EN', flagClass: 'flag-en' },
    { code: 'de', name: 'DE', flagClass: 'flag-de' },
    { code: 'es', name: 'ES', flagClass: 'flag-es' },
    { code: 'nl', name: 'NL', flagClass: 'flag-nl' },
    { code: 'pt', name: 'PT', flagClass: 'flag-pt' },
    { code: 'hi', name: 'HI', flagClass: 'flag-hi' },
    { code: 'ar', name: 'AR', flagClass: 'flag-ar' },
    { code: 'ru', name: 'RU', flagClass: 'flag-ru' },
  ];

  const redirectToStripe = (priceId) => {
    // Build success and cancel URLs with language parameter
    const baseUrl = window.location.origin;
    const successUrl = `${baseUrl}/result?lang=${currentLang}&type=success`;
    const cancelUrl = `${baseUrl}/result?lang=${currentLang}&type=cancel`;

    // Map price IDs to Stripe Buy Button checkout URLs
    const stripeCheckoutUrls = {
      price_1SGkg7ClH97ISv2ltpMYi4DE:
        'https://buy.stripe.com/5kQ9AS7iG2SpeZGdqVgQE03', // CHF 99.-
      price_1SGkt9ClH97ISv2l2BPtn3ke:
        'https://buy.stripe.com/dRm28qeL8boVaJqcmRgQE04', // EUR 99.-
      price_1SGkweClH97ISv2lbwx0YlrE:
        'https://buy.stripe.com/28E4gyeL8eB7aJq0E9gQE05', // USD 99.-
    };

    const checkoutUrl = stripeCheckoutUrls[priceId];

    if (!checkoutUrl) {
      console.error('Invalid price ID:', priceId);
      return;
    }

    // Redirect to Stripe Checkout with success and cancel URLs
    window.location.href = `${checkoutUrl}?success_url=${encodeURIComponent(
      successUrl
    )}&cancel_url=${encodeURIComponent(cancelUrl)}`;
  };

  const handleSetLang = (lang) => {
    setCurrentLang(lang);
  };

  const renderLedCircle = (size = 'default') => {
    const dotCount = 8;
    const dots = [];
    for (let i = 0; i < dotCount; i++) {
      dots.push(<span key={i} className='led-dot'></span>);
    }
    return (
      <span
        className={`led-circle ${size === 'mini' ? 'led-circle-mini' : ''}`}
      >
        {dots}
      </span>
    );
  };

  const renderIglowIcon = () => {
    const dotCount = 8;
    const dots = [];
    for (let i = 0; i < dotCount; i++) {
      dots.push(<span key={i} className='mini-dot'></span>);
    }
    return <div className='iglow-icon'>{dots}</div>;
  };

  const currentContent = content[currentLang] || content.fr;

  return (
    <div className='reserve-page'>
      {/* Header */}
      <header>
        <div className='header-content'>
          <div className='lang-switcher'>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-btn ${
                  currentLang === lang.code ? 'active' : ''
                }`}
                onClick={() => handleSetLang(lang.code)}
                data-flag={lang.code}
              >
                <span className={`flag-icon ${lang.flagClass}`}>
                  {lang.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='hero'>
        <div className='container'>
          <div className='hero-logo'>
            <img
              src='https://i.imgur.com/ADUy96s.png'
              alt='iGlow Logo'
              style={{
                maxWidth: '450px',
                height: 'auto',
                margin: '0 auto 60px',
                display: 'block',
              }}
            />
          </div>
          <p className='tagline' style={{ fontSize: '36px' }}>
            {currentContent.tagline}
          </p>
          <h1>
            {currentContent.title}{' '}
            <span className='highlight'>{currentContent.highlight}</span>{' '}
            {currentContent.beSeen}
          </h1>
          <p
            style={{
              color: '#fff',
              fontSize: '28px',
              fontWeight: 'bold',
              margin: '0 0 20px',
            }}
          >
            {currentContent.payOnlyPrefix}{' '}
            <span style={{ color: '#E30613' }}>CHF 99.-</span>{' '}
            {currentContent.payOnlySuffix}
          </p>
          <img
            src={duoHelmetVest}
            alt='iGlow Smart Helmet and Vest Duo'
            className='vest-image'
            style={{
              display: 'block',
              margin: '60px auto',
              maxWidth: '700px',
              width: '100%',
              borderRadius: '15px',
            }}
          />
          <div
            className='reserve-buttons-container'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              margin: '40px 0',
            }}
          >
            {(() => {
              const button = currentContent.reserveButtons[0];
              const [priceWord, priceNumber] = button.price.split(' ');
              return (
                <button
                  onClick={() => redirectToStripe(button.priceId)}
                  className='btn btn-primary'
                >
                  <span className='flag-emoji' style={{ fontSize: '1.5em' }}>
                    {button.flag}
                  </span>
                  <span style={{ fontWeight: '900', fontSize: '1.3em' }}>
                    {button.text}
                  </span>
                  <br />
                  <span style={{ fontWeight: '700' }}>{priceWord}</span>{' '}
                  <span style={{ fontWeight: '900', fontSize: '1.8em' }}>
                    {priceNumber}
                  </span>{' '}
                  <span style={{ fontWeight: '900', fontSize: '1.2em' }}>
                    {button.currency}
                  </span>
                </button>
              );
            })()}
            <span style={{ color: '#fff', fontSize: '1.3em' }}>
              {currentContent.insteadOfPrefix}{' '}
              <span className='price-struck' style={{ fontSize: '1.2em' }}>
                CHF 199.-
              </span>{' '}
              {currentContent.insteadOfSuffix}
            </span>
            <span
              style={{
                color: '#28a745',
                fontWeight: '900',
                fontSize: '2em',
              }}
            >
              {currentContent.youSave}
            </span>
          </div>
          <div className='swiss-badge'>
            <div className='swiss-flag'></div>
            <span>{currentContent.swissBadge}</span>
          </div>
        </div>
      </section>

      {/* Scrolling Banner */}
      <section className='scrolling-banner'>
        <div className='banner-content'>
          {[...Array(24)].map((_, index) => {
            const texts = ['be safe', 'be seen', 'be visible'];
            const text = texts[index % 3];
            return (
              <span key={index} className='banner-item'>
                {text}
                {renderLedCircle()}
              </span>
            );
          })}
        </div>
      </section>

      {/* Countdown Section */}
      <section className='countdown'>
        <div className='container'>
          <h2>
            {currentContent.launchTextPrefix && (
              <>
                {currentContent.launchTextPrefix}
                <br />
              </>
            )}
            <span style={{ color: '#000', fontSize: '1.7em' }}>
              {currentContent.blackWord}
            </span>{' '}
            <span style={{ color: '#fff', fontSize: '1.7em' }}>
              {currentContent.fridayWord}
            </span>
            {currentContent.launchTextSuffix && (
              <>
                <br />
                {currentContent.launchTextSuffix}
              </>
            )}
            <br />
            <span className='date-frame'>{currentContent.launchDate}</span>
            <br />
            <a
              href='https://iglow.swiss'
              target='_blank'
              rel='noopener noreferrer'
              className='platform iglow-black'
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              IGLOW.SWISS
            </a>
            {' & '}
            <a
              href='https://www.kickstarter.com/projects/iglowswiss/iglow-the-smart-bike-jacket-be-seen-be-safe'
              target='_blank'
              rel='noopener noreferrer'
              className='platform kickstarter-green'
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              KICKSTARTER.COM
            </a>
          </h2>
        </div>
      </section>

      {/* Reserve Section */}
      <section className='reserve-section'>
        <div className='container'>
          <div className='benefits'>
            {currentContent.benefits.map((benefit, index) => (
              <div key={index} className='benefit'>
                <div className='benefit-icon'>{renderIglowIcon()}</div>
                <h3 style={index === 1 ? { color: '#E30613' } : undefined}>
                  {benefit.title}
                </h3>
                {index === 0 ? (
                  <p
                    style={{ fontSize: '2.5rem', fontWeight: 'bold' }}
                    dangerouslySetInnerHTML={{ __html: benefit.description }}
                  ></p>
                ) : (
                  <p
                    dangerouslySetInnerHTML={{ __html: benefit.description }}
                  ></p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className='container'>
          <p>&copy; 2025 iGlow. All rights reserved.</p>
          <p>
            <a href='/legal-notices'>Legal Notices</a> |
            <a href='/privacy-policy'>Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Reserve;
