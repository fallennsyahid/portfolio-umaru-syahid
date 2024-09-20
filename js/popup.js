// Mendapatkan elemen modal dan tombol
const modalEl = document.getElementById('info-popup');
const modalEl2 = document.getElementById('info-popup2');
const modalEl3 = document.getElementById('info-popup3');
const modalEl4 = document.getElementById('info-popup4');
const closeModalEl = document.getElementById('close-modal');
const closeModalEl2 = document.getElementById('close-modal2');
const closeModalEl3 = document.getElementById('close-modal3');
const closeModalEl4 = document.getElementById('close-modal4');
const openModalEl = document.getElementById('open-modal');
const openModalEl2 = document.getElementById('open-modal2');
const openModalEl3 = document.getElementById('open-modal3');
const openModalEl4 = document.getElementById('open-modal4');

// Fungsi untuk menampilkan modal
function showModal() {
    modalEl.classList.remove('hidden');
}

function showModal2() {
    modalEl2.classList.remove('hidden');
}

function showModal3() {
    modalEl3.classList.remove('hidden');
}
function showModal4() {
    modalEl4.classList.remove('hidden');
}

// Fungsi untuk menyembunyikan modal
function hideModal() {
    modalEl.classList.add('hidden');
}

function hideModal2() {
    modalEl2.classList.add('hidden');
}

function hideModal3() {
    modalEl3.classList.add('hidden');
}
function hideModal4() {
    modalEl4.classList.add('hidden');
}

// Event listener untuk menampilkan modal ketika tombol "More" diklik
openModalEl.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah default action dari link
    showModal();
});

openModalEl2.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah default action dari link
    showModal2();
});

openModalEl3.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah default action dari link
    showModal3();
});
openModalEl4.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah default action dari link
    showModal4();
});

// Event listener untuk tombol 'Cancel'
closeModalEl.addEventListener('click', function() {
    hideModal();
});

closeModalEl2.addEventListener('click', function() {
    hideModal2();
});

closeModalEl3.addEventListener('click', function() {
    hideModal3();
});
closeModalEl4.addEventListener('click', function() {
    hideModal4();
});