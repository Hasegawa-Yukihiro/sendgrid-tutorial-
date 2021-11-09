import axios from "axios";

export const intervalRequest = () => {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  let interval: NodeJS.Timer | null = null;

  const request = () => {
    return axios.get("https://heroku-tutorial-2021.herokuapp.com/");
  };

  setTimeout(() => {
    interval = setInterval(request, 60000 * 25);
  }, new Date().setHours(7, 0, 0, 0) - new Date().setHours(currentHour, currentMinute));

  setTimeout(() => {
    if (interval) {
      clearInterval(interval);
    }
  }, new Date().setHours(23, 59, 0, 0) - new Date().setHours(currentHour, currentMinute));
};
