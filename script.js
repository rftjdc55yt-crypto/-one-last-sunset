const loading = document.getElementById("loading");
const hero = document.getElementById("hero");
const surat = document.getElementById("surat");

const mulai = document.getElementById("mulai");
const lanjut = document.getElementById("lanjut");

const judul = document.getElementById("judul");
const typing = document.getElementById("typing");
const isiSurat = document.getElementById("isiSurat");

const title = "Hai, Tria.";

const text =
"Aku tahu mungkin kamu tidak menyangka membuka link ini. Tapi izinkan aku menyampaikan beberapa hal yang selama ini tersimpan. Bacalah sampai selesai ya...";

const suratText = `
Tria,

Terima kasih pernah menjadi bagian dari hidupku.

Aku sadar dulu aku banyak melakukan kesalahan.
Aku terlalu egois, terlalu kekanak-kanakan,
dan sering tidak menghargai apa yang sudah aku miliki.

Hari ini aku bukan datang untuk memaksamu kembali.

Aku hanya ingin menunjukkan bahwa aku sudah belajar,
bertumbuh, dan menjadi pribadi yang jauh lebih baik.

Kalau suatu hari nanti takdir mempertemukan kita lagi,
aku berharap saat itu aku sudah menjadi seseorang
yang benar-benar pantas untukmu.

Terima kasih sudah membaca.

- Ervan
`;

let index = 0;

mulai.onclick = () => {

    loading.style.display = "none";
    hero.style.display = "flex";

    judul.innerHTML = title;

    ketik();

};

function ketik(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(ketik,40);

    }else{

        lanjut.style.display="inline-block";

    }

}

lanjut.onclick = () => {

    hero.style.display="none";
    surat.style.display="flex";

    isiSurat.innerText=suratText;

};
