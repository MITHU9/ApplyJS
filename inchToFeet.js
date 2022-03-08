function inchToFeet(inch){
    var result = inch/12;
    return result;
}
var friendsInch = [156, 168, 300];

var mithu = inchToFeet(friendsInch[0]);
console.log(mithu);

var rudro = inchToFeet(168);
console.log(rudro);

var shuvo = inchToFeet(300);
console.log(shuvo);