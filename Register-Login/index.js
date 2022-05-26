const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const firstDiv = form.querySelector('div:first-child');

for (const input of inputs) {
    input.addEventListener('focus', () => {
        firstDiv.style.display = "initial";
        firstDiv.style.top = (input.offsetTop + 40).toString() + "px";
    })
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    name = inputs[0].value;
    email = inputs[1].value;
    password = inputs[2].value;
    axios.post(`http://localhost:3000/?name=${name}&email=${email}&password=${password}`)
        .then(response => {
            alert(response.data);
        })
        .catch(err => {
            alert('Web app not accessible');
        })
        .then(() => {
            inputs[0].value = "";
            inputs[1].value = "";
            inputs[2].value = "";
        });
});

