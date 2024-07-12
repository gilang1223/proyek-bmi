const beratBadan= document.getElementById('berat-badan')
const tinggi = document.getElementById('tinggi-badan')
function kalkulasi(){
   let bmi = beratBadan.value/(tinggi.value*tinggi.value)
    return bmi
}
function display(){
    document.getElementById('hasil-bmi').innerHTML = kalkulasi()
}