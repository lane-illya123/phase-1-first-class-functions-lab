//return first two drivers
const returnFirstTwoDrivers = function(driver= ['Antonia', 'Nuru', 'Amari', 'Mo']){

    
    return driver.slice(0,2);

}
//return last two drivers
const returnLastTwoDrivers = function(drive= ['Antonia', 'Nuru', 'Amari', 'Mo']){
    
    return drive.slice(2,4);
}
//invoke both functions from array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0]());
console.log(selectingDrivers[1]());
//higher function that mutiply interger
function createFareMultiplier(num1){
    return function(){
        return num1 * num1;
    };
}

const dubDown = createFareMultiplier();
// double thr fare 
 function fareDoubler(dubDown){

    return dubDown * 2;
 }

const trip = createFareMultiplier();
//Triple the fare
 function fareTripler(trip){

    return trip * 3;
 }

 function selectDifferentDrivers(array= ['Antonia', 'Nuru', 'Amari', 'Mo'], fn){

    return fn(array);

 }
