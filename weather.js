class Weather {
    constructor(cityName, countryCode) {
        this.cityName = cityName;
        this.countryCode = countryCode;
        this.apiKey = '0acb1f7e0a8cb76c13a1035467c259f1';
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName},${this.countryCode}&units=metric&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(cityName, countryCode){
        this.cityName = cityName;
        this.countryCode = countryCode;
    }
}