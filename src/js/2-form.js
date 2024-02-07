const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

function readFormData(form) {
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    return {
        email,
        message
    };
};

form.addEventListener('input', (event) => {
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
});

const rawUpdate = localStorage.getItem(STORAGE_KEY);
if (rawUpdate){
    const update = JSON.parse(rawUpdate);
    form.email.value = update.email;
    form.message.value = update.message;
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const rawData = localStorage.getItem(STORAGE_KEY)
    if (localStorage.getItem(STORAGE_KEY) && form.email.value.trim() !== '' && form.message.value.trim() !== '') {
        console.log(JSON.parse(rawData));
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
    };
});
