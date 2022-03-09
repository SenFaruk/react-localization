import logo from "./logo.svg";
import "./App.css";

import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

function App() {
  const messages = {
    title: "merhaba dünya",
  };
  return (
    <div className="App">
      <IntlProvider messages={messages}>
        <FormattedMessage id="title" />
      </IntlProvider>
    </div>
  );
}

export default App;
