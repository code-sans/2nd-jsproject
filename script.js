document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', calculateBMI);

    function calculateBMI() {
        const height = parseFloat(document.getElementById('Height').value);
        const weight = parseFloat(document.getElementById('Weight').value);

        if (isNaN(height) || isNaN(weight)) {
            document.getElementById('result').textContent = 'Please enter valid values.';
            return;
        }

        const bmi = weight / (height * height);
        document.getElementById('result').textContent = `Your BMI: ${bmi.toFixed(2)}`;
    }
});
