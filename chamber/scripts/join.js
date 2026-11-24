import getdate from "./date.js";

const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}


const modalLinks = document.querySelectorAll(".modal-link");

modalLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const modalId = link.getAttribute("href");
        const modal = document.querySelector(modalId);

        if (modal) {
            modal.showModal();
        }
    });
});


const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});



document.querySelectorAll("dialog").forEach(modal => {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            modal.close();
        }
    });
});

getdate()
