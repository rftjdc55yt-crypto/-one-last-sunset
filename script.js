const mulai = document.getElementById("mulai");
const loading = document.getElementById("loading");
const hero = document.getElementById("hero");

mulai.addEventListener("click", () => {
    loading.style.display = "none";
    hero.style.display = "flex";
});
