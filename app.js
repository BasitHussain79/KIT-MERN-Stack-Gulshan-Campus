const todoForm = document.querySelector("#todoForm");
const list = document.querySelector("ul");

const restTodoList = localStorage.getItem("todoList")
  ? JSON.parse(localStorage.getItem("todoList"))
  : [];

const arr = [...restTodoList];

const setTodoValueInLocalStorage = (data) => {
  localStorage.setItem("todoList", JSON.stringify(data));
};

function submitHandler(e) {
  e.preventDefault();
  arr.push(e.target["addTodo"].value);
  setTodoValueInLocalStorage(arr);
  const li = document.createElement("li");
  li.textContent = e.target["addTodo"].value;
  list.append(li);

  document.querySelector(".emptyList").style.display = "none";
}

todoForm.addEventListener("submit", submitHandler);

if (localStorage?.todoList && localStorage?.todoList?.length > 0) {
  const todos = JSON.parse(localStorage.todoList);

  todos.forEach((data, idx) => {
    const li = document.createElement("li");
    const para = document.createElement("p");
    const btn = document.createElement("button");

    li.setAttribute("data-id", idx);

    para.textContent = data;
    li.append(para);

    btn.textContent = "Delete";
    li.append(btn);

    btn.setAttribute("type", "button");
    btn.addEventListener("click", (e) => {
      console.log(li.getAttribute("data-id"));
      const id = li.getAttribute("data-id");
      arr.splice(+id, 1);
      setTodoValueInLocalStorage(arr);
    });

    list.append(li);
  });
} else {
  const li = document.createElement("li");
  li.setAttribute("class", "emptyList");
  li.textContent = "List is empty";
  list.append(li);
}

// for (let i = 0; i < arr.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = arr[i];
//   list.append(li);
// }
