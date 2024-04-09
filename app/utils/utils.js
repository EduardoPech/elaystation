export const convertTime = (time) => {
  const date = new Date(time);
  return `${date.getHours()}:${date.getMinutes()}`;
};

export const formatHour = (hour) => {
  if(!hour) return '';
  const [hourPart, minutePart] = hour.split(':');
  let ampm = 'am';
  let hourNumber = parseInt(hourPart);
  
  if (hourNumber >= 12) {
      ampm = 'pm';
      if (hourNumber > 12) {
          hourNumber -= 12;
      }
  }
  
  if (hourNumber === 0) {
      hourNumber = 12;
  }
  
  return `${hourNumber}:${minutePart}${ampm}`;
}