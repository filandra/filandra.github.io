const myHeading = document.querySelector('h1');

document.getElementById('myButton1').addEventListener('click', e => {
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

document.getElementById('myButton2').addEventListener('click', e => {
    navigator.usb.getDevices()
        .then(devices => {
            myHeading.textContent = "Total devices: " + devices.length;
            devices.forEach(device => {
                console.log("Product name: " + device.productName + ", serial number " + device.serialNumber);
            });
        });
});
