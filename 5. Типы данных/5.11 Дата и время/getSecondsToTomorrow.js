const getSecondsToTomorrow = () => {
    let now = new Date();

    let tom = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tom - now;
    return Math.round(diff / 1000);
}