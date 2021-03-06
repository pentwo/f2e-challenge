# f2e-challenge

source [hexschool/TheF2E](https://github.com/hexschool/TheF2E)

## 00 SignUpVerify

Finished page
ttp://pentwo.github.io/f2e-challenge/00/index.html\_

User story:

- A page that user can verify whether they have signed-up for F2E challenge or not.
- Request API to feedback how many people already signed-up for F2E challenge.
- Countdown to 2018-06-04 12:00

Source:

- API doc https://github.com/hexschool/TheF2E/wiki/API-DOC

Features:

- Vanilla JS
- CSS framework: [Bulma](https://bulma.io/)
- Use [moment.js](https://momentjs.com/) deal with timestamp(ms), time difference and time duration.
- Use `fetch` to `POST` and `GET` API data.

Difficulty faced:

- when using `fetch` to `POST` a JSON request, should adding `headers` in request. no specify "Content-Type" in the header, server can't handle `POST` data.

```javascript
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
```

## 01 Todo-list

Finished page http://pentwo.github.io/f2e-challenge/01-todolist/index.html_

User story:

- 能夠紀錄每天的待辦事項
- 可標示每個待辦優先重要級別，預設為無。
- 可拖拉待辦事項，調整排序。
- 每筆待辦可新增時間提醒 (yyyy/mm/dd hh:mm)
- 每筆待辦可再填寫評論與附加檔案
- 待辦狀態：全部顯示(預設)、待處理、已處理
- 待辦事項過多時，需考量內容是否需要折疊

Source & Reference UI design:

- [ TheF2E/stage/No1.todolist](https://github.com/hexschool/TheF2E/blob/master/stage/No1.todolist.md)
- https://hexschool.github.io/THE_F2E_Design/todolist/

Features:

- TBD

Difficulty faced:

- TBD

## 02 filter

Finished page
http://pentwo.github.io/f2e-challenge/02/public/index.html

User story:

- filter 推薦條件 1.關鍵字搜尋 2.地區搜尋 3.景點是否付費 4.是否全天候開放

API 可用參數：q = 關鍵字搜尋，limit = 筆數
API 出處：高雄 OPEN DATA

Source & Reference UI design:

- https://hexschool.github.io/THE_F2E_Design/week2-filter/

Features:

- TBD

Difficulty faced:

- TBD

## 03 admin order

Finished page https://pentwo.github.io/f2e-challenge/03/public/index.html

請以「管理訂單」為參考方向，來思考一個電商網站所具備的後台管理功能。

Source & Reference UI design:

- https://hexschool.github.io/THE_F2E_Design/week3-admin%20order/

Features:

- TBD

Difficulty faced:

- TBD

## 04 Product Gallery

Finished page https://pentwo.github.io/f2e-challenge/04/public/index.html

一個好的 web 產品呈現列表，需要結合設計與前端的完美技術合作，才能設計出讓使用者耳目一新的瀏覽介面。

Source & Reference UI design:

- https://hexschool.github.io/THE_F2E_Design/week4-product%20gallery/

Features:

- TBD

Difficulty faced:

- TBD

漫畫閱讀器

## 05 Comic Viewer

Finished page https://pentwo.github.io/f2e-challenge/05/public/index.html

Source & Reference UI design:

- https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/

Features:

- 廣告版位：請設計出不會讓使用者感到閱讀障礙的廣告瀏覽體驗。
- 圖片載入：該如何切換到下一頁，儘量減少使用者等待時間。卻又不是全部頁面直接載入造成伺服器 Loading，端看於各位開發者考量設計出滿足兩者需求的前端介面。

Difficulty faced:

- TBD

## 06 Form Validation

Finished page TBD

Source & Reference UI design:

- https://hexschool.github.io/THE_F2E_Design/week6-validation/

Features:

- Form Validation
  - Required field
  - E-mail
  - Password
  - Phone number
  - Update picture size
  - Credit Card number

Difficulty faced:

- TBD
