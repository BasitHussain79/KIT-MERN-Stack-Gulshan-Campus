const blogList = document.querySelector(".blogs");
const blogForm = document.querySelector(".add-blog");

const blogArr = [
  {
    category: "Healthy Food",
    title: "Exotic Tender Chia Bread with Lime & Honey",
    date: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    category: "Tech",
    title: "Exotic Tender Chia Bread with Lime & Honey",
    date: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    category: "News",
    title: "Exotic Tender Chia Bread with Lime & Honey",
    date: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];

function blogStoreLocalStorage(blogListArr) {
  localStorage.setItem("blogs", JSON.stringify(blogListArr));
}

blogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e, e.target["name"]);
  const data = {
    name: e.target["name"].value,
    email: e.target["email"].value,
    category: e.target["category"].value,
    title: e.target["title"].value,
    description: e.target["blog"].value,
    date: new Date(),
  };
  console.log("submit", data);
  blogArr.push(data);

  blogStoreLocalStorage(blogArr);

  const blog = document.createElement("div");
  blog.setAttribute("class", "blog center");
  blog.style.flexDirection = "column";
  // category
  const catDiv = document.createElement("div");
  catDiv.setAttribute("class", "center");
  const catHeading = document.createElement("h4");
  catHeading.innerText = data.category;
  catDiv.append(catHeading);

  //title
  const titleLink = document.createElement("a");
  titleLink.setAttribute("href", "#");
  const titleHeading = document.createElement("h3");
  titleHeading.textContent = data.title;
  titleLink.append(titleHeading);

  // date
  const datePara = document.createElement("p");
  datePara.style.textAlign = "center";
  datePara.innerHTML = `<em>by</em> Basit Hussain - ${new Date(
    data.date
  ).toLocaleDateString()}`;

  // blog desc
  const blogDesc = document.createElement("p");
  blogDesc.style.textAlign = "justify";
  blogDesc.textContent = data.description;

  // btn
  const viewBtn = document.createElement("button");
  viewBtn.setAttribute("type", "button");
  viewBtn.setAttribute("class", "btn btn-outline-dark");
  viewBtn.textContent = `View`;

  const lineBreak = document.createElement("hr");

  blog.append(catDiv);
  blog.append(titleLink);
  blog.append(datePara);
  blog.append(blogDesc);
  blog.append(viewBtn);
  blog.append(lineBreak);

  blogList.append(blog);
});

const arrList = JSON.parse(localStorage.getItem("blogs"));
arrList.forEach((data) => {
  const blog = document.createElement("div");
  blog.setAttribute("class", "blog center");
  blog.style.flexDirection = "column";
  // category
  const catDiv = document.createElement("div");
  catDiv.setAttribute("class", "center");
  const catHeading = document.createElement("h4");
  catHeading.innerText = data.category;
  catDiv.append(catHeading);

  //title
  const titleLink = document.createElement("a");
  titleLink.setAttribute("href", "#");
  const titleHeading = document.createElement("h3");
  titleHeading.textContent = data.title;
  titleLink.append(titleHeading);

  // date
  const datePara = document.createElement("p");
  datePara.style.textAlign = "center";
  datePara.innerHTML = `<em>by</em> Basit Hussain - ${new Date(
    data.date
  ).toLocaleDateString()}`;

  // blog desc
  const blogDesc = document.createElement("p");
  blogDesc.style.textAlign = "justify";
  blogDesc.textContent = data.description;

  // btn
  const viewBtn = document.createElement("button");
  viewBtn.setAttribute("type", "button");
  viewBtn.setAttribute("class", "btn btn-outline-dark");
  viewBtn.textContent = `View`;

  const lineBreak = document.createElement("hr");

  blog.append(catDiv);
  blog.append(titleLink);
  blog.append(datePara);
  blog.append(blogDesc);
  blog.append(viewBtn);
  blog.append(lineBreak);

  blogList.append(blog);
});
