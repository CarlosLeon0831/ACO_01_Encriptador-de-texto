const btnEncrypt = document.getElementById('encrypt');
const btnDecrypt = document.getElementById('decrypt');
const emptyContainer = document.getElementById('empty');
const fullContainer = document.getElementById('full');
const output = document.getElementById('output');

function encrypt(str) {
    str = str.toLowerCase();
    return str.replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
}
 
function decrypt(str) {
    str = str.toLowerCase();
    return str.replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
}

btnEncrypt.addEventListener("click", function() {
    emptyContainer.style.visibility = "hidden";
    fullContainer.style.visibility = "visible";
    const input = document.getElementById("input").value;
    const encrypted = encrypt(input);
    output.textContent = encrypted;
});

btnDecrypt.addEventListener("click", function() {
    emptyContainer.style.visibility = "hidden";
    fullContainer.style.visibility = "visible";
    const input = document.getElementById("input").value;
    const decrypted = decrypt(input);
    output.textContent = decrypted;
});

