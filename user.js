
console.log(JSON.parse(localStorage.getItem("user")).user._id);
let token;
if (localStorage.getItem("user")) {
  token = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).token
    : "";
} else {
  alert("You are not Logged in ");
  location.href = "../index.html";
}
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














let getData = async (e) => {
  e.preventDefault();
  // let token = "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTcwYTU1Njc5ZmYxOWU5N2FhN2U2MCIsImVtYWlsIjoiYXl1c2h2aXNoNjU1NUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRraGIiLCJpYXQiOjE2OTYwODIwMjAsImV4cCI6MTY5NjE2ODQyMH0.C1nzMd0j9tbwDi9ImnUMpStg5W3Ir6RsuNOpXXBi26Q; path=/api/v1/user; maxAge=1000*60*60*60; expires=Sun, 31 Dec 2023 23:59:59 GMT; domain=dep-mocha-six.vercel.app"
  // let token = (localStorage.getItem("user" )  ? JSON.parse(localStorage.user).token : "")
  let token2 = setCookie("token", token, {
    expires: "Sun, 31 Dec 2023 23:59:59 GMT",
    domain: "dep-mocha-six.vercel.app",
    path: "/api/v1/user",
  });
  console.log(token2);
  const response = await fetch(
    "https://dep-mocha-six.vercel.app/api/v1/user/me",
    {
      mode: "cors",
      method: "GET",
      headers: {
        Authentication: `Bearer ${token2}`,
      },
    }
  );
  console.log(response);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    alert("you are not Logged in ");
    location.href = "../index.html";
  }

  // In the data all the response is there
};

// window.addEventListener("load", getData);

const updateProfile = async (e) => {
  e.preventDefault();
  

  const formData = new FormData();

  formData.append(
    "avatar",
    document.getElementById("input-profile-image").files[0]
  );
  formData.append(
    "bio",
    document.getElementById("bio").value
  );
  formData.append(
    "username",
    document.getElementById("slug").value
  );
  formData.append(
    "name",
    document.getElementById("name_input").value
  );

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
  console.log("jbd");
  console.log(headerss);
  const response = await fetch(
    "https://dep-mocha-six.vercel.app/api/v1/user/updateUser",
    {
      method: "POST",
      body: formData,
      headers: headerss,
      mode: "cors",
    }
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  if(response.ok) {
    alert("user Upadated SuccessFully ") 
    location.reload()
  }
  else  { 
      alert(data.message) 
      
  }
};

// I was not getting the save button








// Example: Set a cookie named 'myCookie' with the value 'exampleValue'

var ham = document.querySelector('.ico2');
var cross = document.querySelector('.ico3');
var blog_data = document.querySelector('.blog_data');
var follower_data = document.querySelector('.followers_data');
var blogs = document.querySelector('.blogs');
var followers = document.querySelector('.followers');
var edit = document.querySelector('.edit_button');
var presscount = 0;
var slug = document.querySelector('#slug');
var bio = document.querySelector('#bio');
var link = document.querySelector('#link');
var profile = document.querySelector('.profile')

var userhandle = document.querySelector('#name_input');

var profile_edit = document.querySelector('#profilePictureEdit');

blog_data.classList.add('expand');
follower_data.classList.add('collapse');

slug.disabled=true;
bio.disabled=true;

userhandle.disabled=true;
profile.disabled=true;
edit.addEventListener('click', (event) => {
  
    if (presscount == 0) {
        event.preventDefault();
        edit.textContent = "Save";
        event.target.style.cssText = "background-color:#383838;color:#ffc700"
       presscount = 1;
       slug.disabled=false;
       bio.disabled=false;
    //    link.disabled=false;
profile.disabled=false;

       userhandle.disabled=false;
       edit.setAttribute("id","submitt");
       document.getElementById("submitt").addEventListener("click", updateProfile);
     
    }
    else if (presscount == 1) {
        event.preventDefault();
        alert(" you really want to save ?")
        
        edit.textContent = "Edit";
        event.target.style.cssText = "background-color:#ffc700;color:black"
        presscount = 0;
        slug.disabled=true;
        bio.disabled=true;
        // link.disabled=true;
        userhandle.disabled=true;
       edit.removeAttribute("id");
        profile.disabled=true;

       
    }
})
function expand()
{
    follower_data.classList.toggle('collapse');
    follower_data.classList.toggle('expand');
    blog_data.classList.toggle('collapse');
    blog_data.classList.toggle('expand');
}
blogs.addEventListener('click',()=>
{
    if(!blog_data.classList.contains('expand'))
    {
        expand();
        active_button();
    }
});
followers.addEventListener('click',()=>
{
    if(!follower_data.classList.contains('expand'))
    {
        expand();
        active_button();
    }
});
blogs.classList.add('active_button');
function active_button()
{
  followers.classList.toggle('active_button')
  blogs.classList.toggle('active_button')
}


function switches()
{

    var ham = document.querySelector('.ico2');
    var cross = document.querySelector('.ico3');
    ham.classList.toggle('wrap');
    cross.classList.toggle('wrap');
   hide_nav();
}
function hide_nav()
{
    document.querySelector('.vertical_navbar').classList.toggle('visible_verticle_navbar');
}
// ham.addEventListener('click',switches);
// cross.addEventListener('click',switches);



// link.textContent = "https://www.linkedin.com/in/ritu-raj-67b378175/"
// bio.defaultValue = " hey world i am jp morgan from california i love blogging and coding stuff";
// slug.defaultValue = "/morgan-2004";
// username.defaultValue = "J P Morgan";
// console.log(" hello world")


function follower( follower_no , username , id  ) {
    // async function image() {
    //     data = 
    // }
 
    var follower_container = document.querySelector('.follower_container');
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

</div>`
    follower_container.innerHTML += follower_component;
}


function blog_component(img_src,titl,genr,id) {   // to link api you can call apis hereand set titles as per response 
    var title = "mecha";
    var discription = "rhbcxxhjvbhvhjvbcxhx hxch vitae deserunt adipisci reiciendis quia sint quasi, architecto voluptatum quis! vitae deserunt adipisci reiciendis quia sint quasi, architecto voluptatum quis! cxhjxhjgzghjbvb hjz vj";
    var genre = "Technology";
    var like_count = 64;
    var blog_count = 1;
    var blog_container = document.querySelector('.blogs_container');
    var blog_component = ` <div class="user_blog ${blog_count}">

<div class="blog_image" style="background-image:url('${img_src}')">
</div>
<div class="blog_desc">
    <div class="title">${titl}</div>

    <div class="blog_cat_and_like">
        <div class="caetogry">${genr}</div>
        <div class="likes">Likes: <span class="like">${like_count}</span> </div>
    </div>
   
    <div class="view">
        <div id="view_text">
           <a href="./blogRead.html?id=${id}" id="read_more_button"> Read more </a>
        </div>
    </div>
</div>
</div>`
    blog_container.innerHTML+=blog_component;
    console.log(" i haev wored")
}

const getblogs = async () => {
  // e.preventDefault();
  const id = JSON.parse(localStorage.getItem("user")).user._id;
  const headerss = new Headers();

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
    for (let i=0 ;i <data.blogs.length ;i++  ) {
      // img_src,titl,genr,id
      blog_component(data.blogs[i].thumbnail.secure_url,data.blogs[i].title,data.blogs[i].category,data.blogs[i]._id);
    }
};
}

 getblogs();

let getFollowers = async (e) => {
    e.preventDefault();
    // let token = "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTcwYTU1Njc5ZmYxOWU5N2FhN2U2MCIsImVtYWlsIjoiYXl1c2h2aXNoNjU1NUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRraGIiLCJpYXQiOjE2OTYwODIwMjAsImV4cCI6MTY5NjE2ODQyMH0.C1nzMd0j9tbwDi9ImnUMpStg5W3Ir6RsuNOpXXBi26Q; path=/api/v1/user; maxAge=1000*60*60*60; expires=Sun, 31 Dec 2023 23:59:59 GMT; domain=dep-mocha-six.vercel.app"
    // let token = (localStorage.getItem("user" )  ? JSON.parse(localStorage.user).token : "")
    let token2 = setCookie("token", token, {
      expires: "Sun, 31 Dec 2023 23:59:59 GMT",
      domain: "dep-mocha-six.vercel.app",
      path: "/api/v1/user",
    });
    console.log(token2);
    const response = await fetch(
      "https://dep-mocha-six.vercel.app/api/v1/user/me",
      {
        mode: "cors",
        method: "GET",
        headers: {
          Authentication: `Bearer ${token2}`,
        },
      }
    );
    console.log(response);
    const data = await response.json();
    if (response.ok) {
      for (let i=0 ;i <data.user?.follows?.length ;i++  ) {
            follower(i+1,data.user.follows[i].username,data.user.follows[i]._id);
      }
      console.log(data);
      userhandle.value=data.user.name
      slug.value = data.user.username
      bio.value = data.user.bio
      document.querySelector('.profile').style.cssText=` background-image: url('${data.user.avatar.secure_url}');`
    } else {
      alert("you are not Logged in ");
      location.href = "../index.html";
    }
  
    // In the data all the response is there
  };
window.addEventListener("load" , getFollowers)