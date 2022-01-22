//  Problem A

function adjacentElementsProduct(inputArray) {
    if (!Array.isArray(inputArray)){
        console.log('Hay nhap 1 mang cac so nguyen trong cap dau []. Ex: adjacentElementsProduct([1, 2, 3, 4]).');
    } else {
        console.log('Mang vua nhap: ', inputArray);

        let count = 0;
        for(let i = 0; i < inputArray.length; i++) {
            if (inputArray[i]*inputArray[i+1] > count){
                count = inputArray[i]*inputArray[i+1];
            }
        }
    
    console.log('Ket qua: ', count);
    }
}

////////////////////////////////////////////////////////////////////////////