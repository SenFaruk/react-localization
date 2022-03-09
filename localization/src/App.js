import "./App.css";

import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState, useEffect } from "react";

const messages = {
  "tr-TR": {
    title: "merhaba dünya",
    description: " {count} yeni mesajınız var...",
  },
  "en-US": {
    title: "hello world",
    description: " you have {count} new messages...",
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
          <FormattedMessage id="description" values={{ count: 44 }} />
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
