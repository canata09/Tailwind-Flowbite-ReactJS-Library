## Features:
- Tailwind Flowbite Material Library

## Requirements:
Bu bloğun çalışması için aşağıdaki minimum gereksinimler sağlanmalıdır:

- Kod Editörü (VS) sürümü: 
- Kullanılan JavaScript kütüphaneleri ve versiyonları: (liste)\
Tailwind Flowbite


### `npm i flowbite-react`

Bu komut, Flowbite uygulamanızı React'in üretim ortamına dağıtacaktır.

### `npm install -D tailwindcss`

Bu komut, Tailwind uygulamanızı React'in üretim ortamına dağıtacaktır.

### `npx tailwindcss init`

Bu komut, Tailwind konfigurasyonunuzu React'in üretim ortamına dağıtacaktır.

### `index.css`

Tailwind yönergelerini ```./src/index.css``` dosyası içinde ayarlayın:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Edit tailwind.config.js: 

```
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", flowbite.content()],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      customblue: {
        100: "#007AFF",
        200: "#0F70DA",
        300: "#3198FC",
        800: "#28303F",
        900: "#2D3748",
      },
      cusblue100: "#222e48",
      cusgreen: "#b3eeb1",
      cusgray: "#4c4f5c",
    },
  },
  plugins: [flowbite.plugin()],
};

```
