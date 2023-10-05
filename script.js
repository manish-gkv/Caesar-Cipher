// PROJECT_1
// Caeser_Cipher
// ManishKumarAkela 226301127

// TASK_1: FUNCTION_TO_ENCRYPT_THE_TEXT

function EncryptText() {
    // text -> THE_TEXT_THAT_TO_ENCRYPT
    let text=document.getElementById("message").value;
    let n=document.getElementById("key").value;
    n=parseInt(n)
    // n -> NUMBER_OF_SHIFT
    
    let ans = "";
    // EncryptText_STORES_IN_ans_VARIABLE

    // iterate over the given text
    for (let i = 0; i < text.length; i++) {
        let ch = text.charAt(i);
        // check if space is there then simply add space
        if (ch === " ") {
            ans += " ";
        } else if (ch === ch.toUpperCase()) {
            // check if a character is uppercase then encrypt it accordingly
            let e = (ch.charCodeAt(0) + n - 65) % 26 + 65;
            ans += String.fromCharCode(e);
        } else {
            // check if a character is lowercase then encrypt it accordingly
            let e = (ch.charCodeAt(0) + n - 97) % 26 + 97;
            ans += String.fromCharCode(e);
        }
    }
    
    // return the encrypted text
    document.getElementById("encrpted-text").value=ans;
}

// TASK_2: FUNCTION_TO_DECRYPT_THE_TEXT

function DecryptText() {
    // ciphertext -> THE_TEXT_THAT_TO_DECRYPT
    let ciphertext=document.getElementById("cipher-text").value
    // n -> NUMBER_OF_SHIFT
    let n=parseInt(document.getElementById("ci-key").value)

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
    document.getElementById("decrpted-text").value=ans
}

// TASK_3: Guessing_The_Key:

// Part_1
function KeyFinder() {
    let ciphertext=document.getElementById("ci-text").value
    let plaintext=document.getElementById("org-text").value
    // if a positive number is returned, it means RIGHT_Shift, else LEFT_Shift
    let key= ciphertext.charCodeAt(0) - plaintext.charCodeAt(0);
    if(key<0){
        document.getElementById("f-key").value=((-1)*key)+" Right Shift"
    }
    else{
        document.getElementById("f-key").value=key+" Left Shift"
    }
}

// Part_2
function bruteForceCC() {
    let message=document.getElementById("msg").value;
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
        let res=`Hacking key is ${key}: ${translated}`;
        //console.log(`Hacking key is ${key}: ${translated}`);
        let idd = `sp-${key+1}`;
        document.getElementById(idd).innerHTML=res;
    }
}

// ____________________END_____________________________________________________
// __________________@ManishKumarAkela_________________________________________



