// function haloProductzilla() {
//   setTimeout(function () {
//     console.log("Hallo dari Productzilla");
//   }, 3000);
// }
// haloProductzilla();

// function getDataUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const user = { nama: "Budi", usia: 25 };
//       resolve(user);
//     }, 2000);
//   });
// }

// getDataUser()
//   .then((data) => {
//     console.log("Data user berhasil diambil:", data);
//   })
//   .catch((error) => {
//     console.log("Terjadi kesalahan:", error);
//   });




// // Fungsi untuk menghasilkan waktu acak antara 1-3 detik
// function waktuAcak(): number {
//   return Math.floor(Math.random() * 2000) + 1000;
// }

// // Definisi tipe data untuk objek yang akan digunakan
// interface Data {
//   id: number;
//   nama: string;
//   harga?: number;
// }

// // Fungsi simulasi ambilData
// function ambilData(): Promise<Data> {
//   return new Promise((resolve, reject) => {
//     console.log("Memulai pengambilan data...");
//     setTimeout(() => {
//       console.log("Data berhasil diambil");
//       resolve({ id: 1, nama: "Produk A" });
//     }, waktuAcak());
//   });
// }

// // Fungsi simulasi prosesData
// function prosesData(data: Data): Promise<Data> {
//   return new Promise((resolve, reject) => {
//     console.log("Memulai pemrosesan data...");
//     setTimeout(() => {
//       console.log("Data berhasil diproses");
//       resolve({ ...data, harga: 10000 });
//     }, waktuAcak());
//   });
// }

// // Fungsi simulasi simpanData
// function simpanData(data: Data): Promise<string> {
//   return new Promise((resolve, reject) => {
//     console.log("Memulai penyimpanan data...");
//     setTimeout(() => {
//       console.log("Data berhasil disimpan");
//       resolve("Data tersimpan dengan sukses!");
//     }, waktuAcak());
//   });
// }

// // Fungsi utama menggunakan async/await
// async function operasiDatabase(): Promise<void> {
//   try {
//     const data = await ambilData();
//     const dataDiproses = await prosesData(data);
//     const hasil = await simpanData(dataDiproses);
//     console.log(hasil);
//   } catch (error) {
//     console.error("Terjadi kesalahan:", error);
//   }
// }

// // Menjalankan operasi database
// operasiDatabase();


function tunggu(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ambilData() {
    await tunggu(Math.random() *  2000 + 1000);
    console.log("Data berhasil diambil");
    return " data mentah";
}

async function prosesData(data: string) {
    await tunggu(Math.random() * 2000 + 1000);
    console.log("Data berhasil diproses");
    return data + " yang telah diproses";
}

async function simpanData(data: string) {
    await tunggu(Math.random() * 2000 + 1000);
    console.log("Data berhasil disimpan");
    return{ sukses:  true, pesan: "Data" + data + " telah disimpan"}
}

async function jalankanOperasiDatabase() {
    try {
        const data = await ambilData(); // Mengambil data
        const dataDiproses = await prosesData(data); // Memproses data
        const hasil = await simpanData(dataDiproses); // Menyimpan data
        console.log(hasil.pesan); // Menampilkan pesan hasil penyimpanan
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Menangani kesalahan
    }
}


jalankanOperasiDatabase();