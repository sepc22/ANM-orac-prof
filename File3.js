const apiKey = "YOUR_OPENWEATHER_API_KEY"; // Replace with your OpenWeather API key

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("weatherResult").innerHTML = `<p>${data.message}</p>`;
                return;
            }

            const { name, main, weather } = data;
            document.getElementById("weatherResult").innerHTML = `
                <h3>${name}</h3>
                <p>Temperature: ${main.temp}°C</p>
                <p>Humidity: ${main.humidity}%</p>
                <p>Weather: ${weather[0].description}</p>
            `;
        })
        .catch(error => console.error("Error fetching data:", error));
}
