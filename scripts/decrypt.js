$(document).ready(async function () {
  const password = prompt("Enter in the password");
  const maxLength = 36;
  var randomNum = Math.floor(Math.random() * maxLength + 1);
  document.getElementById("myself").src = await decrypt(randomNum, password);
  for (let i = 1; i <= maxLength; i++) {
    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);

    const img = document.createElement("img");
    img.src = await decrypt(i, password);
    container.appendChild(img);

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    container.appendChild(overlay);

    const x = document.createElement("img");
    x.src = "images/x.png";
    overlay.appendChild(x);
  }
  overlayClick();
})

async function decrypt(i, password) {
  const response = await fetch(`images/${i}.json`);
  const image = await response.text();
  return decryptedImageData = sjcl.decrypt(password, image);
}
