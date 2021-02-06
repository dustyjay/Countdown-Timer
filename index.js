function Countdown(startDate) {
  const date = new Date(startDate);
  if (startDate == 'Invalid Date' || !startDate)
    throw new TypeError('Invalid Date');
  let returnObj = { cdDate: date };
  function startCountdown() {
    const { cdDate } = returnObj;
    var now = new Date();
    var distance = new Date(cdDate).getTime() - now.getTime();
    // If the count down is finished, return flag for completion
    if (distance <= 0) {
      returnObj['cdDate'] = 0;
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds, isComplete: false };
  }
  returnObj['startCountdown'] = startCountdown;
  return returnObj;
}
export { Countdown };
