var team = new URLSearchParams(window.location.search).get("team");
var bannerDiv = document.getElementById("banner");
var nomeEquipeDiv = document.getElementById("nomeEquipe");
if (team === "FLEMIS") {
    bannerDiv.innerHTML = "<div class='green-banner'>Equipe Flemis</div>";
    nomeEquipeDiv.innerHTML = "Flemis 🍀🎉";
} else if (team === "IFRATELI") {
    bannerDiv.innerHTML = "<div class='red-banner'>Equipe I-Frateli</div>";
    nomeEquipeDiv.innerHTML = "I-Frateli <img class='italia'src='img/italia.png'>❤️";
} else if (team === "LOTUS") {
    bannerDiv.innerHTML = "<div class='purple-banner'>Equipe Lotus</div>";
    nomeEquipeDiv.innerHTML = "Lotus 🎩💜";
} else if (team === "ECO") {
    bannerDiv.innerHTML = "<div class='blue-banner'>Equipe ECO</div>";
    nomeEquipeDiv.innerHTML = "ECO 🔱💙";
} else if (team === "AA") {
    bannerDiv.innerHTML = "<div class='white-banner'>Equipe AA</div>";
    nomeEquipeDiv.innerHTML = "AA 🦅🤍";
}