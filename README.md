# f2e-challenge

source [hexschool/TheF2E](https://github.com/hexschool/TheF2E)

## 00 SignUpVerify

_Finished page (http://pentwo.github.io/f2e-challenge/00/index.html)_

User story:

* A page that user can verify whether they have signed-up for F2E challenge or not.
* Request API to feedback how many people already signed-up for F2E challenge.
* Countdown to 2018-06-04 12:00

Source:

* API doc (https://github.com/hexschool/TheF2E/wiki/API-DOC)

Features:

* Vanilla JS
* CSS framework: [Bulma](https://bulma.io/)
* Use [moment.js](https://momentjs.com/) deal with timestamp(ms), time difference and time duration.
* Use `fetch` to `POST` and `GET` API data.

Difficulty faced:

* when using `fetch` to `POST` a JSON request, should adding `headers` in request. no specify "Content-Type" in the header, server can't handle `POST` data.

```javascript
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
```

## 01 Todo-list

_Finished page ((http://pentwo.github.io/f2e-challenge/01/index.html)_

User story:

* 能夠紀錄每天的待辦事項
* 可標示每個待辦優先重要級別，預設為無。
* 可拖拉待辦事項，調整排序。
* 每筆待辦可新增時間提醒 (yyyy/mm/dd hh:mm)
* 每筆待辦可再填寫評論與附加檔案
* 待辦狀態：全部顯示(預設)、待處理、已處理
* 待辦事項過多時，需考量內容是否需要折疊

Source & Reference UI design:

* [ TheF2E/stage/No1.todolist](https://github.com/hexschool/TheF2E/blob/master/stage/No1.todolist.md)
* (https://hexschool.github.io/THE_F2E_Design/todolist/)

Features:

* TBD

Difficulty faced:

* TBD
