const pintar = (elemento, color) => (elemento.style.backgroundColor = color);

// script pagina pintar.html

const ele = document.getElementById("ele1");

pintar(ele, "green");

ele.addEventListener("click", () => pintar(ele, "yellow"));
