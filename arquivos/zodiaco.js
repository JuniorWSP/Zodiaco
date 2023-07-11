function colocaFoto(imagem) {
    document.getElementById("local").src = imagem;
}
function retiraFoto() {
    document.getElementById("local").src = "../imagens/transparente.webp"
}
function sites(links) {
    window.location.href = links;
}
function home() {
    window.location.href = "zodiaco.html"
}