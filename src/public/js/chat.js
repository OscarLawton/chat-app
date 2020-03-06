const socket = io();
/* 
socket.on('countUpdated', (count) => {
    console.log('The count has been updated!', count);
});

document.querySelector('#increment').addEventListener('click', () => {
    console.log('Clicked');
    socket.emit('increment');
}); */

document.querySelector('#location_button').addEventListener('click', () => {   
    if(!navigator.geolocation){
        console.log('no no no');
        return alert('Geolocation is not supported by your browser.');
       
    } else {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat_long = position.coords.latitude + ' ' + position.coords.longitude;
            console.log('did this run')
            socket.emit('sendLocation', lat_long);
            console.log(lat_long);
        }); 
    }
});



socket.on('giveLocation', (position) => {
    console.log('Location:', position);
});

document.getElementById('myForm').addEventListener('submit', logSubmit);

function logSubmit(e) {
    e.preventDefault();
    var x = document.getElementById("myForm");
    const text = e.target.elements.uMessage.value;
    //const text = document.querySelector('#uMessage').value;
    console.log(text);
    socket.emit('uMessage', text);
    document.getElementById("myForm").reset();
}
  
/* socket.on('message', (message) => {
    var textnode = document.createTextNode(message);
    //document.querySelector('#message').appendChild(textnode);
    console.log(message);
}); */
 
socket.on('getMessage', (uMessage) => {
    var textnode = document.createTextNode(uMessage);
    linebreak = document.createElement("br");
    document.querySelector('#message').appendChild(textnode);
    document.querySelector('#message').appendChild(linebreak);
    console.log(uMessage);
});



/* window.onload = function() {
    var form = document.querySelector("form");
    form.onsubmit = submitted.bind(form);
}

function submitted(event) {
    socket.emit()
    event.preventDefault();
} */