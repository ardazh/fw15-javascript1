// Input nilai UN
const bahasaIndonesia = prompt("Masukkan nilai Bahasa Indonesia:");
const bahasaInggris = prompt("Masukkan nilai Bahasa Inggris:");
const matematika = prompt("Masukkan nilai Matematika:");
const ipa = prompt("Masukkan nilai IPA:");

// Validasi bahwa semua nilai telah diisi
if (!bahasaIndonesia || !bahasaInggris || !matematika || !ipa) {
  alert("Harap isi semua nilai!");
} else {
  // Hitung rata-rata
  const average = (Number(bahasaIndonesia) + Number(bahasaInggris) + Number(matematika) + Number(ipa)) / 4;

  // Tentukan grade berdasarkan rata-rata
  let grade;
  if (average >= 90 && average <= 100) {
    grade = "A";
  } else if (average >= 80 && average <= 89) {
    grade = "B";
  } else if (average >= 70 && average <= 79) {
    grade = "C";
  } else if (average >= 60 && average <= 69) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Tampilkan hasil
  console.log(`Rata-rata: ${average.toFixed(2)}\nGrade: ${grade}`);
}

