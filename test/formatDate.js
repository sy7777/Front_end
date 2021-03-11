function formatDate(str){
    if(!str || typeof str !=="string"){
        return str;
    }
    let[month,day,year] = str.split('/');
    let newDate = '';
    if( !isInteger(month) || !isInteger(day) || !isInteger(year)){
        throw Error("Wrong INPUT")
    }
    
    newDate = `${year}${formatMonth(month)}${formatDay(day)}`
    return newDate;
}

function isInteger(num){
    if(isNaN(Number(num))){
        return false;
    }
    if(num.includes(".")){
        return false;
    }
    return true;
}
function formatMonth(month){
    if (0< Number(month) && Number(month)<=9){
        return `0${month}`
    }else if(10<= Number(month) && Number(month)<=12){
        return month;
    }else{
        throw Error("Wrong INPUT");
    }
}
function formatDay(day){
    if (0< Number(day) && Number(day)<=9){
        return `0${day}`
    }else if(10<= Number(day) && Number(day)<=31){
        return day;
    }else{
        throw Error("Wrong INPUT");
    }
}

// formatDate("11")
console.log(3>2>1);