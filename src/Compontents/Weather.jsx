import { useState, useEffect } from "react"
import axios from "axios"

function Weather() {
    const [weather, setweather] = useState([])
    const [city, setcity] = useState("")
    const [fweather, setfweather] = useState("")
    const [desc, setdesc] = useState("")
    const [temp, settemp] = useState("")

    const handleentercity = (evt) => {
        setcity(evt.target.value)
    }

    const getweather = () => {
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96e7f5050d1657be1fb274a842ae83b2`)
        weatherdata.then(function (success) {
            setfweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            var kelvin = success.data.main.temp
            var Celsius = (kelvin - 273.15).toFixed(2)
            settemp(Celsius)
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
  <div className="bg-white/80 backdrop-blur-md shadow-2xl border border-gray-300 rounded-2xl p-8 w-96 transition duration-300 hover:scale-105">
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-extrabold text-center text-gray-800">🌦️ Weather Report</h1>
      <p className="text-center text-gray-600">I can give the weather report about your city.</p>
      <input
        type="text"
        placeholder="Enter the city"
        className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={city}
        onChange={handleentercity}
      />
      <button
        onClick={getweather}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded shadow hover:opacity-90 transition duration-200"
      >
        Get Report
      </button>
      <ul className="space-y-2 text-gray-700">
        <li><h1 className="text-lg">Weather: <span className="font-medium">{fweather}</span></h1></li>
        <li><h1 className="text-lg">Temperature: <span className="font-medium">{temp} °C</span></h1></li>
        <li><h1 className="text-lg">Description: <span className="capitalize font-medium">{desc}</span></h1></li>
      </ul>
    </div>
  </div>
</div>

    )
}

export default Weather
