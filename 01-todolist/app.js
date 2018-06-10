const stars = document.querySelectorAll(".icon-star");
const checkBox = document.querySelectorAll(".icon-tick");
const tasklist = document.querySelector(".tasklist");
const inputField = document.getElementById("addTaskText");

const tasks = [
  {
    index: 1,
    title: "buy the milk",
    duedate: "2018/07/01",
    comment: "don't forget this",
    file: true,
    star: false,
    done: false
  },
  {
    index: 2,
    title: "recharge phone plan",
    duedate: "2018/07/10",
    comment: "don't forget this",
    file: false,
    star: true,
    done: false
  },
  {
    index: 3,
    title: "fuel Jenny's car",
    duedate: "2018/06/05",
    comment: "don't forget this",
    file: true,
    star: false,
    done: true
  },
  {
    index: 4,
    title: "buy hiking equip",
    duedate: "2018/07/01",
    comment: "don't forget this",
    file: false,
    star: true,
    done: true
  }
];

function toggleElements(e) {
  const targetClasses = e.target.classList;

  index = e.target.parentElement.parentElement.dataset.index;
  let bool;
  if (targetClasses.contains("fa-star")) {
    e.target.parentElement.parentElement.classList.toggle("star");
    if (targetClasses.contains("fas")) {
      targetClasses.remove("fas");
      targetClasses.add("far");
      bool = false;
    } else if (targetClasses.contains("far")) {
      targetClasses.remove("far");
      targetClasses.add("fas");
      bool = true;
    }
    updateTaskList(tasks, index, bool, tasklist);
  }

  if (targetClasses.contains("fa-square")) {
    e.target.parentElement.parentElement.classList.toggle("done");
    targetClasses.remove("fa-square");
    targetClasses.add("fa-check-square");
  } else if (targetClasses.contains("fa-check-square")) {
    e.target.parentElement.parentElement.classList.toggle("done");
    targetClasses.remove("fa-check-square");
    targetClasses.add("fa-square");
  }
}

tasklist.addEventListener("click", toggleElements);

function updateTaskList(arr = [], index, bool, taskListEle) {
  arr[index].star = bool;
  createTaskList(arr, taskListEle);
}

function createTaskList(arr = [], taskListEle) {
  arr.sort((a, b) => (!a.star ? 1 : -1));
  let html = ``;
  arr.map((item, index) => {
    const { title, duedate, comment, file, star, done } = item;
    const taskClass = `task ${star ? "star" : ""} ${done ? "done" : ""}`;

    const starClass = star ? "fas fa-star" : "far fa-star";
    const stateClass = done ? "far fa-check-square" : "far fa-square";
    const commentIcon =
      comment === ""
        ? ""
        : `<div class="addon addon-note"><i class="far fa-comment-dots"></i></div>`;
    const fileIcon = file
      ? ``
      : `<div class="addon addon-file"><i class="far fa-file"></i></div>`;
    const dateIcon = duedate
      ? ``
      : `<div class="addon addon-date"><i class="far fa-calendar-alt"></i> ${duedate}</div>`;

    html += `
    <div class="${taskClass}" data-index=${index}>
      <div class="icon-tick">
        <i class="${stateClass}"></i>
      </div>
      <div class="title">${title}</div>
      <div class="icon-star">
        <i class="${starClass}"></i>
      </div>
      <div class="icon-edit">
        <i class="fas fa-pencil-alt"></i>
      </div>
      <div class="task-addon">
        ${dateIcon}
        ${fileIcon}
        ${commentIcon}
      </div>
    </div>
  `;
  });
  taskListEle.innerHTML = html;
  tasklist.innerHTML = html;
}

createTaskList(tasks, tasklist);

function sortingOrder(obj) {
  return Object.keys(obj).sort((a, b) => (obj[a].star ? 1 : -1));
}

function showEditor() {
  document.querySelector(".addTask").style.display = "block";
}
function hideEditor() {
  document.querySelector(".addTask").style.display = "none";
}

inputField.addEventListener("focus", showEditor);
// inputField.addEventListener("blur", hideEditor);
document.querySelector(".button-cancel").addEventListener("click", hideEditor);
