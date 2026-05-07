function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || height <= 0 || !age) {
        resultDiv.innerHTML = "Per favore inserisci valori validi per peso, altezza ed età.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = "";

    if (bmi < 18.5) category = "Sottopeso";
    else if (bmi < 25) category = "Normopeso";
    else if (bmi < 30) category = "Sovrappeso";
    else category = "Obesità";

    resultDiv.innerHTML = `Il tuo BMI è: <strong>${bmi}</strong><br>Categoria: ${category}<br><small>(Età: ${age}, Sesso: ${gender === 'male' ? 'M' : 'F'})</small>`;
}
