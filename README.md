# f2e-challenge
source [hexschool/TheF2E](https://github.com/hexschool/TheF2E)

## 00 SignUpVerify
source:
- API doc (https://github.com/hexschool/TheF2E/wiki/API-DOC)

features:
- Vanilla JS
- CSS framework: [Bulma](https://bulma.io/)
- Use [moment.js](https://momentjs.com/) deal with timestamp(ms), time difference and time duration.
- Use `fetch` to `POST` and `GET` API data.

Difficulty faced:
- when using `fetch` to `POST` a JSON request, should adding `headers` in request. no specify "Content-Type" in the header, server can't heandle `POST` data.
```
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
```

## 01 ?
