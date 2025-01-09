const tempInput = document.getElementById('tempInput');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');

function convertTemp() {
    const temp = parseFloat(tempInput.value);

    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemp;

    if (fromUnit.value === 'celsius') {
        if (toUnit.value === 'fahrenheit') {
            convertedTemp = (temp * 9/5) + 32;
        } else if (toUnit.value === 'kelvin') {
            convertedTemp = temp + 273.15;
        } else {
            convertedTemp = temp; // Celsius to Celsius
        }
    } else if (fromUnit.value === 'fahrenheit') {
        if (toUnit.value === 'celsius') {
            convertedTemp = (temp - 32) * 5/9;
        } else if (toUnit.value === 'kelvin') {
            convertedTemp = (temp - 32) * 5/9 + 273.15;
        } else {
            convertedTemp = temp; // Fahrenheit to Fahrenheit
        }
    } else if (fromUnit.value === 'kelvin') {
        if (toUnit.value === 'celsius') {
            convertedTemp = temp - 273.15;
        } else if (toUnit.value === 'fahrenheit') {
            convertedTemp = (temp - 273.15) * 9/5 + 32;
        } else {
            convertedTemp = temp; // Kelvin to Kelvin
        }
    }

    result.textContent = `${temp} ${fromUnit.value} is ${convertedTemp.toFixed(2)} ${toUnit.value}`;
}

tempInput.addEventListener('input', () => {
    if (tempInput.value !== '' && fromUnit.value !== '' && toUnit.value !== '') {
        convertBtn.disabled = false;
    } else {
        convertBtn.disabled = true;
    }
});

fromUnit.addEventListener('change', () => {
    if (tempInput.value !== '' && fromUnit.value !== '' && toUnit.value !== '') {
        convertBtn.disabled = false;
    } else {
        convertBtn.disabled = true;
    }
});

toUnit.addEventListener('change', () => {
    if (tempInput.value !== '' && fromUnit.value !== '' && toUnit.value !== '') {
        convertBtn.disabled = false;
    } else {
        convertBtn.disabled = true;
    }
});

convertBtn.addEventListener('click', convertTemp);