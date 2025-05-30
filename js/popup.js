document.addEventListener('DOMContentLoaded', function () {
    const modalWrapper = document.querySelector('.modal-wrapper');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');

    document.querySelectorAll('.trigger').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();

            // Ambil data dari atribut
            const title = el.dataset.title;
            const imgSrc = el.dataset.img;

            // Jika ada data title dan img, berarti ini tombol buka
            if (title && imgSrc) {
                modalTitle.textContent = title;
                modalImage.src = imgSrc;
                modalWrapper.classList.add('open');
                const pageWrapper = document.querySelector('.page-wrapper');
                if (pageWrapper) pageWrapper.classList.add('blur');
            } else {
                // Jika tidak, berarti tombol close
                modalWrapper.classList.remove('open');
                const pageWrapper = document.querySelector('.page-wrapper');
                if (pageWrapper) pageWrapper.classList.remove('blur');
            }
        });
    });
});
