function writeCards(namesArray, event) {
    const textArray = []
    for (let i = 0; i < namesArray.length; i++) {
        textArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return textArray;
}
function countDown(x) {
    let number = x;
    while (number >= 0) {
        console.log(number--);
    }
}
