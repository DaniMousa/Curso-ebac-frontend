document.getElementById('formCampos').addEventListener('submit', function(event) {
    event.preventDefault();
    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);

    if (campoB > campoA) {
        showMessage(true, campoA, campoB);
    } else {
        showMessage(false, campoA, campoB);
    }
})

function showMessage(valid, valorA, valorB) {
    const messageElement = document.getElementById('message');
    if (valid) {
        messageElement.textContent = `Correto!`;
        messageElement.className = `CorrectMessage`;

        campoA.value= '';
        campoB.value= '';
        
    } else {
        messageElement.textContent = `O numero do campo B deve ser maior que o número do campo A.`;
        messageElement.className = `invalidMessage`;
    }
    messageElement.style.display = 'block';
}