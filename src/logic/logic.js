// Here are logic related to password

const specialCharacters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
    '[', ']', '{', '}', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?',
    "\\", '|', '`', '~', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function passStrength(pass) {
    let len = pass.length;
    let isUpperCase = false;
    let isLowerCase = false;
    let inSequence = true;
    let allSame = true;
    let specialChar = 0;

    let passScore = 0;



    for (let i = 0; i < len - 1; i++) {
        let ch1 = pass.charCodeAt(i)
        let ch2 = pass.charCodeAt(i + 1)

        if (inSequence) {
            if (ch1 != ch2 - 1) {
                inSequence = false;
            }
        }
        if (allSame) {
            if (ch1 != ch2) {
                allSame = false;
            }
        }

        if (!allSame && !inSequence) {
            break;
        }
    }



    for (let i = 0; i < len; i++) {
        const item = pass.charAt(i);

        if (specialCharacters.includes(item)) {
            // console.log(`${item} is in the array!`);
            specialChar += 1;
        }
    }

    if (specialChar == 0) {
        if (pass.toLowerCase() === pass) {
            isLowerCase = true;
        }
        if (pass.toUpperCase() === pass) {
            isUpperCase = true;
        }
    }

    // Testing
    // console.log("Lenght of Password is "+len)
    // console.log("Total special characters "+specialChar)
    // console.log("Are they in sequence "+inSequence)
    // console.log("is All upper case "+isUpperCase)
    // console.log("is All lower case "+isLowerCase)

    // Calculate the score 
    if (len > 6 && len <= 9) {
        passScore += 2
        // console.log("+2 for 8 to 10 chars")
    }
    if (len > 9 && len < 12) {
        passScore += 3
        // console.log("+2 for upt 12 chars")
    }
    if (len >= 12) {
        passScore += 4
        // console.log("+2 for more than 12 chars")
    }
    if (!isLowerCase && !isUpperCase) {
        passScore += 2
        // console.log("+2 for mixed case")
    }
    if (!inSequence && !allSame) {
        passScore += 2;
        // console.log("+2 for not in sequence")
    }
    else {
        passScore -= 2;
        // console.log("-2 for putting in sequence")
    }
    if (allSame) {
        passScore -= 1;
        // console.log("-1 for all same chars")
    }
    if (specialChar == 0) {
        passScore -= 1;
        // console.log("-1 for 0 speical chars")
    }
    if (specialChar == 1) {
        passScore += 1
        // console.log("+1 for atleast 1 special char")
    }
    if (specialChar >= 2) {
        passScore += 2
        // console.log("+2 for more than 1 special chars")
    }

    return passScore
}

// console.log("prem is " + passStrength("prem") + " Password")
// console.log("premRaj is " + passStrength("premRaj") + " Password")
// console.log("Prem12#Rajsingh is " + passStrength("Prem12#Rajsingh") + " Password")
// console.log("123456789 is " + passStrength("123456789") + " Password")
// console.log("Abcde is " + passStrength("Abcde") + " Password")

// console.log("Score out of 12 is "+passStrength("Prem#raj12"))

export function generatePass() {


    let i = 0;
    let password = "";
    while (i < 12) {
        const randomIndex = Math.floor(Math.random() * specialCharacters.length);
        const randomElement = specialCharacters[randomIndex];
        const rndIndx = Math.floor(Math.random() * str.length);
        const randomChar = str.charAt(rndIndx);

        password += randomChar + randomElement;
        i++;
    }



    return password
}

// console.log(generatePass())