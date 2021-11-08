export const intervalRequest = () => {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  setTimeout(() => {
    console.log("test", new Date());
  }, new Date().setHours(23, 59, 0, 0) - new Date().setHours(currentHour, currentMinute));
};
