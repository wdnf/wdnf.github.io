'use strict';

let images = document.querySelectorAll(":not(a) > img");

images.forEach(function(img) {

        img.addEventListener("click", (e) => {


            let modal = document.querySelector("#modal-image");

            if(!isModalOpen(modal)) {
                let imagetitle = document.querySelector("#modal-image-name");
                let imagepreview = document.querySelector("#modal-image-element");

                if(img.classList.contains("qr")) {
                    imagepreview.classList.add("qr");
                } else {
                    imagepreview.classList.remove("qr");
                }
    
                imagetitle.innerText = e.target.getAttribute("alt");
                imagepreview.src = e.target.src;
    
                toggleModal(modal);
            }



        });

});

function isModalOpen(modal) {
    return (modal.classList.contains("modal--open")) ? true : false;
}

function closeModal(modal) {
    modal.classList.remove("modal--open");

}

function clickCloseModal(modal) {
    



    modal.removeEventListener("click", () => clickCloseModal());
}


function toggleModal(modal) {

    console.log(modal);

    modal.classList.toggle("modal--open");

    if(isModalOpen(modal)) {
        
        let background = document.querySelector(".modal :not(.modal-foreground)");
        background.addEventListener("click", () => clickCloseModal(modal));

    }

}
