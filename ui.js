class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.minmax = document.getElementById('w-minmax');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${Math.round(weather.main.temp)} °C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.pressure.textContent = `Relative Pressure: ${weather.main.pressure} mbar`;
        this.minmax.textContent = `Min/Max Temps: ${Math.round(weather.main.temp_min)}/${Math.round(weather.main.temp_max)} °C`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} km/h`;
    }
}