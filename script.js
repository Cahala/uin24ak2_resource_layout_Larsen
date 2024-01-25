//Kjørte ut til konsolen for å sjekke at jeg fikk koblet til ressurs.js filen
//console.log(resources)

//Opprettet en variabel med tom verdi for å samle HTML-innhold som generes fra hver ressurs
let resourcesHTML = ""

//Med forEach gjentar metoden gjennom listen av resources/ressurs.js. Hver gjennomgang blir et 
//artikkelkort for hver av listeelementene fra ressurs.js.
resources.forEach(resource => {resourcesHTML += 
  `<article>
        <h2>${resource.category}</h2>
        <p>${resource.text}</p> 
        <ul>
            ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
        </ul>
    </article>`
})//KILDE: ChatGPT og forelesning med "legodudes". 

//Jeg laget den først, men fikk da bare til å skrive ut et listeelement. 
//Endret til for.Each (koden ovenfor) for å ta ut hver og en
/* resources.map(resources => resourcesHTML = 
  `<article>
    <h2>${resources.category}</h2>
    <p>${resources.text}</p> 
    <ul>
      ${resources.sources.map(sources => `<li><a href="${sources.url}">${sources.title}</a></li>`)}
    </ul>
  </article>`
) */

//Variabel for hente informasjon fra ressurs.js-filen og vise det i HTML hovedelementet (main-elementet)
const main = document.getElementsByTagName("main")[0]
main.innerHTML = resourcesHTML

//Funksjon for å hente alle elementene med className "tablinks" fra HTML og gi det som verdi 
//til variabelen items
function showCategoryContent(index) {
//Variabel for å finne alle elementer med klasse "tablinks"
  let items = document.getElementsByClassName("tablinks")

//Metoden gjentar gjennom hvert element, for å se om et element har class="active",
//dersom det er tilfellet fjernes den
  Array.from(items).map(item => {
    if (item.classList.contains("active")) {
      item.classList.remove("active")
    }
  })//KILDE: studentass. Ivar Kvalheim 

  //Sjekker om den angitte index'n er med i listen, hvis den er det legges class active til elementet. 
  //Det gjør den til aktiv og henter innholde i ressursliten for viser innholdet for den valgte kategorien. 
  if (index >= 0 && index < resources.length) {
    Array.from(items)[index].classList.add("active")
    var selectedCategory = resources[index]
    //variabelen får verdien av elementet med id "categoryContent", som gjøre at innholdet i den 
    //valgte kategorien blir vist
    var contentArea = document.getElementById("categoryContent")

  // Sett inn HTML-innholdet for den valgte kategorien i "categoryContent"-elementet
    contentArea.innerHTML = `
    <h2>${selectedCategory.category}</h2>
    <p>${selectedCategory.text}</p>
    <ul>
        ${selectedCategory.sources.map(source => 
        `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
    </ul>`
  }
}//KILDE: ChatGPT, medstudent Christian Kent Djønne Albinsson og studentass. Ivar Kvalheim

//Funksjon kalles og viser innholdet for den første kategorien(index 0) når siden lastes
showCategoryContent(0)