import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: "pt", // idioma padrão
    fallbackLng: "en",
    supportedLngs: ["en", "pt"], // idiomas suportados
    backend: {
      loadPath: "/locales/{{lng}}.json", // caminho para os arquivos de tradução
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
