export default function FormatDate() {
  let dates = new Date();
  let fullYear = dates.getFullYear();
  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let month = months[dates.getMonth()];
  if (month < 10) {
    month = `0${month}`;
  }
  let date = dates.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  return `${fullYear}-${month}-${date}`;
}
