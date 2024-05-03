// validation.js
const validation = (values) => {
    let errors = {};

    // Validation for CIN
    if (!values.cin) {
        errors.cin = "CIN is required";
    } else if (values.cin.length !== 8) {
        errors.cin = "CIN must be 8 characters long";
    }

    // Validation for password
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 5) {
        errors.password = "Password must be at least 5 characters long";
    }

    return errors;
};

export default validation;
