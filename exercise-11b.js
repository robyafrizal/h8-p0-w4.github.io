//SHOPPING TIME

//membuat array untuk tampungan data, untuk memudahkan pemanggilan data
var produk = [
  ['Sepatu Stacattu', 1500000],
   ['Baju Zoro', 500000],
   ['Baju H&N', 250000],
   ['Sweater Uniklooh', 175000],
   ['Casing HAndphone', 50000]]

function bayar(money) { //fungsi untuk perhitungan barang yang dibeli
  var output = [] //buat tampungan barang yang dibeli
  for(var i = 0; i < produk.length; i++) {
    if(money - produk[i][1] > 0) {
      output.push(produk[i][0])
      money -+ produk[i][1]
    // Dilakukan perulangan sebanyak banyak barang yang ada di toko,
    // jika masih ada uang yang cukup, maka uang akan terus dibelanjakan,
    // prioritas diutamakan barang yang lebih mahal terlebih dahulu
    }
  }
  return output
}

function sisa(money) { //fungsi menghitung sisa uang setelah dibelanjakan
  for(var i = 0; i < produk.length; i++) {
    if(money - produk[i][1] >= 0){
      money -+ produk
    }
  }
  return money
}

//merupakan fungsi utama untuk mencetak objek yang sudah ditentukan
function shoppingTime(memberId, money) {
  var object = {
    memberId: memberId,
    money: money,
    listPurchased: bayar(money),
    changeMoney: sisa(money)
  }

  //menentukan output sesuai kondisi permintaan
  if(memberId) { // sama saja dg cek apakah (memberId === true)
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'    
  }
  else if (money < 50000 || !money) {  // (!money) sama saja dg cek apakah (money === false)
    return 'Mohon maaf, uang tidak cukup'
  }
  return object
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja