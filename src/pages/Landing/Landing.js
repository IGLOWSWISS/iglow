import React, { useState, useEffect } from 'react';
import Palette from '../../theme/palette';
import { detectCurrency } from '../../utils/geoCurrency';

import { CONTACT_EMAIL, END_CAMPAIGN_DATE } from '../../config/AppConfig';
import jacketHero from '../../assets/videos/ilgow-loop.mp4';
import trailer16x9 from '../../assets/videos/trailer/16x9.mp4';
import topspot1x1 from '../../assets/videos/topspot/1x1.mp4';
import topspot16x9 from '../../assets/videos/topspot/16x9.mp4';
import trailerThumbnail from '../../assets/images/trailer-thumbnail.png';
import subtractShape from '../../assets/images/subtract.png';
import vestNoCircle from '../../assets/images/iglow-vest-nocircle.png';
import controller from '../../assets/images/controller.png';
import appMockup from '../../assets/images/app-mockup.png';
import mountain from '../../assets/images/mountain.png';
import duoHelmetVest from '../../assets/images/iglow-duo-helmet-vest.jpg';
import helmet3Views from '../../assets/images/iglow-helmet-3-views.jpg';
import helmetCutout from '../../assets/images/iglow-helmet-cutout.png';

import { Box, Container, Typography, Button, Modal } from '@mui/material';
import { PiX } from 'react-icons/pi';

import Navbar from '../../components/Navbar/Navbar';
import EmptySpace from '../../components/EmptySpace/EmptySpace';
import IllustratedParagraph from '../../components/IllustratedParagraph/IllustratedParagraph';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SpecsSection from '../../components/SpecsSection/SpecsSection';
import Banner from '../../components/Banner/Banner';
import IdCard from '../../components/IdCard/IdCard';
import FAQSection from '../../components/FAQSection/FAQSection';
import FormContact from '../../components/FormContact/FormContact';
import Footer from '../../components/Footer/Footer';
import NoisyContainer from '../../components/NoisyContainer/NoisyContainer';
import Countdown from '../../components/Countdown/Countdown';

const LANGUAGES = [
  { code: 'fr', name: 'FR', flag: '🇫🇷' },
  { code: 'de', name: 'DE', flag: '🇩🇪' },
  { code: 'it', name: 'IT', flag: '🇮🇹' },
  { code: 'en', name: 'EN', flag: '🇬🇧' },
  { code: 'es', name: 'ES', flag: '🇪🇸' },
  { code: 'nl', name: 'NL', flag: '🇳🇱' },
  { code: 'pt', name: 'PT', flag: '🇵🇹' },
  { code: 'hi', name: 'HI', flag: '🇮🇳' },
  { code: 'ar', name: 'AR', flag: '🇸🇦' },
  { code: 'ru', name: 'RU', flag: '🇷🇺' },
  { code: 'zh', name: 'ZH', flag: '🇨🇳' },
  { code: 'ko', name: 'KO', flag: '🇰🇷' },
];

const CONTENT = {
  fr: {
    joinUs: 'Rejoignez-nous',
    heroPrefix: 'Offrez ou offrez-vous',
    heroHighlight: 'le Duo Parfait',
    heroSuffix: 'casque + gilet IGLOW',
    heroButton: 'Réserver mon duo',
    watchNowMain: 'VISIBLE COMME UNE VOITURE',
    watchNowSub: 'Regardez maintenant',
    watchSub: 'Le gilet connecté avec clignotants et feux de freinage',
    reserveAction: 'DÉCOUVREZ LE PREMIER DUO',
    reserveNowWord: 'avec éclairage synchronisé',
    reserveDuoText: 'Casque + Gilet',
    exclusive: 'EXCLUSIF',
    duoSpecial: 'OFFRE DUO SPÉCIALE',
    launchWord1: 'PRIX',
    launchWord2: 'LANCEMENT',
    launchSpecialLabel: 'OFFRE SPÉCIALE FÊTES',
    insteadOfLabel: 'au lieu de',
    duoSpecialDesc:
      "Offre spéciale Black Friday & lancement Kickstarter : le Duo Casque + Gilet IGLOW",
    newPricePrefix: 'PAYÉ SEULEMENT',
    discountLinePrefix: 'Économie immédiate de',
    lowestPriceBadge: 'Le prix le plus bas jamais proposé pour cette technologie',
    priorityShippingBadge: 'Livraison prioritaire pour les premiers inscrits',
    clickToReserve: 'Cliquez pour réserver et faire partie du succès.',
    kickstarterButton: 'IGLOW sur Kickstarter',
    kickstarterCaption: 'Votre Duo IGLOW',
    kickstarterCaptionSub: 'Casque + Gilet',
    secureSpot: 'Conçu en Suisse',
    secureSpotSub: '🇨🇭',
    whatIsOvertitle: "QU'EST-CE QUE IGLOW ?",
    whatIsHtml:
      'Le Duo Casque et Gilet <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">Une visibilité à 360°</span><br/>Grâce à des <span style="color:#E30613">clignotants</span> et <span style="color:#E30613">feux de freinage</span><br/>Comme une voiture, contrôlés par une <span style="color:#E30613">télécommande sur le guidon</span>.',
    safetyOvertitle: 'sécurité',
    safetyTitle: 'Casque et Gilet Connectés Haute Visibilité',
    safetyText:
      "Doté d'indicateurs LED de pointe, le gilet offre une meilleure visibilité, particulièrement dans des conditions de faible luminosité. Son design épuré et ergonomique garantit à la fois confort et facilité d'utilisation, même avec un sac à dos. Le casque complète votre sécurité avec les mêmes fonctions de signalisation, en plus d'une lumière frontale très puissante.",
    flexOvertitle: 'Flexibilité',
    flexTitle: 'La Télécommande Intelligente',
    flexText:
      "Gardez les yeux sur la route tout en contrôlant votre sécurité avec la télécommande iGlow, une visibilité sans effort, au bout des doigts.",
    appOvertitle: 'APPLICATION',
    appTitle: "GlowSafe : L'Application",
    appText:
      "GlowSafe, l'application du Duo Casque et Gilet IGLOW, permet la synchronisation des lumières. Une fois activée, elle permet également de calculer vos déplacements et votre vitesse moyenne, d'activer les signaux de freinage, et ainsi d'informer les automobilistes.",
    appAvailability: 'Disponible dès février 2027',
    specsOvertitle: 'Pour les passionnés',
    specsTitlePrefix: 'Découvrez les',
    specsHighlight: 'caractéristiques',
    swissOvertitle: 'Conçu en Suisse',
    swissHighlight: 'Qualité suisse',
    swissTitle: 'et sécurité inégalée.',
    swissParagraph:
      "Le Smart Vest est l'aboutissement de plus de 3 ans de recherche et d'ingénierie suisses. Nous nous engageons à offrir à nos clients une qualité inégalée et le respect des normes de sécurité. Tous les composants électroniques et tissus techniques intelligents sont entièrement développés par des entreprises suisses, renforçant encore notre engagement envers le savoir-faire et l'innovation suisses.",
    aboutOvertitle: 'À propos de nous',
    aboutTitlePrefix: "Découvrez l'équipe",
    aboutHighlight: 'derrière IGLOW®',
    teamRoles: {
      founder: 'Fondateur',
      sewingQueen: 'Reine de la couture',
      leadDeveloper: 'Développeur principal',
      electronicEngineer: 'Ingénieur électronique',
      leadBrandDesigner: 'Designer de marque principal',
      videographer: 'Vidéaste',
      digitalMediaSpecialist: 'Spécialiste médias numériques',
    },
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Laissez-nous',
    faqHighlight: 'vous éclairer !',
    contactOvertitle: 'Contact',
    contactTitlePrefix: "Besoin d'aide ?",
    contactHighlight: 'Nous sommes là pour vous !',
    contactParagraph:
      "Une question ou un intérêt pour un partenariat ? Nous serions ravis de vous entendre ! Contactez notre équipe en remplissant le formulaire ci-dessous, et nous vous répondrons dans les plus brefs délais !",
    switzerlandWord: 'Suisse',
  },
  de: {
    joinUs: 'Mitmachen',
    heroPrefix: 'Verschenken Sie oder gönnen Sie sich',
    heroHighlight: 'das perfekte Duo',
    heroSuffix: 'Helm + Weste IGLOW',
    heroButton: 'Mein Duo reservieren',
    watchNowMain: 'SICHTBAR WIE EIN AUTO',
    watchNowSub: 'Jetzt ansehen',
    watchSub: 'Die Smart Weste mit Blinkern + Bremslichtern',
    reserveAction: 'ENTDECKEN SIE DAS ERSTE DUO',
    reserveNowWord: 'mit synchronisierter Beleuchtung',
    reserveDuoText: 'Helm + Weste',
    exclusive: 'EXKLUSIV',
    duoSpecial: 'DUO SPEZIAL',
    launchWord1: 'START',
    launchWord2: 'PREIS',
    launchSpecialLabel: 'FESTTAGS-SONDERANGEBOT',
    insteadOfLabel: 'statt',
    duoSpecialDesc:
      'Black Friday & Kickstarter-Launch-Spezial: das IGLOW Helm + Weste Duo',
    newPricePrefix: 'NUR BEZAHLT',
    discountLinePrefix: 'Sofortige Ersparnis von',
    lowestPriceBadge: 'Der niedrigste Preis, der je für diese Technologie angeboten wurde',
    priorityShippingBadge: 'Bevorzugter Versand für die ersten Anmeldungen',
    clickToReserve: 'Klicken Sie, um zu reservieren und Teil des Erfolgs zu sein.',
    kickstarterButton: 'IGLOW auf Kickstarter',
    kickstarterCaption: 'Ihr IGLOW Duo',
    kickstarterCaptionSub: 'Helm + Weste',
    secureSpot: 'Entwickelt in der Schweiz',
    secureSpotSub: '🇨🇭',
    whatIsOvertitle: 'WAS IST IGLOW ?',
    whatIsHtml:
      'Das Duo Helm & Weste <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">360°-Sichtbarkeit</span><br/>Mit <span style="color:#E30613">Blinkern</span> und <span style="color:#E30613">Bremslichtern</span><br/>Wie ein Auto, gesteuert durch eine <span style="color:#E30613">Fernbedienung am Lenker</span>.',
    safetyOvertitle: 'Sicherheit',
    safetyTitle: 'Hochsichtbarer Smart Helm & Weste',
    safetyText:
      'Mit modernsten LED-Anzeigen bietet die Weste eine verbesserte Sichtbarkeit, besonders bei schlechten Lichtverhältnissen. Ihr schlankes und ergonomisches Design garantiert sowohl Komfort als auch Benutzerfreundlichkeit, selbst wenn Sie einen Rucksack tragen. Der Helm ergänzt Ihre Sicherheit mit denselben Signalfunktionen und zusätzlich einem sehr starken Frontlicht.',
    flexOvertitle: 'Flexibilität',
    flexTitle: 'Die intelligente Fernbedienung',
    flexText:
      'Behalten Sie den Blick auf die Straße, während Sie Ihre Sicherheit mit der iGlow-Fernbedienung kontrollieren – mühelose Sichtbarkeit auf Knopfdruck.',
    appOvertitle: 'ANWENDUNG',
    appTitle: 'GlowSafe: Die Anwendung',
    appText:
      'GlowSafe, die App Ihres IGLOW Helm- und Westen-Duos, ermöglicht die Synchronisierung der Lichter. Einmal aktiviert, berechnet sie auch Ihre Fahrten und Ihre Durchschnittsgeschwindigkeit, aktiviert die Bremslichter und informiert so die Autofahrer.',
    appAvailability: 'Verfügbar ab Februar 2027',
    specsOvertitle: 'Für die Technikfans',
    specsTitlePrefix: 'Entdecken Sie die',
    specsHighlight: 'technischen Daten',
    swissOvertitle: 'Entwickelt in der Schweiz',
    swissHighlight: 'Schweizer Qualität',
    swissTitle: 'und unübertroffene Sicherheit.',
    swissParagraph:
      'Die Smart Weste ist das Ergebnis von über 3 Jahren Schweizer Forschung und Entwicklung. Wir verpflichten uns, unseren Kunden unvergleichliche Qualität und die Einhaltung von Sicherheitsstandards zu bieten. Alle elektronischen Komponenten und intelligenten technischen Stoffe werden vollständig von Schweizer Unternehmen entwickelt, was unser Engagement für Schweizer Handwerkskunst und Innovation weiter festigt.',
    aboutOvertitle: 'Über uns',
    aboutTitlePrefix: 'Entdecken Sie das Team',
    aboutHighlight: 'hinter IGLOW®',
    teamRoles: {
      founder: 'Gründer',
      sewingQueen: 'Näh-Königin',
      leadDeveloper: 'Lead-Entwickler',
      electronicEngineer: 'Elektroingenieur',
      leadBrandDesigner: 'Leitender Markendesigner',
      videographer: 'Videograf',
      digitalMediaSpecialist: 'Spezialist für digitale Medien',
    },
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Lassen Sie uns',
    faqHighlight: 'Sie aufklären!',
    contactOvertitle: 'Kontakt',
    contactTitlePrefix: 'Brauchen Sie Hilfe?',
    contactHighlight: 'Wir sind für Sie da!',
    contactParagraph:
      'Haben Sie eine Frage oder Interesse an einer Partnerschaft? Wir würden uns freuen, von Ihnen zu hören! Kontaktieren Sie unser Team über das untenstehende Formular, und wir melden uns so schnell wie möglich bei Ihnen!',
    switzerlandWord: 'Schweiz',
  },
  it: {
    joinUs: 'Unisciti a noi',
    heroPrefix: 'Regala o regalati',
    heroHighlight: 'il Duo Perfetto',
    heroSuffix: 'casco + gilet IGLOW',
    heroButton: 'Prenotare il mio duo',
    watchNowMain: "VISIBILE COME UN'AUTO",
    watchNowSub: 'Guarda ora',
    watchSub: 'Il gilet smart con frecce + luci di stop',
    reserveAction: 'SCOPRI IL PRIMO DUO',
    reserveNowWord: 'con illuminazione sincronizzata',
    reserveDuoText: 'Casco + Gilet',
    exclusive: 'ESCLUSIVO',
    duoSpecial: 'OFFERTA DUO SPECIALE',
    launchWord1: 'PREZZO',
    launchWord2: 'DI LANCIO',
    launchSpecialLabel: 'OFFERTA SPECIALE FESTIVA',
    insteadOfLabel: 'invece di',
    duoSpecialDesc:
      'Offerta speciale Black Friday e lancio Kickstarter: il Duo Casco + Gilet IGLOW',
    newPricePrefix: 'PAGATO SOLO',
    discountLinePrefix: 'Risparmio immediato di',
    lowestPriceBadge: 'Il prezzo più basso mai proposto per questa tecnologia',
    priorityShippingBadge: 'Spedizione prioritaria per i primi iscritti',
    clickToReserve: 'Clicca per prenotare e far parte del successo.',
    kickstarterButton: 'IGLOW su Kickstarter',
    kickstarterCaption: 'Il tuo Duo IGLOW',
    kickstarterCaptionSub: 'Casco + Gilet',
    secureSpot: 'Progettato in Svizzera',
    secureSpotSub: '🇨🇭',
    whatIsOvertitle: "COS'È IGLOW ?",
    whatIsHtml:
      'Il Duo Casco e Gilet <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">Una visibilità a 360°</span><br/>Grazie a <span style="color:#E30613">frecce</span> e <span style="color:#E30613">luci di stop</span><br/>Come un\'auto, controllato da un <span style="color:#E30613">telecomando sul manubrio</span>.',
    safetyOvertitle: 'sicurezza',
    safetyTitle: 'Casco e Gilet Smart ad Alta Visibilità',
    safetyText:
      "Dotato di indicatori LED all'avanguardia, il gilet offre una visibilità migliorata, particolarmente in condizioni di scarsa luminosità. Il suo design snello ed ergonomico garantisce comfort e facilità d'uso, anche indossando uno zaino. Il casco completa la tua sicurezza con le stesse funzioni di segnalazione, con in più una luce frontale molto potente.",
    flexOvertitle: 'Flessibilità',
    flexTitle: 'Il Telecomando Intelligente',
    flexText:
      'Tieni gli occhi sulla strada mentre controlli la tua sicurezza con il telecomando iGlow – visibilità senza sforzo, a portata di mano.',
    appOvertitle: 'APPLICAZIONE',
    appTitle: "GlowSafe: L'Applicazione",
    appText:
      "GlowSafe, l'app del tuo Duo Casco e Gilet IGLOW, permette la sincronizzazione delle luci. Una volta attivata, permette anche di calcolare i tuoi spostamenti e la tua velocità media, di attivare i segnali di frenata e così informare gli automobilisti.",
    appAvailability: 'Disponibile da febbraio 2027',
    specsOvertitle: 'Per gli appassionati',
    specsTitlePrefix: 'Scopri le',
    specsHighlight: 'caratteristiche tecniche',
    swissOvertitle: 'Progettato in Svizzera',
    swissHighlight: 'Qualità svizzera',
    swissTitle: 'e sicurezza senza pari.',
    swissParagraph:
      "Lo Smart Vest è il risultato di oltre 3 anni di ricerca e ingegneria svizzera. Ci impegniamo a offrire ai nostri clienti una qualità senza pari e il rispetto degli standard di sicurezza. Tutti i componenti elettronici e i tessuti tecnici intelligenti sono interamente sviluppati da aziende svizzere, rafforzando ulteriormente il nostro impegno verso l'artigianato e l'innovazione svizzeri.",
    aboutOvertitle: 'Chi siamo',
    aboutTitlePrefix: 'Scopri il team',
    aboutHighlight: 'dietro IGLOW®',
    teamRoles: {
      founder: 'Fondatore',
      sewingQueen: 'Regina della cucitura',
      leadDeveloper: 'Sviluppatore principale',
      electronicEngineer: 'Ingegnere elettronico',
      leadBrandDesigner: 'Designer di marca principale',
      videographer: 'Videomaker',
      digitalMediaSpecialist: 'Specialista media digitali',
    },
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Lascia che',
    faqHighlight: 'ti illuminiamo!',
    contactOvertitle: 'Contatto',
    contactTitlePrefix: 'Hai bisogno di aiuto?',
    contactHighlight: 'Siamo qui per te!',
    contactParagraph:
      'Hai una domanda o sei interessato a una partnership? Ci farebbe piacere sentirti! Contatta il nostro team compilando il modulo qui sotto, e ti risponderemo il prima possibile!',
    switzerlandWord: 'Svizzera',
  },
  en: {
    joinUs: 'Join Us',
    heroPrefix: 'Gift it or treat yourself to',
    heroHighlight: 'the Perfect Duo',
    heroSuffix: 'helmet + vest IGLOW',
    heroButton: 'Reserve my duo',
    watchNowMain: 'VISIBLE LIKE A CAR',
    watchNowSub: 'Watch now',
    watchSub: 'The Smart Vest with Turn signals + Brake lights',
    reserveAction: 'DISCOVER THE FIRST DUO',
    reserveNowWord: 'with synchronized lighting',
    reserveDuoText: 'Helmet + Vest',
    exclusive: 'EXCLUSIVE',
    duoSpecial: 'DUO SPECIAL',
    launchWord1: 'LAUNCH',
    launchWord2: 'PRICE',
    launchSpecialLabel: 'HOLIDAY SPECIAL OFFER',
    insteadOfLabel: 'instead of',
    duoSpecialDesc:
      'Black Friday & Kickstarter launch special: the IGLOW Helmet + Vest Duo',
    newPricePrefix: 'PAID ONLY',
    discountLinePrefix: 'Instant savings of',
    lowestPriceBadge: 'The lowest price ever offered for this technology',
    priorityShippingBadge: 'Priority shipping for the first to sign up',
    clickToReserve: 'Click to reserve and be part of the success.',
    kickstarterButton: 'IGLOW on Kickstarter',
    kickstarterCaption: 'Your IGLOW Duo',
    kickstarterCaptionSub: 'Helmet + Vest',
    secureSpot: 'Designed in Switzerland',
    secureSpotSub: '🇨🇭',
    whatIsOvertitle: 'WHAT IS IGLOW ?',
    whatIsHtml:
      'The Duo Helmet & Vest <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">360° visibility</span><br/>Thanks to <span style="color:#E30613">turn signals</span> and <span style="color:#E30613">brake lights</span><br/>Like a car, controlled by a <span style="color:#E30613">handlebar remote</span>.',
    safetyOvertitle: 'safety',
    safetyTitle: 'High Visibility Smart Helmet & Vest',
    safetyText:
      'Featuring state-of-the-art LED indicators, the vest offers improved visibility, particularly in low-light conditions. Its streamlined and ergonomic design guarantees both comfort and user-friendliness, even when you carry a backpack. The helmet completes your safety with the same signaling functions, plus a very powerful front light.',
    flexOvertitle: 'Flexibility',
    flexTitle: 'The Smart Remote',
    flexText:
      'Keep your eyes on the road while controlling your safety with the iGlow remote – effortless visibility at your fingertips.',
    appOvertitle: 'APPLICATION',
    appTitle: 'GlowSafe: The Application',
    appText:
      'GlowSafe, the app for your IGLOW Helmet and Vest Duo, enables light synchronization. Once activated, it also calculates your trips and average speed, activates the brake signals, and informs drivers accordingly.',
    appAvailability: 'Available from February 2027',
    specsOvertitle: 'For the nerds',
    specsTitlePrefix: 'Exploring the',
    specsHighlight: 'specs',
    swissOvertitle: 'Engineered in Switzerland',
    swissHighlight: 'Swiss quality',
    swissTitle: 'and unmatched safety.',
    swissParagraph:
      'The Smart Vest is the culmination of over 3 years of Swiss research and engineering. We are dedicated to offering our customers unparalleled quality and adherence to safety standards. All electronic components and intelligent technical fabrics are entirely developed by Swiss companies, further solidifying our commitment to Swiss craftsmanship and innovation.',
    aboutOvertitle: 'About us',
    aboutTitlePrefix: 'Discover the team',
    aboutHighlight: 'behind IGLOW®',
    teamRoles: {
      founder: 'Founder',
      sewingQueen: 'Sewing queen',
      leadDeveloper: 'Lead Developer',
      electronicEngineer: 'Electronic Engineer',
      leadBrandDesigner: 'Lead Brand Designer',
      videographer: 'Videographer',
      digitalMediaSpecialist: 'Digital Media Specialist',
    },
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Let us',
    faqHighlight: 'enlighten you!',
    contactOvertitle: 'Contact',
    contactTitlePrefix: 'Need help ?',
    contactHighlight: 'We are here for you !',
    contactParagraph:
      "Have a question or interested in a partnership? We'd love to hear from you ! Contact our team by filling out the form below, and we'll get back to you as soon as possible !",
    switzerlandWord: 'Switzerland',
  },
  es: {
    joinUs: 'Únete a nosotros',
    heroPrefix: 'Regala o regálate',
    heroHighlight: 'el Duo Perfecto',
    heroSuffix: 'casco + chaleco IGLOW',
    heroButton: 'Reservar mi duo',
    watchNowMain: 'VISIBLE COMO UN COCHE',
    watchNowSub: 'Mira ahora',
    watchSub: 'El chaleco inteligente con intermitentes + luces de freno',
    reserveAction: 'DESCUBRE EL PRIMER DUO',
    reserveNowWord: 'con iluminación sincronizada',
    reserveDuoText: 'Casco + Chaleco',
    exclusive: 'EXCLUSIVO',
    duoSpecial: 'DUO ESPECIAL',
    launchWord1: 'PRECIO',
    launchWord2: 'DE LANZAMIENTO',
    launchSpecialLabel: 'OFERTA ESPECIAL DE FIESTAS',
    insteadOfLabel: 'en lugar de',
    duoSpecialDesc:
      'Especial de lanzamiento de Black Friday y Kickstarter: el Duo Casco + Chaleco IGLOW',
    newPricePrefix: 'PAGADO SOLO',
    discountLinePrefix: 'Ahorro inmediato de',
    lowestPriceBadge: 'El precio más bajo jamás ofrecido para esta tecnología',
    priorityShippingBadge: 'Envío prioritario para los primeros inscritos',
    clickToReserve: 'Haz clic para reservar y ser parte del éxito.',
    kickstarterButton: 'IGLOW en Kickstarter',
    kickstarterCaption: 'Tu Duo IGLOW',
    kickstarterCaptionSub: 'Casco + Chaleco',
    secureSpot: 'Diseñado en Suiza',
    secureSpotSub: '🇨🇭',
    whatIsOvertitle: '¿QUÉ ES IGLOW ?',
    whatIsHtml:
      'El Duo Casco y Chaleco <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">Visibilidad de 360°</span><br/>Gracias a <span style="color:#E30613">intermitentes</span> y <span style="color:#E30613">luces de freno</span><br/>Como un coche, controlado por un <span style="color:#E30613">mando en el manillar</span>.',
    safetyOvertitle: 'seguridad',
    safetyTitle: 'Casco y Chaleco Inteligentes de Alta Visibilidad',
    safetyText:
      'Con indicadores LED de última generación, el chaleco ofrece una mejor visibilidad, especialmente en condiciones de poca luz. Su diseño aerodinámico y ergonómico garantiza comodidad y facilidad de uso, incluso llevando una mochila. El casco completa tu seguridad con las mismas funciones de señalización, además de una luz frontal muy potente.',
    flexOvertitle: 'Flexibilidad',
    flexTitle: 'El Mando Inteligente',
    flexText:
      'Mantén los ojos en la carretera mientras controlas tu seguridad con el mando iGlow: visibilidad sin esfuerzo al alcance de tu mano.',
    appOvertitle: 'APLICACIÓN',
    appTitle: 'GlowSafe: La Aplicación',
    appText:
      'GlowSafe, la aplicación de tu Duo Casco y Chaleco IGLOW, permite la sincronización de las luces. Una vez activada, también permite calcular tus desplazamientos y tu velocidad media, activar las señales de frenado e informar así a los automovilistas.',
    appAvailability: 'Disponible a partir de febrero de 2027',
    specsOvertitle: 'Para los curiosos',
    specsTitlePrefix: 'Descubre las',
    specsHighlight: 'especificaciones',
    swissOvertitle: 'Diseñado en Suiza',
    swissHighlight: 'Calidad suiza',
    swissTitle: 'y seguridad inigualable.',
    swissParagraph:
      'El Smart Vest es el resultado de más de 3 años de investigación e ingeniería suiza. Estamos comprometidos a ofrecer a nuestros clientes una calidad inigualable y el cumplimiento de los estándares de seguridad. Todos los componentes electrónicos y tejidos técnicos inteligentes son desarrollados íntegramente por empresas suizas, reforzando aún más nuestro compromiso con la artesanía y la innovación suizas.',
    aboutOvertitle: 'Sobre nosotros',
    aboutTitlePrefix: 'Descubre el equipo',
    aboutHighlight: 'detrás de IGLOW®',
    teamRoles: {
      founder: 'Fundador',
      sewingQueen: 'Reina de la costura',
      leadDeveloper: 'Desarrollador principal',
      electronicEngineer: 'Ingeniero electrónico',
      leadBrandDesigner: 'Diseñador de marca principal',
      videographer: 'Videógrafo',
      digitalMediaSpecialist: 'Especialista en medios digitales',
    },
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Déjanos',
    faqHighlight: '¡aclararte todo!',
    contactOvertitle: 'Contacto',
    contactTitlePrefix: '¿Necesitas ayuda?',
    contactHighlight: '¡Estamos aquí para ti!',
    contactParagraph:
      '¿Tienes una pregunta o interés en una asociación? ¡Nos encantaría saber de ti! Contacta a nuestro equipo completando el formulario a continuación, y te responderemos lo antes posible.',
    switzerlandWord: 'Suiza',
  },
  nl: {
    joinUs: 'Doe mee',
    heroPrefix: 'Geef cadeau of trakteer uzelf op',
    heroHighlight: 'de Perfecte Duo',
    heroSuffix: 'helm + vest IGLOW',
    heroButton: 'Mijn duo reserveren',
    watchNowMain: 'ZICHTBAAR ALS EEN AUTO',
    watchNowSub: 'Kijk nu',
    watchSub: 'Het Smart Vest met richtingaanwijzers + remlichten',
    reserveAction: 'ONTDEK DE EERSTE DUO',
    reserveNowWord: 'met gesynchroniseerde verlichting',
    reserveDuoText: 'Helm + Vest',
    exclusive: 'EXCLUSIEF',
    duoSpecial: 'DUO SPECIAL',
    launchWord1: 'LANCEER',
    launchWord2: 'PRIJS',
    launchSpecialLabel: 'FEESTDAGEN SPECIAL',
    insteadOfLabel: 'in plaats van',
    duoSpecialDesc:
      'Black Friday & Kickstarter-lancering special: de IGLOW Helm + Vest Duo',
    newPricePrefix: 'SLECHTS BETAALD',
    discountLinePrefix: 'Directe besparing van',
    lowestPriceBadge: 'De laagste prijs ooit voor deze technologie',
    priorityShippingBadge: 'Voorrang bij verzending voor de eerste aanmeldingen',
    clickToReserve: 'Klik om te reserveren en deel uit te maken van het succes.',
    kickstarterButton: 'IGLOW op Kickstarter',
    kickstarterCaption: 'Uw IGLOW Duo',
    kickstarterCaptionSub: 'Helm + Vest',
    secureSpot: 'Ontworpen in Zwitserland',
    secureSpotSub: '🇨🇭',
    whatIsOvertitle: 'WAT IS IGLOW ?',
    whatIsHtml:
      'De Duo Helm & Vest <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">360° zichtbaarheid</span><br/>Dankzij <span style="color:#E30613">richtingaanwijzers</span> en <span style="color:#E30613">remlichten</span><br/>Zoals een auto, bestuurd door een <span style="color:#E30613">afstandsbediening aan het stuur</span>.',
    safetyOvertitle: 'veiligheid',
    safetyTitle: 'Smart Helm & Vest met Hoge Zichtbaarheid',
    safetyText:
      'Met geavanceerde LED-indicatoren biedt het vest verbeterde zichtbaarheid, vooral bij weinig licht. Het gestroomlijnde en ergonomische ontwerp garandeert zowel comfort als gebruiksgemak, zelfs met een rugzak. De helm vervolledigt uw veiligheid met dezelfde signaalfuncties, met daarbij een zeer krachtig voorlicht.',
    flexOvertitle: 'Flexibiliteit',
    flexTitle: 'De Slimme Afstandsbediening',
    flexText:
      'Houd uw ogen op de weg terwijl u uw veiligheid beheert met de iGlow-afstandsbediening – moeiteloze zichtbaarheid binnen handbereik.',
    appOvertitle: 'APPLICATIE',
    appTitle: 'GlowSafe: De Applicatie',
    appText:
      'GlowSafe, de app van uw IGLOW Helm- en Vestduo, maakt lichtsynchronisatie mogelijk. Eenmaal geactiveerd, berekent ze ook uw ritten en gemiddelde snelheid, activeert ze de remlichten en informeert zo automobilisten.',
    appAvailability: 'Beschikbaar vanaf februari 2027',
    specsOvertitle: 'Voor de techneuten',
    specsTitlePrefix: 'Ontdek de',
    specsHighlight: 'specificaties',
    swissOvertitle: 'Ontworpen in Zwitserland',
    swissHighlight: 'Zwitserse kwaliteit',
    swissTitle: 'en ongeëvenaarde veiligheid.',
    swissParagraph:
      'Het Smart Vest is het resultaat van meer dan 3 jaar Zwitsers onderzoek en engineering. Wij zetten ons in om onze klanten ongeëvenaarde kwaliteit en naleving van veiligheidsnormen te bieden. Alle elektronische componenten en slimme technische stoffen worden volledig ontwikkeld door Zwitserse bedrijven, wat ons engagement voor Zwitsers vakmanschap en innovatie verder versterkt.',
    aboutOvertitle: 'Over ons',
    aboutTitlePrefix: 'Ontdek het team',
    aboutHighlight: 'achter IGLOW®',
    teamRoles: {
      founder: 'Oprichter',
      sewingQueen: 'Naaikoningin',
      leadDeveloper: 'Hoofdontwikkelaar',
      electronicEngineer: 'Elektronica-ingenieur',
      leadBrandDesigner: 'Hoofd merkontwerper',
      videographer: 'Videograaf',
      digitalMediaSpecialist: 'Specialist digitale media',
    },
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Laat ons',
    faqHighlight: 'u inlichten!',
    contactOvertitle: 'Contact',
    contactTitlePrefix: 'Hulp nodig?',
    contactHighlight: 'Wij staan voor u klaar!',
    contactParagraph:
      'Heeft u een vraag of interesse in een samenwerking? We horen graag van u! Neem contact op met ons team door onderstaand formulier in te vullen, en we nemen zo snel mogelijk contact met u op!',
    switzerlandWord: 'Zwitserland',
  },
  pt: {
    joinUs: 'Junte-se a nós',
    heroPrefix: 'Presenteie ou presenteie-se com',
    heroHighlight: 'o Duo Perfeito',
    heroSuffix: 'capacete + colete IGLOW',
    heroButton: 'Reservar o meu duo',
    watchNowMain: 'VISÍVEL COMO UM CARRO',
    watchNowSub: 'Assista agora',
    watchSub: 'O Colete Inteligente com Setas + Luzes de Freio',
    reserveAction: 'DESCUBRA O PRIMEIRO DUO',
    reserveNowWord: 'com iluminação sincronizada',
    reserveDuoText: 'Capacete + Colete',
    exclusive: 'EXCLUSIVO',
    duoSpecial: 'DUO ESPECIAL',
    launchWord1: 'PREÇO',
    launchWord2: 'DE LANÇAMENTO',
    launchSpecialLabel: 'OFERTA ESPECIAL DE FESTAS',
    insteadOfLabel: 'em vez de',
    duoSpecialDesc:
      'Especial de lançamento Black Friday & Kickstarter: o Duo Capacete + Colete IGLOW',
    newPricePrefix: 'PAGO APENAS',
    discountLinePrefix: 'Economia imediata de',
    lowestPriceBadge: 'O preço mais baixo já oferecido para esta tecnologia',
    priorityShippingBadge: 'Envio prioritário para os primeiros inscritos',
    clickToReserve: 'Clique para reservar e fazer parte do sucesso.',
    kickstarterButton: 'IGLOW no Kickstarter',
    kickstarterCaption: 'Seu Duo IGLOW',
    kickstarterCaptionSub: 'Capacete + Colete',
    secureSpot: 'Concebido na Suíça',
    secureSpotSub: '🇨🇭',
    whatIsOvertitle: 'O QUE É O IGLOW ?',
    whatIsHtml:
      'O Duo Capacete e Colete <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">Visibilidade de 360°</span><br/>Graças a <span style="color:#E30613">setas</span> e <span style="color:#E30613">luzes de freio</span><br/>Como um carro, controlado por um <span style="color:#E30613">controle no guidão</span>.',
    safetyOvertitle: 'segurança',
    safetyTitle: 'Capacete e Colete Inteligentes de Alta Visibilidade',
    safetyText:
      'Com indicadores LED de última geração, o colete oferece visibilidade aprimorada, especialmente em condições de pouca luz. Seu design aerodinâmico e ergonômico garante conforto e facilidade de uso, mesmo com uma mochila. O capacete completa a sua segurança com as mesmas funções de sinalização, além de uma luz frontal muito potente.',
    flexOvertitle: 'Flexibilidade',
    flexTitle: 'O Controle Inteligente',
    flexText:
      'Mantenha os olhos na estrada enquanto controla sua segurança com o controle iGlow – visibilidade sem esforço na palma da mão.',
    appOvertitle: 'APLICATIVO',
    appTitle: 'GlowSafe: O Aplicativo',
    appText:
      'GlowSafe, o aplicativo do seu Duo Capacete e Colete IGLOW, permite a sincronização das luzes. Uma vez ativada, ela também permite calcular seus deslocamentos e sua velocidade média, ativar os sinais de freio e assim informar os motoristas.',
    appAvailability: 'Disponível a partir de fevereiro de 2027',
    specsOvertitle: 'Para os curiosos',
    specsTitlePrefix: 'Explore as',
    specsHighlight: 'especificações',
    swissOvertitle: 'Desenvolvido na Suíça',
    swissHighlight: 'Qualidade suíça',
    swissTitle: 'e segurança incomparável.',
    swissParagraph:
      'O Smart Vest é o resultado de mais de 3 anos de pesquisa e engenharia suíças. Estamos comprometidos em oferecer aos nossos clientes qualidade incomparável e conformidade com os padrões de segurança. Todos os componentes eletrônicos e tecidos técnicos inteligentes são totalmente desenvolvidos por empresas suíças, reforçando ainda mais o nosso compromisso com a qualidade artesanal e a inovação suíças.',
    aboutOvertitle: 'Sobre nós',
    aboutTitlePrefix: 'Conheça a equipe',
    aboutHighlight: 'por trás da IGLOW®',
    teamRoles: {
      founder: 'Fundador',
      sewingQueen: 'Rainha da costura',
      leadDeveloper: 'Desenvolvedor principal',
      electronicEngineer: 'Engenheiro eletrônico',
      leadBrandDesigner: 'Designer de marca principal',
      videographer: 'Videomaker',
      digitalMediaSpecialist: 'Especialista em mídia digital',
    },
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Deixe-nos',
    faqHighlight: 'esclarecer tudo!',
    contactOvertitle: 'Contato',
    contactTitlePrefix: 'Precisa de ajuda?',
    contactHighlight: 'Estamos aqui para você!',
    contactParagraph:
      'Tem alguma dúvida ou interesse em uma parceria? Adoraríamos ouvir você! Entre em contato com nossa equipe preenchendo o formulário abaixo, e responderemos o mais rápido possível!',
    switzerlandWord: 'Suíça',
  },
  hi: {
    joinUs: 'हमसे जुड़ें',
    heroPrefix: 'उपहार दें या खुद को दें',
    heroHighlight: 'परफेक्ट डुओ',
    heroSuffix: 'हेलमेट + वेस्ट IGLOW',
    heroButton: 'मेरा डुओ आरक्षित करें',
    watchNowMain: 'कार की तरह दिखें',
    watchNowSub: 'अभी देखें',
    watchSub: 'टर्न सिग्नल + ब्रेक लाइट के साथ स्मार्ट वेस्ट',
    reserveAction: 'सबसे पहला डुओ खोजें',
    reserveNowWord: 'सिंक्रनाइज़्ड लाइटिंग के साथ',
    reserveDuoText: 'हेलमेट + जैकेट',
    exclusive: 'एक्सक्लूसिव',
    duoSpecial: 'डुओ स्पेशल',
    launchWord1: 'लॉन्च',
    launchWord2: 'कीमत',
    launchSpecialLabel: 'त्योहारी विशेष ऑफर',
    insteadOfLabel: 'के बजाय',
    duoSpecialDesc:
      'ब्लैक फ्राइडे और किकस्टार्टर लॉन्च स्पेशल: IGLOW हेलमेट + जैकेट डुओ',
    newPricePrefix: 'सिर्फ भुगतान',
    discountLinePrefix: 'तत्काल बचत',
    lowestPriceBadge: 'इस तकनीक के लिए अब तक की सबसे कम कीमत',
    priorityShippingBadge: 'पहले पंजीकरण करने वालों के लिए प्राथमिकता शिपिंग',
    clickToReserve: 'आरक्षित करने और सफलता का हिस्सा बनने के लिए क्लिक करें।',
    kickstarterButton: 'Kickstarter पर IGLOW',
    kickstarterCaption: 'आपका IGLOW डुओ',
    kickstarterCaptionSub: 'हेलमेट + वेस्ट',
    secureSpot: 'स्विट्जरलैंड में डिज़ाइन किया गया',
    secureSpotSub: '🇨🇭',
    whatIsOvertitle: 'IGLOW क्या है ?',
    whatIsHtml:
      'डुओ हेलमेट और वेस्ट <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">360° दृश्यता</span><br/><span style="color:#E30613">टर्न सिग्नल</span> और <span style="color:#E30613">ब्रेक लाइट</span> की बदौलत<br/>कार की तरह, एक <span style="color:#E30613">हैंडलबार रिमोट</span> द्वारा नियंत्रित।',
    safetyOvertitle: 'सुरक्षा',
    safetyTitle: 'हाई विज़िबिलिटी स्मार्ट हेलमेट और वेस्ट',
    safetyText:
      'अत्याधुनिक LED संकेतकों के साथ, यह जैकेट बेहतर दृश्यता प्रदान करती है, विशेष रूप से कम रोशनी की स्थिति में। इसका सुव्यवस्थित और एर्गोनोमिक डिज़ाइन आराम और उपयोग में आसानी दोनों की गारंटी देता है, यहां तक कि बैकपैक के साथ भी। हेलमेट समान सिग्नलिंग फ़ंक्शन के साथ आपकी सुरक्षा को पूरा करता है, साथ ही एक बहुत शक्तिशाली फ्रंट लाइट भी देता है।',
    flexOvertitle: 'फ्लेक्सिबिलिटी',
    flexTitle: 'स्मार्ट रिमोट',
    flexText:
      'iGlow रिमोट के साथ अपनी सुरक्षा को नियंत्रित करते हुए अपनी नज़रें सड़क पर रखें – बिना किसी मेहनत के दृश्यता, आपकी उंगलियों पर।',
    appOvertitle: 'एप्लिकेशन',
    appTitle: 'GlowSafe: ऐप',
    appText:
      'GlowSafe, आपके IGLOW हेलमेट और वेस्ट डुओ का ऐप, लाइट सिंक्रोनाइज़ेशन की सुविधा देता है। सक्रिय होने पर, यह आपकी यात्राओं और औसत गति की गणना भी करता है, ब्रेक सिग्नल सक्रिय करता है, और इस तरह ड्राइवरों को सूचित करता है।',
    appAvailability: 'फरवरी 2027 से उपलब्ध',
    specsOvertitle: 'टेक प्रेमियों के लिए',
    specsTitlePrefix: 'जानें',
    specsHighlight: 'स्पेसिफिकेशन',
    swissOvertitle: 'स्विट्ज़रलैंड में इंजीनियर्ड',
    swissHighlight: 'स्विस गुणवत्ता',
    swissTitle: 'और बेजोड़ सुरक्षा।',
    swissParagraph:
      'Smart Vest 3 वर्षों से अधिक के स्विस शोध और इंजीनियरिंग का परिणाम है। हम अपने ग्राहकों को बेजोड़ गुणवत्ता और सुरक्षा मानकों का पालन प्रदान करने के लिए प्रतिबद्ध हैं। सभी इलेक्ट्रॉनिक घटक और इंटेलिजेंट तकनीकी कपड़े पूरी तरह से स्विस कंपनियों द्वारा विकसित किए गए हैं, जो स्विस शिल्प कौशल और नवाचार के प्रति हमारी प्रतिबद्धता को और मजबूत करता है।',
    aboutOvertitle: 'हमारे बारे में',
    aboutTitlePrefix: 'टीम से मिलें',
    aboutHighlight: 'IGLOW® के पीछे',
    teamRoles: {
      founder: 'संस्थापक',
      sewingQueen: 'सिलाई की रानी',
      leadDeveloper: 'लीड डेवलपर',
      electronicEngineer: 'इलेक्ट्रॉनिक इंजीनियर',
      leadBrandDesigner: 'लीड ब्रांड डिज़ाइनर',
      videographer: 'वीडियोग्राफर',
      digitalMediaSpecialist: 'डिजिटल मीडिया विशेषज्ञ',
    },
    faqOvertitle: 'सामान्य प्रश्न',
    faqTitlePrefix: 'हमें आपको',
    faqHighlight: 'जानकारी देने दें!',
    contactOvertitle: 'संपर्क करें',
    contactTitlePrefix: 'मदद चाहिए?',
    contactHighlight: 'हम आपके लिए यहां हैं!',
    contactParagraph:
      'कोई सवाल है या साझेदारी में रुचि है? हमें आपसे सुनना अच्छा लगेगा! नीचे दिया गया फॉर्म भरकर हमारी टीम से संपर्क करें, और हम जल्द से जल्द आपसे संपर्क करेंगे!',
    switzerlandWord: 'स्विट्ज़रलैंड',
  },
  ar: {
    joinUs: 'انضم إلينا',
    heroPrefix: 'أهدِ أو أهدِ نفسك',
    heroHighlight: 'الثنائي المثالي',
    heroSuffix: 'خوذة + سترة IGLOW',
    heroButton: 'احجز ثنائيي',
    watchNowMain: 'مرئي مثل السيارة',
    watchNowSub: 'شاهد الآن',
    watchSub: 'السترة الذكية مع إشارات الانعطاف ومصابيح الفرامل',
    reserveAction: 'اكتشف أول ثنائي',
    reserveNowWord: 'بإضاءة متزامنة',
    reserveDuoText: 'خوذة + سترة',
    exclusive: 'حصري',
    duoSpecial: 'عرض الثنائي الخاص',
    launchWord1: 'سعر',
    launchWord2: 'الإطلاق',
    launchSpecialLabel: 'عرض خاص للأعياد',
    insteadOfLabel: 'بدلاً من',
    duoSpecialDesc:
      'عرض إطلاق بلاك فرايدي وكيك ستارتر الخاص: ثنائي الخوذة والسترة IGLOW',
    newPricePrefix: 'مدفوع فقط',
    discountLinePrefix: 'توفير فوري قدره',
    lowestPriceBadge: 'أدنى سعر تم تقديمه لهذه التقنية على الإطلاق',
    priorityShippingBadge: 'شحن ذو أولوية لأول المسجلين',
    clickToReserve: 'انقر للحجز وكن جزءاً من النجاح.',
    kickstarterButton: 'IGLOW على Kickstarter',
    kickstarterCaption: 'ثنائي IGLOW الخاص بك',
    kickstarterCaptionSub: 'خوذة + سترة',
    secureSpot: 'مصمم في سويسرا',
    secureSpotSub: '🇨🇭',
    whatIsOvertitle: 'ما هو IGLOW ؟',
    whatIsHtml:
      'دو خوذة وسترة <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">رؤية 360°</span><br/>بفضل <span style="color:#E30613">إشارات الانعطاف</span> و<span style="color:#E30613">مصابيح الفرامل</span><br/>مثل السيارة، يتم التحكم فيها بواسطة <span style="color:#E30613">جهاز تحكم على المقود</span>.',
    safetyOvertitle: 'السلامة',
    safetyTitle: 'خوذة وسترة ذكية عالية الوضوح',
    safetyText:
      'بفضل مؤشرات LED المتطورة، توفر السترة رؤية محسّنة، خاصة في ظروف الإضاءة المنخفضة. يضمن تصميمها الانسيابي والمريح الراحة وسهولة الاستخدام، حتى عند ارتداء حقيبة ظهر. تُكمل الخوذة أمانك بنفس وظائف الإشارة، مع إضافة ضوء أمامي قوي جدًا.',
    flexOvertitle: 'المرونة',
    flexTitle: 'جهاز التحكم الذكي',
    flexText:
      'حافظ على عينيك على الطريق أثناء التحكم في سلامتك باستخدام جهاز تحكم iGlow - رؤية سهلة في متناول يدك.',
    appOvertitle: 'التطبيق',
    appTitle: 'GlowSafe: التطبيق',
    appText:
      'GlowSafe، تطبيق ثنائي الخوذة والسترة IGLOW الخاص بك، يتيح مزامنة الأضواء. وعند تفعيله، يتيح أيضًا حساب تنقلاتك وسرعتك المتوسطة، وتفعيل إشارات الفرملة، وبالتالي إعلام السائقين.',
    appAvailability: 'متاح اعتبارًا من فبراير 2027',
    specsOvertitle: 'لعشاق التقنية',
    specsTitlePrefix: 'اكتشف',
    specsHighlight: 'المواصفات',
    swissOvertitle: 'مصمم في سويسرا',
    swissHighlight: 'جودة سويسرية',
    swissTitle: 'وسلامة لا مثيل لها.',
    swissParagraph:
      'السترة الذكية هي نتاج أكثر من 3 سنوات من البحث والهندسة السويسرية. نحن ملتزمون بتقديم جودة لا مثيل لها والالتزام بمعايير السلامة لعملائنا. جميع المكونات الإلكترونية والأقمشة التقنية الذكية تم تطويرها بالكامل من قبل شركات سويسرية، مما يعزز التزامنا بالحرفية السويسرية والابتكار.',
    aboutOvertitle: 'من نحن',
    aboutTitlePrefix: 'تعرف على الفريق',
    aboutHighlight: 'وراء IGLOW®',
    teamRoles: {
      founder: 'المؤسس',
      sewingQueen: 'ملكة الخياطة',
      leadDeveloper: 'مطور رئيسي',
      electronicEngineer: 'مهندس إلكتروني',
      leadBrandDesigner: 'مصمم العلامة التجارية الرئيسي',
      videographer: 'مصور فيديو',
      digitalMediaSpecialist: 'أخصائي الوسائط الرقمية',
    },
    faqOvertitle: 'الأسئلة الشائعة',
    faqTitlePrefix: 'دعنا',
    faqHighlight: 'نوضح لك!',
    contactOvertitle: 'اتصل بنا',
    contactTitlePrefix: 'تحتاج مساعدة؟',
    contactHighlight: 'نحن هنا من أجلك!',
    contactParagraph:
      'لديك سؤال أو مهتم بشراكة؟ يسعدنا أن نسمع منك! تواصل مع فريقنا عن طريق ملء النموذج أدناه، وسنرد عليك في أقرب وقت ممكن!',
    switzerlandWord: 'سويسرا',
  },
  ru: {
    joinUs: 'Присоединяйтесь',
    heroPrefix: 'Подарите или побалуйте себя',
    heroHighlight: 'идеальным дуо',
    heroSuffix: 'шлем + жилет IGLOW',
    heroButton: 'Зарезервировать мой дуо-комплект',
    watchNowMain: 'ЗАМЕТНЫ, КАК АВТОМОБИЛЬ',
    watchNowSub: 'Смотреть сейчас',
    watchSub: 'Умный жилет с поворотниками и стоп-сигналами',
    reserveAction: 'ОТКРОЙТЕ ДЛЯ СЕБЯ ПЕРВЫЙ ДУО',
    reserveNowWord: 'с синхронизированной подсветкой',
    reserveDuoText: 'Шлем + жилет',
    exclusive: 'ЭКСКЛЮЗИВ',
    duoSpecial: 'СПЕЦИАЛЬНЫЙ ДУО',
    launchWord1: 'ЦЕНА',
    launchWord2: 'ЗАПУСКА',
    launchSpecialLabel: 'ПРАЗДНИЧНОЕ СПЕЦПРЕДЛОЖЕНИЕ',
    insteadOfLabel: 'вместо',
    duoSpecialDesc:
      'Специальное предложение Black Friday и запуска Kickstarter: дуо-комплект шлем + жилет IGLOW',
    newPricePrefix: 'ОПЛАЧЕНО ВСЕГО',
    discountLinePrefix: 'Мгновенная экономия',
    lowestPriceBadge: 'Самая низкая цена, когда-либо предложенная за эту технологию',
    priorityShippingBadge: 'Приоритетная доставка для первых зарегистрированных',
    clickToReserve: 'Нажмите, чтобы забронировать и стать частью успеха.',
    kickstarterButton: 'IGLOW на Kickstarter',
    kickstarterCaption: 'Ваш дуо-комплект IGLOW',
    kickstarterCaptionSub: 'Шлем + Жилет',
    secureSpot: 'Разработано в Швейцарии',
    secureSpotSub: '🇨🇭',
    whatIsOvertitle: 'ЧТО ТАКОЕ IGLOW ?',
    whatIsHtml:
      'Дуо Шлем и Жилет <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">360° видимость</span><br/>Благодаря <span style="color:#E30613">поворотникам</span> и <span style="color:#E30613">стоп-сигналам</span><br/>Как у автомобиля, управляемыми <span style="color:#E30613">пультом на руле</span>.',
    safetyOvertitle: 'безопасность',
    safetyTitle: 'Умный шлем и жилет повышенной видимости',
    safetyText:
      'Благодаря современным светодиодным индикаторам жилет обеспечивает улучшенную видимость, особенно в условиях низкой освещённости. Его обтекаемый и эргономичный дизайн гарантирует комфорт и удобство использования, даже с рюкзаком. Шлем дополняет вашу безопасность теми же функциями сигнализации, а также очень мощной передней фарой.',
    flexOvertitle: 'Гибкость',
    flexTitle: 'Умный пульт',
    flexText:
      'Держите взгляд на дороге, контролируя свою безопасность с помощью пульта iGlow – видимость без усилий, на кончиках пальцев.',
    appOvertitle: 'ПРИЛОЖЕНИЕ',
    appTitle: 'GlowSafe: Приложение',
    appText:
      'GlowSafe, приложение вашего дуо-комплекта IGLOW (шлем и жилет), обеспечивает синхронизацию огней. После активации оно также рассчитывает ваши поездки и среднюю скорость, активирует сигналы торможения и тем самым информирует водителей.',
    appAvailability: 'Доступно с февраля 2027 года',
    specsOvertitle: 'Для любителей техники',
    specsTitlePrefix: 'Изучите',
    specsHighlight: 'характеристики',
    swissOvertitle: 'Разработано в Швейцарии',
    swissHighlight: 'Швейцарское качество',
    swissTitle: 'и непревзойдённая безопасность.',
    swissParagraph:
      'Smart Vest — результат более чем 3 лет швейцарских исследований и разработок. Мы стремимся предложить нашим клиентам непревзойдённое качество и соответствие стандартам безопасности. Все электронные компоненты и умные технические ткани полностью разработаны швейцарскими компаниями, что ещё больше укрепляет нашу приверженность швейцарскому мастерству и инновациям.',
    aboutOvertitle: 'О нас',
    aboutTitlePrefix: 'Познакомьтесь с командой',
    aboutHighlight: 'за IGLOW®',
    teamRoles: {
      founder: 'Основатель',
      sewingQueen: 'Королева шитья',
      leadDeveloper: 'Ведущий разработчик',
      electronicEngineer: 'Инженер-электронщик',
      leadBrandDesigner: 'Ведущий бренд-дизайнер',
      videographer: 'Видеооператор',
      digitalMediaSpecialist: 'Специалист по цифровым медиа',
    },
    faqOvertitle: 'Часто задаваемые вопросы',
    faqTitlePrefix: 'Позвольте нам',
    faqHighlight: 'всё объяснить!',
    contactOvertitle: 'Контакты',
    contactTitlePrefix: 'Нужна помощь?',
    contactHighlight: 'Мы здесь для вас!',
    contactParagraph:
      'Есть вопрос или интерес к партнёрству? Мы будем рады услышать вас! Свяжитесь с нашей командой, заполнив форму ниже, и мы ответим вам как можно скорее!',
    switzerlandWord: 'Швейцария',
  },
  zh: {
    joinUs: '加入我们',
    heroPrefix: '送给自己或心爱的人',
    heroHighlight: '完美双件套',
    heroSuffix: 'IGLOW 头盔 + 背心',
    heroButton: '预订我的双件套',
    watchNowMain: '如汽车般醒目可见',
    watchNowSub: '立即观看',
    watchSub: '配备转向灯和刹车灯的智能背心',
    reserveAction: '发现首款双件套',
    reserveNowWord: '同步灯光系统',
    reserveDuoText: '头盔 + 背心',
    exclusive: '独家',
    duoSpecial: '特别双件套',
    launchWord1: '发布',
    launchWord2: '价',
    launchSpecialLabel: '节日特别优惠',
    insteadOfLabel: '原价',
    duoSpecialDesc:
      '黑色星期五与 Kickstarter 发布特别优惠：IGLOW 头盔 + 背心双件套',
    newPricePrefix: '仅售',
    discountLinePrefix: '立即节省',
    lowestPriceBadge: '该技术史上最低价',
    priorityShippingBadge: '首批预订者优先发货',
    clickToReserve: '点击预订，加入这场成功。',
    kickstarterButton: 'IGLOW 登陆 Kickstarter',
    kickstarterCaption: '您的 IGLOW 双件套',
    kickstarterCaptionSub: '头盔 + 背心',
    secureSpot: '瑞士设计',
    secureSpotSub: '🇨🇭',
    whatIsOvertitle: 'IGLOW 是什么？',
    whatIsHtml:
      'IGLOW <span style="color:#E30613">头盔与背心</span>双件套<br/><span style="color:#E30613">360° 可见度</span><br/>配备<span style="color:#E30613">转向灯</span>与<span style="color:#E30613">刹车灯</span><br/>如同汽车一般，由<span style="color:#E30613">车把遥控器</span>控制。',
    safetyOvertitle: '安全',
    safetyTitle: '高能见度智能头盔与背心',
    safetyText:
      '配备先进的 LED 指示灯，背心可提供更好的能见度，尤其是在光线不足的条件下。其简洁的人体工学设计确保了舒适性和易用性，即使背着背包也不例外。头盔具备相同的信号功能，并配有强大的前照灯，进一步提升您的安全性。',
    flexOvertitle: '灵活性',
    flexTitle: '智能遥控器',
    flexText:
      '使用 iGlow 遥控器，双眼专注路面的同时轻松掌控您的安全——触手可及、毫不费力的能见度。',
    appOvertitle: '应用程序',
    appTitle: 'GlowSafe：专属应用',
    appText:
      'GlowSafe 是 IGLOW 头盔与背心双件套的配套应用，可实现灯光同步。启用后，它还能计算您的行程与平均速度，激活刹车信号，从而提醒周围的驾驶员。',
    appAvailability: '2027年2月起上市',
    specsOvertitle: '写给技术爱好者',
    specsTitlePrefix: '了解',
    specsHighlight: '技术规格',
    swissOvertitle: '瑞士制造',
    swissHighlight: '瑞士品质',
    swissTitle: '与无与伦比的安全性。',
    swissParagraph:
      'Smart Vest 凝聚了超过3年的瑞士研发成果。我们致力于为客户提供卓越品质，并严格遵守安全标准。所有电子元件和智能技术面料均由瑞士企业全程研发，进一步彰显我们对瑞士工艺与创新的坚持。',
    aboutOvertitle: '关于我们',
    aboutTitlePrefix: '认识 IGLOW® 背后的',
    aboutHighlight: '团队',
    teamRoles: {
      founder: '创始人',
      sewingQueen: '缝纫女王',
      leadDeveloper: '首席开发工程师',
      electronicEngineer: '电子工程师',
      leadBrandDesigner: '首席品牌设计师',
      videographer: '摄像师',
      digitalMediaSpecialist: '数字媒体专员',
    },
    faqOvertitle: '常见问题',
    faqTitlePrefix: '让我们为您',
    faqHighlight: '答疑解惑！',
    contactOvertitle: '联系我们',
    contactTitlePrefix: '需要帮助？',
    contactHighlight: '我们随时为您服务！',
    contactParagraph:
      '有疑问或合作意向？我们非常乐意倾听！请填写下方表单联系我们的团队，我们会尽快回复您！',
    switzerlandWord: '瑞士',
  },
  ko: {
    joinUs: '참여하기',
    heroPrefix: '당신 또는 사랑하는 사람을 위한 선물',
    heroHighlight: '완벽한 듀오',
    heroSuffix: 'IGLOW 헬멧 + 조끼',
    heroButton: '내 듀오 예약하기',
    watchNowMain: '자동차처럼 눈에 띄는 가시성',
    watchNowSub: '지금 보기',
    watchSub: '방향지시등과 제동등이 탑재된 스마트 조끼',
    reserveAction: '첫 번째 듀오를 만나보세요',
    reserveNowWord: '동기화된 조명 시스템과 함께',
    reserveDuoText: '헬멧 + 조끼',
    exclusive: '단독 혜택',
    duoSpecial: '스페셜 듀오',
    launchWord1: '런칭',
    launchWord2: '프라이스',
    launchSpecialLabel: '홀리데이 스페셜 오퍼',
    insteadOfLabel: '정가',
    duoSpecialDesc:
      '블랙 프라이데이 & 킥스타터 런칭 스페셜: IGLOW 헬멧 + 조끼 듀오',
    newPricePrefix: '단',
    discountLinePrefix: '즉시 할인',
    lowestPriceBadge: '이 기술 역대 최저가',
    priorityShippingBadge: '얼리버드 예약자 우선 배송',
    clickToReserve: '지금 예약하고 함께하세요.',
    kickstarterButton: '킥스타터에서 만나는 IGLOW',
    kickstarterCaption: '당신의 IGLOW 듀오',
    kickstarterCaptionSub: '헬멧 + 조끼',
    secureSpot: '스위스 디자인',
    secureSpotSub: '🇨🇭',
    whatIsOvertitle: 'IGLOW란?',
    whatIsHtml:
      'IGLOW <span style="color:#E30613">헬멧 + 조끼</span> 듀오<br/><span style="color:#E30613">360° 가시성</span><br/><span style="color:#E30613">방향지시등</span>과 <span style="color:#E30613">제동등</span>으로<br/>자동차처럼, <span style="color:#E30613">핸들바 리모컨</span>으로 제어.',
    safetyOvertitle: '안전',
    safetyTitle: '고가시성 스마트 헬멧 & 조끼',
    safetyText:
      '최첨단 LED 인디케이터를 탑재한 조끼는 특히 저조도 환경에서 뛰어난 가시성을 제공합니다. 세련되고 인체공학적인 디자인은 백팩을 메고도 편안함과 사용 편의성을 보장합니다. 헬멧은 동일한 신호 기능과 강력한 전방 라이트로 당신의 안전을 완성합니다.',
    flexOvertitle: '유연성',
    flexTitle: '스마트 리모컨',
    flexText:
      'iGlow 리모컨으로 시선은 도로에, 안전은 손끝에서 간편하게 제어하세요.',
    appOvertitle: '애플리케이션',
    appTitle: 'GlowSafe: 전용 앱',
    appText:
      'IGLOW 헬멧 + 조끼 듀오의 전용 앱인 GlowSafe는 조명 동기화를 지원합니다. 활성화하면 이동 거리와 평균 속도를 계산하고 제동 신호를 작동시켜 주변 운전자에게 알립니다.',
    appAvailability: '2027년 2월 출시 예정',
    specsOvertitle: '기술 애호가를 위한',
    specsTitlePrefix: '살펴보기',
    specsHighlight: '기술 사양',
    swissOvertitle: '스위스 설계',
    swissHighlight: '스위스 품질',
    swissTitle: '그리고 타의 추종을 불허하는 안전성.',
    swissParagraph:
      'Smart Vest는 3년 이상의 스위스 연구 및 엔지니어링의 결실입니다. 우리는 고객에게 타의 추종을 불허하는 품질과 안전 기준 준수를 제공하기 위해 최선을 다합니다. 모든 전자 부품과 스마트 기술 원단은 전적으로 스위스 기업에 의해 개발되어, 스위스의 노하우와 혁신에 대한 우리의 약속을 더욱 공고히 합니다.',
    aboutOvertitle: '회사 소개',
    aboutTitlePrefix: 'IGLOW®를 만든',
    aboutHighlight: '팀을 소개합니다',
    teamRoles: {
      founder: '창업자',
      sewingQueen: '소잉 퀸',
      leadDeveloper: '리드 개발자',
      electronicEngineer: '전자 엔지니어',
      leadBrandDesigner: '리드 브랜드 디자이너',
      videographer: '영상 감독',
      digitalMediaSpecialist: '디지털 미디어 전문가',
    },
    faqOvertitle: '자주 묻는 질문',
    faqTitlePrefix: '궁금증을',
    faqHighlight: '풀어드릴게요!',
    contactOvertitle: '문의',
    contactTitlePrefix: '도움이 필요하신가요?',
    contactHighlight: '저희가 도와드립니다!',
    contactParagraph:
      '궁금한 점이나 파트너십에 관심이 있으신가요? 언제든 환영합니다! 아래 양식을 작성해 저희 팀에 문의해 주시면 최대한 빨리 답변드리겠습니다!',
    switzerlandWord: '스위스',
  },
};

function LanguageSwitcher({ currentLang, onChange }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        justifyContent: 'center',
        backgroundColor: '#08080C',
        py: 1,
        minHeight: '40px',
        alignItems: 'center',
      }}
    >
      {LANGUAGES.map((lang) => (
        <Box
          key={lang.code}
          component='button'
          onClick={() => onChange(lang.code)}
          sx={{
            cursor: 'pointer',
            border: lang.code === currentLang ? '2px solid #E30613' : '2px solid transparent',
            borderRadius: '8px',
            background: lang.code === currentLang ? '#1a1a1f' : 'transparent',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '13px',
            padding: '4px 8px',
          }}
        >
          <span style={{ marginRight: 4 }}>{lang.flag}</span>
          {lang.name}
        </Box>
      ))}
    </Box>
  );
}

function Landing() {
  const [currentLang, setCurrentLang] = useState('fr');
  const t = CONTENT[currentLang];

  return (
    <Box overflow='hidden' dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <LanguageSwitcher currentLang={currentLang} onChange={setCurrentLang} />
      <Navbar topOffset='64px' joinUsLabel={t.joinUs} />
      <HeroSection t={t} />
      <WhatIsSection t={t} lang={currentLang} />
      <SocialSection t={t} />
      <ContactSection t={t} lang={currentLang} />
      <Footer lang={currentLang} />
    </Box>
  );
}

function HeroSection({ t }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#08080C',
      }}
    >
      <NoisyContainer>
        <Box
          sx={{
            width: '100%',
            marginBottom: '60px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            paddingTop: { xs: '30px', sm: 'calc(60px-10vw)', xl: 0 },
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: '100%',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                height: '100px',
                width: '100%',
                position: 'absolute',
                top: 0,
                background: 'linear-gradient(180deg, #08080C, transparent)',
              }}
            />
            {/* Vidéos temporairement désactivées - fichiers manquants */}
            <Box
              component='video'
              src={topspot1x1}
              sx={{
                width: '100vw',
                display: { xs: 'inline', sm: 'inline', md: 'none' },
              }}
              alt='teaser'
              autoPlay
              loop
              muted
              playsInline
            />
            <Box
              component='video'
              src={topspot16x9}
              sx={{
                width: '100vw',
                display: { xs: 'none', sm: 'none', md: 'inline' },
              }}
              alt='teaser'
              autoPlay
              loop
              muted
              playsInline
            />
            <Box
              sx={{
                height: '100px',
                width: '100%',
                position: 'relative',
                top: '-100px',
                background: 'linear-gradient(0deg, #08080C, transparent)',
              }}
            />
          </Box>
        </Box>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: {
              xs: '60vh',
              sm: '80vh',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: '20',
            }}
            maxWidth='770px'
          >
            <Typography variant='h1'>
              {t.heroPrefix}
              <br />
              <Typography component='span' variant='h1' color='primary'>
                {t.heroHighlight}
              </Typography>
              {t.heroSuffix ? (
                <>
                  <br />
                  {t.heroSuffix}
                </>
              ) : (
                ''
              )}
            </Typography>
            <EmptySpace under='h1' />
          </Box>
          <EmptySpace under='h2' />

          <CountdownSection t={t} />
          {/* Bouton après le GIF */}
          <Button
            variant='contained'
            color='primary'
            href='/reserve'
            size='large'
            sx={{
              marginBottom: 10,
              backgroundColor: '#FF2200',
              textAlign: 'center',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              animation: 'iglowPulse 1.6s ease-in-out infinite',
              '@keyframes iglowPulse': {
                '0%, 100%': {
                  transform: 'scale(1)',
                  boxShadow: '0 0 0 rgba(255,34,0,0)',
                },
                '50%': {
                  transform: 'scale(1.06)',
                  boxShadow:
                    '0 0 10px rgba(255,255,255,0.7), 0 0 24px rgba(255,60,0,0.8)',
                },
              },
              '&:hover': {
                backgroundColor: '#FF2200',
                animation: 'none',
                transform: 'scale(1.08) translateY(-3px)',
                boxShadow:
                  '0 0 6px rgba(255,255,255,0.9), 0 0 16px rgba(255,80,0,1), 0 0 34px rgba(255,20,0,0.95), 0 0 65px rgba(255,0,0,0.8), 0 0 105px rgba(255,20,0,0.55)',
              },
              '&:active': {
                animation: 'none',
                transform: 'scale(0.96) translateY(3px)',
                boxShadow: 'none',
              },
            }}
          >
            {t.heroButton}
          </Button>
        </Container>
        <img
          src={subtractShape}
          style={{
            width: '100%',
            zIndex: 1,
            opacity: 0,
          }}
          alt='substract shape'
        />
      </NoisyContainer>

      <img
        src={subtractShape}
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          zIndex: 1,
        }}
        alt='substract shape'
      />
    </Box>
  );
}

function AppleIcon(props) {
  return (
    <svg viewBox='0 0 384 512' width='22' height='22' {...props}>
      <path
        fill='currentColor'
        d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'
      />
    </svg>
  );
}

function AndroidIcon(props) {
  return (
    <svg viewBox='0 0 24 24' width='22' height='22' {...props}>
      <path
        fill='currentColor'
        d='M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-1.48-.68-3.14-1.06-4.88-1.06s-3.4.38-4.88 1.06L4.73 5.67c-.18-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L5.48 9.48C2.93 11.04 1.2 13.76.94 17h22.12c-.26-3.24-1.99-5.96-4.54-7.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z'
      />
    </svg>
  );
}

function AppAvailability({ t }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        mt: 2,
        color: 'inherit',
      }}
    >
      <AppleIcon />
      <AndroidIcon />
      <Typography sx={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
        {t.appAvailability}
      </Typography>
    </Box>
  );
}

function WhatIsSection({ t, lang }) {
  const { NIGHT, STATE_GREY, RED } = Palette();
  return (
    <Box backgroundColor='white' color={NIGHT} overflow='hidden'>
      <Container sx={{ width: '100%', pt: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant='h6' sx={{ color: STATE_GREY, mb: 2 }}>
            {t.whatIsOvertitle}
          </Typography>
          <Typography
            variant='h1'
            component='div'
            sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold' }}
            dangerouslySetInnerHTML={{ __html: t.whatIsHtml }}
          />
        </Box>
        <EmptySpace under='h2' />
        <Box sx={{ position: 'relative' }}>
          <IllustratedParagraph
            overtitle={t.safetyOvertitle}
            title={t.safetyTitle}
            text={t.safetyText}
            imgSrc={vestNoCircle}
            imgTopSrc={helmetCutout}
            circleColor={RED}
            imgMaxWidth='380px'
            textMaxWidth='346px'
          />
        </Box>
        <EmptySpace />
        <IllustratedParagraph
          reverse
          overtitle={t.flexOvertitle}
          title={t.flexTitle}
          text={t.flexText}
          imgSrc={controller}
        />
        <EmptySpace />
        <IllustratedParagraph
          overtitle={t.appOvertitle}
          title={t.appTitle}
          text={
            <>
              {t.appText}
              <AppAvailability t={t} />
            </>
          }
          imgSrc={appMockup}
        />
      </Container>
      <Banner variant='black' />
      <Container>
        <EmptySpace />
        <SectionTitle
          overtitle={t.specsOvertitle}
          title={t.specsTitlePrefix}
          highlight={t.specsHighlight}
        />
        <EmptySpace under='h2' />
        <SpecsSection lang={lang} />
        <EmptySpace />
        <SectionTitle
          overtitle={t.swissOvertitle}
          highlight={t.swissHighlight}
          title={t.swissTitle}
          reverse
        />
        <EmptySpace under='h2' />
        <Typography color={STATE_GREY} textAlign='center'>
          {t.swissParagraph}
        </Typography>
      </Container>
      <Box component='img' src={mountain} width='101%' />
      <EmptySpace />
    </Box>
  );
}

function SocialSection({ t }) {
  return (
    <NoisyContainer>
      <Banner top='min(-17vw, -120px)' />
      <Container
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <SectionTitle
          overtitle={t.aboutOvertitle}
          title={t.aboutTitlePrefix}
          highlight={t.aboutHighlight}
        />
        <EmptySpace under='h2' />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'min(10vw, 80px)',
            justifyContent: 'center',
          }}
        >
          <IdCard src='fabrice.png' name='Fabrice' role={t.teamRoles.founder} />
          <IdCard src='alena.png' name='Alena' role={t.teamRoles.sewingQueen} />
          <IdCard src='mateo.png' name='Mateo' role={t.teamRoles.leadDeveloper} />
          <IdCard src='lucas.png' name='Lucas' role={t.teamRoles.electronicEngineer} />
          <IdCard src='maxime.png' name='Maxime' role={t.teamRoles.leadBrandDesigner} />
          <IdCard
            src='jean-baptiste.png'
            name='Jean-Baptiste'
            role={t.teamRoles.videographer}
          />
          <IdCard src='sam.png' name='Sam' role={t.teamRoles.digitalMediaSpecialist} />
        </Box>
        <EmptySpace />
      </Container>
    </NoisyContainer>
  );
}

function ContactSection({ t, lang }) {
  const { NIGHT, STATE_GREY } = Palette();

  return (
    <Box backgroundColor='white' color={NIGHT} overflow='hidden'>
      <Container>
        <EmptySpace />
        <SectionTitle
          overtitle={t.faqOvertitle}
          title={t.faqTitlePrefix}
          highlight={t.faqHighlight}
        />
        <EmptySpace under='h2' />
        <FAQSection lang={lang} />
        <EmptySpace />
        <SectionTitle
          overtitle={t.contactOvertitle}
          title={t.contactTitlePrefix}
          highlight={t.contactHighlight}
        />
        <EmptySpace under='h2' />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            gap: 10,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              gap: 8,
              pb: { xs: 0, sm: 0, md: 10 },
            }}
          >
            <Typography color={STATE_GREY} variant='body1'>
              {t.contactParagraph}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Typography variant='h3'>IGLOW® {t.switzerlandWord}</Typography>
              <Typography variant='body1'>
                Iglow, BP590,
                <br />
                1001 Lausanne,
                <br />
                {t.switzerlandWord}
              </Typography>
              <Typography
                component='a'
                href={'mailto:' + CONTACT_EMAIL}
                color={NIGHT}
              >
                {CONTACT_EMAIL}
              </Typography>
            </Box>
          </Box>
          <FormContact lang={lang} />
        </Box>
      </Container>
      <EmptySpace />
    </Box>
  );
}

const PRICE_BY_CURRENCY = {
  CHF: { old: 'CHF 199.-', new: 'CHF 99.-', save: 'CHF 100.-' },
  EUR: { old: '€199.00', new: '€99.00', save: '€100.00' },
  USD: { old: '$199.00', new: '$99.00', save: '$100.00' },
  GBP: { old: '£199.00', new: '£99.00', save: '£100.00' },
};

function CountdownSection({ t }) {
  const { RED } = Palette();
  const [currency, setCurrency] = useState('CHF');
  const [helmetZoomed, setHelmetZoomed] = useState(false);
  const launchPricePhase = Date.now() >= END_CAMPAIGN_DATE.getTime();

  useEffect(() => {
    detectCurrency().then(setCurrency);
  }, []);

  const price = PRICE_BY_CURRENCY[currency] || PRICE_BY_CURRENCY.CHF;

  return (
    <NoisyContainer>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 8,
          pb: 15,
          overflow: 'visible',
        }}
      >
        {/* Vidéo trailer - Interverti avec le GIF du gilet */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '770px',
            mb: 4,
            width: '100%',
          }}
        >
          {/* Texte au-dessus de la vidéo */}
          <Typography
            variant='h3'
            sx={{
              color: 'white',
              mb: 1,
              textAlign: 'center',
              fontWeight: 'bold',
              zIndex: 10,
            }}
          >
            {t.watchNowMain}
          </Typography>
          <Typography
            variant='h4'
            sx={{
              color: 'white',
              mb: 2,
              textAlign: 'center',
              fontWeight: 'normal',
              zIndex: 10,
            }}
          >
            {t.watchSub}
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: 'primary.main',
              mb: 2,
              textAlign: 'center',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              zIndex: 10,
            }}
          >
            ▶ {t.watchNowSub}
          </Typography>

          {/* Placeholder pour la vidéo trailer */}
          <video
            controls
            style={{ width: '100%', borderRadius: 30, zIndex: '2' }}
            poster={trailerThumbnail}
          >
            <source src={trailer16x9} />
          </video>
        </Box>

        <Countdown />

        <Box
          sx={{
            textAlign: 'center',
            mb: 4,
            maxWidth: '800px',
            width: '100%',
            zIndex: 10,
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <Typography variant='body1' sx={{ color: 'white', fontWeight: 'bold' }}>
            {t.reserveAction}
          </Typography>
          <Typography variant='body1'>
            <Typography component='span' sx={{ color: 'white' }}>
              {t.reserveDuoText}
            </Typography>{' '}
            <Typography
              component='span'
              sx={{ color: RED, fontWeight: 'bold' }}
            >
              IGLOW
            </Typography>
          </Typography>
          <Typography variant='body1' sx={{ color: RED, fontWeight: 'bold', mb: 1 }}>
            {t.reserveNowWord}
          </Typography>
          <Typography
            sx={{ color: RED, fontWeight: 'bold', fontSize: '1.1rem', mt: 2 }}
          >
            {t.exclusive}
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontWeight: 900,
              fontSize: '3.5rem',
              lineHeight: 1,
            }}
          >
            {launchPricePhase ? t.launchWord1 : 'BLACK'}
          </Typography>
          <Typography
            sx={{
              color: RED,
              fontWeight: 900,
              fontSize: '3.5rem',
              lineHeight: 1,
              mb: 2,
            }}
          >
            {launchPricePhase ? t.launchWord2 : 'FRIDAY'}
          </Typography>

          <Typography sx={{ color: RED, fontWeight: 'bold', mb: 2 }}>
            {launchPricePhase ? t.launchSpecialLabel : t.duoSpecial}
          </Typography>

          <Typography
            sx={{
              color: 'white',
              fontWeight: 900,
              fontSize: '2rem',
            }}
          >
            {t.insteadOfLabel} {price.old}
          </Typography>
          <Typography
            sx={{ color: 'white', fontWeight: 900, fontSize: '2rem' }}
          >
            {t.newPricePrefix}
          </Typography>
          <Typography
            sx={{
              color: RED,
              fontWeight: 900,
              fontSize: '3.5rem',
              lineHeight: 1,
              mt: 1,
              mb: 3,
            }}
          >
            {price.new}
          </Typography>
          <Typography
            sx={{ color: '#00FF00', fontWeight: 900, fontSize: '1.6rem' }}
          >
            {t.discountLinePrefix}
            <br />
            {price.save}
          </Typography>

          <Typography
            variant='body2'
            sx={{ color: 'white', opacity: 0.85, mt: 3 }}
          >
            <Typography
              component='span'
              sx={{ color: '#00FF00', fontWeight: 900 }}
            >
              ✓
            </Typography>{' '}
            {t.lowestPriceBadge}
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: 'white', opacity: 0.85 }}
          >
            <Typography
              component='span'
              sx={{ color: '#00FF00', fontWeight: 900 }}
            >
              ✓
            </Typography>{' '}
            {t.priorityShippingBadge}
          </Typography>
        </Box>

        <Button
          variant='contained'
          color='primary'
          href='/reserve'
          size='large'
          sx={{
            marginY: 3,
            backgroundColor: '#FF2200',
            textAlign: 'center',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            animation: 'iglowPulse 1.6s ease-in-out infinite',
            '@keyframes iglowPulse': {
              '0%, 100%': {
                transform: 'scale(1)',
                boxShadow: '0 0 0 rgba(255,34,0,0)',
              },
              '50%': {
                transform: 'scale(1.06)',
                boxShadow:
                  '0 0 10px rgba(255,255,255,0.7), 0 0 24px rgba(255,60,0,0.8)',
              },
            },
            '&:hover': {
              backgroundColor: '#FF2200',
              animation: 'none',
              transform: 'scale(1.08) translateY(-3px)',
              boxShadow:
                '0 0 6px rgba(255,255,255,0.9), 0 0 16px rgba(255,80,0,1), 0 0 34px rgba(255,20,0,0.95), 0 0 65px rgba(255,0,0,0.8), 0 0 105px rgba(255,20,0,0.55)',
            },
            '&:active': {
              animation: 'none',
              transform: 'scale(0.96) translateY(3px)',
              boxShadow: 'none',
            },
          }}
        >
          {t.heroButton}
        </Button>

        <Typography
          variant='body1'
          fontWeight='bold'
          sx={{ mb: 3, textAlign: 'center' }}
        >
          {t.secureSpot}
          <br />
          <Typography component='span' sx={{ fontSize: '4em', lineHeight: 1 }}>
            {t.secureSpotSub}
          </Typography>
        </Typography>

        <Button
          variant='contained'
          color='primary'
          size='large'
          href='https://www.kickstarter.com/projects/iglowswiss/iglow-the-smart-bike-jacket-be-seen-be-safe'
          target='_blank'
          sx={{
            backgroundColor: '#05CE78',
            marginBottom: 3,
            textAlign: 'center',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            '&:hover': {
              backgroundColor: '#05CE78',
              transform: 'scale(1.08) translateY(-3px)',
              boxShadow:
                '0 0 10px rgba(5,206,120,0.95), 0 0 25px rgba(5,206,120,0.85), 0 0 50px rgba(5,206,120,0.65), 0 0 90px rgba(5,206,120,0.45)',
            },
            '&:active': {
              transform: 'scale(0.96) translateY(3px)',
              boxShadow: 'none',
            },
          }}
        >
          {t.kickstarterButton}
        </Button>

        <Box
          component='img'
          src={duoHelmetVest}
          alt='iGlow Smart Helmet and Vest Duo'
          sx={{
            display: 'block',
            width: '100%',
            maxWidth: '500px',
            borderRadius: '15px',
            mt: 1,
          }}
        />
        <Typography
          variant='body1'
          sx={{ color: 'white', fontWeight: 'bold', mt: 2, mb: 4, textAlign: 'center' }}
        >
          {t.kickstarterCaption}
          <br />
          {t.kickstarterCaptionSub}
        </Typography>

        <Box
          component='img'
          src={helmet3Views}
          alt='iGlow Smart Helmet - 3 views'
          onClick={() => setHelmetZoomed(true)}
          sx={{
            display: 'block',
            width: '100%',
            maxWidth: '500px',
            borderRadius: '15px',
            mb: 4,
            cursor: 'zoom-in',
          }}
        />

        <Modal open={helmetZoomed} onClose={() => setHelmetZoomed(false)}>
          <Box
            onClick={() => setHelmetZoomed(false)}
            sx={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
            }}
          >
            <Box
              component='img'
              src={helmet3Views}
              alt='iGlow Smart Helmet - 3 views'
              onClick={(e) => e.stopPropagation()}
              sx={{
                maxWidth: '95vw',
                maxHeight: '90vh',
                width: 'auto',
                borderRadius: '15px',
                cursor: 'zoom-out',
              }}
            />
            <Box
              onClick={() => setHelmetZoomed(false)}
              sx={{
                position: 'fixed',
                top: { xs: 16, sm: 24 },
                right: { xs: 16, sm: 24 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              <PiX size={22} />
            </Box>
          </Box>
        </Modal>

        <video
          src={jacketHero}
          style={{
            width: '70vw',
            maxWidth: '500px',
            marginTop: '60px',
            marginBottom: '40px',
            position: 'relative',
            left: '10px',
          }}
          alt='jacket'
          autoPlay
          loop
          muted
          playsInline
        />
      </Container>
    </NoisyContainer>
  );
}

export default Landing;
