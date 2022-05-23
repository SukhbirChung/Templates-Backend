const form = document.querySelector('form');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputs = form.querySelectorAll('input');
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