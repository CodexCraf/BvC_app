function calculateFee(status) {
    let fee = 0;
    switch(status) {
        case 'student':
            fee = 10;
            break;
        case 'staff':
            fee = 50;
            break;
        case 'volunteer':
            fee = 0;
            break;
        default:
            fee = 0; // Default to 0 if status is not recognized
            break;
    }
    return fee;
}

module.exports = {
    calculateFee
};
