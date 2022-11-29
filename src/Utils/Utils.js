export function getWeatherImage(temp) {
  switch (true) {
    case temp < 300:
      return "storm";
    case temp >= 300 && temp < 500:
      return "drizzle";
    case temp >= 500 && temp < 600:
      return "rain";
    case temp >= 600 && temp < 700:
      return "snow";
    case temp >= 700 && temp < 800:
      return "fog";
    case temp === 800:
      return "clear";
    case temp === 801:
      return "partlycloudy";
    case temp > 801 && temp <= 805:
      return "mostlycloudy";
    default:
      return "unknown";
  }
}

export function fetData(url) {
  const resp = fetch(url, { method: "GET" }).then((resp) => {
    if (resp.status === 200) {
      return resp.json().then((data) => {
        return data;
      });
    } else {
      return {
        cod: 200,
        data: [],
      };
    }
  });

  return resp;
}
