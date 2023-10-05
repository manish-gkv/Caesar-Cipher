// PROJECT_1
// Caeser_Cipher
// ManishKumarAkela 226301127

// TASK_1: FUNCTION_TO_ENCRYPT_THE_TEXT

function EncryptText(text, n) {
    // text -> THE_TEXT_THAT_TO_ENCRYPT
    // n -> NUMBER_OF_SHIFT
    
    let ans = "";
    // EncryptText_STORES_IN_ans_VARIABLE

    // iterate over the given text
    for (let i = 0; i < text.length; i++) {
        const ch = text.charAt(i);
        // check if space is there then simply add space
        if (ch === " ") {
            ans += " ";
        } else if (ch === ch.toUpperCase()) {
            // check if a character is uppercase then encrypt it accordingly
            const e = (ch.charCodeAt(0) + n - 65) % 26 + 65;
            ans += String.fromCharCode(e);
        } else {
            // check if a character is lowercase then encrypt it accordingly
            const e = (ch.charCodeAt(0) + n - 97) % 26 + 97;
            ans += String.fromCharCode(e);
        }
    }
    
    // return the encrypted text
    return ans;
}

// TASK_2: FUNCTION_TO_DECRYPT_THE_TEXT

function DecryptText(ciphertext, n) {
    // ciphertext -> THE_TEXT_THAT_TO_DECRYPT
    // n -> NUMBER_OF_SHIFT
    
    let ans = "";
    // Decrypted_Text_STORES_IN_ans_VARIABLE

    // iterate over the given ciphertext
    for (let i = 0; i < ciphertext.length; i++) {
        const ch = ciphertext.charAt(i);
        // check if space is there then simply add space
        if (ch === " ") {
            ans += " ";
        } else if (ch === ch.toUpperCase()) {
            // check if a character is uppercase then decrypt it accordingly
            const e = (ch.charCodeAt(0) - n - 65 + 26) % 26 + 65;
            ans += String.fromCharCode(e);
        } else {
            // check if a character is lowercase then decrypt it accordingly
            const e = (ch.charCodeAt(0) - n - 97 + 26) % 26 + 97;
            ans += String.fromCharCode(e);
        }
    }

    // return the decrypted text
    return ans;
}

// TASK_3: Guessing_The_Key:

// Part_1
function KeyFinder(ciphertext, plaintext) {
    // if a positive number is returned, it means RIGHT_Shift, else LEFT_Shift
    return ciphertext.charCodeAt(0) - plaintext.charCodeAt(0);
}

// Part_2
function bruteForceCC(message) {
    const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // loop to run all 26 keys from 0 to 25
    for (let key = 0; key < Letters.length; key++) {
        // initialize a blank string which will hold the translated string
        let translated = "";

        // loop for every character in the message
        for (let i = 0; i < message.length; i++) {
            const ch = message.charAt(i);
            if (Letters.includes(ch)) {
                const ind = Letters.indexOf(ch);
                let newIndex = ind - key;
                if (newIndex < 0) {
                    newIndex += 26;
                }
                translated += Letters.charAt(newIndex);
            } else {
                translated += ch;
            }
        }

        console.log(`Hacking key is ${key}: ${translated}`);
    }
}

// ____________________END_____________________________________________________
// __________________@ManishKumarAkela_________________________________________



