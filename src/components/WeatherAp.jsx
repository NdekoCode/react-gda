import { useFetchData } from "../Data/Hooks/Hooks";
import { Loader } from "./Loader";
import { WeatherCard } from "./WeatherCard";
export function WeatherAp() {
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=goma&appid=423127e1c576df8e2d62c4b7c3790214&lang=fr&units=metric";
  const [meteoData, loadingData] = useFetchData(url);
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
      <div className="min-h-screen flex items-center justify-center flex-wrap gap-2 mb-10 weather_app">
        {newArrayOfMeteo.map((weatherData, index) => (
          <WeatherCard key={index} weatherData={weatherData} city={city} />
        ))}
      </div>
    );
  }
  return <Loader />;
}
