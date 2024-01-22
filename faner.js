//Kjørte ut til konsolen for å sjekke at jeg fikk koblet til ressurs.js filen
console.log(resources)

let resourcesHTML = ""

resources.map(resources => resourcesHTML += `<article>
<h2>${resources.category}</h2>
<p>${resources.text}</p>
<ul>
    <li><a href="${resources.url}">${resources.title}</a></li>
    <li><a href="${resources.url}">${resources.title}</a></li>
    <li><a href="${resources.url}">${resources.title}</a></li>
</ul>
</article>`)

//Kjørte ut til konsolen for å sjekke at den henter informasjon fra ressurs.js fil inn i artikkelkortene
//console.log(resourcesHTML)

const main = document.getElementsByTagName("main")
main [0].innerHTML = resourcesHTML