import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    --color-grey-0: #ffffff;
    --color-grey-50: #fafafa;
    --color-grey-100: #f5f5f5;
    --color-grey-200: #e5e5e5;
    --color-grey-300: #d4d4d4;
    --color-grey-400: #a3a3a3;
    --color-grey-500: #737373;
    --color-grey-600: #525252;
    --color-grey-700: #404040;
    --color-grey-800: #262626;
    --color-grey-900: #171717;

    --color-teal-100: #ccfbf1;
    --color-teal-700: #0f766e;
    --color-orange-100: #ffedd5;
    --color-orange-700: #c2410c;
    --color-green-100: #dcfce7;
    --color-green-700: #15803d;
    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;
    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    --color-purple-100: #f3e8ff;
    --color-purple-700: #7e22ce;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --image-grayscale: 0;
    --image-opacity: 100%;
  }

  &.dark-mode {
    --color-grey-0: #121212;
    --color-grey-50: #1c1c1c;
    --color-grey-100: #262626;
    --color-grey-200: #333333;
    --color-grey-300: #444444;
    --color-grey-400: #666666;
    --color-grey-500: #999999;
    --color-grey-600: #cccccc;
    --color-grey-700: #e5e5e5;
    --color-grey-800: #f5f5f5;
    --color-grey-900: #fafafa;

    --color-teal-100: #0f766e;
    --color-teal-700: #ccfbf1;
    --color-orange-100: #c2410c;
    --color-orange-700: #ffedd5;
    --color-green-100: #166534;
    --color-green-700: #dcfce7;
    --color-yellow-100: #854d0e;
    --color-yellow-700: #fef9c3;
    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;
    --color-purple-100: #7e22ce;
    --color-purple-700: #f3e8ff;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }

  /* Brand (Teal to Orange gradient feel) */
  --color-brand-50: #f0fdfa;
  --color-brand-100: #ccfbf1;
  --color-brand-200: #99f6e4;
  --color-brand-500: #14b8a6;
  --color-brand-600: #0d9488;
  --color-brand-700: #0f766e;
  --color-brand-800: #115e59;
  --color-brand-900: #134e4a;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}


*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin:0;

    transition: background-color 0.3s, border 0.3s ;
}

html {
    font-size: 62.5%;
}

body {
    font-family: "Poppins", sans-serif;
    color: var(--color-grey-700);

    transition: color 0.3s background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
}

input, button, textarea, select{
    font: inherit;
    color: inherit;
}

input[type=number] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

button {
    cursor: pointer;
    border: unset;
}

*:disabled {
    cursor: not-allowed;
}

select:disabled, input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
}

input:focus, button:focus, textarea:focus, select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
}

button:has(svg) {
    line-height: 0;
}

a {
    color: inherit;
    text-decoration: noen;
}

ul {
    list-style: none;
}

p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap : break-word;
    hyphens: auto;
}

img {
    max-width: 100%;

    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;
