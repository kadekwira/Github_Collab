let tanggal = 1
let bulan = 2
let tahun = 2024

if(bulan==1){
  bulan = 13
  tahun = tahun - 1
}
else if(bulan==2){
  bulan = 14
  tahun = tahun -1
}

let sisaTahun = tahun % 100
let abad = parseInt(tahun / 100)

let kode = (tanggal + parseInt(13*(bulan+1)/5) + sisaTahun + parseInt(sisaTahun/4) + parseInt(abad/4)+5*abad) %7
let hari = ["Minggu","senin", "selasa","rabu","kamis","jumat","sabtu"]


console.log(hari[kode-1])

 