function buatTeh(jenisGula) {
  return new Promise((resolve, reject) => {
    console.log("⏳ Sedang merebus air... (Tunggu 2000ms)");

    setTimeout(() => {
      if (jenisGula === "Gula Batu") {
        resolve("✅ Teh Gula Batu Siap");
      } else {
        reject("❌ Maaf, gula habis");
      }
    }, 2000);
  });
}

buatTeh("Gula Batu")
  .then((pesan) => {
    console.log(pesan); 
  })
  .catch((error) => {
    console.log(error);
  });

setTimeout(() => {
    console.log("\n--- Tes Gagal ---");
    buatTeh("Gula Pasir")
      .then((pesan) => {
        console.log(pesan);
      })
      .catch((error) => {
        console.log(error); 
      });
}, 3000);