//https://mbfwwvemximslgoumeom.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZnd3dmVteGltc2xnb3VtZW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4NjY4NTQsImV4cCI6MjA0MTQ0Mjg1NH0.UBXPhxZr5Vah5GRBQ_IW5gqIWf0HjOMdbIsHklKN3go
window.addEventListener("DOMContentLoaded", init);

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("Asset-ID");
console.log(query);

const id = "C00900";
const url = `https://mbfwwvemximslgoumeom.supabase.co/rest/v1/TSL?Asset-ID=eq.${id}`;

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZnd3dmVteGltc2xnb3VtZW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4NjY4NTQsImV4cCI6MjA0MTQ0Mjg1NH0.UBXPhxZr5Vah5GRBQ_IW5gqIWf0HjOMdbIsHklKN3go";

const options = {
  headers: {
    apikey: key,
  },
};

function init() {
  fetch(url, options)
    .then((res) => res.json())
    .then(showData);
}

function showData(items) {
  console.log(items[0]);
}
