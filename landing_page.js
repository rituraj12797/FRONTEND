var body = document.querySelector('body')
var ham = document.querySelector('.ico2');
var cross = document.querySelector('.ico3');

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
ham.addEventListener('click',switches);

var translate ={
    value:0
}
cross.addEventListener('click',switches);
console.log(translate.value);
function swiper()
{
    var feat = document.querySelector('.featured_blogs');
    feat.style.cssText=`transform:translateX(${translate.value}vw)`;
}
var featured_array = document.querySelectorAll('.featured_blg');
console.log()
document.querySelector('.left_button').addEventListener('click',()=>
{
    if(translate.value==0)
    {
        translate.value=-(featured_array.length-1)*100;
    swiper();

    }
    else{
        translate.value+=100;
    console.log(translate.value);
    swiper();
    }
})
document.querySelector('.right_button').addEventListener('click',()=>
{
    if(translate.value==-(featured_array.length-1)*100)
    {
        translate.value=0;
    swiper();

    }
   else{
    translate.value-=100;
    console.log(translate.value);
    swiper();
   }
})

// let ALLBLOGS =  async () => { 
 
//     const response  =await fetch("https://dep-mocha-six.vercel.app/api/v1/blogs/getAllblogs")
 
//     const data = await response.json()
//     // this is the api to fetch all blogs 

//     console.log(data) 

// }
// window.addEventListener("load" , ALLBLOGS)

// To get recent blogs 

let GET_RECENT_BLOGS = async () => {
    const response = await fetch("https://dep-mocha-six.vercel.app/api/v1/blogs/")

    const  data = await response.json()

    console.log(data)
    for (let i = 0; i < 4; i++) {
        
        document.querySelector(`.hd${i+1}`).textContent=data.blogs[i].title
        document.querySelector(`.td${i+1}`).textContent=data.blogs[i].description
        document.querySelector(`.e${i+1}`).setAttribute("href",`./blogRead.html?id=${data.blogs[i]._id}`)
        document.querySelector(`.featured_blog${i+1}`).style.cssText=`background-image:url(${data.blogs[i].thumbnail.secure_url});`
    }


    for (let i = 0; i < 5; i++) {
        document.querySelector(`.ct${i+1}`).textContent=data.blogs[i+4].category
        document.querySelector(`.he${i+1}`).textContent=data.blogs[i+4].title
        // document.querySelector(`.dc${i+1}`).textContent=data.blogs[i+4].description
        document.querySelector(`.rm${i+1}`).setAttribute("href",`./blogRead.html?id=${data.blogs[i+4]._id}`)

        
    }






}
window.addEventListener("load" , GET_RECENT_BLOGS)



const GET_BY_CATEGORY = async  (category )  =>   {
    
     const response = await fetch (`https://dep-mocha-six.vercel.app/api/v1/blogs/getblogByCategory/${category}`)

     const data = response.json() 

     console.log(data)

}









