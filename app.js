const todoForm = document.querySelector("#todoForm");
const list = document.querySelector("ul");

const restTodoList = JSON.parse(localStorage.getItem("todoList"));

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
}

todoForm.addEventListener("submit", submitHandler);

if (localStorage?.todoList && localStorage?.todoList?.length > 0) {
  const todos = JSON.parse(localStorage.todoList);

  todos.forEach((data) => {
    const li = document.createElement("li");
    li.textContent = data;
    list.append(li);
  });
} else {
  const li = document.createElement("li");
  li.textContent = "List is empty";
  list.append(li);
}

// for (let i = 0; i < arr.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = arr[i];
//   list.append(li);
// }
