const API_URL =
  "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97";

const inputDateFrom = document.querySelector(".input-date-from");
const inputDateTo = document.querySelector(".input-date-to");

const today = moment(new Date());
const oneWeek = moment(today).add(14, "d");

inputDateFrom.valueAsDate = today._i;
inputDateTo.valueAsDate = oneWeek._d;

const searchTerm = document.querySelector(".searchTerm");

searchTerm.addEventListener("keypress", async e => {
  const text = e.currentTarget.value;
  const key = e.which || e.keycode;
  if (key === 13) {
    const result = await callsearch(text);
    populateResult(result.result);
    createTag(text, document.querySelector(".tags"));
  }
});

async function callsearch(text) {
  return await fetchData(text);
}

function fetchData(text) {
  const fetchURL = API_URL + "&q=" + text;
  console.log("FETCHING...");
  return fetch(fetchURL, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  }).then(blob => blob.json());
  // .then(data => data);
}

function populateResult({ records, _links }) {
  console.log("_links: ", _links);
  document.querySelector(".resultCount").innerHTML = `${records.length}`;

  let html = "";
  for (const record of records) {
    html += `
    <div class="result__card">
      <div class="result__card--img">
        <img src="${record.Picture1}" alt="placeholder" class="">
      </div>
      <div class="result__card--container">
        <div class="result__card--title">${record.Name}</div>
        <div class="result__card--content">
          <p>${trimStr(record.Toldescribe)}</p>
        </div>
        <div class="result__card--extras">
          <p class="extras extras--host ">
            <span>
              ${record.Zone}
            </span>
          </p>
          <p class="extras extras--tag ">
            <span class="tag is-light is-medium">
              ${record.Ticketinfo}
            </span>
          </p>
          <div class="line-break"></div>
          <p class="extras extras--loc ">
            <i class="fas fa-map-marker-alt"></i>
            ${record.Add}
          </p>
          <p class="extras extras--date ">
            <i class="far fa-calendar-alt"></i>
            ${record.Opentime}
          </p>
        </div>
      </div>
    </div>`;
  }
  html +=
    // console.log(html);
    document.querySelector(".results").innerHTML = html;
}

function createPagination(links) {
  let html = "";
  html += `<nav class="pagination" role="navigation" aria-label="pagination">
    <a href="https://data.kcg.gov.tw${
      links.next
    }" class="pagination-previous">Previous</a>
    <a href="https://data.kcg.gov.tw${
      links.next
    }" class="pagination-next">Next page</a>
  </nav>`;
}

function trimStr(str) {
  return str.substr(0, 100) + "... read more";
}
function createTag(text, el) {
  el.innerHTML += `
  <span class="tag is-primary is-medium">
    ${text}
    <button class="delete"></button>
  </span>
  `;
}

async function init() {
  const initText = "三民區";
  const result = await callsearch(initText);
  populateResult(result.result);
  createTag(initText, document.querySelector(".tags"));
}
init();
