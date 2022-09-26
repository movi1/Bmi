// function turnOn() {

//     document.getElementById('bulb').src = "pic_bulbon.gif"
// }

// function turnOff() {
//     document.getElementById('bulb').src = "pic_bulboff.gif"
// }
// 
function calculation() {
    //declaring variable 
    //getting the HTML element by the id
    let heightCm = document.getElementById("height");
    let weight = document.getElementById("weight");
    let result = document.getElementById("result");

    //Output the variable value on the console
    console.log(heightCm.value);
    console.log(weight.value);

// conversion from meters to cm
    let heightMeters = heightCm.value / 100
 
    console.log(heightMeters)

// calculation of BMI

let sum = (heightMeters / weight.value) / heightMeters
    console.log(sum);
    result.value = sum
}
