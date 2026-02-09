/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {



  // Your code here
   let lenCriteria=false;
   let upperCriteria = false;
   let lowerCriteria=false;
   let numCriteria=false;
   let specialCriteria=false;
   let specialChars ="!@#$%^&*()_+-=[]{}|;:,.<>?";

   if((typeof password!=='string')|| password.length==0)return "weak";
   

   if(password.length>=8)lenCriteria=true;

    for(let i=0;i<password.length;i++)
    {
       let ch=password[i];
        if(ch>='A' && ch<='Z')upperCriteria=true;
        else if(ch >='a' && ch <='z')lowerCriteria=true;
        else if(ch >='0' && ch <='9')numCriteria=true;
        else if (specialChars.includes(ch)) {
          specialCriteria = true;
        }
    }

    let totalCriteriaMet=lenCriteria+upperCriteria+lowerCriteria+numCriteria+specialCriteria;

    let level;

    if (totalCriteriaMet >= 0 && totalCriteriaMet <= 1) {
      level = "weak";
    } else if (totalCriteriaMet >= 2 && totalCriteriaMet <= 3) {
      level = "medium";
    } else if (totalCriteriaMet==4) {
      level = "strong";
    }
    else if(totalCriteriaMet==5){
      level="very strong";
    }

    return level;
}
