
function calculation() {
    //declaring variable 
    //getting the HTML element by the id
    let heightCm = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("result");

    //Output the variable value on the console
    console.log(heightCm);
    console.log(weight);

 
// calculation of BMI

let sum = (weight / heightCm / heightCm) * 10000
    console.log(sum);
    result.value = sum;
}
