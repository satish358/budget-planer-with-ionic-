const resoneInput = document.querySelector('#input-resone');
const amountInput = document.querySelector('#input-amount');
const clearBtn = document.querySelector('#btn-clear');
const addBtn = document.querySelector('#btn-add');
const listInputer = document.querySelector('#enter-elements');
const totalExpance = document.querySelector('#tatal-expance');
const alertCtr = document.querySelector('ion-alert-controller');

let total = 0;
addBtn.addEventListener('click', () => {
    const resone = resoneInput.value;
    const amount = amountInput.value;
    if (resone.trim().length <= 0 || amount == 0 || amount.trim().length <= 0) {
        
        alertCtr.create({
            message: 'Please enter valid resone and amount',
            header: 'Invalid Input',
            buttons: ['Ok']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = resone + ' ₹ '+amount;
    listInputer.appendChild(newItem);
    total += +amount;
    totalExpance.textContent = total;
    clear();
});

clearBtn.addEventListener('click', () => {
    clear();
});

const clear = () => {
    resoneInput.value = '';
    amountInput.value = '';
}