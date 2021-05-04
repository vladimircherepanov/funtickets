export function formatDate(date) {
  if (date) {
    const year = date.getFullYear();
    const month = (1 + date.getMonth()).toString();
    const formatted_month = month.length > 1 ? month : "0" + month;
    const day = date.getDate().toString();
    const formatted_day = day.length > 1 ? day : "0" + day;
    return formatted_day + "/" + formatted_month + "/" + year;
  }
}
