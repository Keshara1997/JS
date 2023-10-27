
const container = document.getElementById('container');

container.innerHTML = '<button onclick="buy()">Buy</button>';  

function buy() {
    container.innerHTML = '<h1>Thank you for buying</h1>';
}
