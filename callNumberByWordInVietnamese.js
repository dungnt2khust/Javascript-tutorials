

function callNumber1Digit(numberStr, bigger) {
    switch(numberStr) {
        case '0':
            return '';
        case '1': 
            if (bigger == false)
                return 'một';
            else 
                return 'mốt';
        case '2':
            return 'hai';
        case '3': 
            return 'ba';
        case '4':
            return 'bốn';
        case '5': 
            return 'năm';
        case '6':
            return 'sáu';
        case '7':
            return 'bảy';
        case '8': 
            return 'tám';
        case '9':
            return 'chín';
        default:
            return 'error';
    }
}

function callNumber2Digit(numberStr) {
    if (numberStr[0] == '0') {
        if (numberStr[1] == '0') {
            return '';
        }
        return 'lẻ ' + callNumber1Digit(numberStr[1], false);
    }
    else if (numberStr[0] == '1') {
        return 'mười ' + callNumber1Digit(numberStr[1], false);
    }
    return callNumber1Digit(numberStr[0]) + ' mươi ' + callNumber1Digit(numberStr[1], true);
}

function callNumber3Digit(numberStr) {
    if (numberStr[0] == '0')  {
        return  'không trăm ' + callNumber2Digit(numberStr.slice(1));
    }
    return callNumber1Digit(numberStr[0], false) + ' trăm ' + callNumber2Digit(numberStr.slice(1))
}
function callNumber4Digit(numberStr, bigger) {
    if (bigger == false) 
        return callNumber1Digit(numberStr[0], false) + ' nghìn ' + callNumber3Digit(numberStr.slice(1));
    else 
        return ' nghìn ' + callNumber3Digit(numberStr.slice(1));
}
function callNumber(number) {
    var numberStr = number.toString();
    var numberLen = numberStr.length;
    switch(numberLen) {
        case 1:
            console.log(callNumber1Digit(numberStr));
            break;
        case 2: 
            console.log(callNumber2Digit(numberStr));
            break;
        case 3: 
            console.log(callNumber3Digit(numberStr))
            break;
        case 4:
            console.log(callNumber4Digit(numberStr, false));
            break;
        case 5: 
            console.log(callNumber2Digit(numberStr.slice(0, 2)) + callNumber4Digit(numberStr.slice(1), true));
            break;
        case 6:
            console.log(callNumber3Digit(numberStr.slice(0, 3)) + callNumber4Digit(numberStr.slice(2), true));
            break;
        case 7:
            console.log(callNumber1Digit(numberStr[0], false) + ' triệu ' + callNumber3Digit(numberStr.slice(1, 4)) + callNumber4Digit(numberStr.slice(3), true));
            break;
        case 8:
            console.log(callNumber2Digit(numberStr.slice(0, 2)) + ' triệu ' + callNumber3Digit(numberStr.slice(2, 5)) + callNumber4Digit(numberStr.slice(4), true));
            break;
        case 9:
            console.log(callNumber3Digit(numberStr.slice(0, 3)) + ' triệu ' + callNumber3Digit(numberStr.slice(3, 6)) + callNumber4Digit(numberStr.slice(4), true));
            break;
        case 10:
            console.log(callNumber1Digit(numberStr[0], false) + ' tỷ ' + callNumber3Digit(numberStr.slice(1, 4)) + ' triệu ' + callNumber3Digit(numberStr.slice(4, 7)) + callNumber4Digit(numberStr.slice(5), true));
            break;
    }
}
callNumber(2222222222);