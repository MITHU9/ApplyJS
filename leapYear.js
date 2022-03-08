function isLeapYear(year){
    if(year % 100 == 0){
        if (year % 400 == 0) {
            return true;
        }
        else{
            return false;
        }
    }
    else{
        if (year % 4 == 0) {
            return true;
        }
        else{
            return false;
        }
    }
}
const result = isLeapYear(1700);
 if(result == true){
     console.log("Year is Leap year");
 }
 else{
     console.log("Year is not Leap year");
 }