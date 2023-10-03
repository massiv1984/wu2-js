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
  let gronga = 15
  let gruga = false
  
  console.log(gronga, typeof(gronga))
  console.log(gruga, typeof(gruga))

  const grag = 'grag ' + gruga

  console.log(grag, typeof(grag))
}

function operators(element) {
  let gronga = 15
  // kod för att visa vad du lärt dig om operatorer
  console.log('gruga?', 2 + 2 === 3)
  console.log('gronga?', gronga)
  console.log('gro', gronga / 2 === 7.5)
}

function controlStructures(element) {
  let graga = 4
  let groga = Math.round(Math.random() * 100)
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  while (graga < 10) {
    console.log ('graga liten :/ graga bara ' + graga)
    graga ++
  }
  console.log ('graga stor :D graga ' + graga)
  console.log ('groga = ' + groga)
  if (groga == 100) {
    console.log ('groga super vinner på lotteriet!!!!!!!!!!!!!!!!!!!!!!!')
  }
  else if (groga > 89) {
    console.log ('groga vinner lotteriet!!!!')
  }
  else {
    console.log ('groga vinner inte lotteriet')
  }
}

// stulen funktion https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function arraysAndObjects (element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  console.log(['arrays', {and: 'objects'}])

  const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö']
  const month = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december']
  console.log(letter)
  console.log(month)
  console.log('ditt namn börjar på bokstaven ' + letter[randomNumber(0, letter.length - 1)] + ' och du föddes i ' + month[randomNumber(0, month.length - 1)] + '. hade jag rätt? maila mig på jeff@amazon.com och klaga om jag hade fel')

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