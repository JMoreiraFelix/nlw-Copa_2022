function createGame (p1, g1, hour, g2, p2) {
  if (p1 === "brasil") {
  return `
    <li>
      <div id= "name">
        <a target="_blank" href="https://www.twitch.tv/casimito"> 
          <img src="./assets/icon-${p1}.svg" alt="Bandeira do ${p1}"> 
        </a>
        <p>${p1}</p>
      </div>
      <div id= "placar">
        <strong>${hour}</strong>
        <p>${g1} x ${g2}</p>
      </div>
      <div id="name">
        <img src="./assets/icon-${p2}.svg" alt="Bandeira da ${p2}">
        <p>${p2}</p>
      </div>
    </li>
  `
} else {
  return `
    <li>
      <div id= "name">
        <img src="./assets/icon-${p1}.svg" alt="Bandeira do ${p1}">
        <p>${p1}</p>
      </div>
      <div id= "placar">
        <strong>${hour}</strong>
        <p>${g1} x ${g2}</p>
      </div>
      <div id="name">
        <img src="./assets/icon-${p2}.svg" alt="Bandeira da ${p2}">
        <p>${p2}</p>
      </div>
    </li>
  `
}
}

let delay = 0;
function createCard (date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2> ${date} <span> ${day} </span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 

createCard( '20/11', 'domingo', createGame("qatar","0", "13:00","2" , "equador"))
+
  createCard( '21/11', 'segunda-feira', createGame("inglaterra","6", "10:00","2" , "irã") + createGame("senegal","0", "13:00","2", "holanda") + createGame("eua","1", "16:00","1", "gales")) 
+
  createCard( '22/11', 'terça-feira', createGame("argentina","1", "07:00","2", "arábia") + createGame("dinamarca","0", "10:00","0", "tunísia") + createGame("méxico","0", "13:00","0", "polônia") + createGame("austrália","1", "16:00","4", "frança"))
+
  createCard( '23/11', 'quarta-feira', createGame("marrocos", "0", "07:00", "0", "croácia") + createGame("alemanha", "1", "10:00", "2", "japão") + createGame("costa rica", "0", "13:00", "7", "espanha") + createGame("bélgica", "1", "16:00", "0", "canadá"))
+
createCard( '24/11', 'quinta-feira', createGame("suíça", "1", "07:00", "0", "camarões") + createGame("coréia do sul", "0", "10:00", "0", "uruguai") + createGame("portugal", "3", "13:00", "2", "gana") + createGame("brasil", "2", "16:00", "0", "sérvia"))
+
createCard( '25/11', 'sexta-feira', createGame("gales", "0", "07:00", "2", "irã") + createGame("senegal", "3", "10:00", "1", "qatar") + createGame("holanda", "1", "13:00", "1", "equador") + createGame("inglaterra", "0", "16:00", "0", "eua"))
+
createCard( '26/11', 'sábado', createGame("austrália", "1", "07:00", "0", "tunísia") + createGame("polônia", "2", "10:00", "0", "arábia") + createGame("dinamarca", "1", "13:00", "2", "frança") + createGame("argentina", "2", "16:00", "0", "méxico"))
+
createCard( '27/11', 'domingo', createGame("costa rica", "1", "07:00", "0", "japão") + createGame("bélgica", "0", "10:00", "2", "marrocos") + createGame("canadá", "1", "13:00", "4", "croácia") + createGame("alemanha", "1", "16:00", "1", "espanha"))
+
createCard( '28/11', 'segunda-feira', createGame("camarões", "3", "07:00", "3", "sérvia") + createGame("coréia do sul", "2", "10:00", "3", "gana") + createGame("brasil", "1", "13:00", "0", "suíça") + createGame("portugal", "2", "16:00", "0", "uruguai"))
+
createCard( '29/11', 'terça-feira', createGame("senegal", "2", "12:00", "1", "equador") + createGame("holanda", "2", "12:00", "0", "qatar") + createGame("irã", "0", "16:00", "1", "eua") + createGame("inglaterra", "3", "16:00", "0", "gales"))
+
createCard( '30/11', 'quarta-feira', createGame("frança", "0", "12:00", "1", "tunísia") + createGame("austrália", "1", "12:00", "0", "dinamarca") + createGame("argentina", "2", "16:00", "0", "polônia") + createGame("méxico", "2", "16:00", "1", "arábia"))
+
createCard( '01/12', 'quinta-feira', createGame("bélgica", "0", "12:00", "0", "croácia") + createGame("marrocos", "2", "12:00", "1", "canadá") + createGame("espanha", "1", "16:00", "2", "japão") + createGame("costa rica", "2", "16:00", "4", "alemanha"))
+
createCard( '02/12', 'sexta-feira', createGame("coréia do sul", "2", "12:00", "1", "portugal") + createGame("uruguai", "2", "12:00", "0", "gana") + createGame("brasil", "0", "16:00", "1", "camarões") + createGame("suíça", "3", "16:00", "2", "sérvia"))
+
createCard( '03/12', 'sábado', createGame("holanda", "3", "12:00", "1", "eua") +  createGame("argentina", "2", "16:00", "1", "austrália"))
+
createCard( '04/12', 'domingo', createGame("frança", "3", "12:00", "1", "polônia") + createGame("inglaterra", "3", "16:00", "0", "senegal"))
+
createCard( '05/12', 'segunda-feira', createGame("japão", "1", "12:00", "1", "croácia") + createGame("brasil", "4", "16:00", "1", "coréia do sul")) 
+
createCard( '06/12', 'terça-feira', createGame("espanha", "0", "12:00", "0", "marrocos") + createGame("portugal", "6", "16:00", "1", "suíça"))
/*
+
createCard( '09/12', 'sexta-feira', createGame("a", "-", "12:00", "-", "a") + createGame("a", "-", "16:00", "-", "a") 
+
createCard( '10/12', 'sábado', createGame("a", "-", "12:00", "-", "a") + createGame("a", "-", "16:00", "-", "a")
+
createCard( '13/12', 'terça-feira', createGame("a", "-", "12:00", "-", "a") + createGame("a", "-", "16:00", "-", "a")
+
createCard( '17/12', 'sábado', createGame("a", "-", "12:00", "-", "a") + createGame("a", "-", "16:00", "-", "a")
+
createCard( '18/12', 'domingo', createGame("a", "-", "12:00", "-", "a") + createGame("a", "-", "16:00", "-", "a")
*/