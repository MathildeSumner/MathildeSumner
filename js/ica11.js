
//fortune function// 
function tellFortune(number_of_children, partners_name, geographic_location, job_title) {
    let fortune = "You will be a " + job_title + " in " + geographic_location + " and married to " + partners_name + " with " + number_of_children + " kids.";
    return fortune;
}

let fortune1 = tellFortune(2, 'Bob', 'Fiji', 'stripper');
document.getElementById('fortune1').innerHTML = fortune1;

let fortune2 = tellFortune(17, 'Marlo', 'NYC', 'farmer');
document.getElementById('fortune2').innerHTML = fortune2;

let fortune3 = tellFortune(2, 'Morgan', 'Chicago', 'writer');
document.getElementById('fortune3').innerHTML = fortune3;

//dog age function// 
function calculateDogAge(puppy_age) {
    let dogYears = puppy_age * 7;
    return "Your doggie is " + dogYears + " years old in dog years!";
}

let dog1 = calculateDogAge(7);
document.getElementById('dog1').innerHTML = dog1;

let dog2 = calculateDogAge(1);
document.getElementById('dog2').innerHTML = dog2;

let dog3 = calculateDogAge(3);
document.getElementById('dog3').innerHTML = dog3;

//reverse number function// 
function reverseNumber(number){
    let reversed = number.toString().split('').reverse().join('');
    return Number(reversed);
}

let reverse1 = reverseNumber(83834);
document.getElementById('reversed1').innerHTML = "Reversed Number 1: " + reverse1;

let reverse2 = reverseNumber(4729);
document.getElementById('reversed2').innerHTML = "Reversed Number 2: " + reverse2;

//sort letters function// 
function sortLetters(word){
    let sorted = word.split('').sort().join('');
    return sorted;
}

let sorted1 = sortLetters('Mathilde'); 
document.getElementById('sorted1').innerHTML = "Sorted Word 1: " + sorted1;

let sorted2 = sortLetters('Benjamin');
document.getElementById('sorted2').innerHTML = "sorted word 2: " + sorted2;




