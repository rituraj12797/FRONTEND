function setCookie(name, value, options = {}) {
  const defaults = {
    path: "/", // The path for which the cookie is valid          // The expiration date (if empty, the cookie is a session cookie)
    maxAge: "1000*60*60*60", // The maximum age of the cookie in seconds (if set, takes precedence over 'expires')           // The domain for which the cookie is valid
    secure: false, // The cookie can only be transmitted over secure (HTTPS) connections
  };

  // Merge provided options with defaults
  const mergedOptions = { ...defaults, ...options };

  // Build the cookie string
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  // Add options to the cookie string
  for (const [key, val] of Object.entries(mergedOptions)) {
    if (val) {
      cookieString += `; ${key}=${val}`;
    }
  }

  // Set the cookie
  // document.cookie = cookieString;
  return cookieString;
  // console.log(cookieString)
}



var ham = document.querySelector(".ico2");
var cross = document.querySelector(".ico3");
var follow_button = document.querySelector(".follow");
var blog_data = document.querySelector(".blog_data");
var follower_data = document.querySelector(".followers_data");
var blogs = document.querySelector(".blogs");
var followers = document.querySelector(".followers");
var follower_object = {
  follower_number: 0,
};
blog_data.classList.add("expand");
follower_data.classList.add("collapse");
function expand() {
  follower_data.classList.toggle("collapse");
  follower_data.classList.toggle("expand");
  blog_data.classList.toggle("collapse");
  blog_data.classList.toggle("expand");
}
blogs.addEventListener("click", () => {
  if (!blog_data.classList.contains("expand")) {
    expand();
    active_button();
  }
});
followers.addEventListener("click", () => {
  if (!follower_data.classList.contains("expand")) {
    expand();
    active_button();
  }
});
blogs.classList.add("active_button");
function active_button() {
  followers.classList.toggle("active_button");
  blogs.classList.toggle("active_button");
}

follow_button.addEventListener("click", (event) => {
  event.preventDefault;

  if (follower_object.follower_number == 0) {
    follow_button.textContent = "Following";
    event.target.style.cssText = "background-color:#383838;color:#ffc700";
    follower_object.follower_number = 1;
  } else if (follower_object.follower_number == 1) {
    alert(" you really want to unfollow ?");
    follow_button.textContent = "Follow+";
    event.target.style.cssText = "background-color:#ffc700;color:black";
    follower_object.follower_number = 0;
  }
});

function switches() {
  var ham = document.querySelector(".ico2");
  var cross = document.querySelector(".ico3");
  ham.classList.toggle("wrap");
  cross.classList.toggle("wrap");
  hide_nav();
}
function hide_nav() {
  document
    .querySelector(".vertical_navbar")
    .classList.toggle("visible_verticle_navbar");
}
ham.addEventListener("click", switches);
cross.addEventListener("click", switches);

var translate = {
  value: 0,
};

/* initially setting the value o finput */
var username = document.querySelector("#name_input");
var slug = document.querySelector("#slug");
var bio = document.querySelector("#bio");
// var link = document.querySelector("#la");

// link.disabled = true;
// slug.disabled = true;
// username.disabled = true;
// bio.disabled = true;

// link.textContent = "https://www.linkedin.com/in/ritu-raj-67b378175/";
bio.defaultValue =
  " hey world i am jp morgan from california i love blogging and coding stuff";
slug.defaultValue = "/morgan-2004";
username.defaultValue = "J P Morgan";
console.log(" hello world");

function follower(follower_no,username,id) {
  // async function image() {
  //     data =
  // }
  var follower_container = document.querySelector('.follower_container')
  var follower_component = `<div class="${follower_no} follower">
<div class="logo">
    <i class="fa-solid fa-circle-user     user_logo" style="color: #ffc700;"></i>
</div>
<div class="info">
    <div class="name_user">${username}</div>
    <div class="follower_data">
        
       
    </div>
</div>
<a class="follow" style="color:#000000;text-decoration:none;display:flex;justify-content:center;align-items:center;" href="./author_data.html?id=${id}">view</a>

</div>`;
  follower_container.innerHTML += follower_component;
}

function blog_component(blog_count,id,title, genre, like_count, imagesrc) {
  // img_src,titl,genr,id
  
  var blog_container = document.querySelector(".blogs_container");
  var blog_component = ` <div class="user_blog ${blog_count}">

    
    <div class="blog_image" style = "background-image: url('${imagesrc}');">
</div>
<div class="blog_desc">
    <div class="title">${title}</div>

    <div class="blog_cat_and_like">
        <div class="caetogry">${genre}</div>
        <div class="likes">Likes: <span class="like">${like_count}</span> </div>
    </div>
 
    <div class="view">
        <div id="view_text">
           <a href="./blogRead.html?id=${id}" id="read_more_button"> Read more </a>
        </div>
    </div>
</div>
</div>`;
  blog_container.innerHTML += blog_component;
}



function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
const id = getQueryParam("id");
console.log(id);

const getblogs = async (e) => {
  e.preventDefault();
  // const id = JSON.parse(localStorage.getItem("user")).user._id;
  const headerss = new Headers();
  let token = JSON.parse(localStorage.getItem("user")).token
  console.log(token)
  headerss.append(
    "Authentication",
    `Bearer ${setCookie("token", token, {
      expires: "Sun, 31 Dec 2023 23:59:59 GMT",
      domain: "dep-mocha-six.vercel.app",
      path: "/api/v1/user",
    })}`
  );
  headerss.append("Accept", "/");
  headerss.append("Connection", "keep-alive");
  console.log(JSON.parse(localStorage.getItem("user")).user._id)
  console.log("fhjsdvfhjvsdhjfvsdhjk")
  console.log(id)
  const response = await fetch(
    `https://dep-mocha-six.vercel.app/api/v1/user/authorBlogs/${id}`,
    {
      method: "GET",
      mode: "cors",
    }
  );
  const data = await response.json();
  // for Loop laga do
  console.log(data);


  if (response.ok) {
    for (let i=0 ;i < data.blogs.length ;i++  ) {
      // blog_count,id,title, genre, like_count, imagesrc
      blog_component(i+1,data?.blogs[i]._id,data.blogs[i].title,data.blogs[i].category,data.blogs[i]?.likesCount,data.blogs[i]?.thumbnail.secure_url);
    }
};




};

// window.addEventListener("click", getblogs);
window.addEventListener("load", getblogs);

const getData = async () => {
  console.log(id)
  const response = await fetch(
    `https://dep-mocha-six.vercel.app/api/v1/user/userdetails/${id}`,
    {
      mode: "cors",
    }
  );
  const data = await response.json();
  console.log(data)
  document.querySelector('#name_input').value=data.user.name
  document.querySelector('#slug').value=data.user.username
  document.querySelector('#bio').value=data.user.bio
  document.querySelector('.profile').style.cssText=`background-image:url('${data.user.avatar.secure_url}')`

  if (response.ok) {
    for (let i=0 ;i <data.user?.follows?.length ;i++  ) {
          follower(i+1,data.user.follows[i].username,data.user.follows[i].userId);
    }


};
}
window.addEventListener("load", getData);

// const getFollowers = async () => {
//   let token;
// if (localStorage.getItem("user")) {
//   token = localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user")).token
//     : "";
// } else {
//   alert("You are not Logged in ");
//   location.href = "../index.html";
// }
//   function setCookie(name, value, options = {}) {
//     const defaults = {
//       path: "/", // The path for which the cookie is valid          // The expiration date (if empty, the cookie is a session cookie)
//       maxAge: "1000*60*60*60", // The maximum age of the cookie in seconds (if set, takes precedence over 'expires')           // The domain for which the cookie is valid
//       secure: false, // The cookie can only be transmitted over secure (HTTPS) connections
//     };
  
//     // Merge provided options with defaults
//     const mergedOptions = { ...defaults, ...options };
  
//     // Build the cookie string
//     let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
//     // Add options to the cookie string
//     for (const [key, val] of Object.entries(mergedOptions)) {
//       if (val) {
//         cookieString += `; ${key}=${val}`;
//       }
//     }
  
//     // Set the cookie
//     // document.cookie = cookieString;
//     return cookieString;
//     // console.log(cookieString)
//   }
//   const headerss = new Headers();

//   headerss.append(
//     "Authentication",
//     `Bearer ${setCookie("token", token, {
//       expires: "Sun, 31 Dec 2023 23:59:59 GMT",
//       domain: "dep-mocha-six.vercel.app",
//       path: "/api/v1/user",
//     })}`
//   );
//   headerss.append("Accept", "*/*");
//   headerss.append("Connection", "keep-alive");
//   console.log("jbd");
//   console.log(headerss);
//   const response = await fetch(
//     "https://dep-mocha-six.vercel.app/api/v1/user/getFollowers",
//     {
//       mode: "cors",
//       headers: headerss,
//     }
//   );
//   const data = await response.json();
//   console.log(data);
// };
// window.addEventListener("load", getFollowers);

const followUser = async () => {
  
  function setCookie(name, value, options = {}) {
    const defaults = {
      path: "/", // The path for which the cookie is valid          // The expiration date (if empty, the cookie is a session cookie)
      maxAge: "1000*60*60*60", // The maximum age of the cookie in seconds (if set, takes precedence over 'expires')           // The domain for which the cookie is valid
      secure: false, // The cookie can only be transmitted over secure (HTTPS) connections
    };
  
    // Merge provided options with defaults
    const mergedOptions = { ...defaults, ...options };
  
    // Build the cookie string
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
    // Add options to the cookie string
    for (const [key, val] of Object.entries(mergedOptions)) {
      if (val) {
        cookieString += `; ${key}=${val}`;
      }
    }
  
    // Set the cookie
    // document.cookie = cookieString;
    return cookieString;
    // console.log(cookieString)
  }
  console.log(JSON.parse(localStorage.getItem("user")).user._id);
  let token;
  if (localStorage.getItem("user")) {
    token = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).token
      : "";
  } else {
    alert("You are not Logged in ");
    location.href = "./index.html";

  }
  const headerss = new Headers();

  headerss.append(
    "Authentication",
    `Bearer ${setCookie("token", token, {
      expires: "Sun, 31 Dec 2023 23:59:59 GMT",
      domain: "dep-mocha-six.vercel.app",
      path: "/api/v1/user",
    })}`
  );
  headerss.append("Accept", "*/*");
  headerss.append("Connection", "keep-alive");
  console.log(id)
  const response = await fetch(`https://dep-mocha-six.vercel.app/api/v1/user/followUser/${id}`, {
    method : "POST", 
    mode : "cors", 
    headers : headerss
  })
  const data =  await response.json() 
  console.log(data) 




};

document.getElementById("follow").addEventListener("click" , followUser)
