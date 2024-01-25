//Kjørte ut til konsolen for å sjekke at jeg fikk koblet til ressurs.js filen
//console.log(resources)

//Opprettet en variabel med tom verdi for å lagre ressursene i HTML-elementet
let resourcesHTML = ""

// Gå gjennom hele listen resources og legger til i HTML-struktur for hvert listeelement i resourcesHTML
resources.forEach(resource => {resourcesHTML += 
  `<article>
        <h2>${resource.category}</h2>
        <p>${resource.text}</p> 
        <ul>
            ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
        </ul>
    </article>`
})//KILDE: ChatGPT og forelesning med "legodudes". 

//Jeg laget den først med .map. men fikk da bare til å skrive ut et listeelement. 
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

//Variabel for å finn hovedelementet (main-elementet) på siden og sett inn all informasjon fra ressurs.js-filen
const main = document.getElementsByTagName("main")[0]
main.innerHTML = resourcesHTML

//Funksjon for å vise innholdet for en bestemt kategori basert på indeksen
function showCategoryContent(index) {
//Variabel for å finne alle elementer med klasse "tablinks"
  let items = document.getElementsByClassName("tablinks")

// Fjern klassen "active" fra alle tablink-elementene
  Array.from(items).map(item => {
    if (item.classList.contains("active")) {
      item.classList.remove("active")
    }
  })//KILDE: studentass. Ivar Kvalheim 

  // Hvis indeksen er gyldig, legges "active" til klassen for den valgte tablinken, 
  //og viser innholdet for den valgte kategorien
  if (index >= 0 && index < resources.length) {
    Array.from(items)[index].classList.add("active")
    var selectedCategory = resources[index]
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

//Funksjon som kjører for å vise innholdet for den første kategorien når siden lastes
showCategoryContent(0)