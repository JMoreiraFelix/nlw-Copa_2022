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

createCard( '20/11', 'domingo', createGame("qatar","-", "13:00","-" , "equador"))
+
  createCard( '21/11', 'segunda-feira', createGame("inglaterra","-", "10:00","-" , "irã") + createGame("senegal","-", "13:00","-", "holanda") + createGame("eua","-", "16:00","-", "gales")) 
+
  createCard( '22/11', 'terça-feira', createGame("argentina","-", "07:00","-", "arábia") + createGame("dinamarca","-", "10:00","-", "tunísia") + createGame("méxico","-", "13:00","-", "polônia") + createGame("austrália","-", "16:00","-", "frança"))
+
  createCard( '23/11', 'quarta-feira', createGame("marrocos", "-", "07:00", "-", "croácia") + createGame("alemanha", "-", "10:00", "-", "japão") + createGame("costa rica", "-", "13:00", "-", "espanha") + createGame("bélgica", "-", "16:00", "-", "canadá"))
+
createCard( '24/11', 'quinta-feira', createGame("suíça", "-", "07:00", "-", "camarões") + createGame("coréia do sul", "-", "10:00", "-", "uruguai") + createGame("portugal", "-", "13:00", "-", "gana") + createGame("brasil", "-", "16:00", "-", "sérvia"))
+
createCard( '25/11', 'sexta-feira', createGame("gales", "-", "07:00", "-", "irã") + createGame("senegal", "-", "10:00", "-", "qatar") + createGame("holanda", "-", "13:00", "-", "equador") + createGame("inglaterra", "-", "16:00", "-", "eua"))
+
createCard( '26/11', 'sábado', createGame("austrália", "-", "07:00", "-", "tunísia") + createGame("polônia", "-", "10:00", "-", "arábia") + createGame("dinamarca", "-", "13:00", "-", "frança") + createGame("argentina", "-", "16:00", "-", "méxico"))
+
createCard( '27/11', 'domingo', createGame("costa rica", "-", "07:00", "-", "japão") + createGame("bélgica", "-", "10:00", "-", "marrocos") + createGame("canadá", "-", "13:00", "-", "croácia") + createGame("alemanha", "-", "16:00", "-", "espanha"))
+
createCard( '28/11', 'segunda-feira', createGame("camarões", "-", "07:00", "-", "sérvia") + createGame("coréia do sul", "-", "10:00", "-", "gana") + createGame("brasil", "-", "13:00", "-", "suíça") + createGame("portugal", "-", "16:00", "-", "uruguai"))
+
createCard( '29/11', 'terça-feira', createGame("senegal", "-", "12:00", "-", "equador") + createGame("holanda", "-", "12:00", "-", "qatar") + createGame("irã", "-", "16:00", "-", "eua") + createGame("inglaterra", "-", "16:00", "-", "gales"))
+
createCard( '30/11', 'quarta-feira', createGame("frança", "-", "12:00", "-", "tunísia") + createGame("austrália", "-", "12:00", "-", "dinamarca") + createGame("argentina", "-", "16:00", "-", "polônia") + createGame("méxico", "-", "16:00", "-", "arábia"))
+
createCard( '01/12', 'quinta-feira', createGame("bélgica", "-", "12:00", "-", "croácia") + createGame("marrocos", "-", "12:00", "-", "canadá") + createGame("espanha", "-", "16:00", "-", "japão") + createGame("costa rica", "-", "16:00", "-", "alemanha"))
+
createCard( '02/12', 'sexta-feira', createGame("coréia do sul", "-", "12:00", "-", "portugal") + createGame("uruguai", "-", "12:00", "-", "gana") + createGame("brasil", "-", "16:00", "-", "camarões") + createGame("suíça", "-", "16:00", "-", "sérvia"))
/*
+
createCard( '03/12', 'sábado', createGame("CORÉIA DO SUL", "-", "12:00", "-", "PORTUGAL") + createGame("URUGUAI", "-", "16:00", "-", "GANA")
+
createCard( '04/12', 'domingo', createGame("CORÉIA DO SUL", "-", "12:00", "-", "PORTUGAL") + createGame("URUGUAI", "-", "16:00", "-", "GANA")
+
createCard( '05/12', 'segunda-feira', createGame("CORÉIA DO SUL", "-", "12:00", "-", "PORTUGAL") + createGame("URUGUAI", "-", "16:00", "-", "GANA") 
+
createCard( '06/12', 'terça-feira', createGame("CORÉIA DO SUL", "-", "12:00", "-", "PORTUGAL") + createGame("URUGUAI", "-", "16:00", "-", "GANA") 
+
createCard( '09/12', 'sexta-feira', createGame("CORÉIA DO SUL", "-", "12:00", "-", "PORTUGAL") + createGame("URUGUAI", "-", "16:00", "-", "GANA") 
+
createCard( '10/12', 'sábado', createGame("CORÉIA DO SUL", "-", "12:00", "-", "PORTUGAL") + createGame("URUGUAI", "-", "16:00", "-", "GANA")
+
createCard( '13/12', 'terça-feira', createGame("CORÉIA DO SUL", "-", "12:00", "-", "PORTUGAL") + createGame("URUGUAI", "-", "16:00", "-", "GANA")
+
createCard( '17/12', 'sábado', createGame("CORÉIA DO SUL", "-", "12:00", "-", "PORTUGAL") + createGame("URUGUAI", "-", "16:00", "-", "GANA")
+
createCard( '18/12', 'domingo', createGame("CORÉIA DO SUL", "-", "12:00", "-", "PORTUGAL") + createGame("URUGUAI", "-", "16:00", "-", "GANA") 
*/