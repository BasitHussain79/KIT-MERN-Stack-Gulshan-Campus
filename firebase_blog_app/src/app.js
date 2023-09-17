// firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6eLttUfcXS10s2Zk20SBjX7mZR7R3oJw",
  authDomain: "blogappjs.firebaseapp.com",
  projectId: "blogappjs",
  storageBucket: "blogappjs.appspot.com",
  messagingSenderId: "991349741413",
  appId: "1:991349741413:web:b43a8338833baf1c06338c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Now you can use Firebase services like authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// handle public and protected routes
const routes = [
  { path: "index.html", isProtected: true },
  { path: "profile.html", isProtected: true },
  { path: "signup.html", isProtected: false },
  { path: "login.html", isProtected: false },
];

function userIsAuthenticated() {
  if (localStorage.token && localStorage.id) return true;

  return false;
}

// Function to handle protected route access
function handleProtectedRoute(route) {
  const currentRoute = routes.find((r) => r.path === route);

  if (currentRoute) {
    if (
      currentRoute.path === "signup.html" ||
      currentRoute.path === "login.html"
    ) {
      if (userIsAuthenticated()) {
        window.location.href = "/";
      }
    } else if (currentRoute.isProtected && !userIsAuthenticated()) {
      // If the route is protected and the user is not authenticated, redirect to the login page
      window.location.href = "login.html";
    }
  } else {
    // Handle unknown routes (e.g., 404)
    window.location.href = "index.html"; // Redirect to a default route or an error page
  }
}

const handleRouteChange = () => {
  const currentPath = window.location.pathname.split("/").pop();
  handleProtectedRoute(currentPath);
};

// Event listener for route changes
window.addEventListener("DOMContentLoaded", handleRouteChange);

// register start -------------------------------
const registerForm = document.querySelector("#signupform");
const signupAlert = document.querySelector("#signup-alert");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = e.target["fullName"].value;
    const email = e.target["email"].value;
    const password = e.target["pwd"].value;
    if (!name || !email || !password) {
      signupAlert.style.display = "block";
      signupAlert.textContent = "Please enter all required fields";
      return;
    }
    signupAlert.style.display = "none";
    console.log({
      name,
      email,
      password,
    });

    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, "******");
          const userData = {
            id: user.uid,
            fullName: name,
            email,
            created_at: Timestamp.fromDate(new Date()),
          };
          await setDoc(doc(db, "users", user.uid), userData)
            .then(() => {
              console.log("created");
            })
            .catch((err) => {
              console.log("get error to add the doc in firestore", err);
            });

          localStorage.setItem("token", user.accessToken);
          localStorage.setItem("id", user.uid);

          window.history.pushState({}, "", "/");
          handleRouteChange();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode***", errorCode);
          console.log("errorMessage***", errorMessage);
          if (errorCode?.includes("auth/email-already-in-use")) {
            signupAlert.style.display = "block";
            signupAlert.textContent = "User already exists";
          }
          // ..
        });
    } catch (err) {
      console.log(err);
    }
  });
}
// register end -------------------------------

// login start -----------------------------
const loginForm = document.querySelector("#loginform");
const loginAlert = document.querySelector("#login-alert");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target["email"].value;
    const password = e.target["pwd"].value;
    console.log({
      email,
      password,
    });

    if (!email || !password) {
      loginAlert.style.display = "block";
      loginAlert.textContent = "Please enter the credetials.";
      return;
    }
    loginAlert.style.display = "none";

    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, "*****");
          localStorage.setItem("token", user.accessToken);
          localStorage.setItem("id", user.uid);
          window.history.pushState({}, "", "/");
          handleRouteChange();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode***", errorCode);
          console.log("errorMessage***", errorMessage);
          if (errorCode?.includes("auth/invalid-login-credentials")) {
            loginAlert.style.display = "block";
            loginAlert.textContent = "Please enter valid credetials.";
            return;
          }
        });
    } catch (err) {
      console.log("error in sign in", err);
    }
  });
}
// login end -------------------------------

// logout start ----------------------------
const logoutBtn = document.querySelector("#logout");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        window.history.pushState({}, "", "login.html");
        handleRouteChange();
        window.location.reload();
      })
      .catch((error) => {
        console.log("during signout error", error.message);
        // An error happened.
      });
  });
}
// logout end ----------------------------

const blogList = document.querySelector(".blogs");
const allBlogList = document.querySelector(".all-blogs");
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

if (blogForm) {
  blogForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e, e.target["name"]);
    const data = {
      category: e.target["category"].value,
      title: e.target["title"].value,
      description: e.target["blog"].value,
      date: Timestamp.fromDate(new Date()),
      userId: localStorage.id,
    };
    console.log("submit", data);
    try {
      const docRef = await addDoc(collection(db, "blogs"), data);
      console.log("Document written with ID: ", docRef.id);
      e.target["category"].value = "";
      e.target["title"].value = "";
      e.target["blog"].value = "";
    } catch (e) {
      console.error("Error adding document in blog: ", e);
    }

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
}

const arrList = JSON.parse(localStorage.getItem("blogs"));

async function getBlogsAccordingToUser() {
  return new Promise((resolve, reject) => {
    const q = query(
      collection(db, "blogs"),
      where("userId", "==", localStorage.id)
    );

    const unsubs = onSnapshot(q, (querySnapshot) => {
      const blogs = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data(), doc.id, "****");
        blogs.push({ id: doc.id, ...doc.data() });
      });

      // Resolve the promise with the blogs data once the query is complete.
      resolve(blogs);
    });
  });
}

// Call the async function and then log the data
(async () => {
  try {
    const data = await getBlogsAccordingToUser();
    console.log(data, "************&&&&");
    if (blogList) {
      data && data.length > 0
        ? data.forEach((data) => {
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
          })
        : [];
    }
  } catch (err) {
    console.log("Error fetching blogs:", err.message);
  }
})();

// format firebase timestamp date
function convertTimestampToLocaleString(timestamp) {
  const date = timestamp.toDate(); // Convert Firestore Timestamp to JavaScript Date
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    // timeZoneName: "short",
  };
  const localeDateString = date.toLocaleDateString(undefined, options);
  return localeDateString;
}

// all blogs data (Home Page) start ---------------------------------
async function getAllBlogs() {
  return new Promise((resolve, reject) => {
    const q = query(collection(db, "blogs"));

    const unsubs = onSnapshot(q, async (querySnapshot) => {
      const blogs = [];
      for (const blogdoc of querySnapshot.docs) {
        console.log(blogdoc.data(), blogdoc.id, "****");

        // get data from user collection according to the userId
        const userId = blogdoc.data().userId;
        const userDocRef = doc(db, "users", userId); // Corrected this line
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          console.log("Document data:", userDocSnap.data());
          blogs.push({
            id: blogdoc.id,
            ...blogdoc.data(),
            name: userDocSnap.data().fullName,
            email: userDocSnap.data().email,
          });
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such user document for userId:", userId);
        }
      }

      // Resolve the promise with the blogs data once the query is complete.
      resolve(blogs);
    });
  });
}

// Call the async function and then log the data
(async () => {
  try {
    const data = await getAllBlogs();
    console.log(data, "************&&&&");
    if (allBlogList) {
      data && data.length > 0
        ? data.forEach((data) => {
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
            datePara.innerHTML = `<em>by</em> ${
              data.name
            } - ${convertTimestampToLocaleString(data.date)}`;

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

            allBlogList.append(blog);
          })
        : [];
    }
  } catch (err) {
    console.log("Error fetching blogs:", err.message);
  }
})();

// all blogs data (Home Page) end ---------------------------------
