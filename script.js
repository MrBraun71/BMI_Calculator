function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    
    const resultContainer = document.getElementById('result-container');
    const bmiValueSpan = document.getElementById('bmi-value');
    const bmiCategoryP = document.getElementById('bmi-category');
    const bmiInfoP = document.getElementById('bmi-info');

    if (isNaN(weight) || isNaN(height) || height <= 0 || !age) {
        alert("Per favore inserisci valori validi per peso, altezza ed età.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = "";

    if (bmi < 18.5) category = "Sottopeso";
    else if (bmi < 25) category = "Normopeso";
    else if (bmi < 30) category = "Sovrappeso";
    else category = "Obesità";

    bmiValueSpan.innerHTML = bmi;
    bmiCategoryP.innerHTML = category;
    bmiInfoP.innerHTML = `Età: ${age}, Sesso: ${gender === 'male' ? 'Maschio' : 'Femmina'}`;
    
    resultContainer.classList.remove('hidden');
    
    // Smooth scroll to result
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}
