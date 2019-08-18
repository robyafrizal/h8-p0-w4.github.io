//NAIK ANGKOT
function naikAngkot(arr) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F']
  var bayar = [] //Dibuat variable penampung untuk menyimpan value data pembayaran & jumlah transaksi

  // jarak rute dihitung dg mencari indexOf() pada rute
  // indeks terbesar dikurangi indeks terkecil untuk mendapatkan selisih rute
  // selisih rute dikali dg 2000
  for(var i = 0; i < arr.length; i++) {
      bayar.push(2000*(rute.indexOf(arr[i][2]) - rute.indexOf(arr[i][1])))    
  }

  var output = []
  for(var i = 0; i < arr.length; i++) {
    var object = {
      penumpang : arr[i][0],
      naikDari : arr[i][1],
      tujuan : arr[i][2],
      bayar : bayar[i]
    }
    output.push(object)
  }

return output
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]