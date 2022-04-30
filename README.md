# Bank Card Verification

<br>

## 🎥 Preview site :arrow_right: [tap here](https://szymonrojek.github.io/card-number-verification-JS/)

<br>
<br>

<img src="./src/img/giff.gif" width="250" height="400">

<br>
<br>

## Description:

Written program validates three types of bank cards: mastercard, visa, american express. Each card has a specific properties that make it recognizable:

<br>
<table>
  <tr>
    <td>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"  height="50">
    </td>
    <td>starting numbers: 51, 52, 53, 54, 55</td>
    <td>length 16</td>
  </tr>
</table>
<br>
<table>
    <td>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"  height="50" width="70">
    </td>
    <td>starting numbers: 4</td>
    <td>length 13 || 16</td>
  </tr>
</table>
<br>
<table>
  <tr>
    <td>
      <img src="https://remote-europe.com/sites/default/files/styles/medium_300x300_/public/2020-11/americanexpress.jpg?itok=i_4MMKM0"  height="50" width="70">
    </td>
    <td>starting numbers: 34 || 37</td>
    <td>length 15</td>
  </tr>
</table>
<br>

After entering wrong characters and numbers, the user will receive a list of errors depends on the error:

- Card Number is required!
- Password has to contain only numbers!
- Please write a proper length of the numbers!
- Luhn's algorithm does not point to the truth!
- The beginning of the bank card number is incorrect!

I have decided to use default text input instead of type number because I wanted to write additional custom validation. Normally in the real application I would use type number because it includes built-in validation to reject non-numerical entries.

<br>

Exmaples of types card & numbers to check:

| CardType         | Number           |
| ---------------- | ---------------- |
| Mastercard       | 5555555555554444 |
| Mastercard       | 5105105105105100 |
| Visa             | 4111111111111111 |
| Visa             | 4012888888881881 |
| Visa             | 4222222222222    |
| American Express | 378282246310005  |
| American Express | 371449635398431  |

## I have used:

---

- vanilla JavaScript
- SCSS
- BEM

<br>
<br>

<table>
  <tr>
    <td><img src="./src/img/npm-icon.png" width="50" height="50"></td>
    <td><img src="./src/img/parcelJs-icon.png" width="50" height="50"></td>
  </tr>
</table>
<table>
  <tr>
    <td><img src="./src/img/html-icon.svg" width="50" height="50"></td>
    <td><img src="./src/img/js-icon.svg" width="50" height="50"></td>
  </tr>
 </table>

<br>

## Usage:

---

<br>

1. Install project:

```
npm install
```

2. To start development and server for live preview

```
npm run dev
```

3. Build version

```
npm run build
```

4. Dist version - gh-pages

```
npm run deploy
```
