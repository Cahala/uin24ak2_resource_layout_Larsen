//Kobinasjon av begge nedenfor
function showCategoryContent(index) {
  if (index >= 0 && index < resources.length) {
      var selectedCategory = resources[index];
      var contentArea = document.getElementById("categoryContent");

      // Display category information in the content area
      contentArea.innerHTML = `
          <h2>${selectedCategory.category}</h2>
          <p>${selectedCategory.text}</p>
          <ul>
              ${selectedCategory.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
          </ul>`;
  } else {
      alert("Invalid index.");
  }
}

let resourcesHTML = "";

resources.forEach(resource => {
  resourcesHTML += `
      <article>
          <h2>${resource.category}</h2>
          <p>${resource.text}</p> 
          <ul>
              ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
          </ul>
      </article>`;
});

const main = document.getElementsByTagName("main")[0];
main.innerHTML = resourcesHTML;




//Kjørte ut til konsolen for å sjekke at jeg fikk koblet til ressurs.js filen
/* console.log(resources)

let resourcesHTML = ""
//Får IKKE frem til hvert kort 
resources.map(resources => resourcesHTML = 
    `<article>
    <h2>${resources.category}</h2>
    <p>${resources.text}</p> 
    <ul>
    ${resources.sources.map(sources => `<li><a href="${sources.url}">${sources.title}</a></li>`)}
    </ul>
    </article>`
)

//Kjørte ut til konsolen for å sjekke at den henter informasjon fra ressurs.js fil inn i artikkelkortene
//console.log(resourcesHTML)

const main = document.getElementsByTagName("main")
main [0].innerHTML = resourcesHTML */


/* ------------------------------------------------------------------------------------------------------- */
//Fungerer, men forstår ikke alt
/* function showCategoryContent(index) {
    if (index >= 0 && index < resources.length) {
      var selectedCategory = resources[index];
      var contentArea = document.getElementById("categoryContent");
  
      // Display category information in the content area
      contentArea.innerHTML = `
        <h2>${selectedCategory.category}</h2>
        <p>${selectedCategory.text}</p>
        <ul>
          ${selectedCategory.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
        </ul>`;
    } else {
      alert("Invalid index.");
    }
  } */
/* ------------------------------------------------------------------------------------------------------- */
