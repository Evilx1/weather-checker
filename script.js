async function weather(){
    const city = document.getElementById("searchbar").value 
    console.log(city)
    const api_key = "394e4ded77c372d2a605113415dd60d6"
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}`
    let response = await fetch(api_url + `&appid=${api_key}`+"&units=metric")
    let data = await response.json()
    console.log(data.main.temp)
    console.log(data)
    document.getElementById("degree").innerHTML = Math.round(data.main.temp) +"°c";
    document.getElementById("city").innerHTML = city;
    document.getElementById("windP").innerHTML =  data.wind.speed + " km/h"
    document.getElementById("humidityP").innerHTML =  data.main.humidity + "    %"


    document.getElementById("searchbar").value = "";
}
