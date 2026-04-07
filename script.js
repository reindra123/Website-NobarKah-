/* ================================================================
   NobarKah? — script.js
   ================================================================ */


/* ----------------------------------------------------------------
   DATA FILM
   
   CARA GANTI GAMBAR POSTER:
   Isi bagian  poster: "images/nama-file.jpg"
   Kosongkan   poster: ""   jika belum punya gambar (emoji tampil)

   UKURAN IDEAL POSTER : rasio 2:3  (contoh: 400 × 600 px)
   UKURAN IDEAL HERO   : bebas, akan di-crop oval otomatis
   FORMAT              : .jpg  .jpeg  .png  .webp
---------------------------------------------------------------- */
const FILMS = [
    {
        id         : 1,
        title      : "La La Land",
        genre      : "Melodrama",
        year       : 2016,
        duration   : "2j 8m",
        rating     : 8,
        type       : "premium",
        badge      : "premium",
        poster     : "img/pt1.jpg",   // ← ganti path sesuai file kamu
        posterHero : "img/bg1.jpg",   // ← gambar khusus oval hero (boleh sama)
        posterLandscape : "img/bg1.jpg",
        synopsis   : "La La Land adalah film drama komedi romantis musikal Amerika tahun 2016 yang ditulis dan disutradarai oleh Damien Chazelle.",
        tags       : ["Romansa", "Komedi", "Drama", "Musikal"],
        director   : "Damien Chazelle",
        cast       : "Emma Stone, Ryan Gosling, John Legend, J. K. Simmons"
    },
    {
        id         : 2,
        title      : "Spider-Man: No Way Home",
        genre      : "Super Hero",
        year       : 2021,
        duration   : "2j 28m",
        rating     : 8.1,
        type       : "premium",
        badge      : "new",
        poster     : "img/bg2.jpg",
        posterHero : "img/bg2.jpg",
        posterLandscape : "img/pt2.jpg",
        synopsis   : "Pertama kalinya dalam sejarah layar lebar Spider-Man, identitas asli dari pahlawan nan ramah ini terbongkar, sehingga membuat tanggung jawabnya sebagai seorang berkekuatan super berbenturan dengan kehidupan normalnya.",
        tags       : ["Aksi", "Sci-Fi", "Drama"],
        director   : "Jon Watts",
        cast       : "Tom Holland, Zendaya, Andrew Garfield, Tobey Maguire, Willem Dafoe"
    },
    {
        id         : 3,
        title      : "Marty Supreme",
        genre      : "Film Olahraga",
        year       : 2025,
        duration   : "2j 30m",
        rating     : 7.7,
        type       : "premium",
        badge      : "premium",
        poster     : "img/bg3.jpg",
        posterHero : "img/bg3.jpg",
        posterLandscape : "img/pt3.jpg",
        synopsis   : "Seorang pegawai toko sepatu tahun 1950-an di New York yang terobsesi menjadi pemain tenis meja terbaik dunia. Didorong ambisi, ia menempuh jalan amoral, termasuk mencuri uang paman, merayu istri orang, dan terlibat intrik elite demi bertanding di London.",
        tags       : ["Drama", "Olahraga", "Biografi"],
        director   : "Josh Safdie",
        cast       : "Timothée Chalamet, Odessa A'zion, Gwyneth Paltrow, Fran Drescher, Kevin O'Leary, Ronald, Abel Ferrara, Tyler, The Creator, Koto Kawaguchi"
    },
    {
        id         : 4,
        title      : "Sinners",
        genre      : "Horror",
        year       : 2025,
        duration   : "2j 17m",
        rating     : 7.5,
        type       : "premium",
        badge      : "premium",
        poster     : "img/bg4.jpg",
        posterHero : "img/bg4.jpg",
        posterLandscape : "img/pt4.jpg",
        synopsis   : "Berlatar Mississippi tahun 1930-an, mereka kembali ke kampung halaman untuk membuka juke joint (tempat hiburan blues) guna memulai hidup baru, namun malam pembukaan berubah menjadi mimpi buruk saat kota tersebut diserang vampir.",
        tags       : ["Aksi", "Thriller", "Horor", "Drama"],
        director   : "Ryan Coogler",
        cast       : "Michael Bakari Jordan, Hailee Steinfeld, Wunmi Mosaku, Miles Caton, Delroy Lindo, Omar Benson, Jayme Lawson, Li Jun Li, Peter Dreimanis, Jack O'Connell"
    },
    {
        id         : 5,
        title      : "The Trauma Code Heroes On Call",
        genre      : "Series-Drama",
        year       : 2025,
        duration   : "4j 20m",
        rating     : 8.4,
        type       : "free",
        badge      : "free",
        poster     : "img/bg5.jpg",
        posterHero : "img/bg5.jpg",
        posterLandscape : "img/pt5.jpg",
        synopsis   : "Baek Kang-hyuk (Ju Ji-hoon), dokter bedah trauma jenius dengan kepribadian keras seperti buldoser, yang kembali dari zona konflik untuk merevolusi sistem trauma di Korea Selatan. Ia memimpin tim tangguh di Rumah Sakit Universitas Hankook untuk menyelamatkan nyawa di momen krusial, di tengah konflik anggaran.",
        tags       : ["Drama"],
        director   : "Lee Do-yoon",
        cast       : "Choo Young Woo, Ha Young, Ju Ji-hoon, Jung Jae-kwang, Yoon Kyung-ho, Kim Eui-sung, Kim Sun-young, Kim Won-hae, Hong Woo-jin, Jang Sung Yoon"
    },
    {
        id         : 6,
        title      : "Moving",
        genre      : "Series-Aksi",
        year       : 2023,
        duration   : "18j 45m",
        rating     : 8.4,
        type       : "free",
        badge      : "free",
        poster     : "img/bg6.jpg",
        posterHero : "img/bg6.jpg",
        posterLandscape : "img/pt6.jpg",
        synopsis   : " (2023) menceritakan kisah sekelompok remaja dan orang tua mereka yang memiliki kekuatan super tersembunyi. Mereka berusaha melindungi anak-anak dari ancaman agen pemerintah misterius yang memburu manusia super. Bergenre aksi-thriller, drama ini berfokus pada perjuangan melindungi keluarga dari bahaya.",
        tags       : ["Aksi", "Romansa", "Drama", "Petualangan", "Misteri", "Sci-Fi"],
        director   : "Park In-je",
        cast       : "Go Youn-jung, Han Hyo-joo, Jo In-sung, Lee Jung-ha, Kim Do Hoon, Ryu Seung-ryong, Cha Tae-hyun, Kwak Sun-young, Ryoo Seung-bum, Kim Hee-won, Kim Sung-kyun, Lee Ho-jung"
    },
    {
        id         : 7,
        title      : "Sore: Istri dari Masa Depan",
        genre      : "Romansa",
        year       : 2025,
        duration   : "1j 59m",
        rating     : 7.6,
        type       : "premium",
        badge      : "new",
        poster     : "img/bg7.jpg",
        posterHero : "img/bg7.jpg",
        posterLandscape : "img/pt7.jpg",
        synopsis   : "Petualangan animasi memukau tentang seorang anak perempuan yang menemukan portal menuju dunia langit. Ia harus menemukan jalan pulang sebelum pintu tertutup selamanya.",
        tags       : ["Drama", "Romansa", "Fantasi", "Sci-Fi"],
        director   : "Yandy Laurens",
        cast       : "Sheila Dara Aisha, Dion Wiyoko, Goran Bogdan, Lara Nekić, Mathias Muchus, Maya Hasan, Livio Badurina, Borko Peric, David Gojkovic"
    },
    {
        id         : 8,
        title      : "Pengepungan di Bukit Duri",
        genre      : "Thriller",
        year       : 2025,
        duration   : "1j 58m",
        rating     : 6.5,
        type       : "free",
        badge      : "free",
        poster     : "img/bg8.jpg",
        posterHero : "img/bg8.jpg",
        posterLandscape : "img/pt8.jpg",
        synopsis   : "Berlatar tahun 2027 di Jakarta, di mana konflik rasial dan sosial membuat kota di ambang kehancuran. Cerita berfokus pada Edwin (Morgan Oey), seorang guru yang terpaksa bertahan hidup di SMA Duri, sekolah buangan yang brutal. Edwin mengajar di sana demi misi pribadi mencari keponakannya yang hilang di tengah kerusuhan.",
        tags       : ["Thriller", "Kriminal", "Aksi", "Drama"],
        director   : "Joko Anwar",
        cast       : "Omara Esteghlal, Sheila Kusnadi, Morgan Oey, Satine Zaneta, Hana Malasan, Millo Taslim, Endy Arfian, Fatih Unru, Raihan Khan, Lia Lukman, Kiki Narendra, Emir Mahira, Bima Azriel, Sandy Pradana, Dewa Dayana, Landung Simatupang, Faris Fadjar, Florian Rutters, Farandika"
    },
    {
        id         : 9,
        title      : "Deadpool & Wolverine",
        genre      : "Super Hero",
        year       : 2024,
        duration   : "2j 8m",
        rating     : 7.5,
        type       : "premium",
        badge      : "premium",
        poster     : "img/bg9.jpg",
        posterHero : "img/bg9.jpg",
        posterLandscape : "img/pt9.jpg",
        synopsis   : "Mengisahkan Wade Wilson (Ryan Reynolds) yang pensiun menjadi pahlawan, namun terpaksa kembali beraksi ketika TVA menangkapnya dan mengancam semestanya (Earth-10005). Wade bekerja sama dengan Wolverine (Hugh Jackman) dari semesta lain yang sinis untuk melawan musuh bersama, Cassandra Nova, di dunia The Void.",
        tags       : ["Aksi", "Super Hero", "Komedi", "Sci-Fi", "Petualangan"],
        director   : "Shawn Levy",
        cast       : "Ryan Reynolds, Leslie Uggams, Emma Corrin, Hugh Jackman, Dafne Keen, Channing Tatum, Matthew, Chris Evans, Blake Lively, Wesley Snipes, Morena Baccarin, Jennifer Garner, Rob Delaney, Shiori Kutsuna, Wunmi Mosaku, Tyler Mane, Peggy, Matthew McConaughey"
    },
    {
        id         : 10,
        title      : "Oppenheimer",
        genre      : "Sejarah",
        year       : 2023,
        duration   : "3j 00m",
        rating     : 8.2,
        type       : "premium",
        badge      : "premium",
        poster     : "img/bg10.jpg",
        posterHero : "img/bg10.jpg",
        posterLandscape : "img/pt10.jpg",
        synopsis   : "Mengisahkan J. Robert Oppenheimer (Cillian Murphy), fisikawan teoritis yang memimpin Proyek Manhattan pada Perang Dunia II. Film ini menelusuri perjalanan Oppenheimer dalam menciptakan bom atom, rasa bersalah atas dampak destruktifnya di Hiroshima dan Nagasaki, serta perjuangan politiknya di tengah tuduhan komunisme.",
        tags       : ["Sejarah", "Drama", "Biografi", "Thriller"],
        director   : "Christopher Nolan, Emma Thomas, Charles Roven",
        cast       : "Cillian Murphy, Florence Pugh, Devon Bostick, Emily Blunt, Benny Safdie, Matt Damon, Josh Hartnett, Robert Downey Jr., Alden Ehrenreich, Olivia Thirlby, Josh Peck, Dane DeHaan, Gary Oldman, Matthias Schweighöfer, Rami Malek"
    },
    {
        id         : 11,
        title      : "The Wild Robot",
        genre      : "Sci-Fi",
        year       : 2024,
        duration   : "1j 42m",
        rating     : 8.2,
        type       : "premium",
        badge      : "premium",
        poster     : "img/bg11.jpg",
        posterHero : "img/bg11.jpg",
        posterLandscape : "img/pt11.jpg",
        synopsis   : "Menceritakan kisah robot bernama Roz (ROZZUM 7134) yang terdampar di pulau terpencil tak berpenghuni. Roz harus beradaptasi dengan lingkungan liar, mempelajari bahasa hewan, dan mengadopsi seekor anak angsa yatim piatu bernama Brightbill. Film ini menyoroti tema persahabatan, kasih sayang, dan arti keluarga.",
        tags       : ["Animasi", "Petualangan", "Sci-Fi", "Anak-anak"],
        director   : "Chris Sanders",
        cast       : "Kit Connor, Pedro Pascal, Mark Hamill, Stephanie Hsu, Matt Berry, Bill Nighy, Ving Rhames, Lupita Nyong'o, Raphael Alejandro, Catherine O'Hara, Alexandra Novelle, Eddie Park"
    },
    {
        id         : 12,
        title      : "Ne Zha 2",
        genre      : "Petualangan Fantasi",
        year       : 2025,
        duration   : "2j 24m",
        rating     : 7.9,
        type       : "premium",
        badge      : "new",
        poster     : "img/bg12.jpg",
        posterHero : "img/bg12.jpg",
        posterLandscape : "img/pt12.jpg",
        synopsis   : "Ne Zha 2 melanjutkan kisah Ne Zha dan Ao Bing yang bertahan sebagai roh setelah tubuh mereka hancur, dengan Taiyi Zhenren berusaha membangun kembali tubuh mereka menggunakan Teratai Suci Tujuh Warna. Namun, Raja Naga Laut Timur, Ao Guang, membalas dendam dengan membebaskan Empat Raja Naga untuk menghancurkan Chentangguan. Ne Zha pun berjuang melindungi kampung halamannya sambil mengendalikan kekuatan iblisnya.",
        tags       : ["Aksi", "Fantasi", "Petualangan", "Komedi", "Anak-anak"],
        director   : "Jiao Zi/Yang Yu",
        cast       : "Yanting Lü, Joseph, Mo Han, Hao Chen, Gong Geer, Yuze Han, Qi Lü, Kari Wahlgren, Deshun Wang, Xinglinr, Wei Yang, Yu Yang, Yunqi Zhang, Yongxi Zhou"
    }
];

/* ----------------------------------------------------------------
   DATA GENRE
---------------------------------------------------------------- */
const GENRES = [
    { name: "Aksi",        emoji: "💥", color: "#e05252" },
    { name: "Komedi",      emoji: "😄", color: "#E8B84B" },
    { name: "Drama",       emoji: "🎭", color: "#9290C3" },
    { name: "Horor",       emoji: "👻", color: "#535C91" },
    { name: "Sci-Fi",      emoji: "🚀", color: "#4a90d9" },
    { name: "Romansa",     emoji: "💖", color: "#e05e8f" },
    { name: "Animasi",     emoji: "✨", color: "#2ecc71" },
    { name: "Thriller",    emoji: "🔫", color: "#8B4513" },
    { name: "Petualangan", emoji: "🌿", color: "#27ae60" },
    { name: "Sejarah",     emoji: "🏛️", color: "#8e7340" },
    { name: "Musikal",     emoji: "🎼", color: "#9b9995" },
    { name: "Olahraga",    emoji: "🏃🏻", color: "#ce9211" },
    { name: "Misteri",     emoji: "❓", color: "#000000" },
    { name: "Super Hero",  emoji: "🦸", color: "#ff0000" },
    { name: "Biografi",    emoji: "📝", color: "#ffffff" },
    { name: "Anak-anak",   emoji: "🧒", color: "#ffee00" },
    { name: "Fantasi",     emoji: "🔮", color: "#9900ff" },
    
];


/* ================================================================
   STATE APLIKASI
================================================================ */
let appState = {
    isLoggedIn   : false,
    userRole     : null,
    username     : null,
    myList       : [],
    currentPage  : 'home',
    activeFilter : 'Semua'
};
 
 
/* ================================================================
   INISIALISASI
================================================================ */
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        document.getElementById('site-header')
            .classList.toggle('scrolled', window.scrollY > 50);
    });
    navigateTo('home');
});
 
 
/* ================================================================
   NAVIGASI
================================================================ */
function navigateTo(pageName) {
    const main = document.getElementById('main-content');
    appState.currentPage = pageName;
    main.classList.add('fading');
 
    setTimeout(() => {
        main.innerHTML = '';
        switch (pageName) {
            case 'home'      : renderHome(main);      break;
            case 'browse'    : renderBrowse(main);    break;
            case 'genres'    : renderGenres(main);    break;
            case 'my-list'   : renderMyList(main);    break;
            case 'subscribe' : renderSubscribe(main); break;
            default          : renderHome(main);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        main.classList.remove('fading');
    }, 300);
}
 
function setActive(el) {
    document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
    el.classList.add('active');
}
 
 
/* ================================================================
   HELPER GAMBAR
   Tiga fungsi terpisah sesuai kebutuhan tampilan:
 
   imgPortrait(film)   → kartu film, modal detail, search thumb
                         Sumber: film.poster (portrait 2:3)
 
   imgLandscape(film)  → oval hero, featured banner, detail hero
                         Sumber: film.posterLandscape (landscape 16:9)
                         Fallback ke portrait jika landscape kosong
 
   imgSearchThumb(film)→ thumbnail kecil di search dropdown
                         Sumber: film.poster (portrait, diperkecil)
================================================================ */
 
/**
 * PORTRAIT — kartu film & modal detail
 * Rasio 2:3 | contoh: 400×600 px
 */
function imgPortrait(film) {
    if (film.poster) {
        return `<img
                    src="${film.poster}"
                    alt="Poster ${film.title}"
                    loading="lazy"
                    class="img-portrait">`;
    }
    return `<div class="poster-fallback">
                <span>${film.title.charAt(0)}</span>
            </div>`;
}
 
/**
 * LANDSCAPE — hero oval & featured banner
 * Rasio 16:9 | contoh: 1280×720 px
 * Jika posterLandscape kosong → otomatis pakai poster portrait
 * Jika keduanya kosong        → tampilkan placeholder teks
 */
function imgLandscape(film) {
    const src = film.posterLandscape || film.poster;
    if (src) {
        return `<img
                    src="${src}"
                    alt="Backdrop ${film.title}"
                    class="img-landscape">`;
    }
    return `<div class="poster-fallback poster-fallback--landscape">
                <span>${film.title}</span>
            </div>`;
}
 
/**
 * SEARCH THUMB — thumbnail mini di dropdown pencarian
 * Pakai poster portrait, ukuran diperkecil via CSS
 */
function imgSearchThumb(film) {
    if (film.poster) {
        return `<img
                    src="${film.poster}"
                    alt="${film.title}"
                    loading="lazy"
                    class="img-search-thumb">`;
    }
    return `<div class="poster-fallback poster-fallback--sm">
                <span>${film.title.charAt(0)}</span>
            </div>`;
}
 
 
/* ================================================================
   RENDER: BERANDA
================================================================ */
function renderHome(container) {
    const heroFilm   = FILMS[0];
    const filmBaru   = FILMS.slice(0, 3);
    const filmTrend  = [FILMS[3], FILMS[6], FILMS[11], FILMS[8]];
    const filmGratis = FILMS.filter(f => f.type === 'free');
 
    container.innerHTML = `
 
        <!-- ── HERO ── -->
        <section class="hero-section">
            <div class="hero-bg"></div>
            <div class="hero-overlay"></div>
            <div class="hero-inner">
 
                <!-- Teks kiri -->
                <div class="hero-content">
                    <div class="hero-badge">Now Streaming</div>
                    <h1 class="hero-title">${heroFilm.title}<span></span></h1>
                    <div class="hero-meta">
                        <span class="hero-rating">★ ${heroFilm.rating}</span>
                        <span class="hero-sep">·</span>
                        <span class="hero-year">${heroFilm.year}</span>
                        <span class="hero-sep">·</span>
                        <span class="hero-genre">${heroFilm.genre}</span>
                        <span class="hero-sep">·</span>
                        <span class="hero-duration">${heroFilm.duration}</span>
                    </div>
                    <p class="hero-desc">${heroFilm.synopsis}</p>
                    <div class="hero-actions">
                        <button class="btn-primary" onclick="openPlayer(${heroFilm.id})">
                            <svg class="play-icon" viewBox="0 0 24 24">
                                <polygon points="5,3 19,12 5,21"/>
                            </svg>
                            Mulai Tonton
                        </button>
                        <button class="btn-secondary" onclick="openDetail(${heroFilm.id})">
                            <svg width="16" height="16" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <line x1="12" y1="8"  x2="12"    y2="12"/>
                                <line x1="12" y1="16" x2="12.01" y2="16"/>
                            </svg>
                            Info Film
                        </button>
                    </div>
                </div>
 
                <!--
                    Oval visual kanan
                    → memakai imgLandscape() = posterLandscape (16:9)
                -->
                <div class="hero-visual">
                    <div class="hero-oval">
                        <div class="hero-oval-bg">
                            ${imgLandscape(heroFilm)}
                        </div>
                        <div class="hero-oval-glow"></div>
                    </div>
                </div>
 
            </div>
        </section>
 
        <!-- ── FEATURED 2 KOLOM ── -->
        <!--
            Featured banner memakai imgLandscape() = posterLandscape (16:9)
        -->
        <div style="position:relative;z-index:5;margin-top:-2rem;">
            <div class="featured-grid">
                ${renderFeaturedCard(FILMS[1])}
                ${renderFeaturedCard(FILMS[2])}
            </div>
        </div>
 
        <!-- ── FILM TERBARU ── -->
        <!--
            Kartu film memakai imgPortrait() = poster (2:3)
        -->
        <section class="film-section">
            <div class="section-header">
                <h2 class="section-title">FILM <span>TERBARU</span></h2>
                <a href="#" class="section-link"
                   onclick="navigateTo('browse'); return false;">Lihat Semua →</a>
            </div>
            <div class="film-grid">
                ${filmBaru.map(f => renderFilmCard(f)).join('')}
            </div>
        </section>
 
        <!-- ── TRENDING ── -->
        <section class="film-section" style="padding-top:0;">
            <div class="section-header">
                <h2 class="section-title">SEDANG <span>TRENDING</span></h2>
                <a href="#" class="section-link"
                   onclick="navigateTo('browse'); return false;">Lihat Semua →</a>
            </div>
            <div class="film-grid">
                ${filmTrend.map(f => renderFilmCard(f)).join('')}
            </div>
        </section>
 
        <!-- ── GRATIS ── -->
        <section class="film-section" style="padding-top:0;padding-bottom:6rem;">
            <div class="section-header">
                <h2 class="section-title">GRATIS <span>UNTUK KAMU</span></h2>
                <a href="#" class="section-link"
                   onclick="navigateTo('browse'); return false;">Lihat Semua →</a>
            </div>
            <div class="film-grid">
                ${filmGratis.map(f => renderFilmCard(f)).join('')}
            </div>
        </section>
    `;
 
    staggerCards();
}
 
 
/* ================================================================
   KOMPONEN: FEATURED CARD
   Memakai posterLandscape (16:9) sebagai background banner
================================================================ */
function renderFeaturedCard(film) {
    // Background: pakai posterLandscape, fallback ke poster portrait
    const bgSrc = film.posterLandscape || film.poster;
    const bgStyle = bgSrc
        ? `style="background-image:url('${bgSrc}');background-size:cover;background-position:center;"`
        : '';
 
    return `
        <div class="featured-card" onclick="openDetail(${film.id})">
            <div class="featured-card-bg" ${bgStyle}>
                ${bgSrc ? '' : `<span class="featured-placeholder">${film.title.charAt(0)}</span>`}
            </div>
            <div class="featured-card-overlay"></div>
            <div class="featured-card-content">
                <h3>${film.title}</h3>
                <p>${film.genre} · ${film.year} · ★ ${film.rating}</p>
            </div>
        </div>
    `;
}
 
 
/* ================================================================
   KOMPONEN: KARTU FILM
   Memakai imgPortrait() = poster (2:3)
================================================================ */
function renderFilmCard(film) {
    const badgeHtml = film.badge === 'premium'
        ? `<span class="film-badge badge-premium">Premium</span>`
        : film.badge === 'new'
        ? `<span class="film-badge badge-new">Baru</span>`
        : `<span class="film-badge badge-free">Gratis</span>`;
 
    return `
        <div class="film-card" data-id="${film.id}">
            <div class="film-poster">
 
                ${badgeHtml}
 
                <!--
                    POSTER PORTRAIT (2:3)
                    Ganti gambar di: film.poster
                -->
                ${imgPortrait(film)}
 
                <!-- Overlay tombol hover -->
                <div class="film-card-overlay">
                    <button class="btn-play-card"
                            onclick="openPlayer(${film.id}); event.stopPropagation();"
                            title="Tonton">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21"/>
                        </svg>
                    </button>
                    <button class="btn-info-card"
                            onclick="openDetail(${film.id}); event.stopPropagation();">
                        + Info
                    </button>
                </div>
 
            </div>
 
            <!-- Info bawah poster -->
            <div class="film-info">
                <h3 class="film-title">${film.title}</h3>
                <div class="film-meta-row">
                    <span class="film-genre">${film.genre}</span>
                    <span class="film-rating">★ ${film.rating}</span>
                </div>
            </div>
        </div>
    `;
}
 
function staggerCards() {
    document.querySelectorAll('.film-card').forEach((card, i) => {
        card.style.animationDelay = `${i * 0.05}s`;
    });
}
 
 
/* ================================================================
   RENDER: BROWSE
================================================================ */
function renderBrowse(container) {
    const genres = ['Semua','Aksi','Drama','Horor','Sci-Fi','Romansa',
                    'Komedi','Animasi','Thriller','Petualangan','Sejarah','Musikal', 'Olahraga', 'Misteri', 'Super Hero', 'Biografi', 'Anak-anak', 'Fantasi'];
 
    container.innerHTML = `
        <div class="browse-page">
            <div class="browse-header">
                <h1 class="page-title">JELAJAHI FILM</h1>
                <p class="page-subtitle">Temukan hiburan terbaik dari berbagai genre</p>
            </div>
            <div class="filter-bar" id="filter-bar">
                <span class="filter-label">Genre:</span>
                ${genres.map(g => `
                    <button class="filter-btn ${g === appState.activeFilter ? 'active' : ''}"
                            onclick="filterFilms('${g}')">
                        ${g}
                    </button>
                `).join('')}
            </div>
            <div class="browse-grid" id="browse-grid">
                ${getFilteredFilms().map(f => renderFilmCard(f)).join('')}
            </div>
        </div>
    `;
    staggerCards();
}
 
function filterFilms(genre) {
    appState.activeFilter = genre;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim() === genre);
    });
    const grid = document.getElementById('browse-grid');
    grid.style.opacity = '0';
    setTimeout(() => {
        grid.innerHTML = getFilteredFilms().map(f => renderFilmCard(f)).join('');
        grid.style.opacity = '1';
        staggerCards();
    }, 200);
}
 
function getFilteredFilms() {
    if (appState.activeFilter === 'Semua') return FILMS;
    return FILMS.filter(f =>
        f.genre === appState.activeFilter ||
        f.tags.includes(appState.activeFilter)
    );
}
 
 
/* ================================================================
   RENDER: GENRES
================================================================ */
function renderGenres(container) {
    container.innerHTML = `
        <div class="genres-page">
            <h1 class="page-title">GENRE</h1>
            <p class="page-subtitle" style="color:var(--text-muted);margin-top:.5rem;">
                Pilih genre favoritmu
            </p>
            <div class="genres-grid">
                ${GENRES.map(g => `
                    <div class="genre-card" onclick="goToGenre('${g.name}')"
                         style="background:linear-gradient(135deg,${g.color}22,${g.color}08);
                                border-color:${g.color}30;">
                        <div class="genre-emoji">${g.emoji}</div>
                        <div class="genre-name">${g.name.toUpperCase()}</div>
                    </div>
                `).join('')}
            </div>
            <div id="genre-result" style="margin-top:4rem;"></div>
        </div>
    `;
}
 
function goToGenre(genre) {
    appState.activeFilter = genre;
    const films     = FILMS.filter(f => f.genre === genre || f.tags.includes(genre));
    const resultDiv = document.getElementById('genre-result');
    if (!resultDiv) return;
 
    resultDiv.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">GENRE: <span>${genre.toUpperCase()}</span></h2>
        </div>
        <div class="browse-grid">
            ${films.length > 0
                ? films.map(f => renderFilmCard(f)).join('')
                : `<p style="color:var(--text-muted);grid-column:1/-1;">
                       Belum ada film dalam genre ini.
                   </p>`
            }
        </div>
    `;
    staggerCards();
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
 
 
/* ================================================================
   RENDER: MY LIST
================================================================ */
function renderMyList(container) {
    if (!appState.isLoggedIn) {
        container.innerHTML = `
            <div class="mylist-page">
                <h1 class="page-title">DAFTARKU</h1>
                <div class="empty-state">
                    <div class="empty-icon">🔐</div>
                    <h3>LOGIN DULU YUK</h3>
                    <p>Kamu harus masuk untuk menyimpan film favoritmu.</p>
                    <button class="btn-primary" onclick="openModal('modal-login')">
                        Masuk Sekarang
                    </button>
                </div>
            </div>
        `;
        return;
    }
 
    const savedFilms = FILMS.filter(f => appState.myList.includes(f.id));
    container.innerHTML = `
        <div class="mylist-page">
            <h1 class="page-title">DAFTARKU</h1>
            <p class="page-subtitle" style="color:var(--text-muted);margin:.5rem 0 3rem;">
                ${savedFilms.length} film tersimpan
            </p>
            ${savedFilms.length === 0
                ? `<div class="empty-state">
                       <div class="empty-icon">📋</div>
                       <h3>DAFTAR MASIH KOSONG</h3>
                       <p>Tambahkan film dari halaman detail.</p>
                       <button class="btn-primary" onclick="navigateTo('browse')">
                           Jelajahi Film
                       </button>
                   </div>`
                : `<div class="browse-grid">
                       ${savedFilms.map(f => renderFilmCard(f)).join('')}
                   </div>`
            }
        </div>
    `;
    staggerCards();
}
 
 
/* ================================================================
   RENDER: SUBSCRIBE
================================================================ */
function renderSubscribe(container) {
    container.innerHTML = `
        <div class="subscribe-page">
            <div class="subscribe-intro">
                <h1 class="page-title">
                    PILIH PAKET<br>
                    <span style="color:var(--accent)">HIBURANMU</span>
                </h1>
                <p style="margin-top:1rem;">
                    Nikmati ribuan konten premium tanpa batas. Batalkan kapan saja.
                </p>
            </div>
 
            <div class="pricing-grid">
                <div class="pricing-card">
                    <div class="pricing-name">BASIC</div>
                    <div class="pricing-price">GRATIS</div>
                    <div class="pricing-period">Selamanya</div>
                    <ul class="pricing-features">
                        <li>Akses film gratis terbatas</li>
                        <li>Kualitas hingga 720p</li>
                        <li>1 perangkat sekaligus</li>
                        <li>Iklan dalam konten</li>
                    </ul>
                    <button class="btn-subscribe"
                            onclick="handleSubscribe('Basic',0)">
                        Mulai Gratis
                    </button>
                </div>
 
                <div class="pricing-card popular">
                    <div class="pricing-popular-badge">Paling Populer</div>
                    <div class="pricing-name">BULANAN</div>
                    <div class="pricing-price">Rp 35K</div>
                    <div class="pricing-period">per bulan · tanpa kontrak</div>
                    <ul class="pricing-features">
                        <li>Semua film &amp; series</li>
                        <li>Kualitas Full HD 1080p</li>
                        <li>Hingga 2 perangkat</li>
                        <li>Tanpa iklan</li>
                        <li>Download offline (mobile)</li>
                    </ul>
                    <button class="btn-subscribe"
                            onclick="handleSubscribe('Bulanan',35000)">
                        Pilih Paket Ini
                    </button>
                </div>
 
                <div class="pricing-card">
                    <div class="pricing-name">TAHUNAN</div>
                    <div class="pricing-price">Rp 349K</div>
                    <div class="pricing-period">per tahun · hemat Rp 71K</div>
                    <ul class="pricing-features">
                        <li>Semua film &amp; series</li>
                        <li>Kualitas Ultra HD 4K</li>
                        <li>Hingga 4 perangkat</li>
                        <li>Tanpa iklan</li>
                        <li>Download offline</li>
                        <li>Akses konten eksklusif</li>
                    </ul>
                    <button class="btn-subscribe"
                            onclick="handleSubscribe('Tahunan',349000)">
                        Pilih Paket Ini
                    </button>
                </div>
            </div>
 
            <div style="max-width:600px;margin:0 auto;text-align:left;">
                <h2 class="section-title" style="font-size:1.4rem;margin-bottom:2rem;">
                    PERTANYAAN <span>UMUM</span>
                </h2>
                <div style="display:flex;flex-direction:column;gap:1.5rem;">
                    <div>
                        <h4 style="font-size:.85rem;font-weight:600;color:var(--text-bright);margin-bottom:.4rem;">
                            Apakah saya bisa membatalkan kapan saja?
                        </h4>
                        <p style="font-size:.85rem;color:var(--text-muted);">
                            Ya, batalkan kapan saja tanpa biaya tambahan.
                        </p>
                    </div>
                    <div>
                        <h4 style="font-size:.85rem;font-weight:600;color:var(--text-bright);margin-bottom:.4rem;">
                            Metode pembayaran apa yang diterima?
                        </h4>
                        <p style="font-size:.85rem;color:var(--text-muted);">
                            Kartu kredit/debit, transfer bank, GoPay, OVO, DANA, Alfamart/Indomaret.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}
 
 
/* ================================================================
   MODAL DETAIL FILM
   Banner atas  → imgLandscape()  = posterLandscape (16:9)
   Tidak ada gambar tambahan portrait di sini
================================================================ */
function openDetail(filmId) {
    const film = FILMS.find(f => f.id === filmId);
    if (!film) return;
 
    const isInList = appState.myList.includes(film.id);
 
    // Banner detail: pakai landscape, fallback ke portrait
    const bannerSrc = film.posterLandscape || film.poster;
    const bannerHtml = bannerSrc
        ? `<img src="${bannerSrc}" alt="Backdrop ${film.title}"
               style="width:100%;height:100%;object-fit:cover;">`
        : `<div class="poster-fallback poster-fallback--landscape">
               <span>${film.title}</span>
           </div>`;
 
    document.getElementById('modal-detail-content').innerHTML = `
 
        <!--
            BANNER ATAS MODAL DETAIL
            Memakai posterLandscape (16:9)
        -->
        <div class="detail-hero">
            ${bannerHtml}
            <div class="detail-hero-overlay"></div>
        </div>
 
        ${film.tags.map(t => `<span class="detail-genre-tag">${t}</span>`).join('')}
 
        <h2 class="detail-title">${film.title}</h2>
 
        <div class="detail-meta">
            <span class="detail-rating-big">★ ${film.rating}</span>
            <span>·</span>
            <span>${film.year}</span>
            <span>·</span>
            <span>${film.duration}</span>
            <span class="film-badge badge-${film.badge}" style="position:static;">
                ${film.badge === 'premium' ? 'Premium'
                : film.badge === 'new'     ? 'Baru'
                :                            'Gratis'}
            </span>
        </div>
 
        <p class="detail-synopsis">${film.synopsis}</p>
 
        <p style="font-size:.8rem;color:var(--text-muted);margin-bottom:.4rem;">
            <strong style="color:var(--text-bright);letter-spacing:1px;">Sutradara:</strong>
            ${film.director}
        </p>
        <p style="font-size:.8rem;color:var(--text-muted);margin-bottom:2rem;">
            <strong style="color:var(--text-bright);letter-spacing:1px;">Pemeran:</strong>
            ${film.cast}
        </p>
 
        <div class="detail-actions">
            <button class="btn-primary"
                    onclick="openPlayer(${film.id}); closeModal('modal-detail');">
                <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21"/>
                </svg>
                Tonton Sekarang
            </button>
            <button class="btn-add-list ${isInList ? 'in-list' : ''}"
                    id="btn-list-${film.id}"
                    onclick="toggleMyList(${film.id})">
                ${isInList ? '✓ Tersimpan' : '+ Daftarku'}
            </button>
        </div>
    `;
 
    openModal('modal-detail');
}
 
 
/* ================================================================
   MODAL VIDEO PLAYER
================================================================ */
function openPlayer(filmId) {
    const film = FILMS.find(f => f.id === filmId);
    if (!film) return;
 
    if (film.type === 'premium' && !appState.isLoggedIn) {
        showToast('Login dulu untuk menonton film premium!', 'info');
        openModal('modal-login');
        return;
    }
 
    document.getElementById('modal-player-content').innerHTML = `
        <div class="player-wrapper">
            <video controls autoplay>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                Browser kamu tidak mendukung video HTML5.
            </video>
        </div>
        <div class="player-info">
            <span class="player-title">${film.title}</span>
            <span class="player-meta">${film.genre} · ${film.year} · ${film.duration}</span>
        </div>
    `;
    openModal('modal-player');
}
 
 
/* ================================================================
   MY LIST
================================================================ */
function toggleMyList(filmId) {
    if (!appState.isLoggedIn) {
        showToast('Login dulu untuk menyimpan film!', 'info');
        openModal('modal-login');
        return;
    }
    const idx = appState.myList.indexOf(filmId);
    const btn = document.getElementById(`btn-list-${filmId}`);
 
    if (idx === -1) {
        appState.myList.push(filmId);
        if (btn) { btn.textContent = '✓ Tersimpan'; btn.classList.add('in-list'); }
        showToast('Film ditambahkan ke daftar!', 'success');
    } else {
        appState.myList.splice(idx, 1);
        if (btn) { btn.textContent = '+ Daftarku'; btn.classList.remove('in-list'); }
        showToast('Film dihapus dari daftar.', 'info');
    }
}
 
 
/* ================================================================
   MODAL — buka / tutup
================================================================ */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}
 
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (modalId === 'modal-player') {
        const video = modal.querySelector('video');
        if (video) video.pause();
    }
}
 
function closeModalOutside(event, modalId) {
    if (event.target === event.currentTarget) closeModal(modalId);
}
 
 
/* ================================================================
   AUTH — Login / Register / Logout
================================================================ */
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-user').value.trim();
    const password = document.getElementById('login-pass').value;
    if (!username || !password) {
        showToast('Isi username dan password!', 'error');
        return false;
    }
    appState.isLoggedIn = true;
    appState.username   = username;
    appState.userRole   = username.toLowerCase() === 'admin' ? 'admin' : 'user';
    updateAuthUI();
    closeModal('modal-login');
    showToast(`Selamat datang, ${username}! 🎬`, 'success');
    return false;
}
 
function handleRegister(event) {
    event.preventDefault();
    const name  = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const pass  = document.getElementById('reg-pass').value;
    if (!name || !email || !pass) {
        showToast('Semua field harus diisi!', 'error');
        return false;
    }
    if (pass.length < 8) {
        showToast('Password minimal 8 karakter!', 'error');
        return false;
    }
    appState.isLoggedIn = true;
    appState.username   = name;
    appState.userRole   = 'user';
    updateAuthUI();
    closeModal('modal-login');
    showToast(`Akun berhasil dibuat! Selamat datang, ${name}! 🎉`, 'success');
    return false;
}
 
function handleLogout() {
    appState.isLoggedIn = false;
    appState.username   = null;
    appState.userRole   = null;
    appState.myList     = [];
    updateAuthUI();
    showToast('Kamu berhasil keluar. Sampai jumpa!', 'info');
    navigateTo('home');
}
 
function updateAuthUI() {
    const btnLogin     = document.getElementById('btn-show-login');
    const avatarBtn    = document.getElementById('user-avatar-btn');
    const initial      = document.getElementById('avatar-initial');
    const dropUser     = document.getElementById('dropdown-username');
    const dropRole     = document.getElementById('dropdown-role');
    const mobileLogin  = document.getElementById('mobile-login-btn');
    const mobileLogout = document.getElementById('mobile-logout-btn');
 
    if (appState.isLoggedIn) {
        btnLogin.style.display  = 'none';
        avatarBtn.style.display = 'flex';
        initial.textContent     = appState.username.charAt(0).toUpperCase();
        dropUser.textContent    = appState.username;
        dropRole.textContent    = appState.userRole === 'admin' ? '⚡ Admin' : '👤 Member';
        if (mobileLogin)  mobileLogin.style.display  = 'none';
        if (mobileLogout) mobileLogout.style.display = 'block';
    } else {
        btnLogin.style.display  = 'block';
        avatarBtn.style.display = 'none';
        if (mobileLogin)  mobileLogin.style.display  = 'block';
        if (mobileLogout) mobileLogout.style.display = 'none';
    }
}
 
function switchTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('tab-login').classList.toggle('active', isLogin);
    document.getElementById('tab-register').classList.toggle('active', !isLogin);
    document.getElementById('form-login').style.display    = isLogin ? 'block' : 'none';
    document.getElementById('form-register').style.display = isLogin ? 'none'  : 'block';
}
 
 
/* ================================================================
   SUBSCRIBE
================================================================ */
function handleSubscribe(planName, price) {
    if (!appState.isLoggedIn) {
        showToast('Login dulu untuk berlangganan!', 'info');
        openModal('modal-login');
        return;
    }
    const priceStr = price === 0 ? 'GRATIS' : `Rp ${price.toLocaleString('id-ID')}`;
    if (confirm(`Konfirmasi berlangganan paket ${planName} seharga ${priceStr}?\n(Simulasi — tidak ada pembayaran nyata)`)) {
        showToast(`🎉 Berhasil berlangganan paket ${planName}!`, 'success');
        setTimeout(() => navigateTo('home'), 1500);
    }
}
 
 
/* ================================================================
   PENCARIAN
   Thumbnail di dropdown → imgSearchThumb() = poster portrait (2:3)
================================================================ */
let searchTimeout = null;
 
function toggleSearch() {
    const wrapper  = document.getElementById('search-wrapper');
    const input    = document.getElementById('search-input');
    const dropdown = document.getElementById('search-results-dropdown');
 
    if (wrapper.classList.contains('open')) {
        wrapper.classList.remove('open');
        input.value = '';
        dropdown.classList.remove('visible');
        dropdown.innerHTML = '';
    } else {
        wrapper.classList.add('open');
        setTimeout(() => input.focus(), 200);
    }
}
 
function handleSearch(query) {
    clearTimeout(searchTimeout);
    const dropdown = document.getElementById('search-results-dropdown');
    if (!query || query.length < 2) {
        dropdown.classList.remove('visible');
        dropdown.innerHTML = '';
        return;
    }
    searchTimeout = setTimeout(() => {
        const q       = query.toLowerCase();
        const results = FILMS.filter(f =>
            f.title.toLowerCase().includes(q) ||
            f.genre.toLowerCase().includes(q) ||
            f.tags.some(t => t.toLowerCase().includes(q))
        ).slice(0, 5);
 
        dropdown.innerHTML = results.length === 0
            ? `<p style="color:var(--text-muted);padding:1rem 0;font-size:.85rem;">
                   Tidak ada hasil untuk "${query}"
               </p>`
            : results.map(f => `
                <div class="search-result-item"
                     onclick="openDetail(${f.id}); toggleSearch();">
                    <!--
                        THUMBNAIL SEARCH
                        Memakai imgSearchThumb() = poster portrait (2:3)
                    -->
                    <div class="search-result-thumb">
                        ${imgSearchThumb(f)}
                    </div>
                    <div class="search-result-info">
                        <h4>${f.title}</h4>
                        <p>${f.genre} · ${f.year} · ★ ${f.rating}</p>
                    </div>
                </div>
            `).join('');
 
        dropdown.classList.add('visible');
    }, 300);
}
 
document.addEventListener('click', e => {
    const wrapper  = document.getElementById('search-wrapper');
    const dropdown = document.getElementById('search-results-dropdown');
    if (wrapper && !wrapper.contains(e.target) &&
        dropdown && !dropdown.contains(e.target)) {
        wrapper.classList.remove('open');
        const input = document.getElementById('search-input');
        if (input) input.value = '';
        dropdown.classList.remove('visible');
    }
});
 
 
/* ================================================================
   USER DROPDOWN
================================================================ */
function toggleUserMenu() {
    document.getElementById('user-dropdown')?.classList.toggle('open');
}
 
document.addEventListener('click', e => {
    const avatarBtn = document.getElementById('user-avatar-btn');
    const dropdown  = document.getElementById('user-dropdown');
    if (avatarBtn && dropdown && !avatarBtn.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});
 
 
/* ================================================================
   MOBILE MENU
================================================================ */
function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav       = document.getElementById('mobile-nav');
    const overlay   = document.getElementById('mobile-nav-overlay');
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}
 
 
/* ================================================================
   TOAST NOTIFIKASI
================================================================ */
function showToast(message, type = 'info') {
    const toast     = document.getElementById('toast');
    toast.textContent = message;
    toast.className   = `toast ${type}`;
    void toast.offsetWidth;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('show'), 3000);
}