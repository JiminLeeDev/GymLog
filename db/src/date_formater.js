export function get_date_string(date) {
  try {
    return date.toISOString().replace("T", " ").replace(/\..*/, "");
  } catch (error) {
    console.error(error);

    return "0000-00-00 00:00:00";
  }
}
