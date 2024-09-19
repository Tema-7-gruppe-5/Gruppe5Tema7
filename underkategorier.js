window.addEventListener("DOMContentLoaded", init);

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("Type");

function init() {
  productList = document.querySelector("#product_list");
  console.log("product_list", productList);
  productTemplate = document.querySelector("template").content;
  console.log("productTemplate", productTemplate);

  fetch(`https://mbfwwvemximslgoumeom.supabase.co/rest/v1/TSL?Type=eq.${query}`, {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZnd3dmVteGltc2xnb3VtZW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4NjY4NTQsImV4cCI6MjA0MTQ0Mjg1NH0.UBXPhxZr5Vah5GRBQ_IW5gqIWf0HjOMdbIsHklKN3go",
    },
  })
    .then((res) => res.json())
    .then(showList2);
}

function showList2(json) {
  console.log("json", json);
  json.forEach(showProduct);
}

function showProduct(product) {
  const clone = productTemplate.cloneNode(true);
  clone.querySelector("h3").textContent = `${product.Produktnavn_model}`;
  console.log("hejsa", product.Taksonomi1);
  clone.querySelector("a").href = `udstyr.html?AssetID=${product.AssetID}`;
  clone.querySelector("img").src = "img/" + product.AssetID + ".webp";
  productList.appendChild(clone);
}

document.getElementById("burger-menu").addEventListener("click", function () {
  const mainMenu = document.querySelector(".main-menu");

  mainMenu.classList.toggle("active"); // Toggler visningen af menuen på små skærme
});
