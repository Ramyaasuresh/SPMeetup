import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      profile: "Profile",
      email: "Email",
      userId: "User ID",
      logout: "Logout",
      friends: "Friends",
      addPlan: "Add Plan",
    },
  },
  hi: {
    translation: {
      profile: "प्रोफ़ाइल",
      email: "ईमेल",
      userId: "उपयोगकर्ता आईडी",
      logout: "लॉगआउट",
      friends: "दोस्त",
      addPlan: "योजना जोड़ें",
    },
  },
  zh: {
    translation: {
      profile: "个人资料",
      email: "电子邮件",
      userId: "用户ID",
      logout: "登出",
      friends: "朋友",
      addPlan: "添加计划",
    },
  },
  ta: {
    translation: {
      profile: "சுயவிவரம்",
      email: "மின்னஞ்சல்",
      userId: "பயனர் ஐடி",
      logout: "வெளியேறு",
      friends: "நண்பர்கள்",
      addPlan: "திட்டத்தைச் சேர்",
    },
  },
  // Placeholder for Aboriginal language (you can replace with actual translations)
  ab: {
    translation: {
      profile: "Profile (Aboriginal)",
      email: "Email (Aboriginal)",
      userId: "User ID (Aboriginal)",
      logout: "Logout (Aboriginal)",
      friends: "Friends (Aboriginal)",
      addPlan: "Add Plan (Aboriginal)",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
