class PasswordChecker {
    constructor(minLength = 8, maxLength = 20, requireDigit = true, requireSpecialChar = true, requireUpperCase = true, requireLowerCase = true) {
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.requireDigit = requireDigit;
        this.requireSpecialChar = requireSpecialChar;
        this.requireUpperCase = requireUpperCase;
        this.requireLowerCase = requireLowerCase;
    }

    checkPassword(password) {
        if (password.length < this.minLength || password.length > this.maxLength) {
            return { valid: false, message: `Password must be between ${this.minLength} and ${this.maxLength} characters long.` };
        }

        if (this.requireDigit && !/\d/.test(password)) {
            return { valid: false, message: "Password must contain at least one digit." };
        }

        if (this.requireSpecialChar && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return { valid: false, message: "Password must contain at least one special character." };
        }
        if (this.requireUpperCase && !/[A-Z]/.test(password)) {
            return { valid: false, message: "Password must contain at least one uppercase letter." };
        }

        if (this.requireLowerCase && !/[a-z]/.test(password)) {
            return { valid: false, message: "Password must contain at least one lowercase letter." };
        }

        return { valid: true, message: "Password is valid." };
    }
}

module.exports = PasswordChecker;
