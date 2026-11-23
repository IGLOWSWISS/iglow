import React, { useCallback, useState } from 'react';
import axios from 'axios';
import {
  BREVO_API_KEY,
  BREVO_API_URL,
  BREVO_LIST_ID,
  SENDER_EMAIL,
} from '../../config/AppConfig';

import { Box, Button, Checkbox, Typography } from '@mui/material';
import { PiBellBold, PiCheckBold } from 'react-icons/pi';
import Palette from '../../theme/palette';
import { useForm } from 'react-hook-form';
import FormField from '../FormField/FormField';
import { HashLink } from 'react-router-hash-link';

const TRANSLATIONS = {
  fr: {
    consentPrefix: "J'ai lu et j'accepte",
    consentLink: 'la politique de confidentialité',
    emailRequired: "L'adresse email est requise",
    emailInvalid: 'Adresse email invalide',
    consentRequiredError:
      'Vous devez accepter la politique de confidentialité ci-dessus',
    getAlert: 'Être alerté',
    subscribed: 'Inscrit !',
  },
  de: {
    consentPrefix: 'Ich habe gelesen und akzeptiere',
    consentLink: 'die Datenschutzrichtlinie',
    emailRequired: 'E-Mail-Adresse ist erforderlich',
    emailInvalid: 'Ungültige E-Mail-Adresse',
    consentRequiredError:
      'Sie müssen die obige Datenschutzrichtlinie akzeptieren',
    getAlert: 'Benachrichtigen lassen',
    subscribed: 'Angemeldet!',
  },
  it: {
    consentPrefix: 'Ho letto e accetto',
    consentLink: "l'informativa sulla privacy",
    emailRequired: "L'indirizzo email è obbligatorio",
    emailInvalid: 'Indirizzo email non valido',
    consentRequiredError: "Devi accettare l'informativa sulla privacy sopra",
    getAlert: 'Ricevi un avviso',
    subscribed: 'Iscritto!',
  },
  en: {
    consentPrefix: 'I have read and I accept',
    consentLink: 'the privacy policy',
    emailRequired: 'Email address is required',
    emailInvalid: 'Invalid email address',
    consentRequiredError: 'You must accept the privacy policy above',
    getAlert: 'Get an alert',
    subscribed: 'Subscribed!',
  },
  es: {
    consentPrefix: 'He leído y acepto',
    consentLink: 'la política de privacidad',
    emailRequired: 'La dirección de email es obligatoria',
    emailInvalid: 'Dirección de email no válida',
    consentRequiredError: 'Debes aceptar la política de privacidad anterior',
    getAlert: 'Recibir una alerta',
    subscribed: '¡Suscrito!',
  },
  nl: {
    consentPrefix: 'Ik heb het gelezen en accepteer',
    consentLink: 'het privacybeleid',
    emailRequired: 'E-mailadres is verplicht',
    emailInvalid: 'Ongeldig e-mailadres',
    consentRequiredError: 'U moet het bovenstaande privacybeleid accepteren',
    getAlert: 'Meld mij aan',
    subscribed: 'Aangemeld!',
  },
  pt: {
    consentPrefix: 'Li e aceito',
    consentLink: 'a política de privacidade',
    emailRequired: 'O endereço de email é obrigatório',
    emailInvalid: 'Endereço de email inválido',
    consentRequiredError: 'Você deve aceitar a política de privacidade acima',
    getAlert: 'Receber um alerta',
    subscribed: 'Inscrito!',
  },
  hi: {
    consentPrefix: 'मैंने पढ़ लिया है और स्वीकार करता/करती हूं',
    consentLink: 'गोपनीयता नीति',
    emailRequired: 'ईमेल पता आवश्यक है',
    emailInvalid: 'अमान्य ईमेल पता',
    consentRequiredError: 'आपको ऊपर दी गई गोपनीयता नीति स्वीकार करनी होगी',
    getAlert: 'सूचना पाएं',
    subscribed: 'सब्सक्राइब हो गया!',
  },
  ar: {
    consentPrefix: 'لقد قرأت وأوافق على',
    consentLink: 'سياسة الخصوصية',
    emailRequired: 'عنوان البريد الإلكتروني مطلوب',
    emailInvalid: 'عنوان بريد إلكتروني غير صالح',
    consentRequiredError: 'يجب عليك قبول سياسة الخصوصية أعلاه',
    getAlert: 'احصل على تنبيه',
    subscribed: 'تم الاشتراك!',
  },
  ru: {
    consentPrefix: 'Я прочитал(а) и принимаю',
    consentLink: 'политику конфиденциальности',
    emailRequired: 'Требуется адрес электронной почты',
    emailInvalid: 'Неверный адрес электронной почты',
    consentRequiredError: 'Вы должны принять политику конфиденциальности выше',
    getAlert: 'Получать уведомления',
    subscribed: 'Подписка оформлена!',
  },
  zh: {
    consentPrefix: '我已阅读并同意',
    consentLink: '隐私政策',
    emailRequired: '请填写邮箱地址',
    emailInvalid: '邮箱地址无效',
    consentRequiredError: '您必须同意上方的隐私政策',
    getAlert: '获取提醒',
    subscribed: '已订阅！',
  },
  ko: {
    consentPrefix: '읽었으며 동의합니다',
    consentLink: '개인정보 처리방침',
    emailRequired: '이메일 주소를 입력해 주세요',
    emailInvalid: '유효하지 않은 이메일 주소입니다',
    consentRequiredError: '위의 개인정보 처리방침에 동의해야 합니다',
    getAlert: '알림 받기',
    subscribed: '구독 완료!',
  },
};

function NewsletterSub({ lang = 'fr' }) {
  const { STATE_GREY } = Palette();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  const [policyChecked, setPolicyChecked] = useState(false);
  const handlePolicyCheck = useCallback(() => {
    setPolicyChecked((p) => !p);
  }, []);

  const [subscribed, setSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const postEmail = ({ email }) => {
    if (!policyChecked) {
      setError('email', {
        type: 'custom',
        message: t.consentRequiredError,
      });
      return;
    }
    console.log(email);

    // Data to send
    const data = {
      email: email,
      listIds: [parseInt(BREVO_LIST_ID)],
      updateEnabled: true,
    };

    // Set up headers
    const headers = {
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY,
    };

    const emailPayload = {
      sender: { name: 'Iglow', email: SENDER_EMAIL },
      to: [{ email: data.email }],
      subject: 'Get Ready to Discover the IGLOW Smart Vest!',
      htmlContent: `<body>
    <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0">
                    <tr>
                        <td>
                            <h1>Get Ready to Discover the IGLOW Smart Vest!</h1>
                            <p>Dear Future Backers,</p>
                            <p>Thank you for signing up to be notified about the launch of the world’s first reflective smart vest with integrated brake lights and turn signals! 🎉</p>
                            <p>We’re thrilled to let you know that our Kickstarter campaign launches on November 27, 2026! As a future backer, you’ll be among the first to know when sales go live and have the chance to reserve your IGLOW Smart Vest at an exclusive price. 🚀</p>

                            <h2>What can you expect?</h2>
                            <ul>
                                <li>A special offer reserved just for you, our early supporters.</li>
                                <li>A vest that will revolutionize your safety on the road with Swiss precision technology.</li>
                                <li>A 50% discount during the campaign.</li>
                            </ul>
                            
                            <p>Stay tuned! We’ll be sending you an email soon with all the details on how to access the campaign and secure your IGLOW vest.</p>
                            
                            <p>Thank you for your interest and for joining us on this exciting journey!</p>
                            
                            <p>Warm regards,</p>
                            <p>The IGLOW Team<br>
                               Lausanne, Switzerland<br>
                               iglow.swiss
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>`,
    };

    // Make the API call
    axios
      .post(BREVO_API_URL + '/contacts', data, { headers })
      .then((response) => {
        axios
          .post(BREVO_API_URL + '/smtp/email', emailPayload, {
            headers: {
              'Content-Type': 'application/json',
              'api-key': BREVO_API_KEY,
            },
          })
          .then((response) => {
            setSubscribed(true);
          })
          .catch((error) => {
            console.error(error.response);
          });
      })
      .catch((error) => {
        console.error(error.response);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
        maxWidth: '600px',
      }}
    >
      <Typography
        variant='body2'
        color={STATE_GREY}
        fontSize='min(3vw, 20px)'
        onClick={handlePolicyCheck}
        sx={{ cursor: 'pointer' }}
      >
        <Checkbox
          style={{ position: 'relative', bottom: '2px' }}
          checked={policyChecked}
        />
        {t.consentPrefix}{' '}
        <Typography
          component={HashLink}
          to='/privacy-policy#start'
          variant='body2'
          fontSize='min(3vw, 20px)'
          color='primary'
        >
          {t.consentLink}
        </Typography>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '20px',
          alignItems: 'center',
        }}
        component='form'
        onSubmit={handleSubmit(postEmail)}
      >
        <FormField
          noLabel
          erroAbsPos
          variant='outlined'
          label={t.email}
          register={register}
          id='email'
          options={{
            required: t.emailRequired,
            pattern: {
              message: t.emailInvalid,
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,10}$/,
            },
          }}
          error={errors.email}
          sx={{ borderRadius: 20 }}
        />
        <Button
          variant='contained'
          startIcon={subscribed ? <PiCheckBold /> : <PiBellBold />}
          onClick={handleSubmit(postEmail)}
        >
          {subscribed ? t.subscribed : t.getAlert}
        </Button>
      </Box>
    </Box>
  );
}

export default NewsletterSub;
