function showBlock(blockId) {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => block.classList.remove('active'));

    const activeBlock = document.getElementById(blockId);
    if (activeBlock) {
        activeBlock.classList.add('active');
    }
}

const popup = document.getElementById("popup-module");

function showPopup(message, canClose = true) {
    if (popup) {
        popup.querySelector(".popup-content").textContent = message;
        popup.style.display = "flex";
        closePopupButton.style.display = canClose ? "block" : "none";

        if (canClose) {
            closePopupButton.addEventListener("click", () => {
                popup.style.display = "none";
            });
        }
    }
}

const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});