
function calculateBMI(){

    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    let result = weight / Math.pow(height, 2);

    let total = result.toFixed(2);

    if (total < 18.5){
        document.getElementById("result").innerHTML = 'Your Body Mass Index (BMI) is ' +total+'.<br>You are considered underweight';
    }
    else if(total > 18.5 && total < 25){
        document.getElementById("result").innerHTML = 'Your Body Mass Index (BMI) is ' +total+'.<br>Your weight is considered normal.';
    }
    else if(total > 25 && total <30){
        document.getElementById("result").innerHTML = 'Your Body Mass Index (BMI) is ' +total+'.<br>You are considered overweight.';
    }
    else if(total > 30){
        document.getElementById("result").innerHTML = 'Your Body Mass Index (BMI) is ' +total+'.<br>Your are considered obese.';
    }

}

function calculateRM(){

    let weight = document.getElementById('weight').value;
    let reps = document.getElementById('reps').value;

    let result = weight / (1.0278 - 0.0278 * parseInt(reps));

    let total = result.toFixed(0);
    if(total > 0 && total < 500){
        document.getElementById("result").innerHTML = 'Your 1 rep max is approximately '+total+' KG.';
    }
    
}