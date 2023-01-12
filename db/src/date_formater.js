export function get_date_string(date) {
  const TIME_ZONE = 3240 * 10000;

  try {
    return new Date(+date + TIME_ZONE)
      .toISOString()
      .replace("T", " ")
      .replace(/\..*/, "");
  } catch (error) {
    console.error(error);

    return "0000-00-00 00:00:00";
  }
}
