<?php
ini_set('display_errors', '0');
require_once __DIR__ . '/helpers.php';

iglow_require_method('POST');

$customer = iglow_current_customer();
if (!$customer) {
    iglow_respond(401, ['error' => 'not_authenticated']);
}

$body = iglow_json_body();
$supportedLangs = ['fr', 'de', 'it', 'en', 'es', 'nl', 'pt', 'hi', 'ar', 'ru'];
$lang = in_array($body['lang'] ?? '', $supportedLangs, true) ? $body['lang'] : 'fr';

$content = [
    'fr' => [
        'subject' => 'Merci pour votre réservation IGLOW ! 🎉',
        'greeting' => 'Bonjour %s,',
        'intro' => 'Votre réservation pour le Duo Casque + Gilet IGLOW est confirmée. Merci de nous faire confiance pour cette aventure Black Friday !',
        'orderLabel' => 'Casque + Gilet IGLOW',
        'priceOld' => 'au lieu de CHF 199.-',
        'savings' => 'Vous économisez CHF 100.-',
        'nextStepsLabel' => 'Prochaines étapes',
        'nextStepsText' => "Ouverture des ventes le 27 novembre 2026 sur iglow.swiss & Kickstarter. Vous recevrez un email dès l'expédition de votre Duo.",
        'swissNote' => 'Conçu en Suisse 🇨🇭',
        'signOff' => "Merci encore et à très vite,<br>L'équipe IGLOW",
    ],
    'de' => [
        'subject' => 'Vielen Dank für Ihre IGLOW-Reservierung! 🎉',
        'greeting' => 'Hallo %s,',
        'intro' => 'Ihre Reservierung für das Helm + Weste IGLOW Duo ist bestätigt. Danke, dass Sie uns für dieses Black-Friday-Abenteuer vertrauen!',
        'orderLabel' => 'Helm + Weste IGLOW',
        'priceOld' => 'statt CHF 199.-',
        'savings' => 'Sie sparen CHF 100.-',
        'nextStepsLabel' => 'Nächste Schritte',
        'nextStepsText' => 'Verkaufsstart am 27. November 2026 auf iglow.swiss & Kickstarter. Sie erhalten eine E-Mail, sobald Ihr Duo versendet wird.',
        'swissNote' => 'Entwickelt in der Schweiz 🇨🇭',
        'signOff' => 'Nochmals vielen Dank, bis bald,<br>Ihr IGLOW-Team',
    ],
    'it' => [
        'subject' => 'Grazie per la tua prenotazione IGLOW! 🎉',
        'greeting' => 'Ciao %s,',
        'intro' => 'La tua prenotazione per il Duo Casco + Gilet IGLOW è confermata. Grazie per la fiducia in questa avventura del Black Friday!',
        'orderLabel' => 'Casco + Gilet IGLOW',
        'priceOld' => 'invece di CHF 199.-',
        'savings' => 'Risparmi CHF 100.-',
        'nextStepsLabel' => 'Prossimi passi',
        'nextStepsText' => "Apertura delle vendite il 27 novembre 2026 su iglow.swiss & Kickstarter. Riceverai un'email non appena il tuo Duo verrà spedito.",
        'swissNote' => 'Progettato in Svizzera 🇨🇭',
        'signOff' => 'Grazie ancora e a presto,<br>Il team IGLOW',
    ],
    'en' => [
        'subject' => 'Thank you for your IGLOW reservation! 🎉',
        'greeting' => 'Hi %s,',
        'intro' => 'Your reservation for the Helmet + Vest IGLOW Duo is confirmed. Thank you for trusting us with this Black Friday adventure!',
        'orderLabel' => 'Helmet + Vest IGLOW',
        'priceOld' => 'instead of CHF 199.-',
        'savings' => "You're saving CHF 100.-",
        'nextStepsLabel' => 'Next steps',
        'nextStepsText' => "Sales open November 27, 2026 on iglow.swiss & Kickstarter. You'll receive an email as soon as your Duo ships.",
        'swissNote' => 'Designed in Switzerland 🇨🇭',
        'signOff' => 'Thanks again and see you soon,<br>The IGLOW Team',
    ],
    'es' => [
        'subject' => '¡Gracias por tu reserva IGLOW! 🎉',
        'greeting' => 'Hola %s,',
        'intro' => 'Tu reserva para el Duo Casco + Chaleco IGLOW está confirmada. ¡Gracias por confiar en nosotros en esta aventura de Black Friday!',
        'orderLabel' => 'Casco + Chaleco IGLOW',
        'priceOld' => 'en lugar de CHF 199.-',
        'savings' => 'Ahorras CHF 100.-',
        'nextStepsLabel' => 'Próximos pasos',
        'nextStepsText' => 'Apertura de ventas el 27 de noviembre de 2026 en iglow.swiss y Kickstarter. Recibirás un email en cuanto se envíe tu Duo.',
        'swissNote' => 'Diseñado en Suiza 🇨🇭',
        'signOff' => 'Gracias de nuevo y hasta pronto,<br>El equipo IGLOW',
    ],
    'nl' => [
        'subject' => 'Bedankt voor uw IGLOW-reservering! 🎉',
        'greeting' => 'Hallo %s,',
        'intro' => 'Uw reservering voor de Helm + Vest IGLOW Duo is bevestigd. Bedankt voor uw vertrouwen tijdens dit Black Friday-avontuur!',
        'orderLabel' => 'Helm + Vest IGLOW',
        'priceOld' => 'in plaats van CHF 199.-',
        'savings' => 'U bespaart CHF 100.-',
        'nextStepsLabel' => 'Volgende stappen',
        'nextStepsText' => 'Verkoop start op 27 november 2026 op iglow.swiss & Kickstarter. U ontvangt een e-mail zodra uw Duo wordt verzonden.',
        'swissNote' => 'Ontworpen in Zwitserland 🇨🇭',
        'signOff' => 'Nogmaals bedankt en tot snel,<br>Het IGLOW-team',
    ],
    'pt' => [
        'subject' => 'Obrigado pela sua reserva IGLOW! 🎉',
        'greeting' => 'Olá %s,',
        'intro' => 'Sua reserva para o Duo Capacete + Colete IGLOW está confirmada. Obrigado por confiar em nós nesta aventura da Black Friday!',
        'orderLabel' => 'Capacete + Colete IGLOW',
        'priceOld' => 'em vez de CHF 199.-',
        'savings' => 'Você economiza CHF 100.-',
        'nextStepsLabel' => 'Próximos passos',
        'nextStepsText' => 'Abertura das vendas em 27 de novembro de 2026 em iglow.swiss & Kickstarter. Você receberá um email assim que seu Duo for enviado.',
        'swissNote' => 'Concebido na Suíça 🇨🇭',
        'signOff' => 'Obrigado novamente e até breve,<br>A equipe IGLOW',
    ],
    'hi' => [
        'subject' => 'आपके IGLOW आरक्षण के लिए धन्यवाद! 🎉',
        'greeting' => 'नमस्ते %s,',
        'intro' => 'आपका हेलमेट + जैकेट IGLOW डुओ आरक्षण पुष्टि हो गया है। इस ब्लैक फ्राइडे सफर के लिए हम पर भरोसा करने हेतु धन्यवाद!',
        'orderLabel' => 'हेलमेट + जैकेट IGLOW',
        'priceOld' => 'CHF 199.- के बजाय',
        'savings' => 'आप CHF 100.- की बचत कर रहे हैं',
        'nextStepsLabel' => 'अगले कदम',
        'nextStepsText' => 'बिक्री 27 नवंबर 2026 को iglow.swiss और Kickstarter पर शुरू होगी। शिपमेंट होते ही आपको एक ईमेल प्राप्त होगा।',
        'swissNote' => 'स्विट्जरलैंड में डिज़ाइन किया गया 🇨🇭',
        'signOff' => 'फिर से धन्यवाद, जल्द मिलते हैं,<br>IGLOW टीम',
    ],
    'ar' => [
        'subject' => 'شكراً لحجزك في IGLOW! 🎉',
        'greeting' => 'مرحباً %s،',
        'intro' => 'تم تأكيد حجزك لثنائي خوذة + سترة IGLOW. شكراً لثقتك بنا في مغامرة الجمعة السوداء هذه!',
        'orderLabel' => 'خوذة + سترة IGLOW',
        'priceOld' => 'بدلاً من CHF 199.-',
        'savings' => 'أنت توفر CHF 100.-',
        'nextStepsLabel' => 'الخطوات التالية',
        'nextStepsText' => 'افتتاح المبيعات في 27 نوفمبر 2026 على iglow.swiss وKickstarter. ستتلقى بريداً إلكترونياً فور شحن ثنائيك.',
        'swissNote' => 'مصمم في سويسرا 🇨🇭',
        'signOff' => 'شكراً مجدداً ونراك قريباً،<br>فريق IGLOW',
        'rtl' => true,
    ],
    'ru' => [
        'subject' => 'Спасибо за ваше бронирование IGLOW! 🎉',
        'greeting' => 'Здравствуйте, %s!',
        'intro' => 'Ваше бронирование комплекта Шлем + Жилет IGLOW подтверждено. Спасибо, что доверились нам в этом приключении Black Friday!',
        'orderLabel' => 'Шлем + Жилет IGLOW',
        'priceOld' => 'вместо CHF 199.-',
        'savings' => 'Вы экономите CHF 100.-',
        'nextStepsLabel' => 'Следующие шаги',
        'nextStepsText' => 'Старт продаж 27 ноября 2026 года на iglow.swiss и Kickstarter. Вы получите письмо, как только ваш комплект будет отправлен.',
        'swissNote' => 'Разработано в Швейцарии 🇨🇭',
        'signOff' => 'Еще раз спасибо, до скорой встречи,<br>Команда IGLOW',
    ],
];

$t = $content[$lang];
$firstName = htmlspecialchars($customer['first_name'], ENT_QUOTES, 'UTF-8');
$greeting = sprintf($t['greeting'], $firstName);
$dir = !empty($t['rtl']) ? 'rtl' : 'ltr';
$align = !empty($t['rtl']) ? 'right' : 'left';

$html = <<<HTML
<!DOCTYPE html>
<html lang="{$lang}" dir="{$dir}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:16px; overflow:hidden; max-width:600px; width:100%;">
          <tr>
            <td style="background-color:#000000; padding:32px; text-align:center;">
              <span style="font-size:32px; font-weight:900; color:#ffffff; letter-spacing:1px;">IGLOW<span style="color:#E30613;">®</span></span>
            </td>
          </tr>
          <tr>
            <td style="padding:32px; text-align:{$align}; direction:{$dir};">
              <p style="font-size:20px; font-weight:bold; color:#111111; margin:0 0 16px;">{$greeting}</p>
              <p style="font-size:16px; line-height:1.6; color:#333333; margin:0 0 24px;">{$t['intro']}</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#111111; border-radius:12px; margin-bottom:24px;">
                <tr>
                  <td style="padding:24px; text-align:center;">
                    <p style="font-size:18px; font-weight:bold; color:#ffffff; margin:0 0 8px;">{$t['orderLabel']}</p>
                    <p style="font-size:14px; color:#aaaaaa; text-decoration:line-through; margin:0;">{$t['priceOld']}</p>
                    <p style="font-size:36px; font-weight:900; color:#E30613; margin:4px 0;">CHF 99.-</p>
                    <p style="font-size:16px; font-weight:bold; color:#28a745; margin:0;">{$t['savings']}</p>
                  </td>
                </tr>
              </table>

              <p style="font-size:16px; font-weight:bold; color:#111111; margin:0 0 8px;">{$t['nextStepsLabel']}</p>
              <p style="font-size:15px; line-height:1.6; color:#333333; margin:0 0 24px;">{$t['nextStepsText']}</p>

              <p style="font-size:15px; font-weight:bold; color:#111111; text-align:center; margin:0 0 24px;">{$t['swissNote']}</p>

              <p style="font-size:15px; line-height:1.6; color:#333333; margin:0;">{$t['signOff']}</p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f4f4f4; padding:20px; text-align:center;">
              <p style="font-size:12px; color:#888888; margin:0;">IGLOW® Suisse &middot; BP590, 1001 Lausanne, Suisse</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

$encodedSubject = '=?UTF-8?B?' . base64_encode($t['subject']) . '?=';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: IGLOW <noreply@iglow.swiss>\r\n";

if (!function_exists('mail')) {
    // mail() is disabled on this host; nothing we can do until a proper
    // transport (SMTP account or transactional email API) is configured.
    iglow_respond(200, ['success' => false, 'reason' => 'mail_unavailable']);
}

$sent = mail($customer['email'], $encodedSubject, $html, $headers);

iglow_respond(200, ['success' => (bool)$sent]);
