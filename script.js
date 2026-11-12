// Data Produk ATK Lengkap Sesuai Foto Asli
const produkATK = [
  { id: 1, nama: "Buku Tulis Favourite Campus", harga: 55000, gambar: "buku.jpeg" },
  { id: 2, nama: "Pensil 2B Faber-Castell 9000", harga: 5000, gambar: "pensil.jpeg" },
  { id: 3, nama: "Pulpen Gel Joyko JK-100 (0.5mm)", harga: 5000, gambar: "pulpen.jpeg" },
  { id: 4, nama: "Penggaris Plastik Butterfly 30cm", harga: 4500, gambar: "penggaris.jpeg" },
  { id: 5, nama: "Tipe-X Kertas Kenko CT-902", harga: 8500, gambar: "tipex.jpeg" },
  { id: 6, nama: "Pulpen Standar AE7", harga: 3500, gambar: "pulpen standar.jpeg" },
  { id: 7, nama: "Serutan Pensil Meja Joyko", harga: 25000, gambar: "serutan.jpeg" },
  { id: 8, nama: "Tas ATK Jaring", harga: 7000, gambar: "tas atk.jpeg" },
  { id: 9, nama: "Tipe-X Cair Joy-Art / Kenko", harga: 6500, gambar: "tipex cair.jpeg" }
];

let keranjang = [];

// Menampilkan Produk ke Halaman Web
function tampilkanProduk() {
  const wadah = document.getElementById("daftar-produk");
  wadah.innerHTML = "";

  produkATK.forEach((item) => {
    wadah.innerHTML += `
      <div class="kartu-produk">
        <img src="${item.gambar}" alt="${item.nama}" class="foto-produk">
        <h3>${item.nama}</h3>
        <p class="harga">Rp ${item.harga.toLocaleString("id-ID")}</p>
        <button onclick="tambahKeKeranjang(${item.id})">+ Tambah ke Keranjang</button>
      </div>
    `;
  });
}

// Menambah Barang ke Keranjang
function tambahKeKeranjang(idProduk) {
  const barang = produkATK.find((item) => item.id === idProduk);
  keranjang.push(barang);
  updateTampilanKeranjang();
}

// Memperbarui Total Belanja
function updateTampilanKeranjang() {
  const listKeranjang = document.getElementById("list-keranjang");
  const jumlahItem = document.getElementById("jumlah-item");
  const totalHargaEl = document.getElementById("total-harga");

  listKeranjang.innerHTML = "";
  let total = 0;

  keranjang.forEach((item, index) => {
    total += item.harga;
    listKeranjang.innerHTML += `
      <li style="margin-bottom: 8px;">
        ${item.nama} - Rp ${item.harga.toLocaleString("id-ID")}
        <button onclick="hapusItem(${index})" style="background:#dc2626; padding:2px 8px; margin-left:10px; font-size:0.8em;">Hapus</button>
      </li>
    `;
  });

  jumlahItem.innerText = keranjang.length;
  totalHargaEl.innerText = total.toLocaleString("id-ID");
}

// Menghapus Item dari Keranjang
function hapusItem(index) {
  keranjang.splice(index, 1);
  updateTampilanKeranjang();
}

// Checkout Otomatis ke WhatsApp Penjual (Nomor Anda: 6285893591672)
function checkout() {
  if (keranjang.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  let pesan = "Halo, saya ingin memesan produk berikut:%0A";
  let total = 0;

  keranjang.forEach((item, i) => {
    pesan += `${i + 1}. ${item.nama} - Rp ${item.harga.toLocaleString("id-ID")}%0A`;
    total += item.harga;
  });

  pesan += `%0ATotal Pembayaran: Rp ${total.toLocaleString("id-ID")}%0ATerima kasih!`;

  const nomorWhatsApp = "6285893591672"; 
  
  window.open(`https://wa.me/${nomorWhatsApp}?text=${pesan}`, "_blank");
}

tampilkanProduk();