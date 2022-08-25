import { useState } from "react";
import { useFetchData } from "../Data/Hooks/Hooks";
import { Loader } from "./Loader";
import { WeatherCard } from "./WeatherCard";
export function WeatherAp() {
  const [search, setSearch] = useState("Goma");
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=423127e1c576df8e2d62c4b7c3790214&lang=fr&units=metric`;
  const [meteoData, loadingData] = useFetchData(url);
  // const handleSearch = useCallback(
  //   (evt) => {
  //     setSearch((s) => (s = evt.target.value));
  //   },
  //   [search]
  // );
  if (!loadingData) {
    const { city, list } = meteoData;
    let lastDate = null;
    let newArrayOfMeteo = [];
    list.forEach((item) => {
      if (item.dt_txt.split(" ")[0] !== lastDate) {
        // si il est nouvelle alors on change la valeur de la derniere categorie
        lastDate = item.dt_txt.split(" ")[0];
        item["dt_txt"] = lastDate;
        newArrayOfMeteo.push(item);
      }
    });
    return (
      <div className="min-h-screen weather_app flex flex-col items-center justify-center">
        {/* <div className="bg-white w-full h-16 rounded-xl mb-3 shadow-lg p-2 space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full text-2xl rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-gray-700"
            value={search}
            onInput={handleSearch}
          />
        </div> */}
        <div className=" flex items-center justify-center flex-wrap gap-2 mb-10 ">
          {newArrayOfMeteo.map((weatherData, index) => (
            <WeatherCard key={index} weatherData={weatherData} city={city} />
          ))}
        </div>
      </div>
    );
  }
  return <Loader />;
}
