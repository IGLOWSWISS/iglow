import React, { useState, useEffect } from 'react';
import './Reserve.css';
import duoHelmetVest from '../../assets/images/iglow-duo-helmet-vest.jpg';
import { detectCurrency } from '../../utils/geoCurrency';

const PRICE_ID_CHF = 'price_1SGkg7ClH97ISv2ltpMYi4DE';
const PRICE_ID_EUR = 'price_1SGkt9ClH97ISv2l2BPtn3ke';
const PRICE_ID_USD = 'price_1SGkweClH97ISv2lbwx0YlrE';
const PRICE_ID_GBP = 'price_1Ueb6AClH97ISv2lLYYhHXZz';

const PRICE_ID_BY_CURRENCY = {
  CHF: PRICE_ID_CHF,
  EUR: PRICE_ID_EUR,
  USD: PRICE_ID_USD,
  GBP: PRICE_ID_GBP,
};

const Reserve = () => {
  const [currentLang, setCurrentLang] = useState('fr');
  const [reservationCounter] = useState(167);

  const detectPriceId = () =>
    detectCurrency().then((currency) => PRICE_ID_BY_CURRENCY[currency] || PRICE_ID_CHF);

  // Warm the lookup as soon as the page loads so it's already resolved
  // by the time the visitor reaches the reserve button.
  useEffect(() => {
    detectPriceId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [account, setAccount] = useState(null);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [authMode, setAuthMode] = useState('register');
  const [authForm, setAuthForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: '',
    phone: '',
    address: '',
    addressLine2: '',
    postalCode: '',
    city: '',
    country: '',
    password: '',
    passwordConfirm: '',
    consent: false,
  });
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const proceedToCheckout = () => {
    detectPriceId().then((priceId) => redirectToStripe(priceId));
  };

  useEffect(() => {
    fetch('/api/me.php')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.authenticated) {
          setAccount(data.customer);
          proceedToCheckout();
        } else {
          setAuthError('');
          setShowAccountModal(true);
        }
      })
      .catch(() => {
        setAuthError('');
        setShowAccountModal(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAuthFieldChange = (field) => (e) => {
    const value = field === 'consent' ? e.target.checked : e.target.value;
    setAuthForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    const t = authContent[currentLang] || authContent.fr;
    setAuthError('');

    if (authMode === 'register') {
      if (authForm.email !== authForm.emailConfirm) {
        setAuthError(t.errorEmailMismatch);
        return;
      }
      if (authForm.password.length < 8) {
        setAuthError(t.errorPasswordTooShort);
        return;
      }
      if (authForm.password !== authForm.passwordConfirm) {
        setAuthError(t.errorPasswordMismatch);
        return;
      }
      if (!authForm.consent) {
        setAuthError(t.errorConsentRequired);
        return;
      }
    }

    setAuthLoading(true);
    try {
      const endpoint =
        authMode === 'register' ? '/api/register.php' : '/api/login.php';
      const payload =
        authMode === 'register'
          ? authForm
          : { email: authForm.email, password: authForm.password };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        const errorMap = {
          email_taken: t.errorEmailTaken,
          invalid_credentials: t.errorInvalidCredentials,
          account_locked: t.errorAccountLocked,
        };
        setAuthError(errorMap[data.error] || t.errorGeneric);
        setAuthLoading(false);
        return;
      }

      setAccount(data.customer);
      setShowAccountModal(false);
      setAuthLoading(false);
      proceedToCheckout();
    } catch (err) {
      setAuthError((authContent[currentLang] || authContent.fr).errorGeneric);
      setAuthLoading(false);
    }
  };

  const languages = [
    { code: 'fr', name: 'FR', flagClass: 'flag-fr' },
    { code: 'de', name: 'DE', flagClass: 'flag-de' },
    { code: 'it', name: 'IT', flagClass: 'flag-it' },
    { code: 'en', name: 'EN', flagClass: 'flag-en' },
    { code: 'es', name: 'ES', flagClass: 'flag-es' },
    { code: 'nl', name: 'NL', flagClass: 'flag-nl' },
    { code: 'pt', name: 'PT', flagClass: 'flag-pt' },
    { code: 'hi', name: 'HI', flagClass: 'flag-hi' },
    { code: 'ar', name: 'AR', flagClass: 'flag-ar' },
    { code: 'ru', name: 'RU', flagClass: 'flag-ru' },
    { code: 'zh', name: 'ZH', flagClass: 'flag-zh' },
    { code: 'ko', name: 'KO', flagClass: 'flag-ko' },
  ];

  const authContent = {
    fr: {
      createAccount: 'Informations de livraison',
      orLogin: 'Vous avez déjà un compte ?',
      loginLink: 'Connectez-vous',
      createLink: 'Créer un compte',
      loginTitle: 'Connexion',
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Email',
      emailConfirm: "Confirmer l'email",
      phone: 'Téléphone',
      address: 'Adresse',
      addressLine2: "Complément d'adresse (optionnel)",
      postalCode: 'Code postal',
      city: 'Ville',
      country: 'Pays',
      password: 'Mot de passe',
      passwordConfirm: 'Confirmer le mot de passe',
      consent: "J'accepte la",
      consentLink: 'politique de confidentialité',
      consentTerms: 'ainsi que les',
      termsLink: 'conditions générales de vente',
      submitRegister: 'Créer mon compte et continuer',
      submitLogin: 'Se connecter et continuer',
      close: 'Fermer',
      errorEmailTaken: 'Un compte existe déjà avec cet email.',
      errorInvalidCredentials: 'Email ou mot de passe incorrect.',
      errorAccountLocked:
        'Trop de tentatives, réessayez dans quelques minutes.',
      errorEmailMismatch: 'Les adresses email ne correspondent pas.',
      errorPasswordMismatch: 'Les mots de passe ne correspondent pas.',
      errorPasswordTooShort:
        'Le mot de passe doit contenir au moins 8 caractères.',
      errorConsentRequired:
        "Merci d'accepter nos conditions pour continuer.",
      errorGeneric: 'Une erreur est survenue, merci de réessayer.',
    },
    de: {
      createAccount: 'Lieferinformationen',
      orLogin: 'Sie haben bereits ein Konto?',
      loginLink: 'Anmelden',
      createLink: 'Konto erstellen',
      loginTitle: 'Anmeldung',
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail',
      emailConfirm: 'E-Mail bestätigen',
      phone: 'Telefon',
      address: 'Adresse',
      addressLine2: 'Adresszusatz (optional)',
      postalCode: 'Postleitzahl',
      city: 'Stadt',
      country: 'Land',
      password: 'Passwort',
      passwordConfirm: 'Passwort bestätigen',
      consent: 'Ich akzeptiere die',
      consentLink: 'Datenschutzrichtlinie',
      consentTerms: 'sowie die',
      termsLink: 'Allgemeinen Geschäftsbedingungen',
      submitRegister: 'Konto erstellen und fortfahren',
      submitLogin: 'Anmelden und fortfahren',
      close: 'Schliessen',
      errorEmailTaken: 'Für diese E-Mail existiert bereits ein Konto.',
      errorInvalidCredentials: 'E-Mail oder Passwort falsch.',
      errorAccountLocked:
        'Zu viele Versuche, bitte in ein paar Minuten erneut versuchen.',
      errorEmailMismatch: 'Die E-Mail-Adressen stimmen nicht überein.',
      errorPasswordMismatch: 'Die Passwörter stimmen nicht überein.',
      errorPasswordTooShort:
        'Das Passwort muss mindestens 8 Zeichen lang sein.',
      errorConsentRequired: 'Bitte akzeptieren Sie unsere Bedingungen.',
      errorGeneric: 'Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut.',
    },
    it: {
      createAccount: 'Informazioni di consegna',
      orLogin: 'Hai già un account?',
      loginLink: 'Accedi',
      createLink: 'Crea un account',
      loginTitle: 'Accesso',
      firstName: 'Nome',
      lastName: 'Cognome',
      email: 'Email',
      emailConfirm: 'Conferma email',
      phone: 'Telefono',
      address: 'Indirizzo',
      addressLine2: 'Indirizzo riga 2 (opzionale)',
      postalCode: 'Codice postale',
      city: 'Città',
      country: 'Paese',
      password: 'Password',
      passwordConfirm: 'Conferma password',
      consent: 'Accetto la',
      consentLink: 'informativa sulla privacy',
      consentTerms: 'nonché le',
      termsLink: 'condizioni generali di vendita',
      submitRegister: 'Crea il mio account e continua',
      submitLogin: 'Accedi e continua',
      close: 'Chiudi',
      errorEmailTaken: 'Esiste già un account con questa email.',
      errorInvalidCredentials: 'Email o password errati.',
      errorAccountLocked: 'Troppi tentativi, riprova tra qualche minuto.',
      errorEmailMismatch: 'Le email non corrispondono.',
      errorPasswordMismatch: 'Le password non corrispondono.',
      errorPasswordTooShort: 'La password deve contenere almeno 8 caratteri.',
      errorConsentRequired: 'Si prega di accettare le nostre condizioni.',
      errorGeneric: 'Si è verificato un errore, riprova.',
    },
    en: {
      createAccount: 'Shipping information',
      orLogin: 'Already have an account?',
      loginLink: 'Log in',
      createLink: 'Create an account',
      loginTitle: 'Log in',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      emailConfirm: 'Confirm email',
      phone: 'Phone',
      address: 'Address',
      addressLine2: 'Address line 2 (optional)',
      postalCode: 'Postal code',
      city: 'City',
      country: 'Country',
      password: 'Password',
      passwordConfirm: 'Confirm password',
      consent: 'I accept the',
      consentLink: 'privacy policy',
      consentTerms: 'as well as the',
      termsLink: 'terms of sale',
      submitRegister: 'Create my account and continue',
      submitLogin: 'Log in and continue',
      close: 'Close',
      errorEmailTaken: 'An account already exists with this email.',
      errorInvalidCredentials: 'Incorrect email or password.',
      errorAccountLocked: 'Too many attempts, please try again in a few minutes.',
      errorEmailMismatch: 'Email addresses do not match.',
      errorPasswordMismatch: 'Passwords do not match.',
      errorPasswordTooShort: 'Password must be at least 8 characters.',
      errorConsentRequired: 'Please accept our terms to continue.',
      errorGeneric: 'Something went wrong, please try again.',
    },
    es: {
      createAccount: 'Información de envío',
      orLogin: '¿Ya tienes una cuenta?',
      loginLink: 'Inicia sesión',
      createLink: 'Crear una cuenta',
      loginTitle: 'Iniciar sesión',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Email',
      emailConfirm: 'Confirmar email',
      phone: 'Teléfono',
      address: 'Dirección',
      addressLine2: 'Dirección línea 2 (opcional)',
      postalCode: 'Código postal',
      city: 'Ciudad',
      country: 'País',
      password: 'Contraseña',
      passwordConfirm: 'Confirmar contraseña',
      consent: 'Acepto la',
      consentLink: 'política de privacidad',
      consentTerms: 'así como las',
      termsLink: 'condiciones generales de venta',
      submitRegister: 'Crear mi cuenta y continuar',
      submitLogin: 'Iniciar sesión y continuar',
      close: 'Cerrar',
      errorEmailTaken: 'Ya existe una cuenta con este email.',
      errorInvalidCredentials: 'Email o contraseña incorrectos.',
      errorAccountLocked: 'Demasiados intentos, inténtalo de nuevo en unos minutos.',
      errorEmailMismatch: 'Los emails no coinciden.',
      errorPasswordMismatch: 'Las contraseñas no coinciden.',
      errorPasswordTooShort: 'La contraseña debe tener al menos 8 caracteres.',
      errorConsentRequired: 'Por favor acepta nuestras condiciones.',
      errorGeneric: 'Ocurrió un error, inténtalo de nuevo.',
    },
    nl: {
      createAccount: 'Verzendgegevens',
      orLogin: 'Heeft u al een account?',
      loginLink: 'Inloggen',
      createLink: 'Account aanmaken',
      loginTitle: 'Inloggen',
      firstName: 'Voornaam',
      lastName: 'Achternaam',
      email: 'E-mail',
      emailConfirm: 'Bevestig e-mail',
      phone: 'Telefoon',
      address: 'Adres',
      addressLine2: 'Adresregel 2 (optioneel)',
      postalCode: 'Postcode',
      city: 'Stad',
      country: 'Land',
      password: 'Wachtwoord',
      passwordConfirm: 'Bevestig wachtwoord',
      consent: 'Ik accepteer het',
      consentLink: 'privacybeleid',
      consentTerms: 'en de',
      termsLink: 'algemene verkoopvoorwaarden',
      submitRegister: 'Account aanmaken en doorgaan',
      submitLogin: 'Inloggen en doorgaan',
      close: 'Sluiten',
      errorEmailTaken: 'Er bestaat al een account met dit e-mailadres.',
      errorInvalidCredentials: 'Onjuiste e-mail of wachtwoord.',
      errorAccountLocked:
        'Te veel pogingen, probeer het over een paar minuten opnieuw.',
      errorEmailMismatch: 'E-mailadressen komen niet overeen.',
      errorPasswordMismatch: 'Wachtwoorden komen niet overeen.',
      errorPasswordTooShort: 'Wachtwoord moet minstens 8 tekens bevatten.',
      errorConsentRequired: 'Accepteer onze voorwaarden om door te gaan.',
      errorGeneric: 'Er is iets misgegaan, probeer het opnieuw.',
    },
    pt: {
      createAccount: 'Informações de entrega',
      orLogin: 'Já tem uma conta?',
      loginLink: 'Entrar',
      createLink: 'Criar uma conta',
      loginTitle: 'Entrar',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      email: 'Email',
      emailConfirm: 'Confirmar email',
      phone: 'Telefone',
      address: 'Endereço',
      addressLine2: 'Complemento de endereço (opcional)',
      postalCode: 'Código postal',
      city: 'Cidade',
      country: 'País',
      password: 'Senha',
      passwordConfirm: 'Confirmar senha',
      consent: 'Aceito a',
      consentLink: 'política de privacidade',
      consentTerms: 'bem como os',
      termsLink: 'termos e condições de venda',
      submitRegister: 'Criar minha conta e continuar',
      submitLogin: 'Entrar e continuar',
      close: 'Fechar',
      errorEmailTaken: 'Já existe uma conta com este email.',
      errorInvalidCredentials: 'Email ou senha incorretos.',
      errorAccountLocked: 'Muitas tentativas, tente novamente em alguns minutos.',
      errorEmailMismatch: 'Os emails não coincidem.',
      errorPasswordMismatch: 'As senhas não coincidem.',
      errorPasswordTooShort: 'A senha deve ter pelo menos 8 caracteres.',
      errorConsentRequired: 'Por favor aceite nossos termos.',
      errorGeneric: 'Ocorreu um erro, tente novamente.',
    },
    hi: {
      createAccount: 'शिपिंग जानकारी',
      orLogin: 'क्या आपका पहले से खाता है?',
      loginLink: 'लॉग इन करें',
      createLink: 'खाता बनाएं',
      loginTitle: 'लॉग इन',
      firstName: 'पहला नाम',
      lastName: 'उपनाम',
      email: 'ईमेल',
      emailConfirm: 'ईमेल की पुष्टि करें',
      phone: 'फ़ोन',
      address: 'पता',
      addressLine2: 'पता पंक्ति 2 (वैकल्पिक)',
      postalCode: 'पिन कोड',
      city: 'शहर',
      country: 'देश',
      password: 'पासवर्ड',
      passwordConfirm: 'पासवर्ड की पुष्टि करें',
      consent: 'मैं स्वीकार करता/करती हूं',
      consentLink: 'गोपनीयता नीति',
      consentTerms: 'साथ ही',
      termsLink: 'बिक्री की शर्तें',
      submitRegister: 'खाता बनाएं और जारी रखें',
      submitLogin: 'लॉग इन करें और जारी रखें',
      close: 'बंद करें',
      errorEmailTaken: 'इस ईमेल से पहले से एक खाता मौजूद है।',
      errorInvalidCredentials: 'ईमेल या पासवर्ड गलत है।',
      errorAccountLocked:
        'बहुत अधिक प्रयास, कृपया कुछ मिनटों बाद पुनः प्रयास करें।',
      errorEmailMismatch: 'ईमेल मेल नहीं खाते।',
      errorPasswordMismatch: 'पासवर्ड मेल नहीं खाते।',
      errorPasswordTooShort: 'पासवर्ड कम से कम 8 अक्षरों का होना चाहिए।',
      errorConsentRequired: 'कृपया हमारी शर्तें स्वीकार करें।',
      errorGeneric: 'कुछ गलत हो गया, कृपया पुनः प्रयास करें।',
    },
    ar: {
      createAccount: 'معلومات الشحن',
      orLogin: 'هل لديك حساب بالفعل؟',
      loginLink: 'تسجيل الدخول',
      createLink: 'إنشاء حساب',
      loginTitle: 'تسجيل الدخول',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'البريد الإلكتروني',
      emailConfirm: 'تأكيد البريد الإلكتروني',
      phone: 'الهاتف',
      address: 'العنوان',
      addressLine2: 'العنوان سطر 2 (اختياري)',
      postalCode: 'الرمز البريدي',
      city: 'المدينة',
      country: 'البلد',
      password: 'كلمة المرور',
      passwordConfirm: 'تأكيد كلمة المرور',
      consent: 'أوافق على',
      consentLink: 'سياسة الخصوصية',
      consentTerms: 'وكذلك',
      termsLink: 'شروط البيع',
      submitRegister: 'إنشاء حسابي والمتابعة',
      submitLogin: 'تسجيل الدخول والمتابعة',
      close: 'إغلاق',
      errorEmailTaken: 'يوجد حساب بالفعل بهذا البريد الإلكتروني.',
      errorInvalidCredentials: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.',
      errorAccountLocked:
        'عدد كبير جدًا من المحاولات، يرجى المحاولة مرة أخرى بعد بضع دقائق.',
      errorEmailMismatch: 'عناوين البريد الإلكتروني غير متطابقة.',
      errorPasswordMismatch: 'كلمتا المرور غير متطابقتين.',
      errorPasswordTooShort: 'يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.',
      errorConsentRequired: 'يرجى قبول شروطنا.',
      errorGeneric: 'حدث خطأ ما، يرجى المحاولة مرة أخرى.',
    },
    ru: {
      createAccount: 'Информация о доставке',
      orLogin: 'Уже есть аккаунт?',
      loginLink: 'Войти',
      createLink: 'Создать аккаунт',
      loginTitle: 'Вход',
      firstName: 'Имя',
      lastName: 'Фамилия',
      email: 'Email',
      emailConfirm: 'Подтвердите email',
      phone: 'Телефон',
      address: 'Адрес',
      addressLine2: 'Адрес, строка 2 (необязательно)',
      postalCode: 'Почтовый индекс',
      city: 'Город',
      country: 'Страна',
      password: 'Пароль',
      passwordConfirm: 'Подтвердите пароль',
      consent: 'Я принимаю',
      consentLink: 'политику конфиденциальности',
      consentTerms: 'а также',
      termsLink: 'условия продажи',
      submitRegister: 'Создать аккаунт и продолжить',
      submitLogin: 'Войти и продолжить',
      close: 'Закрыть',
      errorEmailTaken: 'Аккаунт с таким email уже существует.',
      errorInvalidCredentials: 'Неверный email или пароль.',
      errorAccountLocked:
        'Слишком много попыток, попробуйте снова через несколько минут.',
      errorEmailMismatch: 'Email не совпадают.',
      errorPasswordMismatch: 'Пароли не совпадают.',
      errorPasswordTooShort: 'Пароль должен содержать не менее 8 символов.',
      errorConsentRequired: 'Пожалуйста, примите наши условия.',
      errorGeneric: 'Произошла ошибка, попробуйте снова.',
    },
    zh: {
      createAccount: '配送信息',
      orLogin: '已经有账户了？',
      loginLink: '登录',
      createLink: '创建账户',
      loginTitle: '登录',
      firstName: '名字',
      lastName: '姓氏',
      email: '邮箱',
      emailConfirm: '确认邮箱',
      phone: '电话',
      address: '地址',
      addressLine2: '地址补充（可选）',
      postalCode: '邮政编码',
      city: '城市',
      country: '国家',
      password: '密码',
      passwordConfirm: '确认密码',
      consent: '我同意',
      consentLink: '隐私政策',
      consentTerms: '以及',
      termsLink: '销售条款',
      submitRegister: '创建账户并继续',
      submitLogin: '登录并继续',
      close: '关闭',
      errorEmailTaken: '该邮箱已被注册。',
      errorInvalidCredentials: '邮箱或密码错误。',
      errorAccountLocked: '尝试次数过多，请稍后再试。',
      errorEmailMismatch: '两次输入的邮箱不一致。',
      errorPasswordMismatch: '两次输入的密码不一致。',
      errorPasswordTooShort: '密码至少需要8个字符。',
      errorConsentRequired: '请同意我们的条款。',
      errorGeneric: '发生错误，请重试。',
    },
    ko: {
      createAccount: '배송 정보',
      orLogin: '이미 계정이 있으신가요?',
      loginLink: '로그인',
      createLink: '계정 만들기',
      loginTitle: '로그인',
      firstName: '이름',
      lastName: '성',
      email: '이메일',
      emailConfirm: '이메일 확인',
      phone: '전화번호',
      address: '주소',
      addressLine2: '상세 주소 (선택 사항)',
      postalCode: '우편번호',
      city: '도시',
      country: '국가',
      password: '비밀번호',
      passwordConfirm: '비밀번호 확인',
      consent: '동의합니다',
      consentLink: '개인정보 처리방침',
      consentTerms: '그리고',
      termsLink: '판매 약관',
      submitRegister: '계정 만들고 계속하기',
      submitLogin: '로그인하고 계속하기',
      close: '닫기',
      errorEmailTaken: '이미 사용 중인 이메일입니다.',
      errorInvalidCredentials: '이메일 또는 비밀번호가 올바르지 않습니다.',
      errorAccountLocked: '시도 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요.',
      errorEmailMismatch: '이메일이 일치하지 않습니다.',
      errorPasswordMismatch: '비밀번호가 일치하지 않습니다.',
      errorPasswordTooShort: '비밀번호는 최소 8자 이상이어야 합니다.',
      errorConsentRequired: '약관에 동의해 주세요.',
      errorGeneric: '오류가 발생했습니다. 다시 시도해 주세요.',
    },
  };

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
      price_1Ueb6AClH97ISv2lLYYhHXZz:
        'https://buy.stripe.com/14A6oGfPcgJf5p60E9gQE06', // GBP 99.-
    };

    const checkoutUrl = stripeCheckoutUrls[priceId];

    if (!checkoutUrl) {
      console.error('Invalid price ID:', priceId);
      return;
    }

    // A clipper's code, picked up invisibly on /go/<code> and carried
    // over here, tags the sale for attribution without touching price
    // or showing anything to the customer.
    const clipperCode = sessionStorage.getItem('iglow_clipper_code');
    const refParam = clipperCode
      ? `&client_reference_id=${encodeURIComponent(clipperCode)}`
      : '';

    // Redirect to Stripe Checkout with success and cancel URLs
    window.location.href = `${checkoutUrl}?success_url=${encodeURIComponent(
      successUrl
    )}&cancel_url=${encodeURIComponent(cancelUrl)}${refParam}`;
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

      {showAccountModal &&
        (() => {
          const t = authContent[currentLang] || authContent.fr;
          return (
            <div
              className='account-modal-overlay'
              onClick={() => {
                window.location.href = '/';
              }}
            >
              <div
                className='account-modal'
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className='account-modal-close'
                  onClick={() => {
                    window.location.href = '/';
                  }}
                  aria-label={t.close}
                >
                  &times;
                </button>
                <h2>{authMode === 'register' ? t.createAccount : t.loginTitle}</h2>
                <form onSubmit={handleAuthSubmit} className='account-form'>
                  {authMode === 'register' && (
                    <>
                      <input
                        type='text'
                        autoComplete='given-name'
                        placeholder={t.firstName}
                        value={authForm.firstName}
                        onChange={handleAuthFieldChange('firstName')}
                        required
                      />
                      <input
                        type='text'
                        autoComplete='family-name'
                        placeholder={t.lastName}
                        value={authForm.lastName}
                        onChange={handleAuthFieldChange('lastName')}
                        required
                      />
                      <input
                        type='text'
                        autoComplete='address-line1'
                        placeholder={t.address}
                        value={authForm.address}
                        onChange={handleAuthFieldChange('address')}
                        required
                      />
                      <div className='account-form-row'>
                        <input
                          type='text'
                          autoComplete='address-line2'
                          placeholder={t.addressLine2}
                          value={authForm.addressLine2}
                          onChange={handleAuthFieldChange('addressLine2')}
                        />
                        <input
                          type='text'
                          autoComplete='postal-code'
                          placeholder={t.postalCode}
                          value={authForm.postalCode}
                          onChange={handleAuthFieldChange('postalCode')}
                          required
                        />
                      </div>
                      <input
                        type='text'
                        autoComplete='address-level2'
                        placeholder={t.city}
                        value={authForm.city}
                        onChange={handleAuthFieldChange('city')}
                        required
                      />
                      <input
                        type='text'
                        autoComplete='country-name'
                        placeholder={t.country}
                        value={authForm.country}
                        onChange={handleAuthFieldChange('country')}
                        required
                      />
                      <input
                        type='tel'
                        autoComplete='tel'
                        placeholder={t.phone}
                        value={authForm.phone}
                        onChange={handleAuthFieldChange('phone')}
                        required
                      />
                    </>
                  )}
                  <input
                    type='email'
                    autoComplete='email'
                    placeholder={t.email}
                    value={authForm.email}
                    onChange={handleAuthFieldChange('email')}
                    required
                  />
                  {authMode === 'register' && (
                    <input
                      type='email'
                      autoComplete='email'
                      placeholder={t.emailConfirm}
                      value={authForm.emailConfirm}
                      onChange={handleAuthFieldChange('emailConfirm')}
                      required
                    />
                  )}
                  <input
                    type='password'
                    autoComplete={
                      authMode === 'register' ? 'new-password' : 'current-password'
                    }
                    placeholder={t.password}
                    value={authForm.password}
                    onChange={handleAuthFieldChange('password')}
                    required
                  />
                  {authMode === 'register' && (
                    <>
                      <input
                        type='password'
                        autoComplete='new-password'
                        placeholder={t.passwordConfirm}
                        value={authForm.passwordConfirm}
                        onChange={handleAuthFieldChange('passwordConfirm')}
                        required
                      />
                      <label className='account-consent'>
                        <input
                          type='checkbox'
                          checked={authForm.consent}
                          onChange={handleAuthFieldChange('consent')}
                        />
                        <span>
                          {t.consent}{' '}
                          <a href='/privacy-policy' target='_blank' rel='noopener noreferrer'>
                            {t.consentLink}
                          </a>{' '}
                          {t.consentTerms}{' '}
                          <a href='/terms-of-sale' target='_blank' rel='noopener noreferrer'>
                            {t.termsLink}
                          </a>
                        </span>
                      </label>
                    </>
                  )}

                  {authError && (
                    <p className='account-form-error'>{authError}</p>
                  )}

                  <button
                    type='submit'
                    className='account-submit-btn'
                    disabled={authLoading}
                  >
                    {authMode === 'register' ? t.submitRegister : t.submitLogin}
                  </button>
                </form>
                <p className='account-switch'>
                  {authMode === 'register' ? (
                    <>
                      {t.orLogin}{' '}
                      <button
                        type='button'
                        onClick={() => {
                          setAuthMode('login');
                          setAuthError('');
                        }}
                      >
                        {t.loginLink}
                      </button>
                    </>
                  ) : (
                    <button
                      type='button'
                      onClick={() => {
                        setAuthMode('register');
                        setAuthError('');
                      }}
                    >
                      {t.createLink}
                    </button>
                  )}
                </p>
              </div>
            </div>
          );
        })()}
    </div>
  );
};

export default Reserve;
