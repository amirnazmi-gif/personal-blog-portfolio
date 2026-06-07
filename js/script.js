// Ambil butang toggle dari HTML
const themeToggleBtn = document.getElementById('theme-toggle');

// Semak sekiranya user pernah pilih tema sebelum ni (simpan dalam LocalStorage)
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// Fungsi apabila butang diklik
themeToggleBtn.addEventListener('click', () => {
    // Semak tema sekarang
    let theme = document.documentElement.getAttribute('data-theme');
    
    // Tukar tema berselang-seli
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});