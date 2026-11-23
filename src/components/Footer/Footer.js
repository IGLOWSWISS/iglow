import React from 'react';
import { Avatar, Box, Container, Divider, Typography } from '@mui/material';

import Palette from '../../theme/palette';
import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

import NoisyContainer from '../NoisyContainer/NoisyContainer';
import Banner from '../Banner/Banner';
import SectionTitle from '../SectionTitle/SectionTitle';
import EmptySpace from '../EmptySpace/EmptySpace';
import NewsletterSub from '../NewsletterSub/NewsletterSub';
import { HashLink } from 'react-router-hash-link';

const TRANSLATIONS = {
  fr: {
    alertTitle: 'Recevez une alerte',
    alertHighlight: 'au lancement',
    legalNotice: 'Mentions légales',
    privacyPolicy: 'Politique de confidentialité',
    termsOfSale: 'Conditions générales de vente',
  },
  de: {
    alertTitle: 'Lassen Sie sich benachrichtigen',
    alertHighlight: 'zum Start',
    legalNotice: 'Impressum',
    privacyPolicy: 'Datenschutzrichtlinie',
    termsOfSale: 'Allgemeine Geschäftsbedingungen',
  },
  it: {
    alertTitle: 'Ricevi un avviso',
    alertHighlight: 'al lancio',
    legalNotice: 'Note legali',
    privacyPolicy: 'Informativa sulla privacy',
    termsOfSale: 'Condizioni generali di vendita',
  },
  en: {
    alertTitle: 'Get an alert when',
    alertHighlight: 'we launch',
    legalNotice: 'Legal Notice',
    privacyPolicy: 'Privacy Policy',
    termsOfSale: 'Terms of Sale',
  },
  es: {
    alertTitle: 'Recibe una alerta',
    alertHighlight: 'en el lanzamiento',
    legalNotice: 'Aviso legal',
    privacyPolicy: 'Política de privacidad',
    termsOfSale: 'Condiciones generales de venta',
  },
  nl: {
    alertTitle: 'Ontvang een melding',
    alertHighlight: 'bij de lancering',
    legalNotice: 'Juridische kennisgeving',
    privacyPolicy: 'Privacybeleid',
    termsOfSale: 'Algemene verkoopvoorwaarden',
  },
  pt: {
    alertTitle: 'Receba um alerta',
    alertHighlight: 'no lançamento',
    legalNotice: 'Avisos legais',
    privacyPolicy: 'Política de privacidade',
    termsOfSale: 'Termos e condições de venda',
  },
  hi: {
    alertTitle: 'लॉन्च होने पर',
    alertHighlight: 'सूचना पाएं',
    legalNotice: 'कानूनी सूचना',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfSale: 'बिक्री की शर्तें',
  },
  ar: {
    alertTitle: 'احصل على تنبيه',
    alertHighlight: 'عند الإطلاق',
    legalNotice: 'إشعار قانوني',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfSale: 'شروط البيع',
  },
  ru: {
    alertTitle: 'Получите уведомление',
    alertHighlight: 'о запуске',
    legalNotice: 'Юридическая информация',
    privacyPolicy: 'Политика конфиденциальности',
    termsOfSale: 'Условия продажи',
  },
  zh: {
    alertTitle: '获取提醒',
    alertHighlight: '产品上市',
    legalNotice: '法律声明',
    privacyPolicy: '隐私政策',
    termsOfSale: '销售条款',
  },
  ko: {
    alertTitle: '출시 알림',
    alertHighlight: '받아보기',
    legalNotice: '법적 고지',
    privacyPolicy: '개인정보 처리방침',
    termsOfSale: '판매 약관',
  },
};

function Footer({ lang = 'en' }) {
  const { STATE_GREY, NIGHT } = Palette();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  return (
    <NoisyContainer id='join'>
      <Banner variant='black' top='min(-6vw, -50px)' />
      <Container
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <SectionTitle title={t.alertTitle} highlight={t.alertHighlight} />
        <EmptySpace under='h2' />
        <NewsletterSub lang={lang} />
        <Divider sx={{ width: '100%', mt: 5 }} />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            mt: 3,
            mb: 10,
          }}
        >
          <Box
            color={STATE_GREY}
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'row',
              },
              gap: 5,
            }}
          >
            <Typography variant='subtitle2'>©IGLOW® 2026</Typography>
            <Typography
              variant='subtitle2'
              component={HashLink}
              sx={{ textDecoration: 'none', color: 'inherit' }}
              to='/legal-notices'
            >
              {t.legalNotice}
            </Typography>
            <Typography
              variant='subtitle2'
              component={HashLink}
              to='/privacy-policy'
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              {t.privacyPolicy}
            </Typography>
            <Typography
              variant='subtitle2'
              component={HashLink}
              to='/terms-of-sale'
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              {t.termsOfSale}
            </Typography>
          </Box>
          <Box
            color={STATE_GREY}
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'row',
              },
              gap: 5,
            }}
          >
            <Avatar sx={{ backgroundColor: NIGHT }}>
              <FaInstagram
                component='a'
                href='https://www.instagram.com/okalo.ch'
                color='white'
              />
            </Avatar>
            <Avatar sx={{ backgroundColor: NIGHT }}>
              <FaTiktok
                component='a'
                href='https://www.tiktok.com/'
                color='white'
              />
            </Avatar>
            <Avatar sx={{ backgroundColor: NIGHT }}>
              <FaYoutube
                component='a'
                href='https://www.youtube.com/'
                color='white'
              />
            </Avatar>
          </Box>
        </Box>
      </Container>
    </NoisyContainer>
  );
}

export default Footer;
