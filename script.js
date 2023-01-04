// Get the encrypt, decrypt and copy buttons and the empty and full containers
const btnEncrypt = document.getElementById('encrypt');
const btnDecrypt = document.getElementById('decrypt');
const btnCopy = document.getElementById('copy');
const emptyContainer = document.getElementById('empty');
const fullContainer = document.getElementById('full');
const output = document.getElementById('output');

// Function to encrypt the string
function encrypt(str) {
    // Make the string lowercase
    str = str.toLowerCase();
    // Replace certain letters with the encryption keys
    return str.replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
}

// Function to decrypt the string
function decrypt(str) {
    str = str.toLowerCase();
    // Replace the encryption keys with their respective letters
    return str.replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
}

// Add a click event listener to the encrypt button to run the encrypt function and update the output
btnEncrypt.addEventListener("click", function() {
     // Hide the empty container and show the full container
    emptyContainer.style.display = "none";
    fullContainer.style.display = "block";
    // Get the value of the input field
    const input = document.getElementById("input").value;
     // Encrypt the input value
    const encrypted = encrypt(input);
    // Update the output text with the encrypted string
    output.textContent = encrypted;
});

// Add a click event listener to the decrypt button to run the decrypt function and update the output
btnDecrypt.addEventListener("click", function() {
    emptyContainer.style.visibility = "hidden";
    fullContainer.style.visibility = "visible";
    const input = document.getElementById("input").value;
    const decrypted = decrypt(input);
    output.textContent = decrypted;
});

// Add a click event listener to the copy button to copy output text to clipboard
btnCopy.addEventListener("click", function() {
    let copyText = document.getElementById('output').textContent;
    navigator.clipboard.writeText(copyText);
    alert('Texto copiado al portapapeles');
});

