let url = 'https://api.openweathermap.org/data/2.5/weather?q=Shimla&appid=d310e3b45ccf3087a5714d1b1de1510b&units=metric';
let searchbutton=document.querySelector("#search");
let inputbar=document.querySelector("#citynames");
let cityname=document.querySelector(".cityname");
let temperature=document.querySelector(".temperature");
let humidity=document.querySelector(".humidity");
let airpressure=document.querySelector(".Airpressure");
let wind=document.querySelector(".Wind");

searchbutton.addEventListener("click",weatherdata)



async function weatherdata() {
    url=`https://api.openweathermap.org/data/2.5/weather?q=${inputbar.value}&appid=d310e3b45ccf3087a5714d1b1de1510b&units=metric`;
    let promise=await fetch(url);
    let data=await promise.json();
    cityname.innerText=`${inputbar.value} ${data.weather[0].main}`;
    temperature.innerText=`${data.main.temp}C`;
    humidity.innerText=`${data.main.humidity}`;
    airpressure.innerText=`${data.main.pressure}`;
    wind.innerText=`${data.wind.speed}`
}







