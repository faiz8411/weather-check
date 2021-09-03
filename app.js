const API_KEY = `f0665d7a657869119010a025eecb95c3`;

const searchTempareture = () => {
    const city = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name)
    setInnerText('temp', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`

    const imgIcon = document.getElementById('weather-icon')
    imgIcon.setAttribute('src', url);
}