const result = document.querySelector("#result");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

const calcBMI = () => {
  if (height.value !== "" && weight.value !== "") {
    const bmi = (weight.value / (height.value * height.value)).toFixed(2);
    let classification = "";

    if (bmi < 18.5) {
      classification = "Under weight";
    } else if (bmi < 25) {
      classification = "Normal weight";
    } else if (bmi < 30) {
      classification = "Overweight";
    } else if (bmi < 35) {
      classification = "Grade I obesity";
    } else if (bmi < 41) {
      classification = "Grade II obesity";
    } else {
      classification = "Grede III obesity";
    }

    result.innerHTML = `BMI: ${bmi} (${classification})`;
  } else {
    result.innerHTML = "Fill in the fields";
  }
};
