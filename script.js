// Fungsi utama untuk mengambil data dari API Publik
async function ambilData() {
    const container = document.getElementById('user-container');
    
    try {
        // Mengambil data dari JSONPlaceholder (Poin No. 1 di tugas)
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Penanganan Error jika koneksi gagal (Poin No. 4)
        if (!response.ok) throw new Error("Gagal mengambil data dari server");

        const data = await response.json();
        
        // Hapus tulisan "Sedang memuat..."
        container.innerHTML = '';

        // Looping data untuk ditampilkan ke UI (Poin No. 5)
        data.forEach(user => {
            container.innerHTML += `
                <div class="col-md-4">
                    <div class="card shadow-sm h-100 border-primary">
                        <div class="card-body">
                            <h5 class="card-title text-primary">${user.name}</h5>
                            <p class="card-text mb-1"><strong>Email:</strong> ${user.email}</p>
                            <p class="card-text text-muted"><strong>Kota:</strong> ${user.address.city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        // Menampilkan pesan error yang user-friendly (Poin No. 4)
        container.innerHTML = `
            <div class="alert alert-danger text-center" role="alert">
                Wah, sepertinya ada masalah: ${error.message}
            </div>
        `;
    }
}

// Jalankan fungsi saat halaman dibuka
ambilData();