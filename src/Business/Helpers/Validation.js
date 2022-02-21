

const IsValid = ( text ) => {
 
    if (text === null || text === "") {
       
        return false;
    }

    return true;
}

const IsPasswordValid = ( password ) => {


    if (password === null || password === "" || password.length === 0) {
        return "empty"
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }

    //Validate for length of Password.
    if (passed > 2 && password.length > 8) {
        passed++;
    }

    if (passed > 4) {
        return "valid";
    }

    return "weak";
}

export { IsValid, IsPasswordValid }