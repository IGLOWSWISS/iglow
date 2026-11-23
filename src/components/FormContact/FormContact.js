import { Box, Button } from '@mui/material';

import { PiCheckBold, PiPaperPlaneTiltBold } from 'react-icons/pi';
import FormField from '../FormField/FormField';
import FormContactLogic from './FormContactLogic';

const TRANSLATIONS = {
  fr: {
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    messagePlaceholder: 'Votre message',
    nameRequired: 'Le nom est requis',
    emailRequired: "L'adresse email est requise",
    emailInvalid: 'Adresse email invalide',
    messageRequired: 'Le message est vide',
    send: 'Envoyer',
    sent: 'Envoyé',
  },
  de: {
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    messagePlaceholder: 'Ihre Nachricht',
    nameRequired: 'Name ist erforderlich',
    emailRequired: 'E-Mail-Adresse ist erforderlich',
    emailInvalid: 'Ungültige E-Mail-Adresse',
    messageRequired: 'Die Nachricht ist leer',
    send: 'Senden',
    sent: 'Gesendet',
  },
  it: {
    name: 'Nome',
    email: 'Email',
    message: 'Messaggio',
    messagePlaceholder: 'Il tuo messaggio',
    nameRequired: 'Il nome è obbligatorio',
    emailRequired: "L'indirizzo email è obbligatorio",
    emailInvalid: 'Indirizzo email non valido',
    messageRequired: 'Il messaggio è vuoto',
    send: 'Invia',
    sent: 'Inviato',
  },
  en: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    messagePlaceholder: 'Your message',
    nameRequired: 'Name is required',
    emailRequired: 'Email address is required',
    emailInvalid: 'Invalid email address',
    messageRequired: 'Message is empty',
    send: 'Send',
    sent: 'Sent',
  },
  es: {
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    messagePlaceholder: 'Tu mensaje',
    nameRequired: 'El nombre es obligatorio',
    emailRequired: 'La dirección de email es obligatoria',
    emailInvalid: 'Dirección de email no válida',
    messageRequired: 'El mensaje está vacío',
    send: 'Enviar',
    sent: 'Enviado',
  },
  nl: {
    name: 'Naam',
    email: 'E-mail',
    message: 'Bericht',
    messagePlaceholder: 'Uw bericht',
    nameRequired: 'Naam is verplicht',
    emailRequired: 'E-mailadres is verplicht',
    emailInvalid: 'Ongeldig e-mailadres',
    messageRequired: 'Bericht is leeg',
    send: 'Versturen',
    sent: 'Verzonden',
  },
  pt: {
    name: 'Nome',
    email: 'Email',
    message: 'Mensagem',
    messagePlaceholder: 'Sua mensagem',
    nameRequired: 'O nome é obrigatório',
    emailRequired: 'O endereço de email é obrigatório',
    emailInvalid: 'Endereço de email inválido',
    messageRequired: 'A mensagem está vazia',
    send: 'Enviar',
    sent: 'Enviado',
  },
  hi: {
    name: 'नाम',
    email: 'ईमेल',
    message: 'संदेश',
    messagePlaceholder: 'आपका संदेश',
    nameRequired: 'नाम आवश्यक है',
    emailRequired: 'ईमेल पता आवश्यक है',
    emailInvalid: 'अमान्य ईमेल पता',
    messageRequired: 'संदेश खाली है',
    send: 'भेजें',
    sent: 'भेज दिया गया',
  },
  ar: {
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    messagePlaceholder: 'رسالتك',
    nameRequired: 'الاسم مطلوب',
    emailRequired: 'عنوان البريد الإلكتروني مطلوب',
    emailInvalid: 'عنوان بريد إلكتروني غير صالح',
    messageRequired: 'الرسالة فارغة',
    send: 'إرسال',
    sent: 'تم الإرسال',
  },
  ru: {
    name: 'Имя',
    email: 'Email',
    message: 'Сообщение',
    messagePlaceholder: 'Ваше сообщение',
    nameRequired: 'Имя обязательно',
    emailRequired: 'Требуется адрес электронной почты',
    emailInvalid: 'Неверный адрес электронной почты',
    messageRequired: 'Сообщение пустое',
    send: 'Отправить',
    sent: 'Отправлено',
  },
  zh: {
    name: '姓名',
    email: '邮箱',
    message: '留言',
    messagePlaceholder: '您的留言',
    nameRequired: '请填写姓名',
    emailRequired: '请填写邮箱地址',
    emailInvalid: '邮箱地址无效',
    messageRequired: '留言内容不能为空',
    send: '发送',
    sent: '已发送',
  },
  ko: {
    name: '이름',
    email: '이메일',
    message: '메시지',
    messagePlaceholder: '메시지를 입력하세요',
    nameRequired: '이름을 입력해 주세요',
    emailRequired: '이메일 주소를 입력해 주세요',
    emailInvalid: '유효하지 않은 이메일 주소입니다',
    messageRequired: '메시지를 입력해 주세요',
    send: '보내기',
    sent: '전송 완료',
  },
};

function FormContact({ lang = 'fr' }) {
  const { register, handleSubmit, onSubmit, errors, emailSent } =
    FormContactLogic();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        flex: 1,
      }}
    >
      <FormField
        label={t.name}
        register={register}
        id='name'
        options={{ required: t.nameRequired }}
        error={errors.name}
      />
      <FormField
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
      />
      <FormField
        label={t.message}
        placeholder={t.messagePlaceholder}
        rows={8}
        register={register}
        id='message'
        options={{
          required: t.messageRequired,
        }}
        error={errors.message}
      />
      <Button
        LinkComponent='input'
        type='submit'
        variant='contained'
        startIcon={emailSent ? <PiCheckBold /> : <PiPaperPlaneTiltBold />}
        sx={{
          cursor: emailSent ? 'default' : 'pointer',
        }}
      >
        {emailSent ? t.sent : t.send}
      </Button>
    </Box>
  );
}
export default FormContact;
