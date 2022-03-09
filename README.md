# react-localization

bu bölümde react ile localization işlemlerini nasıl yapabileceğimizi öğrenmeye çalışacağız.çoklu dille alakalı çalışmaları nasıl yönete biliriz. kullanacağımız kütüphanenin ismi react intel bunun kurulumunu yapacağız sonra da kullanmaya başlayacağız.
projemizi ayağa kaldıralım

Id CommandLine
  -- -----------
   1 git clone https://github.com/SenFaruk/react-localization.git
   2 cd .\react-localization\
   3 npx create-react-app localization
   4 cd localization
   5 npm start

   

## https://formatjs.io/docs/getting-started/installation

 sitesine gidip docs installation kısmı

 ## ![](localization/foto/localization1.jpg)

 ## yarn add react react-intl

 diyerek kurulumu başlatıyorum.

 dökümana döndüğüm zaman burada react-intl import etmiş bunun altında üç tane
 <import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'>
 component var bu componentleri kullanarak kuruluma başlaya biliyoruz hemen bizde bu import işlemini yapalım.App.js te ihtiyacım olmayan kısımları kaldırdım.
 docs baktığımızda <IntlProvider > denen bir component var bu component ile diğer componentleri sarmallamış içeride <FormattedMessage> diye bir tanım var bunun çalışa bilmesi için <IntlProvider > ihtiyaç var buradan data sağlanıyor mesala burada message prop unda sizin kullanacağınız messajlar tanımları vereceksiniz ve bu data altaki componentlere sağlanacak sonrada onların üzerinde gerekli çevirim işlemini yapacak..

 <IntlProvider > componentini alalım ve messages objesini tanımlayalım sonra messages prop unu  <IntlProvider > componentine veriyorum.
 beni istediğim şey buradaki title göstermek <FormattedMessage> adında bir tanım var bu tanımı kullanarak bu işlemleri yapa biliyoruz <FormattedMessage>
bir id vermeliyim.id ne olmalı bu objenin(messages) içindeki hangi key (title)
igöstermek istiyorsam o olmalı burada title var title i buraya verdim

## App.js

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

## ![](localization/foto/localization2.jpg)

-_-_-_-_-_-_-_-_-_ React Intl-kurulum -_-_-_-_-_-_-_-_-_

peki burada ingilizceyide eklersek nasıl yapacağız şöyleki:
hemen aşağıda iki button ekleyelim.
birinde tr diğerinde ingilizceye geçiş yapmayı sağlayalım.
react ide import edelim elimizde bir state timiz olsun. bu state aktif dil hangisi ise onu tutsun.useState diyelim sonra ona atama yapacak fonksiyonu tanımlıyorum. varsayılan olarak ta <"tr-TR> verelim. sonra tr buttonuna tıklandığında  dili <tr-Tr>
olarak değiştirsin diğerinde ise ingilizce olarak değiştirsin. <const messages = {
    title: "merhaba dünya",
  };> bu messages objesine birde ingilizce tanımını eklemem lazım o yüzden bunu biracık değiştireceğiz
  <"tr-TR"> ve <"en-US"> objemiz olacak bunları dorduracağız.

  ## App.js

  import "./App.css";

import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState } from "react";

const messages = {
  "tr-TR": {
    title: "merhaba dünya",
  },
  "en-US": {
    title: "hello world",
  },
};
function App() {
  const [lang, setLang] = useState("tr-TR");

  return (
    <div className="App">
      <IntlProvider messages={messages}>
        <FormattedMessage id="title" />
      </IntlProvider>
      <br />
      <br />
      <button onClick={() => setLang("tr-TR")}>TR</button>
      <button onClick={() => setLang("en-US")}>EN</button>
    </div>
  );
}

export default App;

## ![](localization/foto/localization3.jpg)

ekranda görüldüğü üzere title yazıyor yani <FormattedMessage id="title" /> buradaki id ne ise onu yazdı. bunun sabebi, <IntlProvider messages={messages}> buradaki messages kısmında hangi objeyi vereceksek onu kullanmalıyız. gerekli düzeltmeleri yapalım

<IntlProvider messages={messages["tr-TR"]}> diye düzeltirsem türkçe
<IntlProvider messages={messages["en-US"]}> diye düzeltirsem ingilizce olacak.
ozaman ben burada state timi kullanmalıyım:
<IntlProvider messages={messages[lang]}> dersem varsayılan olarak türçe gösterecek <EN> tuşuna basınca ingilizceye dönecektir.
şimdi messages değişkenine birde description key i ekleyelim.
<p>tagları içinde de description ları göstereyim.

## App.js

import "./App.css";

import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState } from "react";

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
  const [lang, setLang] = useState("tr-TR");

  return (
    <div className="App">
      <IntlProvider messages={messages[lang]}>
        <FormattedMessage id="title" />
        <p>
          {" "}
          <FormattedMessage id="description" />
        </p>
      </IntlProvider>
      <br />
      <br />
      <button onClick={() => setLang("tr-TR")}>TR</button>
      <button onClick={() => setLang("en-US")}>EN</button>
    </div>
  );
}

export default App;
## ![](localization/foto/localization4.jpg)
## ![](localization/foto/localization5.jpg)

böylelikle yeni key içinde dil tanımını eklemiş oldum.
react-Intl ile çalışmaya başlamamız dereken ihiyaçlar bunlar idi.
öncelikle <IntlProvider /> ı en dışa koyacağız sonrada içerisine kullanmak istediğiniz her hangibir yazıdır, paragraftır neyse arttık 
onuda <FormattedMessage  /> componentine id olarak verdiğinizde kullanmaya başlaya bilirsiniz


