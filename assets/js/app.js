function paraColorChange() {
    document.getElementById("paraColor").style.color = "blue";
}

function inputBtn() {
    let inputValue = document.getElementById("input").value;
    alert(inputValue);
}

function createBtn() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph added to the document.";
    document.body.appendChild(newParagraph);
}

function removeBtn() {
    document.getElementById("removeText").style.display = "none";
}

window.onload = function () {
    document.body.style.backgroundColor = "yellow";
}

function countPara() {
    const paragraphs = document.getElementsByTagName('p');
    const count = paragraphs.length;
    alert("Number of paragraphs: " + count);
};
