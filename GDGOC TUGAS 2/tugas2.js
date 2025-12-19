async function getTodo() {
    try {
        console.log("Mencoba mengambil data...");

const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Judul Todo: " + data.title);
        console.log("--- Proses Selesai ---");

    } catch (error) {
        console.log("❌ Terjadi kesalahan:", error.message);
    }
}
getTodo();