function highlightButton() {
    let myIDArray = ['menu', 'locations'];
    let arrayLength = myIDArray.length;
    for (var i = 0; i < arrayLength; i++) {
        if (window.location.pathname.indexOf(myIDArray[i])) {
            document.getElementById(`but_${myIDArray[i]}.classList.replace('button', 'button-active')`)
        }
    }
}
