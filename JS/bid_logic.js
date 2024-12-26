let currentBid = 100;

function increaseBid() {
    currentBid += 10;
    document.getElementById('bidValue').innerText = `$${currentBid}`;
}

function decreaseBid() {
    if (currentBid > 0) {
        currentBid -= 10;
        document.getElementById('bidValue').innerText = `$${currentBid}`;
    }
}