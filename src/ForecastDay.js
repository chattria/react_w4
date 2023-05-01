export default function ForecastDay(props) {
  let dates = new Date(props.data.dt * 1000);
  let day = dates.getDay();
  let days = ["SUN", "MON", "TUS", "WED", "THU", "FRI", "SAT"];

  return days[day];
}
