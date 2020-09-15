function getWeather() {
    let location = document.getElementById("location");
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");

    // let iconcode = a.weather[0].icon;
    // let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"


    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "57ff608d95b7eb96cb15370eae7d1888";

    location.innerHTML = "Locating...";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        let url =
            api +
            "?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=" +
            apiKey +
            "&units=metric";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                location.innerHTML = data.name
                let temp = data.main.temp;
                temperature.innerHTML = temp + "° C";
                // data.name + " (" + latitude + "°, " + longitude + "°)";
                description.innerHTML = data.weather[0].main;
            });
    }

    function error() {
        location.innerHTML = "Unable to retrieve your location";
    }
}

getWeather();