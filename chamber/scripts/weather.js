import getdate from "./date.js";
//  element variables
 const icon = document.querySelector("#weather-icon");
 const temp = document.querySelector(".current-temperature");
 const figcaption = document.querySelector("figcaption");
 const highs = document.querySelector("#highs");
 const lows = document.querySelector("#lows");
 const humidity = document.querySelector("#Humidity");
 const sunrise = document.querySelector("#Sunrise");
 const sunset = document.querySelector("#Sunset");
 const forcastCard = document.querySelector(".forcast");



//  main function
function displayLagosWeather( weatherIcon, currentTemp, caption) {
    const apiKey = "c6acd1e525fd9a857008a47bc2defcea"
    // 6.608669579816391, 3.327324478182115
    const long = 6.61
    const lat = 3.33
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
    const forcast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`

    const apiFetch = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error (await response.text());
            }

            const data = await response.json();
            console.log(data);
            

            const responseTwo = await fetch(forcast);
            if (!responseTwo.ok) {
                throw new Error (await responseTwo.text());
            }

            const forcastdata = await responseTwo.json();
            console.log(forcastdata);
            displayResult(data, forcastdata);
        } catch (err){
            console.log(err);
        }

    }

    apiFetch()

    const displayResult = (data, forcastdata) => {
        console.log("hello");
        currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const desc = data.weather[0].description;
        weatherIcon.setAttribute("src", icon);
        weatherIcon.setAttribute("alt", desc);
        caption.textContent = desc;
        highs.innerHTML = `${data.main.temp_max.toFixed(1)}&deg;C`
        lows.innerHTML = `${data.main.temp_min.toFixed(1)}&deg;C`
        humidity.innerHTML = `${data.main.humidity}`
        sunrise.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-Us", {
            hour: "2-digit", 
            minute: "2-digit"
        });
        sunset.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-Us", {
            hour: "2-digit",
            minute: "2-digit"
        });

        const forcastdict = [];
        const dateList = [];
        // console.log(dateList);
        const tempList = [];
        // console.log(tempList);
        const uniqueList = [];
        // console.log(uniqueList);
        // console.log(forcastdict);

        const displayforcast = (dict) => {  

                dict.forEach(item => {
                    // let day = 0;
                    let day = item.day;
                    let temperature = item.temperature;
        
                    const days = document.createElement("span");
                    // const para = document.createElement("p");
                    days.innerHTML = `${day}: ${temperature}&deg;C`
        
                    forcastCard.appendChild(days);
        
        
                })

            }
            
            
            
            
            

            
            
             

        

    

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        const tomorrowDate = tomorrow.toLocaleDateString("en-CA", {
            timeZone: "UTC"
        });

        
        const futureDateArray = forcastdata.list
        // console.log(`future day ${futureDateArray}`)
        futureDateArray.forEach(element => {
            let date = element.dt_txt.split(" ")[0];
            const temps = element.main.temp;

            // dateList.push(date);
            tempList.push(temps);
            // console.log(date);
            // console.log(temps);
            
                

              if (date >= tomorrowDate && !uniqueList.includes(date) && uniqueList.length < 3) {
                uniqueList.push(date);

                const day = new Intl.DateTimeFormat("en-Us", {
                    weekday: "long",
                    timeZone: "UTC"
                }).format(new Date(date));
                forcastdict.push({
                    date: date,
                    day: day,
                    temperature: temps
                });
               
               


               
            }
              
            
        });
        
        displayforcast(forcastdict);
        


    }


}





displayLagosWeather(icon, temp, figcaption);
getdate();
