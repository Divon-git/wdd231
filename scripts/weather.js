const weatheIcon = document.getElementById("weather-icon");
const figcaption = document.querySelector("figcaption");
const currentTemp = document.getElementById("current-temp");

const apiKey = "c6acd1e525fd9a857008a47bc2defcea"

const long = 6.45
const lat = 3.39
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${long}&lon=${lat}&appid=${apiKey}`

const apiFetch = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error (await response.text());
        }

        const data = await response.json();
        console.log(data);
        displayResult(data)
    } catch (err){
        console.log(err)
    }
}

apiFetch()

const displayResult = (data) => {
    console.log("hello")
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatheIcon.setAttribute("src", icon);
    weatheIcon.setAttribute("alt", desc);
    figcaption.textContent = desc;
}

