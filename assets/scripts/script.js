const images = document.querySelectorAll(":not(a) > img");
const modal = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-image-name");
const modalReview = document.querySelector("#modal-image-element");
const modalContent = document.querySelector(".modal-foreground");

images.forEach((img) => {
        img.addEventListener("click", (e) => {
            if(isModalOpen()) return

            if(img.classList.contains("qr")) {
                modalReview.classList.add("qr");
            } else {
                modalReview.classList.remove("qr");
            }

            modalTitle.textContent = e.target.getAttribute("alt");
            modalReview.src = e.target.src;

            openModal();

            modal.addEventListener("click",(e) => {
                if(modalContent.contains(e.target)) return

                closeModal();
            });
        });
});

function isModalOpen() {
    return (modal.classList.contains("modal--open"))
}
function openModal(){
    modal.classList.add("modal--open")
}
function closeModal() {
    modal.classList.remove("modal--open");
}
