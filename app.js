window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let icon_ = document.querySelector('.icon');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const KEY = '852a3e3e93b007334a80227bbb747477';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${long}&lon=${lat}&appid=${KEY}`;

            fetch(api).then(response => {
                return response.json().then(data => {
                    const { icon, description } = data.weather[0];
                    const temp = data.main.temp;
                    const name = data.name;
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = name;
                    icon_.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                })
            });
        });
    }
});