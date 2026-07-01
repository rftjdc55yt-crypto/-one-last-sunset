const mulai = document.getElementById("mulai");
const loading = document.getElementById("loading");
const hero = document.getElementById("hero");
const typing = document.getElementById("typing");

const text =
"Hai Tria... Ada sesuatu yang ingin aku sampaikan. Tolong baca sampai selesai ya.";

let i = 0;

mulai.onclick = () => {
    loading.style.display = "none";
    hero.style.display = "flex";

    ketik();
};

function ketik(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(ketik,40);

    }

}
