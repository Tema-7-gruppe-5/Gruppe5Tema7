const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("Type");
console.log(query);

const id = "C00900";

fetch(`https://mbfwwvemximslgoumeom.supabase.co/rest/v1/TSL?Type=eq.${query}`, {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZnd3dmVteGltc2xnb3VtZW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4NjY4NTQsImV4cCI6MjA0MTQ0Mjg1NH0.UBXPhxZr5Vah5GRBQ_IW5gqIWf0HjOMdbIsHklKN3go",
  },
})
  .then((res) => res.json())
  .then(console.log);
