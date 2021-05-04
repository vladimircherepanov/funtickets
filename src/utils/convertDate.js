export function convertDate(date) {
  if (date) {
    const dateX = new Date(date);
    const dateYYY = dateX.setHours(dateX.getHours() - 3);
    const day = new Date(dateYYY).getDate();
    const formatted_day = day > 9 ? day : "0" + day;
    const month = new Date(dateYYY).getMonth() + 1;
    const formatted_month = month > 9 ? month : "0" + month;
    const year = new Date(dateYYY).getFullYear();
    return formatted_day + "/" + formatted_month + "/" + year;
  }
}

export function convertTime(date) {
  if (date) {
    const dateX = new Date(date);
    const dateYYY = dateX.setHours(dateX.getHours() - 3);
    const hour = new Date(dateYYY).getHours();
    const calcHour = hour;
    const formatted_hour = calcHour > 9 ? calcHour : "0" + calcHour;
    const minutes = new Date(dateYYY).getMinutes();
    const formatted_minutes = minutes > 9 ? minutes : "0" + minutes;
    return formatted_hour + ":" + formatted_minutes;
  }
}
