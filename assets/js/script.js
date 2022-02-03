/*============Récupération des données du formulaire============*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");
  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        firstname: document.querySelector("#firstname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };
      console.log(data);
      const response = await axios.post("http://localhost:3000/", data);
      console.log(response);
    });
});
