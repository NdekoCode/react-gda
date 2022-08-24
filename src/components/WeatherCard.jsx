export function WeatherCard({ city, weatherData }) {
  const { dt_txt, main, visibility, weather, wind } = weatherData;

  let maDate = new Date(dt_txt);
  maDate = maDate.toDateString();
  const { description } = weather[0];
  const { temp, temp_max, feels_like } = main;
  console.log(wind);

  return (
    <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs  shadow-lg weather-item">
      <div className="font-bold text-xl">{city.name}</div>
      <div className="text-sm text-gray-500">{maDate}</div>
      <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
        <svg
          className="w-32 h-32"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-row items-center justify-center mt-6">
        <div className="font-medium text-6xl">{temp}°</div>
        <div className="flex flex-col items-center ml-6">
          <div>{description}</div>
          <div className="mt-1">
            <span className="text-sm">
              <i className="far fa-long-arrow-up"></i>
            </span>
            <span className="text-sm font-light text-gray-500">
              {temp_max}°C
            </span>
          </div>
          <div>
            <span className="text-sm">
              <i className="far fa-long-arrow-down"></i>
            </span>
            <span className="text-sm font-light text-gray-500">
              {feels_like}°C
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-6">
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Vent</div>
          <div className="text-sm text-gray-500">{wind.speed}k/h</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Humidité</div>
          <div className="text-sm text-gray-500">68%</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Visibilité</div>
          <div className="text-sm text-gray-500">{visibility / 1000}km</div>
        </div>
      </div>
    </div>
  );
}
