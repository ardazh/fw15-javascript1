function konsonan(teks){
  let hasil = '';
  if(typeof teks !== 'string'){
    console.log('Tipe data teks harus string');
    return;
  }
  for(let x = 0; x < teks.length; x++){
    if(teks[x] == 'a'){
      hasil = hasil + 'o';
    } else{
      hasil = hasil + teks[x];
    }
  }
  console.log(hasil);
}

konsonan('surabaya');
konsonan('malang');
konsonan('bubur');
konsonan(1);