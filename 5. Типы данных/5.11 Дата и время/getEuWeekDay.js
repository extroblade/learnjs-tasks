function getLocalDay(date) {

    let day = date.getDay();
    let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  
    return (!(date.getDay())) ? days[6] : days[date.getDay()-1]
  

}

let date = new Date(2014, 0, 6);  // 3 января 2012 года
console.log( getLocalDay(date) ); 