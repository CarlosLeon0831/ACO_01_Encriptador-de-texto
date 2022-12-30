/*
    Pseudocode
    Encrypt/Decript function:
    Imput text
    Click to either encrypt or decrypt
    save input text
    if (clicked on encrypt) {
        look for vocal letters and change them to their respective keys
    }
    if (clicked on decrypt) {
        look for encryption keys and change them to their respective letters
    } 
    return output text
    show encrypted/decrypted text on output zone
*/
const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');

btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", decrypt);

encrypt = message => {
    let encryptedMessage;

    const messageArr = message.split("");
    
    let encryptedMessageArr = [];

    for (i = 0; i < messageArr.length; i++) {
        let letter;
        switch(messageArr[i]) {
            case "a":
                letter = "ai";
                break;
            case "e":
                letter = "enter";
                break;
            case "i":
                letter = "imes";
                break;
            case "o":
                letter = "ober";
                break;
            case "u":
                letter = "ufat";
                break;
            default:
                letter = messageArr[i];
                break;
        }

        encryptedMessageArr.push(letter);
    }

    encryptedMessage = encryptedMessageArr.join("");
    return encryptedMessageArr;
};

decrypt = message => {
    let decryptedMessage;

    const messageArr = message.split("");
    
    let decryptedMessageArr = [];

    for (i = 0; i < messageArr.length; i++) {
        let letter;
        switch(messageArr[i]) {
            case "ai":
                letter = "a";
                break;
            case "enter":
                letter = "e";
                break;
            case "imes":
                letter = "i";
                break;
            case "ober":
                letter = "o";
                break;
            case "ufat":
                letter = "u";
                break;
            default:
                letter = messageArr[i];
                break;
        }

        decryptedMessageArr.push(letter);
    }

    decryptedMessage = decryptedMessageArr.join("");
    return decryptedMessageArr;
};

