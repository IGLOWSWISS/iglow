import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Result.css';

const Result = () => {
  const [currentLang, setCurrentLang] = useState('fr');
  const [referralCode, setReferralCode] = useState(null);
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    fetch('/api/me.php')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.authenticated && data.customer && data.customer.referralCode) {
          setReferralCode(data.customer.referralCode);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const supportedLangs = [
      'fr', 'de', 'it', 'en', 'es', 'nl', 'pt', 'hi', 'ar', 'ru', 'zh', 'ko',
    ];

    // Get language from URL or browser
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const type = urlParams.get('type');

    let resolvedLang = 'fr';
    if (urlLang && supportedLangs.includes(urlLang)) {
      resolvedLang = urlLang;
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      const langCode = browserLang.split('-')[0];
      if (supportedLangs.includes(langCode)) {
        resolvedLang = langCode;
      }
    }
    setCurrentLang(resolvedLang);

    // Increment reservation counter
    try {
      let count = parseInt(localStorage.getItem('iglow-reservations')) || 167;
      count++;
      localStorage.setItem('iglow-reservations', count);
      console.log(`🎯 Paiement réussi ! Compteur: ${count} réservations`);
    } catch (error) {
      console.error('❌ Erreur compteur:', error);
    }

    // Send the purchase confirmation email once per successful checkout
    if (type === 'success' && !sessionStorage.getItem('iglow-confirmation-sent')) {
      fetch('/api/send-confirmation.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang: resolvedLang }),
      })
        .then(() => {
          sessionStorage.setItem('iglow-confirmation-sent', '1');
        })
        .catch(() => {});
    }

    // Update page title
    document.title = 'iGlow - Réservation Confirmée ✅';
  }, []);

  const content = {
    fr: {
      title: 'Félicitations !',
      message:
        'Votre réservation pour le <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> a été confirmée avec succès ! Bienvenue dans l\'aventure de la mobilité intelligente.',
      confirmedTitle: 'RÉSERVATION CONFIRMÉE',
      confirmationMessage:
        'Merci ! Votre achat a bien été enregistré et votre pré-commande est validée avec succès. Un email de confirmation vous a été envoyé.',
      confirmedItems: [
        'BRAVO ! Vous venez d\'économiser<br/><span style="display:block; text-align:center; margin-top:10px;"><span style="color:#28a745; font-weight:bold; font-size:1.8em;">CHF 100.-</span></span>',
      ],
      nextStepsTitle: '👀 Prochaines Étapes',
      nextStepsItems: [
        'Surveillance de votre boîte email pour les mises à jour',
        'Accès exclusif au lancement Kickstarter',
        'Livraison prioritaire',
        'Support client dédié',
        'Parrainez vos amis et proches pour venir découvrir le crowdfunding iGlow.swiss',
      ],
      referralTitle: 'Votre lien personnel',
      referralText:
        "Partagez-le avec vos amis. Dès qu'un ami achète grâce à vous, vous recevez 10% en avoir (jusqu'à CHF 100.- par an).",
      copyLink: 'Copier le lien',
      linkCopied: 'Lien copié !',
      backHome: "Retour à l'Accueil",
      contactUs: 'Nous Contacter',
      showIcon: false,
    },
    de: {
      title: 'Herzlichen Glückwunsch!',
      message:
        'Ihre Reservierung für die <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> wurde erfolgreich bestätigt! Willkommen im Abenteuer der intelligenten Mobilität.',
      confirmedTitle: 'RESERVIERUNG BESTÄTIGT',
      confirmationMessage:
        'Vielen Dank! Ihr Kauf wurde erfolgreich erfasst und Ihre Vorbestellung ist bestätigt. Eine Bestätigungs-E-Mail wurde an Sie gesendet.',
      confirmedItems: [
        'BRAVO! Sie haben gerade<br/><span style="display:block; text-align:center; margin-top:10px;"><span style="color:#28a745; font-weight:bold; font-size:1.8em;">CHF 100.-</span> gespart</span>',
      ],
      nextStepsTitle: '👀 Nächste Schritte',
      nextStepsItems: [
        'Überwachen Sie Ihren Posteingang für Updates',
        'Exklusiver Zugang zum Kickstarter-Launch',
        'Prioritätslieferung',
        'Dedizierter Kundensupport',
        'Empfehlen Sie Ihren Freunden und Ihrer Familie das iGlow.swiss-Crowdfunding',
      ],
      referralTitle: 'Ihr persönlicher Link',
      referralText:
        'Teilen Sie ihn mit Freunden. Sobald ein Freund dank Ihnen kauft, erhalten Sie 10% Guthaben (bis zu CHF 100.- pro Jahr).',
      copyLink: 'Link kopieren',
      linkCopied: 'Link kopiert!',
      backHome: 'Zurück zur Startseite',
      contactUs: 'Kontaktieren Sie uns',
      showIcon: true,
    },
    it: {
      title: 'Congratulazioni!',
      message:
        'La tua prenotazione per il <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> è stata confermata con successo! Benvenuto nell\'avventura della mobilità intelligente.',
      confirmedTitle: 'PRENOTAZIONE CONFERMATA',
      confirmationMessage:
        'Grazie! Il tuo acquisto è stato registrato correttamente e il tuo preordine è confermato. Ti è stata inviata un\'email di conferma.',
      confirmedItems: [
        'BRAVO! Hai appena risparmiato<br/><span style="display:block; text-align:center; margin-top:10px;"><span style="color:#28a745; font-weight:bold; font-size:1.8em;">CHF 100.-</span></span>',
      ],
      nextStepsTitle: '👀 Prossimi Passi',
      nextStepsItems: [
        'Controlla la tua casella email per gli aggiornamenti',
        'Accesso esclusivo al lancio su Kickstarter',
        'Consegna prioritaria',
        'Assistenza clienti dedicata',
        'Invita amici e parenti a scoprire il crowdfunding di iGlow.swiss',
      ],
      referralTitle: 'Il tuo link personale',
      referralText:
        "Condividilo con i tuoi amici. Non appena un amico acquista grazie a te, ricevi il 10% in buono (fino a CHF 100.- all'anno).",
      copyLink: 'Copia link',
      linkCopied: 'Link copiato!',
      backHome: 'Torna alla Home',
      contactUs: 'Contattaci',
      showIcon: true,
    },
    en: {
      title: 'Congratulations!',
      message:
        'Your reservation for the <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> has been successfully confirmed! Welcome to the smart mobility adventure.',
      confirmedTitle: 'RESERVATION CONFIRMED',
      confirmationMessage:
        'Thank you! Your purchase has been successfully recorded and your pre-order is confirmed. A confirmation email has been sent to you.',
      confirmedItems: [
        'BRAVO! You just saved<br/><span style="display:block; text-align:center; margin-top:10px;"><span style="color:#28a745; font-weight:bold; font-size:1.8em;">CHF 100.-</span></span>',
      ],
      nextStepsTitle: '👀 Next Steps',
      nextStepsItems: [
        'Monitor your inbox for updates',
        'Exclusive access to Kickstarter launch',
        'Priority delivery',
        'Dedicated customer support',
        'Refer your friends and family to discover the iGlow.swiss crowdfunding',
      ],
      referralTitle: 'Your personal link',
      referralText:
        'Share it with your friends. As soon as a friend buys through it, you get 10% in store credit (up to CHF 100 per year).',
      copyLink: 'Copy link',
      linkCopied: 'Link copied!',
      backHome: 'Back to Home',
      contactUs: 'Contact Us',
      showIcon: true,
    },
    es: {
      title: '¡Felicitaciones!',
      message:
        'Su reserva para la <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> ha sido confirmada con éxito! Bienvenido a la aventura de la movilidad inteligente.',
      confirmedTitle: 'RESERVA CONFIRMADA',
      confirmationMessage:
        '¡Gracias! Su compra ha sido registrada con éxito y su pre-pedido está confirmado. Se le ha enviado un correo electrónico de confirmación.',
      confirmedItems: [
        '¡BRAVO! Acabas de ahorrar<br/><span style="display:block; text-align:center; margin-top:10px;"><span style="color:#28a745; font-weight:bold; font-size:1.8em;">CHF 100.-</span></span>',
      ],
      nextStepsTitle: '👀 Próximos Pasos',
      nextStepsItems: [
        'Monitoree su bandeja de entrada para actualizaciones',
        'Acceso exclusivo al lanzamiento de Kickstarter',
        'Entrega prioritaria',
        'Soporte al cliente dedicado',
        'Recomiende a sus amigos y familiares el crowdfunding de iGlow.swiss',
      ],
      referralTitle: 'Tu enlace personal',
      referralText:
        'Compártelo con tus amigos. En cuanto un amigo compre gracias a ti, recibes un 10% en crédito (hasta CHF 100.- al año).',
      copyLink: 'Copiar enlace',
      linkCopied: '¡Enlace copiado!',
      backHome: 'Volver al Inicio',
      contactUs: 'Contáctanos',
      showIcon: true,
    },
    nl: {
      title: 'Gefeliciteerd!',
      message:
        'Uw reservering voor de <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> is succesvol bevestigd! Welkom bij het slimme mobiliteitsavontuur.',
      confirmedTitle: 'RESERVERING BEVESTIGD',
      confirmationMessage:
        'Bedankt! Uw aankoop is succesvol geregistreerd en uw voorbestelling is bevestigd. Er is een bevestigingsemail naar u verzonden.',
      confirmedItems: [
        'BRAVO! U heeft zojuist<br/><span style="display:block; text-align:center; margin-top:10px;"><span style="color:#28a745; font-weight:bold; font-size:1.8em;">CHF 100.-</span> bespaard</span>',
      ],
      nextStepsTitle: '👀 Volgende Stappen',
      nextStepsItems: [
        'Houd uw inbox in de gaten voor updates',
        'Exclusieve toegang tot Kickstarter-lancering',
        'Prioriteitslevering',
        'Toegewijde klantenondersteuning',
        'Beveel uw vrienden en familie de iGlow.swiss-crowdfunding aan',
      ],
      referralTitle: 'Uw persoonlijke link',
      referralText:
        'Deel hem met vrienden. Zodra een vriend dankzij u koopt, ontvangt u 10% tegoed (tot CHF 100.- per jaar).',
      copyLink: 'Link kopiëren',
      linkCopied: 'Link gekopieerd!',
      backHome: 'Terug naar Home',
      contactUs: 'Contacteer Ons',
      showIcon: true,
    },
    pt: {
      title: 'Parabéns!',
      message:
        'Sua reserva para o <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> foi confirmada com sucesso! Bem-vindo à aventura da mobilidade inteligente.',
      confirmedTitle: 'RESERVA CONFIRMADA',
      confirmationMessage:
        'Obrigado! Sua compra foi registrada com sucesso e sua pré-encomenda está confirmada. Um e-mail de confirmação foi enviado para você.',
      confirmedItems: [
        'BRAVO! Você acabou de economizar<br/><span style="display:block; text-align:center; margin-top:10px;"><span style="color:#28a745; font-weight:bold; font-size:1.8em;">CHF 100.-</span></span>',
      ],
      nextStepsTitle: '👀 Próximos Passos',
      nextStepsItems: [
        'Monitore sua caixa de entrada para atualizações',
        'Acesso exclusivo ao lançamento do Kickstarter',
        'Entrega prioritária',
        'Suporte ao cliente dedicado',
        'Indique seus amigos e familiares para descobrir o crowdfunding da iGlow.swiss',
      ],
      referralTitle: 'Seu link pessoal',
      referralText:
        'Compartilhe com seus amigos. Assim que um amigo comprar graças a você, você recebe 10% em crédito (até CHF 100.- por ano).',
      copyLink: 'Copiar link',
      linkCopied: 'Link copiado!',
      backHome: 'Voltar ao Início',
      contactUs: 'Entre em Contato',
      showIcon: true,
    },
    hi: {
      title: 'बधाई हो!',
      message:
        '<span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> के लिए आपका आरक्षण सफलतापूर्वक पुष्ट हो गया है! स्मार्ट मोबिलिटी एडवेंचर में आपका स्वागत है।',
      confirmedTitle: 'आरक्षण पुष्ट',
      confirmationMessage:
        'धन्यवाद! आपकी खरीदारी सफलतापूर्वक दर्ज कर ली गई है और आपका प्री-ऑर्डर पुष्ट हो गया है। आपको एक पुष्टिकरण ईमेल भेजा गया है।',
      confirmedItems: [
        'शाबाश! आपने अभी-अभी<br/><span style="display:block; text-align:center; margin-top:10px;"><span style="color:#28a745; font-weight:bold; font-size:1.8em;">CHF 100.-</span> बचाए हैं</span>',
      ],
      nextStepsTitle: '👀 अगले कदम',
      nextStepsItems: [
        'अपडेट के लिए अपने इनबॉक्स की निगरानी करें',
        'किकस्टार्टर लॉन्च तक विशेष पहुंच',
        'प्राथमिकता डिलीवरी',
        'समर्पित ग्राहक सहायता',
        'अपने दोस्तों और परिवार को iGlow.swiss क्राउडफंडिंग के बारे में बताएं',
      ],
      referralTitle: 'आपका निजी लिंक',
      referralText:
        'इसे अपने दोस्तों के साथ साझा करें। जैसे ही कोई दोस्त आपकी वजह से खरीदारी करता है, आपको 10% क्रेडिट मिलता है (प्रति वर्ष अधिकतम CHF 100.-)।',
      copyLink: 'लिंक कॉपी करें',
      linkCopied: 'लिंक कॉपी हो गया!',
      backHome: 'होम पर वापस जाएं',
      contactUs: 'हमसे संपर्क करें',
      showIcon: true,
    },
    ar: {
      title: 'تهانينا!',
      message:
        'تم تأكيد حجزك لـ <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> بنجاح! مرحباً بك في مغامرة التنقل الذكي.',
      confirmedTitle: 'تم تأكيد الحجز',
      confirmationMessage:
        'شكراً لك! تم تسجيل عملية الشراء الخاصة بك بنجاح وتم تأكيد الطلب المسبق. تم إرسال بريد إلكتروني للتأكيد إليك.',
      confirmedItems: [
        'برافو! لقد وفرت للتو<br/><span style="display:block; text-align:center; margin-top:10px;"><span style="color:#28a745; font-weight:bold; font-size:1.8em;">CHF 100.-</span></span>',
      ],
      nextStepsTitle: '👀 الخطوات التالية',
      nextStepsItems: [
        'راقب صندوق الوارد للحصول على التحديثات',
        'وصول حصري لإطلاق كيك ستارتر',
        'تسليم مفضل',
        'دعم عملاء مخصص',
        'أخبر أصدقاءك وعائلتك عن حملة التمويل الجماعي iGlow.swiss',
      ],
      referralTitle: 'رابطك الشخصي',
      referralText:
        'شاركه مع أصدقائك. بمجرد أن يشتري صديق بفضلك، تحصل على رصيد بنسبة 10% (بحد أقصى CHF 100.- سنويًا).',
      copyLink: 'نسخ الرابط',
      linkCopied: 'تم نسخ الرابط!',
      backHome: 'العودة للرئيسية',
      contactUs: 'اتصل بنا',
      showIcon: true,
    },
    ru: {
      title: 'Поздравляем!',
      message:
        'Ваше бронирование <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> успешно подтверждено! Добро пожаловать в приключение умной мобильности.',
      confirmedTitle: 'БРОНИРОВАНИЕ ПОДТВЕРЖДЕНО',
      confirmationMessage:
        'Спасибо! Ваша покупка успешно зарегистрирована, и ваш предзаказ подтвержден. Вам отправлено электронное письмо с подтверждением.',
      confirmedItems: [
        'БРАВО! Вы только что сэкономили<br/><span style="display:block; text-align:center; margin-top:10px;"><span style="color:#28a745; font-weight:bold; font-size:1.8em;">CHF 100.-</span></span>',
      ],
      nextStepsTitle: '👀 Следующие Шаги',
      nextStepsItems: [
        'Следите за своей почтой для получения обновлений',
        'Эксклюзивный доступ к запуску Kickstarter',
        'Приоритетная доставка',
        'Выделенная поддержка клиентов',
        'Расскажите друзьям и близким о краудфандинге iGlow.swiss',
      ],
      referralTitle: 'Ваша персональная ссылка',
      referralText:
        'Поделитесь ею с друзьями. Как только друг купит благодаря вам, вы получите 10% в виде кредита (максимум CHF 100.- в год).',
      copyLink: 'Скопировать ссылку',
      linkCopied: 'Ссылка скопирована!',
      backHome: 'Вернуться на Главную',
      contactUs: 'Связаться с Нами',
      showIcon: true,
    },
    zh: {
      title: '恭喜！',
      message:
        '您的 <span style="color:#E30613; font-weight:bold;">IGLOW 智能单车背心</span> 预订已成功确认！欢迎加入智能出行之旅。',
      confirmedTitle: '预订已确认',
      confirmationMessage:
        '感谢您！您的购买已成功登记，预订已确认。确认邮件已发送至您的邮箱。',
      confirmedItems: [
        '恭喜！您刚刚节省了<br/><span style="display:block; text-align:center; margin-top:10px;"><span style="color:#28a745; font-weight:bold; font-size:1.8em;">CHF 100.-</span></span>',
      ],
      nextStepsTitle: '👀 后续步骤',
      nextStepsItems: [
        '请留意邮箱获取最新动态',
        'Kickstarter 独家首发权限',
        '优先发货',
        '专属客户支持',
        '向亲朋好友分享 iGlow.swiss 众筹项目',
      ],
      referralTitle: '您的专属链接',
      referralText: '与朋友分享。只要有朋友通过此链接购买，您就会获得10%的购物金（每年最多CHF 100.-）。',
      copyLink: '复制链接',
      linkCopied: '链接已复制！',
      backHome: '返回首页',
      contactUs: '联系我们',
      showIcon: true,
    },
    ko: {
      title: '축하합니다!',
      message:
        '<span style="color:#E30613; font-weight:bold;">IGLOW 스마트 자전거 조끼</span> 예약이 성공적으로 확정되었습니다! 스마트 모빌리티 여정에 오신 것을 환영합니다.',
      confirmedTitle: '예약 확정',
      confirmationMessage:
        '감사합니다! 결제가 성공적으로 등록되었으며 사전 예약이 확정되었습니다. 확인 이메일이 발송되었습니다.',
      confirmedItems: [
        '축하합니다! 방금 절약하셨습니다<br/><span style="display:block; text-align:center; margin-top:10px;"><span style="color:#28a745; font-weight:bold; font-size:1.8em;">CHF 100.-</span></span>',
      ],
      nextStepsTitle: '👀 다음 단계',
      nextStepsItems: [
        '업데이트를 위해 이메일을 확인해 주세요',
        'Kickstarter 런칭 독점 액세스',
        '우선 배송',
        '전담 고객 지원',
        '친구와 가족에게 iGlow.swiss 크라우드펀딩을 알려주세요',
      ],
      referralTitle: '나만의 링크',
      referralText: '친구들과 공유하세요. 친구가 이 링크를 통해 구매하면 10% 적립금을 받습니다 (연간 최대 CHF 100.-).',
      copyLink: '링크 복사',
      linkCopied: '링크가 복사되었습니다!',
      backHome: '홈으로 돌아가기',
      contactUs: '문의하기',
      showIcon: true,
    },
  };

  const currentContent = content[currentLang] || content.fr;
  const referralLink = referralCode
    ? `${window.location.origin}/go/${referralCode}`
    : '';

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
      })
      .catch(() => {});
  };

  return (
    <div className='result-page'>
      <header className='result-header'>
        <div className='result-header-content'>
          <img
            src='https://i.imgur.com/ADUy96s.png'
            alt='iGlow Logo'
            className='result-logo'
          />
        </div>
      </header>

      <section className='result-section fade-in'>
        <div
          className='result-container'
          dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
        >
          {currentContent.showIcon && <div className='result-icon'>🤝</div>}

          <div className='result-details'>
            <h3 style={{ textAlign: 'center' }}>
              <span style={{ color: '#28a745', fontWeight: 900 }}>
                {currentContent.confirmedTitle}
              </span>{' '}
              <span style={{ color: '#28a745', fontSize: '1.2em' }}>✓</span>
            </h3>
            <p
              style={{
                textAlign: 'center',
                fontSize: '1.15em',
                lineHeight: 1.6,
                marginBottom: '25px',
              }}
            >
              {currentContent.confirmationMessage}
            </p>
            <div style={{ textAlign: 'center', fontSize: '20px', lineHeight: 2 }}>
              {currentContent.confirmedItems.map((item, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </div>
          </div>

          <div className='result-details info-details'>
            <h3 style={{ textAlign: 'center', color: '#28a745' }}>
              {currentContent.nextStepsTitle}
            </h3>
            <ul>
              {currentContent.nextStepsItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {referralCode && (
            <div className='result-details info-details'>
              <h3 style={{ textAlign: 'center', color: '#28a745' }}>
                {currentContent.referralTitle}
              </h3>
              <p style={{ textAlign: 'center', fontSize: '1.05em', marginBottom: '15px' }}>
                {currentContent.referralText}
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <code
                  style={{
                    background: '#f0f0f0',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    fontSize: '1em',
                    wordBreak: 'break-all',
                  }}
                >
                  {referralLink}
                </code>
                <button
                  type='button'
                  onClick={handleCopyLink}
                  className='result-btn result-btn-primary'
                  style={{ border: 'none', cursor: 'pointer' }}
                >
                  {linkCopied ? currentContent.linkCopied : currentContent.copyLink}
                </button>
              </div>
            </div>
          )}

          <div className='result-observatory'>🔭</div>

          <div className='swiss-badge'>
            <div className='swiss-flag'></div>
            <span>SWISS MADE SMART VEST</span>
          </div>

          <div className='result-actions'>
            <Link to='/' className='result-btn result-btn-primary'>
              {currentContent.backHome}
            </Link>
            <a href='mailto:hello@iglow.swiss' className='result-btn result-btn-secondary'>
              {currentContent.contactUs}
            </a>
          </div>
        </div>
      </section>

      <footer className='result-footer'>
        <div className='container'>
          <p
            style={{ fontSize: '32px', fontWeight: 700, marginBottom: '30px' }}
          >
            iGlow® - Swiss Made Smart Vest
          </p>
          <p style={{ fontSize: '24px', marginBottom: '20px' }}>
            © 2026 iGlow Switzerland. Tous droits réservés.
          </p>
          <p style={{ fontSize: '24px', marginBottom: '20px' }}>
            Contact :{' '}
            <a href='mailto:hello@iglow.swiss'>hello@iglow.swiss</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Result;
