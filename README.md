# f2e-challenge
source [hexschool/TheF2E](https://github.com/hexschool/TheF2E)

## 00 SignUpVerify
*Finished page (http://pentwo.github.io/f2e-challenge/00/index.html)*

User story:
- A page that user can verify whether they have signed-up for F2E challenge or not.
- Request API to feedback how many people already signed-up for F2E challenge.
- Countdown to 2018-06-04 12:00

source:
- API doc (https://github.com/hexschool/TheF2E/wiki/API-DOC)

features:
- Vanilla JS
- CSS framework: [Bulma](https://bulma.io/)
- Use [moment.js](https://momentjs.com/) deal with timestamp(ms), time difference and time duration.
- Use `fetch` to `POST` and `GET` API data.

Difficulty faced:
- when using `fetch` to `POST` a JSON request, should adding `headers` in request. no specify "Content-Type" in the header, server can't heandle `POST` data.
```javascript
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
```

## 01 ?
