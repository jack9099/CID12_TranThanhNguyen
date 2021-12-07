function primeNumber(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    a = parseInt(a);
    b = parseInt(b);
    var count = 0;
    if (a > b) {
        document.write("Nhap so thu 2 lon hon so thu nhat");
    }
    else {
        for (var i = a + 1; i < b; i++){
            for (var j = 2; j < i; j++){
                if (i % j != 0){
                    count++;
                }
                else {
                    break;
                }
            }
            if (count == i - 2){
                document.write(i + " ");
            }
            count = 0;
        }
    }
    
}