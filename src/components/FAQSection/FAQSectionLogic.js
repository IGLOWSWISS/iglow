import { useState } from 'react';

const TRANSLATIONS = {
  fr: [
    {
      title:
        'Quand et comment vais-je recevoir mon gilet connecté IGLOW après avoir soutenu la campagne ?',
      details:
        'Une fois la campagne terminée, nous assurerons une transparence totale sur le processus de production et les mises à jour, afin que tous les contributeurs soient satisfaits. L’un de nos principaux atouts est que la production se fait localement, l’électronique comme les textiles étant fabriqués en Suisse. Cette proximité nous permet de garantir une qualité et une efficacité élevées, afin que vous receviez votre gilet IGLOW le plus rapidement possible après la fin de la campagne.',
    },
    {
      title: 'Qu’est-ce qui a inspiré la création du gilet connecté IGLOW ?',
      details:
        'IGLOW est né de l’expérience personnelle de son créateur qui, après avoir acheté une trottinette pour se rendre au travail, a réalisé à quel point il était dangereux de ne pas être visible sur la route. Fort de son expertise dans le textile et la mode, ayant travaillé avec des marques de luxe, les créateurs d’IGLOW ont développé une solution de sécurité innovante et élégante.',
    },
    {
      title:
        'Comment IGLOW améliore-t-il la sécurité des cyclistes et des utilisateurs de différents types de vélos ?',
      details:
        'Le gilet connecté IGLOW est conçu pour rendre les utilisateurs de tous types de vélos, qu’il s’agisse de vélos cargo, de puissants vélos électriques ou de vélos classiques, hautement visibles grâce à ses LED intégrées, ses bandes réfléchissantes et sa télécommande Bluetooth. Forts de leur expérience dans l’industrie de la mode, les concepteurs ont veillé à ce que chaque aspect du gilet allie fonctionnalité, confort, légèreté et esthétique pour une sécurité maximale, de jour comme de nuit.',
    },
    {
      title:
        'Quelles sont les caractéristiques et les avantages du gilet connecté IGLOW ?',
      details:
        'IGLOW est un gilet de sécurité léger et confortable, fabriqué avec des matériaux de haute qualité. Il est équipé de nombreuses fonctionnalités, notamment des LED clignotantes, une batterie rechargeable offrant plus de 48 heures d’autonomie, des poches pratiques et une fenêtre d’information pour carte d’urgence. Les créateurs, forts de leur expérience dans l’industrie du luxe, ont également veillé à ce que le gilet puisse se porter par-dessus un sac à dos, alliant ainsi style et sécurité.',
    },
    {
      title:
        'En quoi IGLOW se distingue-t-il des autres gilets de sécurité connectés ?',
      details:
        'En plus d’être équipé de feux de freinage et de clignotants pour les cyclistes, le gilet IGLOW est polyvalent et peut être utilisé dans diverses situations. Il est parfait pour les coureurs du soir ou du petit matin afin d’être vu, et peut également être utilisé en cas de panne au bord de la route pour signaler votre présence grâce à ses feux d’alerte intégrés. Le gilet connecté IGLOW est unique et conçu pour vous accompagner au quotidien, en alliant sécurité et style où que vous alliez.',
    },
    {
      title: 'IGLOW est-il compatible avec tous les types de vélos et de trottinettes ?',
      details:
        'Oui, le gilet IGLOW est conçu pour être compatible avec tous les types de vélos, y compris les vélos cargo, les vélos électriques puissants et les trottinettes. Sa télécommande Bluetooth se fixe facilement au guidon, et le gilet peut être porté confortablement avec ou sans sac à dos.',
    },
    {
      title:
        'Pourquoi le gilet connecté IGLOW est-il aussi abordable alors qu’il est fabriqué en Suisse ?',
      details:
        'Le prix abordable du gilet connecté IGLOW est une offre exceptionnelle réservée exclusivement aux premiers contributeurs. Normalement, le prix est plus élevé, mais nous avons délibérément fixé ce tarif attractif afin de permettre au plus grand nombre de bénéficier d’IGLOW. Notre objectif est de faire du gilet connecté IGLOW une référence mondiale en matière de sécurité. En produisant localement en Suisse, nous garantissons une qualité irréprochable, alliant technologie avancée, sécurité et style à un prix qui représente une véritable opportunité.',
    },
  ],
  de: [
    {
      title:
        'Wann und wie erhalte ich meine IGLOW Smart Weste, nachdem ich die Kampagne unterstützt habe?',
      details:
        'Nach Abschluss der Kampagne sorgen wir für vollständige Transparenz bezüglich des Produktionsprozesses und der Updates, damit alle Unterstützer zufrieden sind. Einer unserer wichtigsten Vorteile ist, dass die Produktion lokal erfolgt, wobei sowohl die Elektronik als auch die Textilien in der Schweiz hergestellt werden. Diese Nähe ermöglicht es uns, eine hohe Qualität und Effizienz zu gewährleisten, sodass Sie Ihre IGLOW Weste so schnell wie möglich nach Ende der Kampagne erhalten.',
    },
    {
      title: 'Was hat die Entwicklung der IGLOW Smart Weste inspiriert?',
      details:
        'IGLOW entstand aus der persönlichen Erfahrung des Gründers, der nach dem Kauf eines Trottinetts für den Arbeitsweg erkannte, wie gefährlich es ist, auf der Strasse nicht sichtbar zu sein. Mit ihrer Expertise im Textil- und Modebereich, nach Jahren der Zusammenarbeit mit Luxusmarken, entwickelten die Gründer von IGLOW eine innovative und stilvolle Sicherheitslösung.',
    },
    {
      title:
        'Wie verbessert IGLOW die Sicherheit von Velofahrern und Nutzern verschiedener Fahrradtypen?',
      details:
        'Die IGLOW Smart Weste macht Nutzer aller Fahrradtypen, ob Lastenrad, leistungsstarkes E-Bike oder herkömmliches Velo, dank integrierter LEDs, reflektierender Streifen und Bluetooth-Fernbedienung bestens sichtbar. Dank ihrer Erfahrung in der Modebranche haben die Designer dafür gesorgt, dass jeder Aspekt der Weste Funktionalität, Komfort, Leichtigkeit und Ästhetik für maximale Sicherheit bei Tag und Nacht vereint.',
    },
    {
      title: 'Welche Merkmale und Vorteile bietet die IGLOW Smart Weste?',
      details:
        'IGLOW ist eine leichte und komfortable Sicherheitsweste aus hochwertigen Materialien. Sie verfügt über zahlreiche Funktionen, darunter blinkende LEDs, einen wiederaufladbaren Akku mit über 48 Stunden Autonomie, praktische Taschen und ein Fenster für die Notfallkarte. Die Gründer, mit Erfahrung in der Luxusbranche, haben zudem dafür gesorgt, dass die Weste über einem Rucksack getragen werden kann, für Stil und Sicherheit zugleich.',
    },
    {
      title: 'Was unterscheidet IGLOW von anderen Sicherheitswesten?',
      details:
        'Neben Bremslichtern und Blinkern für Velofahrer ist die IGLOW Weste vielseitig einsetzbar. Sie ist perfekt für Läufer am Abend oder frühen Morgen, um gesehen zu werden, und kann auch bei einer Panne am Strassenrand eingesetzt werden, um mit den integrierten Warnlichtern auf Ihre Präsenz aufmerksam zu machen. Die IGLOW Smart Weste ist einzigartig und soll Sie jeden Tag begleiten, mit Sicherheit und Stil, wohin Sie auch gehen.',
    },
    {
      title: 'Ist IGLOW mit allen Fahrrad- und Trottinett-Typen kompatibel?',
      details:
        'Ja, die IGLOW Weste ist mit allen Fahrradtypen kompatibel, einschliesslich Lastenrädern, leistungsstarken E-Bikes und Trottinetts. Die Bluetooth-Fernbedienung lässt sich einfach am Lenker befestigen, und die Weste kann bequem mit oder ohne Rucksack getragen werden.',
    },
    {
      title:
        'Warum ist die IGLOW Smart Weste so erschwinglich, obwohl sie in der Schweiz hergestellt wird?',
      details:
        'Der erschwingliche Preis der IGLOW Smart Weste ist ein aussergewöhnliches Angebot, das exklusiv den ersten Unterstützern vorbehalten ist. Normalerweise ist der Preis höher, aber wir haben diesen attraktiven Preis bewusst festgelegt, damit möglichst viele Menschen von IGLOW profitieren können. Unser Ziel ist es, die IGLOW Smart Weste zu einer weltweiten Referenz in Sachen Sicherheit zu machen. Durch die lokale Produktion in der Schweiz garantieren wir erstklassige Qualität, die fortschrittliche Technologie, Sicherheit und Stil zu einem Preis vereint, der eine echte Gelegenheit darstellt.',
    },
  ],
  it: [
    {
      title:
        'Quando e come riceverò il mio gilet smart IGLOW dopo aver sostenuto la campagna?',
      details:
        'Al termine della campagna, garantiremo piena trasparenza sul processo produttivo e sugli aggiornamenti, per assicurare la soddisfazione di tutti i sostenitori. Uno dei nostri principali vantaggi è che la produzione avviene localmente, con elettronica e tessuti realizzati in Svizzera. Questa vicinanza ci permette di garantire alta qualità ed efficienza, assicurandoti di ricevere il tuo gilet IGLOW il prima possibile dopo la fine della campagna.',
    },
    {
      title: 'Cosa ha ispirato la creazione del gilet smart IGLOW?',
      details:
        'IGLOW è nato dall’esperienza personale del suo creatore che, dopo aver acquistato un monopattino per andare al lavoro, ha capito quanto fosse pericoloso non essere visibile sulla strada. Grazie alla loro esperienza nel settore tessile e della moda, avendo lavorato con marchi di lusso, i creatori di IGLOW hanno sviluppato una soluzione di sicurezza innovativa ed elegante.',
    },
    {
      title:
        'In che modo IGLOW migliora la sicurezza dei ciclisti e degli utenti di diversi tipi di biciclette?',
      details:
        'Il gilet smart IGLOW è progettato per rendere altamente visibili gli utenti di ogni tipo di bicicletta, siano esse cargo bike, e-bike potenti o biciclette tradizionali, grazie a LED integrati, strisce riflettenti e telecomando Bluetooth. Forti della loro esperienza nel settore della moda, i designer hanno fatto in modo che ogni aspetto del gilet unisca funzionalità, comfort, leggerezza ed estetica per la massima sicurezza, di giorno e di notte.',
    },
    {
      title: 'Quali sono le caratteristiche e i vantaggi del gilet smart IGLOW?',
      details:
        'IGLOW è un gilet di sicurezza leggero e confortevole, realizzato con materiali di alta qualità. È dotato di numerose funzionalità, tra cui LED lampeggianti, una batteria ricaricabile con oltre 48 ore di autonomia, tasche pratiche e una finestra per la scheda di emergenza. I creatori, con esperienza nel settore del lusso, hanno anche fatto in modo che il gilet possa essere indossato sopra uno zaino, unendo stile e sicurezza.',
    },
    {
      title: 'In cosa IGLOW si differenzia dagli altri gilet smart di sicurezza?',
      details:
        'Oltre ad essere dotato di luci di stop e frecce per i ciclisti, il gilet IGLOW è versatile e può essere utilizzato in diverse situazioni. È perfetto per chi corre la sera o la mattina presto per essere visto, e può essere usato anche in caso di guasto sul ciglio della strada per segnalare la propria presenza grazie alle luci di emergenza integrate. Il gilet smart IGLOW è unico e pensato per accompagnarti ogni giorno, garantendo sicurezza e stile ovunque tu vada.',
    },
    {
      title: 'IGLOW è compatibile con tutti i tipi di biciclette e monopattini?',
      details:
        'Sì, il gilet IGLOW è progettato per essere compatibile con tutti i tipi di biciclette, comprese cargo bike, e-bike potenti e monopattini. Il telecomando Bluetooth si fissa facilmente al manubrio, e il gilet può essere indossato comodamente con o senza zaino.',
    },
    {
      title:
        'Perché il gilet smart IGLOW è così conveniente nonostante sia prodotto in Svizzera?',
      details:
        'Il prezzo conveniente del gilet smart IGLOW è un’offerta eccezionale riservata esclusivamente ai primi sostenitori. Normalmente il prezzo è più alto, ma abbiamo deliberatamente fissato questo prezzo interessante per permettere al maggior numero possibile di persone di beneficiare di IGLOW. Il nostro obiettivo è rendere il gilet smart IGLOW un punto di riferimento mondiale per la sicurezza. Producendo localmente in Svizzera, garantiamo una qualità impeccabile, unendo tecnologia avanzata, sicurezza e stile a un prezzo che rappresenta una vera opportunità.',
    },
  ],
  en: [
    {
      title:
        'When and how will I receive my IGLOW smart vest after supporting the campaign?',
      details:
        'After the campaign ends, we will maintain complete transparency regarding the production process and updates to ensure all contributors are satisfied. One of our key advantages is that production will be done locally, with both the electronics and textiles manufactured in Switzerland. This proximity allows us to maintain high quality and efficiency, ensuring you receive your IGLOW vest as soon as possible after the end of the campaign.',
    },
    {
      title: 'What inspired the creation of the IGLOW smart vest ?',
      details:
        'IGLOW was born from the personal experience of its creator, who, after purchasing a scooter to commute to work, realized how dangerous it was not to be visible on the road. With their expertise in textiles and fashion, having worked with luxury brands, the creators of IGLOW developed an innovative and stylish safety solution.',
    },
    {
      title:
        'How does IGLOW improve the safety of cyclists and users of various types of bikes?',
      details:
        'The IGLOW smart vest is designed to make users of all types of bikes, whether cargo bikes, powerful e-bikes or conventional bikes, highly visible thanks to its integrated LEDs, reflective strips and Bluetooth remote control. Drawing on their experience in the fashion industry, the designers have ensured that every aspect of the vest combines functionality, comfort, lightness and aesthetics for maximum safety, day and night.',
    },
    {
      title: 'What are the features and benefits of the IGLOW smart vest ?',
      details:
        'IGLOW is a lightweight and comfortable safety vest made with high-quality materials. It comes equipped with numerous features, including flashing LEDs, a rechargeable battery with over 48 hours of autonomy, practical pockets, and an emergency card information window. The creators, who have experience in the luxury industry, also ensured that the vest can be worn over a backpack, offering both style and safety.',
    },
    {
      title: 'How is IGLOW different from other safety smart vest ?',
      details:
        "In addition to being equipped with brake lights and turn signals for cyclists, the IGLOW vest is versatile and can be used in various situations. It's perfect for evening or early morning runners  to ensure you're seen, and it can also be used in case of a roadside breakdown to signal your presence with its built-in warning lights. The IGLOW smart vest is unique and designed to accompany you every day, providing both safety and style wherever you go.",
    },
    {
      title: 'Is IGLOW compatible with all types of bikes and scooters?',
      details:
        'Yes, the IGLOW vest is designed to be compatible with all types of bikes, including cargo bikes, powerful electric bikes, and scooters. Its Bluetooth remote control easily attaches to the handlebar, and the vest can be comfortably worn with or without a backpack.',
    },
    {
      title:
        'Why is the IGLOW smart vest so affordable given that it’s made in Switzerland?',
      details:
        'The affordable price of the IGLOW smart vest is an exceptional offer exclusively for our first supporters. Normally, the price is higher, but we have deliberately set this attractive price to allow as many people as possible to benefit from using IGLOW. Our goal is to make the IGLOW smart vest a global reference in safety. By producing locally in Switzerland, we ensure top-notch quality, combining advanced technology, safety, and style at a price point that’s truly a rare opportunity.',
    },
  ],
  es: [
    {
      title:
        '¿Cuándo y cómo recibiré mi chaleco inteligente IGLOW después de apoyar la campaña?',
      details:
        'Una vez finalizada la campaña, mantendremos una transparencia total sobre el proceso de producción y las actualizaciones, para garantizar la satisfacción de todos los colaboradores. Una de nuestras principales ventajas es que la producción se realiza localmente, fabricando tanto la electrónica como los textiles en Suiza. Esta cercanía nos permite mantener una alta calidad y eficiencia, asegurando que recibas tu chaleco IGLOW lo antes posible tras el final de la campaña.',
    },
    {
      title: '¿Qué inspiró la creación del chaleco inteligente IGLOW?',
      details:
        'IGLOW nació de la experiencia personal de su creador, quien, tras comprar un patinete para ir al trabajo, se dio cuenta de lo peligroso que era no ser visible en la carretera. Gracias a su experiencia en textiles y moda, habiendo trabajado con marcas de lujo, los creadores de IGLOW desarrollaron una solución de seguridad innovadora y elegante.',
    },
    {
      title:
        '¿Cómo mejora IGLOW la seguridad de los ciclistas y usuarios de distintos tipos de bicicletas?',
      details:
        'El chaleco inteligente IGLOW está diseñado para hacer que los usuarios de todo tipo de bicicletas, ya sean cargo bikes, potentes e-bikes o bicicletas convencionales, sean muy visibles gracias a sus LED integrados, bandas reflectantes y mando a distancia Bluetooth. Basándose en su experiencia en la industria de la moda, los diseñadores se han asegurado de que cada aspecto del chaleco combine funcionalidad, comodidad, ligereza y estética para una máxima seguridad, de día y de noche.',
    },
    {
      title: '¿Cuáles son las características y ventajas del chaleco inteligente IGLOW?',
      details:
        'IGLOW es un chaleco de seguridad ligero y cómodo, fabricado con materiales de alta calidad. Cuenta con numerosas funciones, incluyendo LED intermitentes, una batería recargable con más de 48 horas de autonomía, bolsillos prácticos y una ventana de información para tarjeta de emergencia. Los creadores, con experiencia en la industria del lujo, también se aseguraron de que el chaleco pueda llevarse sobre una mochila, ofreciendo estilo y seguridad a la vez.',
    },
    {
      title: '¿En qué se diferencia IGLOW de otros chalecos de seguridad inteligentes?',
      details:
        'Además de estar equipado con luces de freno e intermitentes para ciclistas, el chaleco IGLOW es versátil y puede usarse en diversas situaciones. Es perfecto para corredores de tarde o madrugada, para asegurarte de que te vean, y también puede usarse en caso de avería en la carretera para señalar tu presencia con sus luces de advertencia integradas. El chaleco inteligente IGLOW es único y está diseñado para acompañarte cada día, ofreciendo seguridad y estilo dondequiera que vayas.',
    },
    {
      title: '¿Es IGLOW compatible con todo tipo de bicicletas y patinetes?',
      details:
        'Sí, el chaleco IGLOW está diseñado para ser compatible con todo tipo de bicicletas, incluidas cargo bikes, potentes bicicletas eléctricas y patinetes. Su mando a distancia Bluetooth se fija fácilmente al manillar, y el chaleco puede llevarse cómodamente con o sin mochila.',
    },
    {
      title:
        '¿Por qué el chaleco inteligente IGLOW es tan asequible siendo fabricado en Suiza?',
      details:
        'El precio asequible del chaleco inteligente IGLOW es una oferta excepcional reservada exclusivamente a nuestros primeros colaboradores. Normalmente el precio es más alto, pero hemos fijado deliberadamente este precio atractivo para permitir que el mayor número posible de personas se beneficie de IGLOW. Nuestro objetivo es convertir el chaleco inteligente IGLOW en una referencia mundial en seguridad. Al producir localmente en Suiza, garantizamos una calidad excepcional, combinando tecnología avanzada, seguridad y estilo a un precio que representa una auténtica oportunidad.',
    },
  ],
  nl: [
    {
      title:
        'Wanneer en hoe ontvang ik mijn IGLOW smart vest nadat ik de campagne heb gesteund?',
      details:
        'Na afloop van de campagne garanderen wij volledige transparantie over het productieproces en de updates, zodat alle deelnemers tevreden zijn. Een van onze belangrijkste voordelen is dat de productie lokaal plaatsvindt, waarbij zowel de elektronica als het textiel in Zwitserland worden vervaardigd. Deze nabijheid stelt ons in staat een hoge kwaliteit en efficiëntie te handhaven, zodat u uw IGLOW vest zo snel mogelijk na afloop van de campagne ontvangt.',
    },
    {
      title: 'Wat inspireerde de creatie van de IGLOW smart vest?',
      details:
        'IGLOW ontstond uit de persoonlijke ervaring van de oprichter, die na de aankoop van een step om naar het werk te gaan, besefte hoe gevaarlijk het was om niet zichtbaar te zijn op de weg. Met hun expertise in textiel en mode, na te hebben gewerkt met luxemerken, ontwikkelden de oprichters van IGLOW een innovatieve en stijlvolle veiligheidsoplossing.',
    },
    {
      title:
        'Hoe verbetert IGLOW de veiligheid van fietsers en gebruikers van verschillende soorten fietsen?',
      details:
        'De IGLOW smart vest is ontworpen om gebruikers van alle soorten fietsen, of het nu bakfietsen, krachtige e-bikes of gewone fietsen zijn, zeer zichtbaar te maken dankzij geïntegreerde LED’s, reflecterende strepen en Bluetooth-afstandsbediening. Met hun ervaring in de modebranche hebben de ontwerpers ervoor gezorgd dat elk aspect van het vest functionaliteit, comfort, lichtheid en esthetiek combineert voor maximale veiligheid, dag en nacht.',
    },
    {
      title: 'Wat zijn de kenmerken en voordelen van de IGLOW smart vest?',
      details:
        'IGLOW is een lichtgewicht en comfortabel veiligheidsvest gemaakt van hoogwaardige materialen. Het is uitgerust met tal van functies, waaronder knipperende LED’s, een oplaadbare batterij met meer dan 48 uur autonomie, praktische zakken en een venster voor de noodkaart. De oprichters, met ervaring in de luxe-industrie, hebben er ook voor gezorgd dat het vest over een rugzak gedragen kan worden, voor zowel stijl als veiligheid.',
    },
    {
      title: 'Wat maakt IGLOW anders dan andere smart veiligheidsvesten?',
      details:
        'Naast remlichten en richtingaanwijzers voor fietsers is het IGLOW vest veelzijdig en kan het in verschillende situaties worden gebruikt. Het is perfect voor avond- of vroege ochtendlopers om gezien te worden, en kan ook worden gebruikt bij pech onderweg om uw aanwezigheid te signaleren met de ingebouwde waarschuwingslichten. Het IGLOW smart vest is uniek en ontworpen om u elke dag te vergezellen, met zowel veiligheid als stijl, waar u ook gaat.',
    },
    {
      title: 'Is IGLOW compatibel met alle soorten fietsen en steps?',
      details:
        'Ja, het IGLOW vest is ontworpen om compatibel te zijn met alle soorten fietsen, waaronder bakfietsen, krachtige elektrische fietsen en steps. De Bluetooth-afstandsbediening is eenvoudig aan het stuur te bevestigen, en het vest kan comfortabel met of zonder rugzak worden gedragen.',
    },
    {
      title:
        'Waarom is de IGLOW smart vest zo betaalbaar terwijl het in Zwitserland wordt gemaakt?',
      details:
        'De betaalbare prijs van de IGLOW smart vest is een uitzonderlijk aanbod exclusief voor onze eerste deelnemers. Normaal gesproken is de prijs hoger, maar we hebben bewust deze aantrekkelijke prijs vastgesteld zodat zoveel mogelijk mensen kunnen profiteren van IGLOW. Ons doel is om van de IGLOW smart vest een wereldwijde referentie op het gebied van veiligheid te maken. Door lokaal in Zwitserland te produceren, garanderen wij topkwaliteit, waarbij geavanceerde technologie, veiligheid en stijl worden gecombineerd tegen een prijs die een echte, zeldzame kans is.',
    },
  ],
  pt: [
    {
      title:
        'Quando e como receberei meu colete inteligente IGLOW após apoiar a campanha?',
      details:
        'Após o término da campanha, manteremos total transparência sobre o processo de produção e as atualizações, para garantir a satisfação de todos os apoiadores. Uma de nossas principais vantagens é que a produção é feita localmente, com a eletrônica e os tecidos fabricados na Suíça. Essa proximidade nos permite manter alta qualidade e eficiência, garantindo que você receba seu colete IGLOW o mais rápido possível após o fim da campanha.',
    },
    {
      title: 'O que inspirou a criação do colete inteligente IGLOW?',
      details:
        'O IGLOW nasceu da experiência pessoal de seu criador que, após comprar uma patinete para ir ao trabalho, percebeu o quão perigoso era não ser visível na estrada. Com sua experiência em têxteis e moda, tendo trabalhado com marcas de luxo, os criadores do IGLOW desenvolveram uma solução de segurança inovadora e elegante.',
    },
    {
      title:
        'Como o IGLOW melhora a segurança de ciclistas e usuários de diferentes tipos de bicicletas?',
      details:
        'O colete inteligente IGLOW foi projetado para tornar os usuários de todos os tipos de bicicletas, sejam cargo bikes, e-bikes potentes ou bicicletas convencionais, altamente visíveis graças aos seus LEDs integrados, faixas refletivas e controle remoto Bluetooth. Com base em sua experiência na indústria da moda, os designers garantiram que cada aspecto do colete combine funcionalidade, conforto, leveza e estética para máxima segurança, de dia e de noite.',
    },
    {
      title: 'Quais são os recursos e benefícios do colete inteligente IGLOW?',
      details:
        'O IGLOW é um colete de segurança leve e confortável, feito com materiais de alta qualidade. Ele vem equipado com diversos recursos, incluindo LEDs piscantes, uma bateria recarregável com mais de 48 horas de autonomia, bolsos práticos e uma janela de informações para cartão de emergência. Os criadores, com experiência na indústria de luxo, também garantiram que o colete possa ser usado sobre uma mochila, oferecendo estilo e segurança.',
    },
    {
      title: 'Em que o IGLOW é diferente de outros coletes de segurança inteligentes?',
      details:
        'Além de equipado com luzes de freio e setas para ciclistas, o colete IGLOW é versátil e pode ser usado em diversas situações. É perfeito para corredores à noite ou de madrugada, garantindo que sejam vistos, e também pode ser usado em caso de pane na estrada para sinalizar sua presença com as luzes de aviso integradas. O colete inteligente IGLOW é único e foi projetado para acompanhá-lo todos os dias, oferecendo segurança e estilo onde quer que você vá.',
    },
    {
      title: 'O IGLOW é compatível com todos os tipos de bicicletas e patinetes?',
      details:
        'Sim, o colete IGLOW foi projetado para ser compatível com todos os tipos de bicicletas, incluindo cargo bikes, bicicletas elétricas potentes e patinetes. Seu controle remoto Bluetooth se fixa facilmente ao guidão, e o colete pode ser usado confortavelmente com ou sem mochila.',
    },
    {
      title:
        'Por que o colete inteligente IGLOW é tão acessível sendo fabricado na Suíça?',
      details:
        'O preço acessível do colete inteligente IGLOW é uma oferta excepcional reservada exclusivamente aos nossos primeiros apoiadores. Normalmente, o preço é mais alto, mas definimos deliberadamente esse preço atrativo para permitir que o maior número possível de pessoas se beneficie do IGLOW. Nosso objetivo é tornar o colete inteligente IGLOW uma referência mundial em segurança. Ao produzir localmente na Suíça, garantimos qualidade de primeira linha, combinando tecnologia avançada, segurança e estilo a um preço que é uma verdadeira oportunidade rara.',
    },
  ],
  hi: [
    {
      title: 'अभियान का समर्थन करने के बाद मुझे अपनी IGLOW स्मार्ट जैकेट कब और कैसे मिलेगी?',
      details:
        'अभियान समाप्त होने के बाद, हम उत्पादन प्रक्रिया और अपडेट्स के बारे में पूरी पारदर्शिता बनाए रखेंगे ताकि सभी योगदानकर्ता संतुष्ट रहें। हमारी एक प्रमुख विशेषता यह है कि उत्पादन स्थानीय रूप से किया जाएगा, इलेक्ट्रॉनिक्स और कपड़े दोनों स्विट्ज़रलैंड में बनाए जाएंगे। यह निकटता हमें उच्च गुणवत्ता और दक्षता बनाए रखने में मदद करती है, जिससे अभियान समाप्त होने के बाद आपको जल्द से जल्द आपकी IGLOW जैकेट मिल सके।',
    },
    {
      title: 'IGLOW स्मार्ट जैकेट बनाने की प्रेरणा क्या थी?',
      details:
        'IGLOW का जन्म इसके संस्थापक के व्यक्तिगत अनुभव से हुआ, जिन्होंने काम पर जाने के लिए स्कूटर खरीदने के बाद महसूस किया कि सड़क पर दिखाई न देना कितना खतरनाक है। कपड़ों और फैशन में अपनी विशेषज्ञता के साथ, लक्ज़री ब्रांड्स के साथ काम करने के अनुभव के आधार पर, IGLOW के संस्थापकों ने एक नवीन और स्टाइलिश सुरक्षा समाधान विकसित किया।',
    },
    {
      title:
        'IGLOW विभिन्न प्रकार की साइकिलों के साइकिल चालकों और उपयोगकर्ताओं की सुरक्षा को कैसे बेहतर बनाता है?',
      details:
        'IGLOW स्मार्ट जैकेट को सभी प्रकार की साइकिलों के उपयोगकर्ताओं, चाहे कार्गो बाइक हों, शक्तिशाली ई-बाइक हों या पारंपरिक साइकिलें, को इसकी इंटीग्रेटेड LED, रिफ्लेक्टिव स्ट्रिप्स और ब्लूटूथ रिमोट कंट्रोल की मदद से अत्यधिक दृश्यमान बनाने के लिए डिज़ाइन किया गया है। फैशन उद्योग के अपने अनुभव के आधार पर, डिज़ाइनरों ने सुनिश्चित किया है कि जैकेट का हर पहलू दिन और रात अधिकतम सुरक्षा के लिए कार्यक्षमता, आराम, हल्कापन और सौंदर्य को जोड़ता है।',
    },
    {
      title: 'IGLOW स्मार्ट जैकेट की विशेषताएं और लाभ क्या हैं?',
      details:
        'IGLOW एक हल्की और आरामदायक सुरक्षा जैकेट है जो उच्च गुणवत्ता वाली सामग्री से बनी है। यह कई विशेषताओं से लैस है, जिनमें चमकती LED, 48 घंटे से अधिक की स्वायत्तता वाली रिचार्जेबल बैटरी, व्यावहारिक जेबें और एक इमरजेंसी कार्ड सूचना विंडो शामिल हैं। लक्ज़री उद्योग में अनुभव रखने वाले संस्थापकों ने यह भी सुनिश्चित किया कि जैकेट को बैकपैक के ऊपर पहना जा सके, जो स्टाइल और सुरक्षा दोनों प्रदान करे।',
    },
    {
      title: 'IGLOW अन्य स्मार्ट सुरक्षा जैकेटों से किस प्रकार अलग है?',
      details:
        'साइकिल चालकों के लिए ब्रेक लाइट्स और टर्न सिग्नल से लैस होने के अलावा, IGLOW जैकेट बहुमुखी है और विभिन्न परिस्थितियों में उपयोग की जा सकती है। यह शाम या सुबह जल्दी दौड़ने वालों के लिए एकदम सही है ताकि वे दिखाई दें, और इसे सड़क किनारे खराबी की स्थिति में भी अपनी उपस्थिति दर्शाने के लिए इसकी बिल्ट-इन वार्निंग लाइट्स के साथ उपयोग किया जा सकता है। IGLOW स्मार्ट जैकेट अनूठी है और आपके साथ हर दिन रहने के लिए डिज़ाइन की गई है, जहाँ भी आप जाएं सुरक्षा और स्टाइल दोनों प्रदान करती है।',
    },
    {
      title: 'क्या IGLOW सभी प्रकार की साइकिलों और स्कूटरों के साथ संगत है?',
      details:
        'हाँ, IGLOW जैकेट सभी प्रकार की साइकिलों, जिनमें कार्गो बाइक, शक्तिशाली इलेक्ट्रिक साइकिलें और स्कूटर शामिल हैं, के साथ संगत होने के लिए डिज़ाइन की गई है। इसका ब्लूटूथ रिमोट कंट्रोल आसानी से हैंडलबार पर लग जाता है, और जैकेट को बैकपैक के साथ या बिना बैकपैक के आराम से पहना जा सकता है।',
    },
    {
      title: 'स्विट्ज़रलैंड में बने होने के बावजूद IGLOW स्मार्ट जैकेट इतनी किफायती क्यों है?',
      details:
        'IGLOW स्मार्ट जैकेट की किफायती कीमत हमारे पहले समर्थकों के लिए विशेष रूप से एक असाधारण ऑफर है। सामान्यतः, कीमत अधिक होती है, लेकिन हमने जानबूझकर यह आकर्षक कीमत तय की है ताकि अधिक से अधिक लोग IGLOW का लाभ उठा सकें। हमारा लक्ष्य IGLOW स्मार्ट जैकेट को सुरक्षा के क्षेत्र में एक वैश्विक संदर्भ बनाना है। स्विट्ज़रलैंड में स्थानीय रूप से उत्पादन करके, हम उन्नत तकनीक, सुरक्षा और स्टाइल को एक ऐसी कीमत पर जोड़ते हुए शीर्ष गुणवत्ता सुनिश्चित करते हैं जो वास्तव में एक दुर्लभ अवसर है।',
    },
  ],
  ar: [
    {
      title: 'متى وكيف سأستلم سترة IGLOW الذكية بعد دعم الحملة؟',
      details:
        'بعد انتهاء الحملة، سنحافظ على شفافية كاملة فيما يتعلق بعملية الإنتاج والتحديثات لضمان رضا جميع الداعمين. من أهم مزايانا أن الإنتاج يتم محلياً، حيث يُصنَّع كل من الإلكترونيات والأقمشة في سويسرا. يتيح لنا هذا القرب الحفاظ على جودة وكفاءة عالية، لضمان استلامك سترة IGLOW في أقرب وقت ممكن بعد انتهاء الحملة.',
    },
    {
      title: 'ما الذي ألهم ابتكار سترة IGLOW الذكية؟',
      details:
        'وُلدت IGLOW من التجربة الشخصية لمؤسسها الذي أدرك، بعد شرائه دراجة سكوتر للتنقل إلى العمل، مدى خطورة عدم الظهور بوضوح على الطريق. وبفضل خبرتهم في النسيج والموضة، بعد العمل مع علامات تجارية فاخرة، طوّر مؤسسو IGLOW حلاً أمنياً مبتكراً وأنيقاً.',
    },
    {
      title: 'كيف تحسّن IGLOW سلامة راكبي الدراجات ومستخدمي مختلف أنواع الدراجات؟',
      details:
        'صُممت سترة IGLOW الذكية لجعل مستخدمي جميع أنواع الدراجات، سواء كانت دراجات نقل البضائع أو دراجات كهربائية قوية أو دراجات تقليدية، مرئيين بشكل كبير بفضل مصابيح LED المدمجة، والشرائط العاكسة، وجهاز التحكم عن بعد عبر البلوتوث. واستناداً إلى خبرتهم في صناعة الموضة، حرص المصممون على أن يجمع كل جانب من جوانب السترة بين الوظيفة والراحة والخفة والجماليات لتحقيق أقصى درجات الأمان نهاراً وليلاً.',
    },
    {
      title: 'ما هي ميزات وفوائد سترة IGLOW الذكية؟',
      details:
        'IGLOW هي سترة أمان خفيفة الوزن ومريحة، مصنوعة من مواد عالية الجودة. وهي مزودة بالعديد من الميزات، بما في ذلك مصابيح LED وامضة، وبطارية قابلة لإعادة الشحن بعمر يتجاوز 48 ساعة، وجيوب عملية، ونافذة معلومات لبطاقة الطوارئ. كما حرص المؤسسون، ذوو الخبرة في صناعة الفخامة، على أن يمكن ارتداء السترة فوق حقيبة الظهر، لتجمع بين الأناقة والأمان.',
    },
    {
      title: 'ما الذي يميز IGLOW عن سترات الأمان الذكية الأخرى؟',
      details:
        'بالإضافة إلى تزويدها بأضواء الفرملة وإشارات الانعطاف لراكبي الدراجات، فإن سترة IGLOW متعددة الاستخدامات ويمكن استخدامها في مواقف مختلفة. وهي مثالية لعدّائي المساء أو الصباح الباكر لضمان رؤيتهم، ويمكن استخدامها أيضاً في حال تعطل على جانب الطريق للإشارة إلى وجودك بفضل أضواء التحذير المدمجة. سترة IGLOW الذكية فريدة من نوعها ومصممة لمرافقتك يومياً، موفرة الأمان والأناقة أينما ذهبت.',
    },
    {
      title: 'هل IGLOW متوافقة مع جميع أنواع الدراجات والسكوترات؟',
      details:
        'نعم، صُممت سترة IGLOW لتكون متوافقة مع جميع أنواع الدراجات، بما في ذلك دراجات نقل البضائع والدراجات الكهربائية القوية والسكوترات. يتم تثبيت جهاز التحكم عن بعد عبر البلوتوث بسهولة على المقود، ويمكن ارتداء السترة بشكل مريح مع أو بدون حقيبة ظهر.',
    },
    {
      title: 'لماذا سترة IGLOW الذكية بهذا السعر المناسب رغم تصنيعها في سويسرا؟',
      details:
        'السعر المناسب لسترة IGLOW الذكية هو عرض استثنائي مخصص حصرياً لأوائل داعمينا. عادةً ما يكون السعر أعلى، لكننا حددنا عمداً هذا السعر الجذاب للسماح لأكبر عدد ممكن من الأشخاص بالاستفادة من IGLOW. هدفنا هو جعل سترة IGLOW الذكية مرجعاً عالمياً في مجال السلامة. من خلال الإنتاج المحلي في سويسرا، نضمن جودة من الطراز الأول، تجمع بين التكنولوجيا المتقدمة والسلامة والأناقة بسعر يمثل فرصة نادرة حقاً.',
    },
  ],
  ru: [
    {
      title:
        'Когда и как я получу свой умный жилет IGLOW после поддержки кампании?',
      details:
        'После завершения кампании мы обеспечим полную прозрачность процесса производства и всех обновлений, чтобы все участники остались довольны. Одно из наших ключевых преимуществ — локальное производство: и электроника, и текстиль изготавливаются в Швейцарии. Такая близость позволяет нам поддерживать высокое качество и эффективность, гарантируя, что вы получите свой жилет IGLOW как можно скорее после окончания кампании.',
    },
    {
      title: 'Что вдохновило на создание умного жилета IGLOW?',
      details:
        'IGLOW появился благодаря личному опыту основателя, который, купив самокат для поездок на работу, осознал, насколько опасно быть незаметным на дороге. Опираясь на опыт в текстильной и модной индустрии, работая с люксовыми брендами, создатели IGLOW разработали инновационное и стильное решение для безопасности.',
    },
    {
      title:
        'Как IGLOW повышает безопасность велосипедистов и пользователей различных типов велосипедов?',
      details:
        'Умный жилет IGLOW разработан так, чтобы пользователи любых типов велосипедов — будь то грузовые велосипеды, мощные электровелосипеды или обычные велосипеды — были хорошо заметны благодаря встроенным светодиодам, светоотражающим полосам и пульту управления по Bluetooth. Опираясь на опыт в индустрии моды, дизайнеры позаботились о том, чтобы каждая деталь жилета сочетала функциональность, комфорт, лёгкость и эстетику для максимальной безопасности днём и ночью.',
    },
    {
      title: 'Какие особенности и преимущества у умного жилета IGLOW?',
      details:
        'IGLOW — это лёгкий и удобный защитный жилет, изготовленный из высококачественных материалов. Он оснащён множеством функций, включая мигающие светодиоды, аккумулятор с автономностью более 48 часов, практичные карманы и окно для информации на карте экстренной помощи. Создатели, имеющие опыт в индустрии роскоши, также позаботились о том, чтобы жилет можно было носить поверх рюкзака, сочетая стиль и безопасность.',
    },
    {
      title: 'Чем IGLOW отличается от других умных защитных жилетов?',
      details:
        'Помимо стоп-сигналов и поворотников для велосипедистов, жилет IGLOW универсален и может использоваться в различных ситуациях. Он идеально подходит для вечерних или ранних утренних пробежек, чтобы вас было видно, а также может использоваться в случае поломки на обочине дороги, чтобы обозначить своё присутствие с помощью встроенных предупреждающих огней. Умный жилет IGLOW уникален и создан, чтобы сопровождать вас каждый день, обеспечивая как безопасность, так и стиль, куда бы вы ни отправились.',
    },
    {
      title: 'Совместим ли IGLOW со всеми типами велосипедов и самокатов?',
      details:
        'Да, жилет IGLOW разработан для совместимости со всеми типами велосипедов, включая грузовые велосипеды, мощные электровелосипеды и самокаты. Пульт управления по Bluetooth легко крепится на руль, а жилет можно удобно носить как с рюкзаком, так и без него.',
    },
    {
      title:
        'Почему умный жилет IGLOW настолько доступен по цене, если он произведён в Швейцарии?',
      details:
        'Доступная цена умного жилета IGLOW — это исключительное предложение, доступное только нашим первым сторонникам. Обычно цена выше, но мы намеренно установили эту привлекательную цену, чтобы как можно больше людей могли воспользоваться IGLOW. Наша цель — сделать умный жилет IGLOW мировым эталоном в области безопасности. Производя продукцию локально в Швейцарии, мы гарантируем превосходное качество, сочетая передовые технологии, безопасность и стиль по цене, которая представляет собой поистине редкую возможность.',
    },
  ],
  zh: [
    {
      title: '支持众筹后，我将何时以及如何收到我的 IGLOW 智能背心？',
      details:
        '众筹结束后，我们将在生产流程和进度更新方面保持完全透明，以确保每一位支持者都满意。我们的核心优势之一是本地化生产：电子元件与面料均在瑞士制造。这种就近生产让我们能够保证高品质与高效率，让您在众筹结束后尽快收到您的 IGLOW 背心。',
    },
    {
      title: '是什么激发了 IGLOW 智能背心的创意？',
      details:
        'IGLOW 诞生于创始人的亲身经历：他在购买滑板车通勤上班后，意识到在道路上不被看见是多么危险。凭借在纺织与时尚领域的专业经验，并曾与奢侈品牌合作，IGLOW 的创始团队开发出了这款创新而时尚的安全解决方案。',
    },
    {
      title: 'IGLOW 如何提升骑行者及各类自行车用户的安全性？',
      details:
        'IGLOW 智能背心通过内置 LED 灯、反光条和蓝牙遥控器，让使用货运自行车、强劲电动自行车或传统自行车的用户都能高度可见。设计师凭借在时尚行业的经验，确保背心的每个细节都兼具功能性、舒适性、轻便性与美观性，实现昼夜最大化安全。',
    },
    {
      title: 'IGLOW 智能背心有哪些特性与优势？',
      details:
        'IGLOW 是一款轻便舒适的安全背心，采用高品质材料制成。它配备众多功能，包括闪烁 LED 灯、续航超过48小时的可充电电池、实用口袋以及紧急信息卡窗口。拥有奢侈品行业经验的创始团队也确保背心可以套在背包外穿着，兼具风格与安全。',
    },
    {
      title: 'IGLOW 与其他智能安全背心有何不同？',
      details:
        '除了为骑行者配备制动灯和转向灯外，IGLOW 背心用途广泛，可在多种场景下使用。它非常适合夜间或清晨跑步者，确保他们被看见，也可在道路抛锚时用内置警示灯标示您的位置。IGLOW 智能背心独一无二，旨在陪伴您的每一天，无论身在何处都能兼顾安全与风格。',
    },
    {
      title: 'IGLOW 是否兼容所有类型的自行车和滑板车？',
      details:
        '是的，IGLOW 背心设计兼容所有类型的自行车，包括货运自行车、强劲电动自行车以及滑板车。其蓝牙遥控器可轻松固定在车把上，背心也可舒适地搭配或不搭配背包穿着。',
    },
    {
      title: '既然在瑞士制造，为什么 IGLOW 智能背心的价格如此亲民？',
      details:
        'IGLOW 智能背心的亲民价格是专为我们首批支持者提供的一次特别优惠。通常价格会更高，但我们特意设定了这个有吸引力的价格，让尽可能多的人能够享受到 IGLOW。我们的目标是让 IGLOW 智能背心成为全球安全领域的标杆。通过在瑞士本地生产，我们确保顶级品质，将先进技术、安全性与风格以真正难得一见的价格相结合。',
    },
  ],
  ko: [
    {
      title: '캠페인을 후원한 후 IGLOW 스마트 조끼를 언제, 어떻게 받을 수 있나요?',
      details:
        '캠페인이 종료된 후, 저희는 생산 과정과 업데이트에 대해 완전한 투명성을 유지하여 모든 후원자분들이 만족하실 수 있도록 하겠습니다. 저희의 주요 강점 중 하나는 현지 생산입니다. 전자 부품과 원단 모두 스위스에서 제작됩니다. 이러한 근접성 덕분에 높은 품질과 효율성을 유지할 수 있어, 캠페인 종료 후 가능한 한 빨리 IGLOW 조끼를 받아보실 수 있습니다.',
    },
    {
      title: 'IGLOW 스마트 조끼를 만들게 된 계기는 무엇인가요?',
      details:
        'IGLOW는 창업자의 개인적인 경험에서 탄생했습니다. 출퇴근을 위해 스쿠터를 구입한 후, 도로에서 눈에 띄지 않는 것이 얼마나 위험한지 깨달았습니다. 섬유와 패션 분야의 전문성을 바탕으로, 명품 브랜드와 협업한 경험을 가진 IGLOW 창업팀은 혁신적이고 세련된 안전 솔루션을 개발했습니다.',
    },
    {
      title: 'IGLOW는 자전거 이용자와 다양한 유형의 자전거 사용자의 안전을 어떻게 향상시키나요?',
      details:
        'IGLOW 스마트 조끼는 내장 LED, 반사 스트립, 블루투스 리모컨을 통해 화물 자전거든, 강력한 전기 자전거든, 일반 자전거든 모든 유형의 자전거 이용자를 매우 눈에 띄게 만들어줍니다. 패션 업계에서의 경험을 바탕으로, 디자이너들은 조끼의 모든 요소가 기능성, 편안함, 가벼움, 미학을 결합하여 밤낮으로 최고의 안전을 제공하도록 설계했습니다.',
    },
    {
      title: 'IGLOW 스마트 조끼의 특징과 장점은 무엇인가요?',
      details:
        'IGLOW는 고품질 소재로 제작된 가볍고 편안한 안전 조끼입니다. 깜빡이는 LED, 48시간 이상 지속되는 충전식 배터리, 실용적인 포켓, 비상 카드 정보창 등 다양한 기능을 갖추고 있습니다. 명품 업계 경험을 가진 창업팀은 또한 조끼를 백팩 위에 착용할 수 있도록 설계하여 스타일과 안전을 동시에 제공합니다.',
    },
    {
      title: 'IGLOW는 다른 스마트 안전 조끼와 어떻게 다른가요?',
      details:
        '자전거 이용자를 위한 제동등과 방향지시등을 갖춘 것 외에도, IGLOW 조끼는 다양한 상황에서 활용할 수 있는 다재다능한 제품입니다. 저녁이나 이른 아침 러너들이 눈에 띄도록 완벽하며, 도로에서 고장이 났을 때 내장된 경고등으로 자신의 위치를 알리는 데에도 사용할 수 있습니다. IGLOW 스마트 조끼는 독보적인 제품으로, 어디를 가든 안전과 스타일을 모두 제공하며 매일 당신과 함께합니다.',
    },
    {
      title: 'IGLOW는 모든 유형의 자전거와 스쿠터에 호환되나요?',
      details:
        '네, IGLOW 조끼는 화물 자전거, 강력한 전기 자전거, 스쿠터를 포함한 모든 유형의 자전거와 호환되도록 설계되었습니다. 블루투스 리모컨은 핸들바에 쉽게 부착할 수 있으며, 조끼는 백팩 유무에 관계없이 편안하게 착용할 수 있습니다.',
    },
    {
      title: '스위스에서 제작되는데도 IGLOW 스마트 조끼가 이렇게 합리적인 가격인 이유는 무엇인가요?',
      details:
        'IGLOW 스마트 조끼의 합리적인 가격은 저희의 첫 번째 후원자분들만을 위한 특별한 혜택입니다. 일반적으로는 가격이 더 높지만, 저희는 최대한 많은 분들이 IGLOW의 혜택을 누릴 수 있도록 이 매력적인 가격을 의도적으로 설정했습니다. 저희의 목표는 IGLOW 스마트 조끼를 안전 분야의 세계적인 기준으로 만드는 것입니다. 스위스 현지 생산을 통해 최고의 품질을 보장하며, 첨단 기술, 안전성, 스타일을 진정으로 보기 드문 가격에 결합합니다.',
    },
  ],
};

const FAQSectionLogic = (lang = 'fr') => {
  const questions = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  const [openAccordionId, setopenAccordionId] = useState(-1);

  const handleAccordionChange = (id) => (event, isExpanded) => {
    setopenAccordionId(isExpanded ? id : -1);
  };

  return {
    questions,
    openAccordionId,
    handleAccordionChange,
  };
};

export default FAQSectionLogic;
