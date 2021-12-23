const myHeading = document.querySelector('h1');

document.getElementById('myButton').addEventListener('click', e => {
    navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service']
    })
        .then(device => {
        //Paired
        })
        .catch(error => {
        //Handle Errors
        });
});

myHeading.textContent = 'Hello world!';