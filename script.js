//Kjørte ut til konsolen for å sjekke at jeg fikk koblet til ressurs.js filen
//console.log(resources)

//Opprett en HTML-streng for alle ressursene og legg den til i main-elementet
let resourcesHTML = ""

//Gå gjennom hver ressurs og legg til HTML-streng for hver
resources.forEach(resource => {
  resourcesHTML += `
    <article>
        <h2>${resource.category}</h2>
        <p>${resource.text}</p> 
        <ul>
            ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
        </ul>
    </article>`
})//KILDE: ChatGPT og forelesning: legodudes

//Hent referanse til main-elementet og sett inn HTML-strengen med all ressursinformasjon
const main = document.getElementsByTagName("main")[0]
main.innerHTML = resourcesHTML


//Funksjon for å vise innholdet for en bestemt kategori basert på indeksen
function showCategoryContent(index) {
  if (index >= 0 && index < resources.length) {
    var selectedCategory = resources[index]
    var contentArea = document.getElementById("categoryContent")

   //Vise kategoriinformasjon i innholdsområdet
    contentArea.innerHTML = `
    <h2>${selectedCategory.category}</h2>
    <p>${selectedCategory.text}</p>
    <ul>
        ${selectedCategory.sources.map(source => 
        `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
    </ul>`
  } 
}//KILDE: ChatGPT og medstudent Christian Kent Djønne Albinsson