//SHOPPING TIME

function shoppingTime(memberId, money) {
  //Dibuat array untuk tampungan data, untuk memudahkan pemanggilan data
  var produk = [
    ['Sepatu Stacattu', 1500000],
     ['Baju Zoro', 500000],
     ['Baju H&N', 250000],
     ['Sweater Uniklooh', 175000],
     ['Casing HAndphone', 50000]]
   var biodata = {
     memberId: memberId,
     money: money,
     listPurchased: [],
     changeMoney: 0
   }

  if(memberId === '' || memberId === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }
  else if (money < 50000 || money === undefined) {
    return 'Mohon maaf, uang tidak cukup'
  }
  else {
    if(money >= produk[0][1]) {
      biodata['listPurchased'].push(produk[0][0])
      money -= produk[0][1]
    }
    if(money >= produk[1][1]) {
      biodata['listPurchased'].push(produk[1][0])
      money -= produk[1][1]
    }
    if(money >= produk[2][1]) {
      biodata['listPurchased'].push(produk[2][0])
      money -= produk[2][1]
    }
    if(money >= produk[3][1]) {
      biodata['listPurchased'].push(produk[3][0])
      money -= produk[3][1]
    }
    if(money >= produk[4][1]) {
      biodata['listPurchased'].push(produk[4][0])
      money -= produk[4][1]
    }
    biodata.changeMoney = money
    return biodata
  }  
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