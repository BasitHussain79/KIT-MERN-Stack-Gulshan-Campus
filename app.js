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
  const randomValue = Math.floor(Math.random() * 1000);
  arr.push({
    todo: e.target["addTodo"].value,
    id: randomValue,
  });
  setTodoValueInLocalStorage(arr);
  todoListInteractWithHTML(e.target["addTodo"].value, randomValue);
  // const li = document.createElement("li");
  // const para = document.createElement("p");
  // const btn = document.createElement("button");
  // const editBtn = document.createElement("button");

  // li.setAttribute("data-id", arr.length);

  // para.textContent = e.target["addTodo"].value;
  // li.append(para);

  // editBtn.textContent = "Edit";
  // li.append(editBtn);

  // btn.textContent = "Delete";
  // li.append(btn);

  // btn.setAttribute("type", "button");
  // btn.addEventListener("click", (e) => {
  //   console.log(li.getAttribute("data-id"));
  //   const id = li.getAttribute("data-id");
  //   arr.splice(+id, 1);
  //   setTodoValueInLocalStorage(arr);
  //   e.target.parentElement.remove();
  // });

  // list.append(li);

  document.querySelector(".emptyList").style.display = "none";
}

todoForm.addEventListener("submit", submitHandler);

if (localStorage?.todoList && localStorage?.todoList?.length > 0) {
  const todos = JSON.parse(localStorage.todoList);

  todos.forEach((data) => {
    todoListInteractWithHTML(data);
  });
} else {
  const li = document.createElement("li");
  li.setAttribute("class", "emptyList");
  li.textContent = "List is empty";
  list.append(li);
}

function todoListInteractWithHTML(data, randomValue) {
  const li = document.createElement("li");
  const para = document.createElement("p");
  const btn = document.createElement("button");
  const editBtn = document.createElement("button");

  li.setAttribute("data-id", data?.id ?? randomValue);

  const editForm = document.createElement("form");
  const editInput = document.createElement("input");
  const updateTodo = document.createElement("button");

  editInput.setAttribute("type", "text");
  editInput.setAttribute("name", "editTodo");
  editForm.style.display = "none";

  updateTodo.setAttribute("type", "submit");
  updateTodo.textContent = "Update";
  editForm.append(editInput);
  editForm.append(updateTodo);

  li.append(editForm);

  para.textContent = data?.todo ?? data;
  li.append(para);

  editBtn.textContent = "Edit";
  li.append(editBtn);

  btn.textContent = "Delete";
  li.append(btn);

  btn.setAttribute("type", "button");

  // Edit
  editBtn.addEventListener("click", (e) => {
    para.style.display = "none";
    btn.style.display = "none";
    editBtn.style.display = "none";
    editForm.style.display = "block";
    editInput.value = para.textContent;
  });

  // submit edit todo
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = li.getAttribute("data-id");
    const updateArr = arr.map((data) => {
      if (+data.id === +id) return { todo: editInput.value, id };
      return data;
    });
    setTodoValueInLocalStorage(updateArr);
    para.textContent = editInput.value;
    editForm.style.display = "none";
    para.style.display = "block";
    btn.style.display = "block";
    editBtn.style.display = "block";
  });

  // Delete
  btn.addEventListener("click", (e) => {
    console.log(li.getAttribute("data-id"));
    const id = li.getAttribute("data-id");
    // arr.splice(+id, 1);
    const deleteArr = arr.filter((data) => +data.id !== +id);
    setTodoValueInLocalStorage(deleteArr);
    e.target.parentElement.remove();
  });

  list.append(li);
}

// for (let i = 0; i < arr.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = arr[i];
//   list.append(li);
// }
