let cardArray = [];
let randomNumber;

function codeGenerator() {
    randomNumber = Math.floor(Math.random() * 2983646788);
    document.getElementById('codeInput').value = randomNumber;
}

function savePin() {
    document.getElementById('codeInput').value = '';
    let user = {
        network: network.value,
        amount: amount.value,
        pin: '',
        status: 'Unused',
        dateCreated: new Date().toLocaleDateString(),
        dateUsed: 'Not yet Used',
    }
    if (network.value === 'MTN') {
        user.pin = `*555*${randomNumber}#`
    }else if (network.value === 'AIRTEL') {
        user.pin = `*444*${randomNumber}#`
    }else if (network.value === 'GLO') {
        user.pin = `*777*${randomNumber}#`
    }else if (network.value === '9MOBILE') {
        user.pin = `*999*${randomNumber}#`
    }else {
        alert('Invalid Network Operator')
    }
    cardArray.push(user);
    updateTable();
}

function updateTable() {
    let tableBody = document.getElementById('tablebody');
    tableBody.innerHTML = '';
    for (let i = 0; i < cardArray.length; i++) {
        tableBody.innerHTML += `
        <tr>
        <th>${i + 1}</th>
        <td>${cardArray[i].network}</td>
        <td>${cardArray[i].amount}</td>
        <td>${cardArray[i].pin}</td>
        <td>${cardArray[i].status}</td>
        <td>${cardArray[i].dateCreated}</td>
        <td>${cardArray[i].dateUsed}</td>
        <td><button onclick="delButton(${i})">Delete</button></td>
        </tr>`
    }
}
function rechargeButton() {
    let pinInput = document.getElementById('rechargeinput').value;
    let index = cardArray.findIndex(item => (item.pin === pinInput.trim()));
    if (index !== -1) {
        cardArray[index].status = 'Used';
        let used = new Date().toLocaleDateString();
        cardArray[index].dateUsed = used;
        alert('Recharge Successful');
        updateTable();
    }else {
        alert('Pin not found')
    }
    updateTable();
}
function delButton(index) {
    cardArray.splice(index, 1);
    updateTable();
}