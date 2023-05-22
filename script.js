function start() {
    document.getElementById('search-button').addEventListener('click', getWeather);
}

async function getWeather() {
    let city = document.getElementById('city');
    let cityValue = city.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

    try {
        if (cityValue.length === 0) {
            throw new Error('Pleace enter a city name');
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        template(data);
        city.value = '';

    } catch (error) {
        alert(error.message);
    }
}

start();