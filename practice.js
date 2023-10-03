export function setupPractice (element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  // kod för att visa vad du lärt dig om variabler och typer
  let varsAndTypes = 'varsAndTypes'
  let gronga = 15
  let gruga = false
  
  console.log(varsAndTypes, typeof(varsAndTypes))
  console.log(gronga, typeof(gronga))
  console.log(gruga, typeof(gruga))

  const grag = gruga

  console.log(grag, typeof(grag))
}

function operators(element) {
  let gronga = 15
  // kod för att visa vad du lärt dig om operatorer
  console.log('operators === ', 1 === 1)
  console.log('gruga?', 2 + 2 === 3)
  console.log('gronga?', gronga)
  console.log('gro', gronga / 2 === 7.5)
}

function controlStructures(element) {
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  let controlStructures = 'controlStructures'
  console.log(controlStructures, controlStructures ? 'if' : 'loopar')
}

function arraysAndObjects (element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  console.log(['arrays', {and: 'objects'}])
}

function domAndEvents (element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log(element, 'lyssna efter event för att ändra element')
}

function domManipulation (element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'dom manipulation, ändra och lägg till element'
}