
function kalkulasi(event){
    event.preventDefault();
    // kamus
    const tinggi = parseFloat(document.querySelector('#tinggi-badan').value)/100;
    const beratBadan = parseFloat(document.querySelector('#berat-badan').value);
    const penjelasan= document.getElementById('penjelasan');
    const hasil = document.querySelector('#hasil-bmi');
    const resiko = document.getElementById('resiko-penyakit');
    const solusi = document.getElementById('solusi');
    const kontenInfoUmum = document.getElementById('konten-infoUmum');
    const usia =document.getElementById('usia').value;
    const alert = document.getElementById('alert')
    // algoritma
    let BMI = (beratBadan / ( tinggi * tinggi));
    hasil.innerHTML = BMI.toFixed(2);
    // validasi
    if (usia < 18){
        alert.classList.toggle('alert-aktif')
    }
    else if(usia >= 18){
        kontenInfoUmum.classList.toggle("aktif");
    }
    //end validasi
    if (BMI <18.5){
        penjelasan.innerHTML = "kekurangan berat badan"
        resiko.innerHTML = "Malnutrisi, Osteoporosis, Anemia, Sistem kekebalan tubuh yang lemah"
        solusi.innerHTML = " penting untuk berkonsultasi dengan dokter atau ahli gizi untuk memahami penyebab kekurangan berat badan dan mendapatkan saran diet yang tepat. Meningkatkan asupan kalori dengan makanan bergizi tinggi seperti kacang-kacangan, alpukat, daging tanpa lemak, dan produk susu penuh lemak dapat membantu. Makan lebih sering dan menyertakan makanan ringan sehat di antara waktu makan utama juga dianjurkan. Suplemen mungkin diperlukan jika disarankan oleh profesional kesehatan. Selain itu, olahraga, terutama latihan kekuatan, dapat membantu membangun otot dan meningkatkan massa tubuh."
    }else if(BMI >= 18.5 && BMI <= 24.9){
        penjelasan.innerHTML ="normal"
        resiko.innerHTML ="Risiko penyakit kronis lebih rendah dibandingkan kategori lain"
        solusi.innerHTML = "Mempertahankan gaya hidup sehat sangat penting untuk mereka yang berada dalam kategori ini. Pola makan seimbang dan olahraga rutin harus terus diikuti. Pemantauan berat badan secara berkala membantu memastikan tetap dalam rentang yang sehat. Mengelola stres dengan teknik relaksasi seperti yoga atau meditasi juga dapat mencegah peningkatan berat badan terkait stres."
    }else if(BMI >= 25.0 && BMI <= 29.9){
        penjelasan.innerHTML ="kelebihan berat badan"
        resiko.innerHTML ="Penyakit jantung, Tekanan darah tinggi (hipertensi)"
        solusi.innerHTML = "Mengadopsi diet seimbang dan mengurangi asupan kalori dengan memperbanyak sayuran, buah-buahan, biji-bijian, dan protein tanpa lemak adalah langkah awal yang baik. Meningkatkan aktivitas fisik, seperti berjalan, berenang, atau bersepeda setidaknya 150 menit per minggu, sangat dianjurkan. Mengurangi konsumsi makanan olahan yang tinggi gula, garam, dan lemak jenuh serta menghentikan kebiasaan tidak sehat seperti merokok dan konsumsi alkohol berlebihan juga penting."
    }else{
         penjelasan.innerHTML ="obesitas"
         resiko.innerHTML ="Penyakit jantung koroner, Diabetes tipe 2, Sleep apnea"
         solusi.innerHTML = "Konsultasi dengan profesional kesehatan untuk mendapatkan program penurunan berat badan yang disesuaikan adalah langkah penting. Mengikuti rencana diet rendah kalori dan mengatur porsi makan secara ketat diperlukan. Menambah intensitas dan durasi latihan fisik secara bertahap serta mendapatkan terapi perilaku untuk mengubah kebiasaan makan dan gaya hidup yang buruk dapat membantu. Pemantauan medis diperlukan untuk mengevaluasi risiko kesehatan dan komplikasi terkait obesitas."
    }
    
};

