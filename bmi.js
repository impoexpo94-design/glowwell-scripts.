function calcBMI() {
  var w = parseFloat(document.getElementById("bmiWeight").value);
  var h = parseFloat(document.getElementById("bmiHeight").value) / 100;

  if (!w || !h) {
    document.getElementById("bmiOut").innerHTML = "⚠ Please enter valid weight & height.";
    return;
  }

  var bmi = w / (h * h);
  var category =
    bmi < 18.5 ? "Underweight" :
    bmi < 25 ? "Normal" :
    bmi < 30 ? "Overweight" :
    "Obese";

  document.getElementById("bmiOut").innerHTML =
    "Your BMI is " + bmi.toFixed(1) + " (" + category + ")";
}
