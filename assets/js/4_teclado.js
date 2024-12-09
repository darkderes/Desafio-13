let createdDiv = null;
document.addEventListener("keydown", function (event) {
  const keyDiv = document.getElementById("key");

  if (event.key === "a") {
    pintar(keyDiv, "pink");
  } else if (event.key === "s") {
    pintar(keyDiv, "orange");
  } else if (event.key === "d") {
    pintar(keyDiv, "skyblue");
  } else if (event.key === "q" || event.key === "w" || event.key === "e") {
    if (!createdDiv) {
      createdDiv = document.createElement("div");
      createdDiv.style.width = "200px";
      createdDiv.style.height = "200px";
      createdDiv.style.border = "2px solid black";
      document
        .getElementById("key")
        .insertAdjacentElement("afterend", createdDiv);
    }

    if (event.key === "q") {
      pintar(createdDiv, "purple");
    } else if (event.key === "w") {
      pintar(createdDiv, "gray");
    } else if (event.key === "e") {
      pintar(createdDiv, "brown");
    }
  }
});
