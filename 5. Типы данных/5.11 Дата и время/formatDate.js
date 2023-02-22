function formatDate(date) {
    let dif = new Date() - date; 
  
    if (dif < 1000) {
        return 'прямо сейчас';
    }
  
    let sec = Math.floor(dif / 1000); 
  
    if (sec < 60) {
        return sec + ' сек. назад';
    }
  
    let min = Math.floor(sec / 60); 
    if (min < 60) {
        return min + ' мин. назад'; 
    }
  

    date = [
      '0' + date.getDate(),
      '0' + (date.getMonth() + 1),
      '' + date.getFullYear(),
      '0' + date.getHours(),
      '0' + date.getMinutes()
    ].map(i => i.slice(-2)); 
  
    return date.slice(0, 3).join('.') + ' ' + date.slice(3).join(':');
}