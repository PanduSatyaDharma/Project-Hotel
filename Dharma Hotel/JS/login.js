// Handle login form submission
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Mencegah pengiriman form default

            const emailInput = document.getElementById('email').value.trim();
            const passwordInput = document.getElementById('password').value.trim();

            if (!emailInput || !passwordInput) {
                alert('Email dan password harus diisi!');
                return;
            }

            // Simulasi login dengan role
            if (emailInput === 'User' && passwordInput === 'user123') {
                sessionStorage.setItem('role', 'user');
                alert('Login sebagai User berhasil!');
                window.location.href = 'halaman1.html';
                console.log('Login form submitted'); // Untuk memastikan form ditangkap
                console.log('Email:', emailInput, 'Password:', passwordInput); // Untuk melihat input pengguna

            } else if (emailInput === 'Admin' && passwordInput === 'admin123') {
                sessionStorage.setItem('role', 'admin');
                alert('Login sebagai Admin berhasil!');
                window.location.href = 'halaman1.html';
                console.log('Login form submitted'); // Untuk memastikan form ditangkap
                console.log('Email:', emailInput, 'Password:', passwordInput); // Untuk melihat input pengguna

            } else {
                alert('Email atau password salah!');
            }
        });

        document.querySelector('.btn-batal')?.addEventListener('click', () => {
            sessionStorage.removeItem('role');
            alert('Anda telah logout!');
            window.location.href = 'halaman1.html';
        });
    }
    });