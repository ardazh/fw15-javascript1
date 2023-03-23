function palindrome(teks){
    let hasil = ' ';
    for(let x = teks.length-1; x >= 0; x--){
        hasil = hasil + teks[x]
    }
    if(teks.length <= 2){
        console.log('Teks harus lebih dari 2 huruf');
    } else if(hasil === teks){
        console.log('Palindrome');
    } else{
        console.log('Bukan Palindrome');
    }
}


palindrome('tamat');
palindrome('sinis');
palindrome('ada');
palindrome('go');
palindrome('bapak');



