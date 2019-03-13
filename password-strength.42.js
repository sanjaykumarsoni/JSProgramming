/**
 * defining regX 
 * reference https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
 * https://code.i-harness.com/en/q/12b269e
 */
//at least one lower case character
const lowerCaseExp = /(?=.*[a-z])/;

//at least one upper case character
const upperCaseExp = /(?=.*[A-Z])/;

//at least one numeric value
const numericCharExp = /(?=.*[0-9])/;

// at least one special character
const specialCharExp = /(?=.*[!@#\$%\^&\*\(])/; //(?=.[!@#\$%\^&])

//contains at least 8 character
const atlestEightChar = /(?=.{8,})/;
const atleastSixChar = /(?=.{6,})/;

const strongPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\(])(?=.{8,})/);
const modaratePassword = new RegExp(/^((?=.*[a-z])|(?=.*[A-Z])|(?=.*[!@#\$%\^&\*\(]))(?=.{6,})/);

const passwordStrengthDetection = (givenStr) => {
  if(strongPassword.test(givenStr)){
    return 'Password is strong!!';
  } else if(modaratePassword.test(givenStr)){
    return 'Password is Modarate only!';
  } else {
    return 'weak password';
  }
  
}

let givenStr = 'Vamsi=(30@)';
console.log(passwordStrengthDetection(givenStr));

givenStr = '123456';
console.log(passwordStrengthDetection(givenStr));

givenStr = 'Nayantara143';
console.log(passwordStrengthDetection(givenStr));
