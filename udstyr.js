const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("AssetID");
console.log(id);

fetch(`https://mbfwwvemximslgoumeom.supabase.co/rest/v1/TSL?AssetID=eq.${id}`, {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZnd3dmVteGltc2xnb3VtZW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4NjY4NTQsImV4cCI6MjA0MTQ0Mjg1NH0.UBXPhxZr5Vah5GRBQ_IW5gqIWf0HjOMdbIsHklKN3go",
  },
})
  .then((res) => res.json())
  .then(showList);

function showList(data) {
  console.log(data[0]);
  document.querySelector(".modelnavn").textContent = data[0].Produktnavn_model;
  document.querySelector("#s_img").src = "img/" + data[0].Mærke + ".webp";
  document.querySelector("#s_img").alt = "billede af" + `${data[0].Produktnavn_model}`;
  document.querySelector(".description").textContent = data[0].b_tekst;
}

document.getElementById("burger-menu").addEventListener("click", function () {
  const mainMenu = document.querySelector(".main-menu");

  mainMenu.classList.toggle("active"); // Toggler visningen af menuen på små skærme
});
