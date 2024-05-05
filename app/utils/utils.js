export const localTimeUtils = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const formattedTime = `${hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${amOrPm}`;
  return formattedTime;
};
