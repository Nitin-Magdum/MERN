function additionResponce(req, res) {
    const { firstNumber, secondNumber } = req.body;

    
    const regex = /^[1-9]\d*$/;
    if (!regex.test(firstNumber) || !regex.test(secondNumber)) {
        return res.status(400).json({ error: 'Invalid request body' });
    }


    const arr1 = firstNumber.split('').reverse();
    const arr2 = secondNumber.split('').reverse();
   
    const result = {};
    let carryStr = '_';
    let sumStr = '';
    let carryDigit = 0;
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        const digit1 = parseInt(arr1[i] || '0');
        const digit2 = parseInt(arr2[i] || '0');
        console.log(digit1, digit2);
        const sum = digit1 + digit2 + carryDigit;
        carryDigit = sum >= 10 ? 1 : 0;
        if (i == (Math.max(arr1.length, arr2.length) - 1) && (carryDigit = !0)) {
            const sumDigit = sum ;
            sumStr = sumDigit.toString() + sumStr;
            result[`step${i + 1}`] = { carryString: carryStr, sumString: sumStr };
        }
        else {
            const sumDigit = sum >= 10 ? sum % 10 : sum;
            sumStr = sumDigit.toString() + sumStr;
            carryStr = carryDigit == 0 && i == (Math.max(arr1.length, arr2.length) - 1) ? carryStr : carryDigit.toString() + carryStr;
            result[`step${i + 1}`] = { carryString: carryStr, sumString: sumStr };
        }
    }
    
    return res.json(result);
};

module.exports = { additionResponce };

