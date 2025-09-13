let generatedPin = null;

function codeGenerator() {
    let networkOperator = document.getElementById('network').value;
    let code = '';

    if (networkOperator == 'MTN') {
        for (let mtn = 0; mtn < 11; mtn++) {
        code += Math.floor(Math.random() * 10);
    }
    generatedPin = code;
    document.getElementById('codeInput').value = generatedPin;
    }else if (networkOperator == 'AIRTEL') {
        for (let airtel = 0; airtel < 12; airtel++) {
            code += Math.floor(Math.random() * 10);
        }
    generatedPin = code;
    document.getElementById('codeInput').value = generatedPin;
    }else if (networkOperator == 'GLO') {
        for (let glo = 0; glo < 13; glo++) {
            code += Math.floor(Math.random() * 10);
        }
    generatedPin = code;
    document.getElementById('codeInput').value = generatedPin;
    }else if (networkOperator == '9MOBILE') {
        for (let etisalat = 0; etisalat < 15; etisalat++) {
            code += Math.floor(Math.random() * 10);
        }
    generatedPin = code;
    document.getElementById('codeInput').value = generatedPin;
    }else {
        alert('invalid pin')
    }
    
    document.getElementById('savebutton').disabled = false;
}

function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toLocaleDateString();
}

let addRow = null;
let serialNumber = 1;

function savePin() {
    const tableBody = document.getElementById('tablebody');

    addRow = tableBody.insertRow();
    for (let i = 0; i < 8; i++) {
        addRow.insertCell(i)
    }

    addRow.cells[0].textContent = serialNumber;

    let networkOperator = document.getElementById('network').value;

    if (networkOperator == 'MTN') {
        addRow.cells[1].textContent = `MTN`
    }else if(networkOperator == 'AIRTEL') {
        addRow.cells[1].textContent = `AIRTEL`
    }else if (networkOperator == 'GLO') {
        addRow.cells[1].textContent = `GLO`
    }else if (networkOperator == '9MOBILE') {
        addRow.cells[1].textContent = `9MOBILE`
    }else {
        alert('invalid')
    }

    let amountSign = document.getElementById('amount').value;
    if (amountSign == '50') {
        addRow.cells[2].textContent = `N50`
    }else if (amountSign == '100') {
        addRow.cells[2].textContent = `N100`
    }else if (amountSign == '200') {
        addRow.cells[2].textContent = `N200`
    }else if (amountSign == '500') {
        addRow.cells[2].textContent = `N500`
    }else if (amountSign == '1000') {
        addRow.cells[2].textContent = `N1,000`
    }else {
        alert('Invalid Amount')
    }

    let rechargeCode = document.getElementById('recharge').value || 'pinCell value';
    addRow.cells[3].textContent = rechargeCode;

    if (generatedPin.length == 11) {
        addRow.cells[3].textContent = `*555*${generatedPin}#`
    }else if (generatedPin.length == 12) {
        addRow.cells[3].textContent = `*444*${generatedPin}#`
    }else if (generatedPin.length == 13) {
        addRow.cells[3].textContent = `*777*${generatedPin}#`
    }else if (generatedPin.length == 15) {
        addRow.cells[3].textContent = `*312*${generatedPin}#`
    }else {
        alert('invalid')
    }

    addRow.cells[4].textContent = 'Unused';
    addRow.cells[5].textContent = getCurrentDate()

    serialNumber++;

    document.getElementById('savebutton').disabled = true;
    document.getElementById('codeInput').value = '';
}

function rechargeButton() {
    let rechargeCode = document.getElementById('rechargeinput').value.trim();
    let tableBody = document.getElementById('tablebody');
    let match = false;

    for (let i = 0; i < tableBody.rows.length; i++) {
        let row = tableBody.rows[i];
        let pinCell = row.cells[3].textContent.trim();

        if (pinCell === rechargeCode) {
            row.cells[4].textContent = 'Used';
            row.cells[6].textContent = getCurrentDate();
            row.cells[7].textContent = '';
            let btn = document.createElement('button');
            btn.textContent = "Delete";
            btn.onclick = function () {
                row.remove();
            };
            row.cells[7].appendChild(btn);
            match = true;
            break;
        }
    }
    document.getElementById('rechargeinput').value = '';
}




