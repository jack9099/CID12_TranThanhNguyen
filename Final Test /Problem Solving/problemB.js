// Problem B

function alternatingSums(a) {
    if (!Array.isArray(a)){
        console.log('Hay nhap vao 1 mang chua can nang cac thanh vien trong cap dau []. Ex: alternatingSums([60, 40, 55, 75, 64]).');
    } else if (a.includes(0) || a.find(e => e < 0)){
        console.log('Can nang thanh vien phai lon hon 0.');
    } else {
        var teamA = [];
        var teamB = [];
        var resultA = 0;
        var resultB = 0;
        var result = [];
        for(i = 0; i < a.length; i++){
            if (i%2 == 0) {
                teamA.push(a[i]);
                resultA += a[i];
            } else {
                teamB.push(a[i]);
                resultB += a[i];
            }
        }

        console.log('Team A: ', teamA);
        console.log('Team B: ', teamB);
        
        result.push(resultA, resultB);
        console.log('Tong can nang 2 team theo thu tu: ', result);
    }
}

////////////////////////////////////////////////////////////////////////////  