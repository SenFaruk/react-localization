import "./App.css";

import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState, useEffect } from "react";

const messages = {
  "tr-TR": {
    title: "merhaba dünya",
    description: " 3 yeni mesajınız var...",
  },
  "en-US": {
    title: "hello world",
    description: " you have 3 new messages...",
  },
};
function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  console.log(defaultLocale);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <p>
          {" "}
          <FormattedMessage id="description" />
        </p>
      </IntlProvider>
      <br />
      <br />
      <button onClick={() => setLocale("tr-TR")}>TR</button>
      <button onClick={() => setLocale("en-US")}>EN</button>
    </div>
  );
}

export default App;
