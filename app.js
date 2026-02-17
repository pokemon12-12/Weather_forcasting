let btn = document.querySelector("button");
let city = document.querySelector(".city");
let temp= document.querySelector(".temp");
let descrip=document.querySelector(".descrip");
let extra = document.querySelector(".more_discrip");
let humidityUI = extra.querySelector(".humidity");
let windUI = extra.querySelector(".wind_speed");
let img=document.querySelector(".image");

const apiKey = "3f2796cc179f7c3135c17612a633bbc7";

btn.addEventListener("click", () => {

    let cityName = city.value.trim();
    console.log("Searching for:", cityName);

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            humidityUI.innerText = `${data.main.humidity}%`;

            windUI.innerText = `${data.wind.speed} km/h`;

            temp.innerText=`${data.main.temp} °c`;

            descrip.innerText = data.weather[0].description;

            const iconCode = data.weather[0].icon;
            img.src =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        })
        .catch(error => console.log(error));
});

