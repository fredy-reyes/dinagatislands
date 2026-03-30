function openImage(src) {
    const popup = document.getElementById("image-popup");
    const popupImg = document.getElementById("popup-img");

    popupImg.src = src;
    popup.style.display = "flex";
}

function closeImage() {
    const popup = document.getElementById("image-popup");
    popup.style.display = "none";
}

const buttons = document.querySelectorAll(".category-btn");
const cards = document.querySelectorAll(".attraction-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        cards.forEach(card => {
            if (category === "all" || card.getAttribute("data-category") === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll(".attraction-card img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerText = img.alt;
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};

modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

function openItineraryCard(evt, trip) {
    const panels = document.querySelectorAll(".tab-panel");
    const buttons = document.querySelectorAll(".tab-btn");

    panels.forEach(panel => panel.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(trip).classList.add("active");
    evt.currentTarget.classList.add("active");
}

const exploreButtons = document.querySelectorAll(".card-button");

exploreButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {

        const card = e.target.closest(".attraction-card");

        const img = card.querySelector(".slide.active").src;
        const title = card.querySelector(".card-title").innerText;
        const desc = card.querySelector(".card-description").innerText;

        modal.style.display = "block";
        modalImg.src = img;

        modalTitle.innerText = title;
        modalDesc.innerText = desc;
    });
});

const toggleBtn = document.getElementById('navbar-toggle');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
    // rotate arrow
    toggleBtn.textContent = navbar.classList.contains('hidden') ? '▶' : '◀';
});

const sliders = document.querySelectorAll(".image-slider");

sliders.forEach(slider => {
    const slides = slider.querySelectorAll(".slide");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });
});
