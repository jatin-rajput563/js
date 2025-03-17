function paraColorChange() {
    document.getElementById("paraColor").style.color = "blue";
}

function inputBtn() {
    let inputValue = document.getElementById("input").value;
    alert(inputValue);
}
function paraFunction() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph added to the document.";
    document.body.appendChild(newParagraph);
    
}