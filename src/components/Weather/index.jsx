import { useEffect, useState } from "react";
import { FaTemperatureLow, FaWind } from "react-icons/fa";
import styles from "./Weather.module.sass";

const weatherApi =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&forecast_days=1";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [tempUnit, setTempUnit] = useState("celsius");
  const [windUnit, setWindUnit] = useState("kmh");

  useEffect(() => {
    fetch(
      `${weatherApi}&temperature_unit=${tempUnit}&wind_speed_unit=${windUnit}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((e) => console.log(e));
  }, [tempUnit, windUnit]);

  const temperature = weather?.current?.temperature_2m;
  const windSpeed = weather?.current?.wind_speed_10m;

  const tempDisplay = tempUnit === "celsius" ? "°C" : "°F";
  const windDisplay = windUnit === "kmh" ? "km/h" : "m/s";

  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerWeather}>
        <div className={styles.containerUnit}>
          <label className={styles.containerLabel}>
            <span className={styles.headerUnit}>Wind speed unit:</span>
            <select
              value={windUnit}
              onChange={(e) => setWindUnit(e.target.value)}
            >
              <option value="ms">m/s</option>
              <option value="kmh">km/h</option>
            </select>
          </label>
          <label className={styles.containerLabel}>
            <span className={styles.headerUnit}>Temperature speed unit:</span>
            <select
              value={tempUnit}
              onChange={(e) => setTempUnit(e.target.value)}
            >
              <option value="celsius">°C</option>
              <option value="fahrenheit">°F</option>
            </select>
          </label>
        </div>
        <div className={styles.containerCurrent}>
          <h2 className={styles.headerCurrent}>Current Weather</h2>
          <div className={styles.current}>
            <p className={styles.display}>
              <FaWind /> {windSpeed} {windDisplay}
            </p>
            <p className={styles.display}>
              <FaTemperatureLow />
              {temperature} {tempDisplay}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
