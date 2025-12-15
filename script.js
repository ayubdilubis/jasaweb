// Membuat struktur website secara dinamis menggunakan JavaScript

// Menambahkan header dengan navigasi
const header = document.createElement('header');
header.innerHTML = `
    <nav class="navbar">
        <div class="container">
            <a href="#" class="logo">JazaWeb</a>
            <ul class="nav-links">
                <li><a href="#paket-website">Paket</a></li>
                <li><a href="#layanan">Layanan</a></li>
                <li><a href="#kontak">Kontak</a></li>
            </ul>
        </div>
    </nav>
`;
document.body.prepend(header);

// Membuat dan menambahkan bagian utama
const main = document.createElement('main');

const section = document.createElement('section');
section.id = 'paket-website';

const sectionTitle = document.createElement('h2');
sectionTitle.textContent = 'Paket Jasa Pembuatan Website';
section.appendChild(sectionTitle);

// Menambahkan konten ke bagian "Paket Jasa Pembuatan Website"
const paketContent = document.createElement('div');
paketContent.innerHTML = `
    <ul>
        <li>Landing Page - Mulai dari Rp 2.750.000</li>
        <li>Company Profile - Mulai dari Rp 2.900.000</li>
        <li>Toko Online - Mulai dari Rp 4.500.000</li>
        <li>Custom Website - Harga sesuai kebutuhan</li>
    </ul>
`;
section.appendChild(paketContent);

// Menambahkan deskripsi di bagian "Paket Jasa Pembuatan Website"
const paketDescription = document.createElement('p');
paketDescription.textContent = `Kami menyediakan berbagai paket jasa pembuatan website yang sesuai dengan kebutuhan bisnis Anda.`;
section.insertBefore(paketDescription, paketContent);

// Menambahkan fitur "Landing Page"
const landingPage = document.createElement('div');
landingPage.innerHTML = `
    <h3>Landing Page</h3>
    <p>Ideal untuk kampanye promosi produk atau layanan tunggal dengan desain yang fokus pada satu tujuan spesifik.</p>
    <p>Mulai dari Rp 2.750.000</p>
`;
section.appendChild(landingPage);

// Menambahkan fitur "Company Profile"
const companyProfile = document.createElement('div');
companyProfile.innerHTML = `
    <h3>Company Profile</h3>
    <p>Mencerminkan profesionalisme dan nilai-nilai perusahaan Anda, membantu meningkatkan kepercayaan calon klien.</p>
    <p>Mulai dari Rp 2.900.000</p>
`;
section.appendChild(companyProfile);

// Menambahkan fitur "Toko Online"
const tokoOnline = document.createElement('div');
tokoOnline.innerHTML = `
    <h3>Toko Online</h3>
    <p>Website toko online kami mendukung fitur pengelolaan produk, keranjang belanja, pembayaran, dan pengiriman secara terintegrasi.</p>
    <p>Mulai dari Rp 4.500.000</p>
`;
section.appendChild(tokoOnline);

// Menambahkan fitur "Custom Website"
const customWebsite = document.createElement('div');
customWebsite.innerHTML = `
    <h3>Custom Website</h3>
    <p>Solusi yang fleksibel dan dirancang khusus untuk memenuhi kebutuhan dan tujuan spesifik bisnis Anda.</p>
    <p>Harga sesuai kebutuhan</p>
`;
section.appendChild(customWebsite);

// Menambahkan elemen tambahan untuk menyamakan fitur dengan https://nuhaweb.com/#paket

// Menambahkan fitur "SEO yang Teroptimasi"
const seoOptimized = document.createElement('div');
seoOptimized.innerHTML = `
    <h3>SEO yang Teroptimasi</h3>
    <p>Memastikan bahwa bisnis Anda mudah ditemukan secara online. Website yang tidak dioptimalkan akan sulit muncul di halaman pertama pencarian.</p>
`;
section.appendChild(seoOptimized);

// Menambahkan fitur "Cepat dan Responsif"
const fastResponsive = document.createElement('div');
fastResponsive.innerHTML = `
    <h3>Cepat dan Responsif</h3>
    <p>Proses loading yang cepat dan dapat diakses dengan baik dari berbagai perangkat, termasuk mobile.</p>
`;
section.appendChild(fastResponsive);

// Menambahkan fitur "Struktur dan Navigasi"
const structureNavigation = document.createElement('div');
structureNavigation.innerHTML = `
    <h3>Struktur dan Navigasi</h3>
    <p>Memudahkan pengunjung menemukan apa yang mereka cari, dengan navigasi yang intuitif dan konten yang terstruktur dengan baik.</p>
`;
section.appendChild(structureNavigation);

// Menambahkan fitur "Visual Kekinian"
const modernVisual = document.createElement('div');
modernVisual.innerHTML = `
    <h3>Visual Kekinian</h3>
    <p>Memiliki desain yang modern, bersih, dan mencerminkan identitas brand.</p>
`;
section.appendChild(modernVisual);

// Menambahkan tombol "Hubungi Kami"
const contactButton = document.createElement('a');
contactButton.href = 'https://wa.me/6282232538778';
contactButton.textContent = 'Hubungi Kami';
contactButton.style.display = 'block';
contactButton.style.margin = '20px auto';
contactButton.style.padding = '10px 20px';
contactButton.style.backgroundColor = '#4CAF50';
contactButton.style.color = 'white';
contactButton.style.textAlign = 'center';
contactButton.style.textDecoration = 'none';
contactButton.style.borderRadius = '5px';
section.appendChild(contactButton);

main.appendChild(section);
document.body.appendChild(main);

// Menambahkan footer dengan informasi kontak
const footer = document.createElement('footer');
footer.innerHTML = `
    <div class="footer-container">
        <p>&copy; 2025 JazaWeb. All rights reserved.</p>
        <ul class="social-links">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
    </div>
`;
document.body.appendChild(footer);

// Menambahkan gaya CSS untuk header dan footer
const style = document.createElement('style');
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .navbar {
        background-color: #333;
        color: white;
        padding: 10px 20px;
    }
    .navbar .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-links {
        list-style: none;
        display: flex;
        gap: 15px;
        margin: 0;
        padding: 0;
    }
    .nav-links a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
    .footer-container {
        background-color: #333;
        color: white;
        text-align: center;
        padding: 20px;
    }
    .social-links {
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 10px;
        margin: 10px 0 0;
        padding: 0;
    }
    .social-links a {
        color: white;
        font-size: 20px;
        text-decoration: none;
    }
`;
document.head.appendChild(style);

console.log('Struktur website dibuat secara dinamis menggunakan JavaScript.');

// Menambahkan interaktivitas untuk tombol atau elemen lainnya
console.log('Interaktivitas akan ditambahkan di sini.');

// Menambahkan halaman tambahan seperti "Tentang Kami" dan "Kontak"

// Membuat navigasi untuk halaman tambahan
const nav = document.createElement('nav');
nav.style.display = 'flex';
nav.style.justifyContent = 'center';
nav.style.gap = '20px';
nav.style.padding = '10px';
nav.style.backgroundColor = '#f4f4f4';

const homeLink = document.createElement('a');
homeLink.href = '#';
homeLink.textContent = 'Beranda';
nav.appendChild(homeLink);

const aboutLink = document.createElement('a');
aboutLink.href = '#tentang';
aboutLink.textContent = 'Tentang Kami';
nav.appendChild(aboutLink);

const contactLink = document.createElement('a');
contactLink.href = '#kontak';
contactLink.textContent = 'Kontak';
nav.appendChild(contactLink);

document.body.insertBefore(nav, document.body.firstChild);

// Menambahkan bagian "Tentang Kami"
const aboutSection = document.createElement('section');
aboutSection.id = 'tentang-kami';
aboutSection.innerHTML = `
    <h2>Tentang Kami</h2>
    <p>JazaWeb adalah penyedia layanan pembuatan website profesional yang berfokus pada kualitas dan kepuasan pelanggan.</p>
    <p>Kami telah membantu banyak bisnis untuk berkembang melalui solusi digital yang inovatif.</p>
`;
document.body.appendChild(aboutSection);

// Menambahkan slider untuk portofolio
const sliderSection = document.createElement('section');
sliderSection.id = 'slider';
sliderSection.innerHTML = `
    <h2>Portofolio Kami</h2>
    <div class="slider-container">
        <div class="slide active">
            <img src="images/project1.jpg" alt="Proyek 1">
            <p>Proyek 1: Website Toko Online</p>
        </div>
        <div class="slide">
            <img src="images/project2.jpg" alt="Proyek 2">
            <p>Proyek 2: Website Company Profile</p>
        </div>
        <div class="slide">
            <img src="images/project3.jpg" alt="Proyek 3">
            <p>Proyek 3: Website Custom</p>
        </div>
        <button class="prev">&#10094;</button>
        <button class="next">&#10095;</button>
    </div>
`;
document.body.appendChild(sliderSection);

// Menambahkan fungsi JavaScript untuk slider
const script = document.createElement('script');
script.textContent = `
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });
`;
document.body.appendChild(script);

// Menambahkan gaya CSS untuk slider
const style2 = document.createElement('style');
style2.textContent = `
    #slider {
        text-align: center;
        padding: 50px 20px;
        background-color: #f9f9f9;
    }
    .slider-container {
        position: relative;
        max-inline-size: 800px;
        margin: 0 auto;
        overflow: hidden;
    }
    .slide {
        display: none;
        text-align: center;
    }
    .slide.active {
        display: block;
    }
    .slide img {
        inline-size: 100%;
        border-radius: 10px;
    }
    .prev, .next {
        position: absolute;
        top: 50%;
        inset-block-start: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        border-radius: 50%;
    }
    .prev {
        inset-inline-start: 10px;
    }
    .next {
        inset-inline-end: 10px;
    }
`;
document.head.appendChild(style2);

// Menghapus elemen yang tidak sesuai dan memperbaiki struktur

// Menambahkan elemen "Paket Website" yang sesuai dengan target
const paketSection = document.createElement('section');
paketSection.id = 'paket-website';
paketSection.innerHTML = `
    <h2>Paket Website</h2>
    <div class="paket-container">
        <div class="paket-item">
            <h3>Landing Page</h3>
            <p>Mulai dari Rp 1.500.000</p>
            <ul>
                <li>Desain Profesional</li>
                <li>Responsif di Semua Perangkat</li>
                <li>Optimasi SEO Dasar</li>
            </ul>
            <a href="#" class="btn">Pesan Sekarang</a>
        </div>
        <div class="paket-item">
            <h3>Company Profile</h3>
            <p>Mulai dari Rp 3.000.000</p>
            <ul>
                <li>Desain Eksklusif</li>
                <li>Konten Lengkap</li>
                <li>Integrasi Media Sosial</li>
            </ul>
            <a href="#" class="btn">Pesan Sekarang</a>
        </div>
        <div class="paket-item">
            <h3>Toko Online</h3>
            <p>Mulai dari Rp 5.000.000</p>
            <ul>
                <li>Fitur Keranjang Belanja</li>
                <li>Metode Pembayaran Lengkap</li>
                <li>Pengelolaan Produk Mudah</li>
            </ul>
            <a href="#" class="btn">Pesan Sekarang</a>
        </div>
    </div>
`;
document.body.appendChild(paketSection);

// Menambahkan gaya CSS untuk "Paket Website"
const style3 = document.createElement('style');
style3.textContent = `
    #paket-website {
        text-align: center;
        padding: 50px 20px;
        background-color: #f9f9f9;
    }
    .paket-container {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }
    .paket-item {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
        inline-size: 400px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .paket-item h3 {
        margin-block-start: 0;
        color: #333;
    }
    .paket-item p {
        font-size: 18px;
        color: #4CAF50;
        font-weight: bold;
    }
    .paket-item ul {
        list-style: none;
        padding: 0;
    }
    .paket-item ul li {
        margin: 5px 0;
        color: #555;
    }
    .btn {
        display: inline-block;
        margin-block-start: 10px;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
    }
    .btn:hover {
        background-color: #45a049;
    }
`;
document.head.appendChild(style3);

// Menambahkan halaman Home dengan desain profesional
const homeSection = document.createElement('section');
homeSection.id = 'home';
homeSection.innerHTML = `
    <div class="hero">
        <h1>Selamat Datang di JazaWeb</h1>
        <p>Solusi terbaik untuk kebutuhan website profesional Anda</p>
        <a href="#kontak" class="btn-cta">Hubungi Kami</a>
    </div>
`;
document.body.prepend(homeSection);

// Menambahkan halaman Blog
const blogSection = document.createElement('section');
blogSection.id = 'blog';
blogSection.innerHTML = `
    <h2>Blog</h2>
    <div class="blog-container">
        <article class="blog-post">
            <h3>Tips Membuat Website yang Menarik</h3>
            <p>Pelajari cara membuat website yang menarik dan fungsional untuk bisnis Anda.</p>
            <a href="#" class="read-more">Baca Selengkapnya</a>
        </article>
        <article class="blog-post">
            <h3>Manfaat Website untuk Bisnis</h3>
            <p>Ketahui bagaimana website dapat membantu meningkatkan bisnis Anda.</p>
            <a href="#" class="read-more">Baca Selengkapnya</a>
        </article>
    </div>
`;
document.body.appendChild(blogSection);

// Menambahkan gaya CSS untuk Home dan Blog
const style4 = document.createElement('style');
style4.textContent = `
    #home {
        background: url('images/hero-banner.jpg') no-repeat center center/cover;
        color: white;
        text-align: center;
        padding: 100px 20px;
    }
    .hero h1 {
        font-size: 3rem;
        margin-block-end: 20px;
    }
    .hero p {
        font-size: 1.5rem;
        margin-block-end: 30px;
    }
    .btn-cta {
        background-color: #4CAF50;
        color: white;
        padding: 15px 30px;
        text-decoration: none;
        border-radius: 5px;
        font-size: 1.2rem;
    }
    .btn-cta:hover {
        background-color: #45a049;
    }
    #blog {
        padding: 50px 20px;
        text-align: center;
    }
    .blog-container {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }
    .blog-post {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
        width: 300px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .blog-post h3 {
        margin-block-start: 0;
        color: #333;
    }
    .blog-post p {
        color: #555;
    }
    .read-more {
        color: #4CAF50;
        text-decoration: none;
        font-weight: bold;
    }
    .read-more:hover {
        text-decoration: underline;
    }
`;
document.head.appendChild(style4);

// Menambahkan halaman Pilihan Desain
const designSection = document.createElement('section');
designSection.id = 'pilihan-desain';
designSection.innerHTML = `
    <h2>Pilihan Desain</h2>
    <div class="design-container">
        <div class="design-item">
            <img src="images/design1.jpg" alt="Desain 1">
            <p>Desain Minimalis</p>
        </div>
        <div class="design-item">
            <img src="images/design2.jpg" alt="Desain 2">
            <p>Desain Modern</p>
        </div>
        <div class="design-item">
            <img src="images/design3.jpg" alt="Desain 3">
            <p>Desain Kreatif</p>
        </div>
    </div>
`;
document.body.appendChild(designSection);

// Menambahkan halaman Harga Website
const pricingSection = document.createElement('section');
pricingSection.id = 'harga-website';
pricingSection.innerHTML = `
    <h2>Harga Website</h2>
    <div class="pricing-container">
        <div class="pricing-item">
            <h3>Paket Basic</h3>
            <p>Rp 1.500.000</p>
            <ul>
                <li>Desain Responsif</li>
                <li>Optimasi SEO Dasar</li>
                <li>1 Halaman</li>
            </ul>
            <a href="#" class="btn">Pesan Sekarang</a>
        </div>
        <div class="pricing-item">
            <h3>Paket Standard</h3>
            <p>Rp 3.000.000</p>
            <ul>
                <li>Desain Eksklusif</li>
                <li>Optimasi SEO</li>
                <li>3 Halaman</li>
            </ul>
            <a href="#" class="btn">Pesan Sekarang</a>
        </div>
        <div class="pricing-item">
            <h3>Paket Premium</h3>
            <p>Rp 5.000.000</p>
            <ul>
                <li>Desain Custom</li>
                <li>Optimasi SEO Lanjutan</li>
                <li>5+ Halaman</li>
            </ul>
            <a href="#" class="btn">Pesan Sekarang</a>
        </div>
    </div>
`;
document.body.appendChild(pricingSection);

// Menambahkan gaya CSS untuk Pilihan Desain dan Harga Website
const style5 = document.createElement('style');
style5.textContent = `
    #pilihan-desain, #harga-website {
        padding: 50px 20px;
        text-align: center;
    }
    .design-container, .pricing-container {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }
    .design-item, .pricing-item {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
        width: 300px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .design-item img {
        width: 100%;
        border-radius: 10px;
    }
    .pricing-item h3 {
        margin-top: 0;
        color: #333;
    }
    .pricing-item p {
        font-size: 18px;
        color: #4CAF50;
        font-weight: bold;
    }
    .pricing-item ul {
        list-style: none;
        padding: 0;
    }
    .pricing-item ul li {
        margin: 5px 0;
        color: #555;
    }
    .btn {
        display: inline-block;
        margin-top: 10px;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
    }
    .btn:hover {
        background-color: #45a049;
    }
`;
document.head.appendChild(style5);

// Menambahkan halaman Kontak dengan desain profesional
const contactSection = document.createElement('section');
contactSection.id = 'kontak';
contactSection.innerHTML = `
    <h2>Kontak Kami</h2>
    <div class="contact-container">
        <div class="contact-info">
            <h3>Informasi Kontak</h3>
            <p><strong>Alamat:</strong> Jl. Contoh No. 123, Jakarta</p>
            <p><strong>Telepon:</strong> +62 812-3456-7890</p>
            <p><strong>Email:</strong> info@jazaweb.com</p>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="contact-form">
            <h3>Kirim Pesan</h3>
            <form id="contact-form">
                <label for="name">Nama:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Pesan:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Kirim</button>
            </form>
        </div>
    </div>
`;
document.body.appendChild(contactSection);

// Menambahkan gaya CSS untuk halaman Kontak
const style6 = document.createElement('style');
style6.textContent = `
    #kontak {
        padding: 50px 20px;
        text-align: center;
        background-color: #f9f9f9;
    }
    .contact-container {
        display: flex;
        justify-content: center;
        gap: 50px;
        flex-wrap: wrap;
    }
    .contact-info, .contact-form {
        width: 400px;
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .contact-info h3, .contact-form h3 {
        margin-top: 0;
        color: #333;
    }
    .contact-info p {
        margin: 10px 0;
        color: #555;
    }
    .social-icons a {
        margin: 0 10px;
        color: #4CAF50;
        font-size: 20px;
        text-decoration: none;
    }
    .social-icons a:hover {
        color: #45a049;
    }
    #contact-form label {
        display: block;
        margin: 10px 0 5px;
    }
    #contact-form input, #contact-form textarea {
        width: 100%;
        padding: 10px;
        margin-block-end: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    #contact-form button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    #contact-form button:hover {
        background-color: #45a049;
    }
`;
document.head.appendChild(style6);
