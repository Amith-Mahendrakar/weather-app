import { useEffect, useState } from "react";
import Temprature from "./components/Temprature";
import Highlights from "./components/Highlights";

function App() {
  const [city, setCity] = useState("New Delhi");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=eae34e80eb4f443c9c1105745241205&q=${
        city.length >= 3 && city
      }&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  return (
    <div className="bg-[#1f213a] h-screen flex justify-center flex-wrap align-top">
      <div className="mt-12 w-72 h-1/2">
        {weather && (
          <Temprature
            setCity={setCity}
            stats={{
              temp: weather.current.temp_c,
              condition: weather.current.condition.text,
              isday: weather.current.is_day,
              location: weather.location.name,
              time: weather.location.localtime,
            }}
          />
        )}
      </div>
      <div className="mt-12 w-80 h-72 p-3 grid grid-cols-2 gap-6">
        <h1 className="text-slate-200 text-xl col-span-2">
          Today's Highlights
        </h1>
        {weather && (
          <>
            <Highlights stats={{
              title: 'Wind Status',
              value: weather.current.wind_mph,
              direction: weather.current.wind_dir,
              unit: 'mph'
            }}/>
            <Highlights stats={{
              title: 'Humidity',
              value: weather.current.humidity,
              unit: '%'
            }}/>
            <Highlights stats={{
              title: 'Visibility',
              value: weather.current.vis_miles,
              unit: 'miles'
            }}/>
            <Highlights stats={{
              title: 'Air Pressure',
              value: weather.current.pressure_mb,
              unit: 'mb'
            }}/>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
