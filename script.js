/* */





/*
1. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due
è 50 o se la somma dei due è 50 
*/

// const number1 = prompt("Insert first number")
// const number2 = prompt("Insert second number")

// const isFifty = ( (number1, number2) => (number1 ===50 || number1+number2===50)? true:false )
// console.log (isFifty(parseInt(number1), parseInt(number2)))





/*
2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa.
Passa la stringa e la posizione come parametri e ritorna la stringa modificata.
*/ 

// const str = prompt("Insert string")
// const position = prompt("Insert position of the character you want to remove")

// // NB: nello slice il primo carattere è lo 0, l'1 è il secondo!
// //Significa che se l'utente vuole rimuovere il primo carattere della stringa, io devo rimuovere lo 0 dello slice
// const removeChar = (strng,pos) => console.log(strng.slice(0, parseInt(pos)-1) + strng.slice(parseInt(pos), strng.length))

// removeChar(str,position)





/*
3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra
70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.
*/

// const number1 = parseInt(prompt("Insert first number"))
// const number2 = parseInt(prompt("Insert second number"))

// const comparison = (number1, number2) => (  ((number1>=40 && number1<=60) && (number2>=40 && number2<=60)) || ((number1>=70 && number1<=100) && (number2>=70 && number2<=100))? true:false  )

// console.log(comparison(number1, number2))





/*4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso
se inizia con "Los" o "New", altrimenti ritorni `false`.*/

// const city = prompt("Insert city name")

// const checkStart = (city) => city.toLowerCase().startsWith("los") || city.toLowerCase().startsWith("new")? city:false
// console.log(checkStart(city))







/*5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
L'array deve essere passato come parametro.*/

// //SOLUZIONE 1
// const array = [1,2,3,4,5,6,7]

// function sum (arr){
//     let sum=0
//     arr.forEach(element => {
//         sum+=element
        
//     })
//     return sum
// }

// console.log(sum(array))


// // SOLUZIONE 2
// const array = [1,2,3,4,5,6,7]

// function makeSum (accum, elem){
//     return accum + elem

// }

// console.log (array.reduce(makeSum))





/*6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3.
Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.*/

// const array1 = [1,2,3,4,5,6,7]
// const array2 = [2,3,4,5,6,7]
// const array3 = [1,2,4,5,6,7]
// const array4 = [2,4,5,6,7]



// const control = (accum, elem) => {

//     if(elem === 1 || elem === 3){
//          return true}
    
//     return accum

// }


// //chiamo reduce specificando un valore iniziale per l'accumulatore


// // NB:

// // Senza Valore Iniziale: Se non specifico un valore iniziale per l'accumulatore, reduce usa il primo elemento dell'array 
// // come valore iniziale dell'accumulatore e inizia la riduzione dal secondo elemento.
// // Cioè: accum primo elemento dell'array, elem secondo elemento dell'array

// // Con Valore Iniziale: Se specifico un valore iniziale per l'accumulatore, reduce usa quel valore iniziale e inizia 
// // la riduzione dal primo elemento dell'array.
// // Cioè: accum valore iniziale che gli passo, elem primo elemento dell'array

// console.log(array1, array1.reduce(control, false))
// console.log(array2, array2.reduce(control, false))
// console.log(array3, array3.reduce(control, false))
// console.log(array4, array4.reduce(control, false))





/*7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
Angolo acuto: meno di 90° => ritorna "acuto"
Angolo ottuso: tra i 90° e i 180° => ritorna "ottuso"
Angolo retto: 90° => ritorna "retto"
Angolo piatto: 180° => ritorna "piatto"*/

// const degrees = parseInt(prompt ("Insert angle degrees"))


// function angle(deg){
// if (deg > 0 && deg < 90) {
//     return "angolo acuto"}

// else if (deg === 90){
//     return "angolo retto"
// }

// else if (deg > 90 && deg <180){
//     return "angolo ottuso"
// }

// else if (deg === 180){
//     return "angolo piatto"
// }

// }

// console.log(angle(degrees))






/*8. Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino"
deve ritornare FIAT.*/


// const phrase = prompt("Enter words separated by a space", "Fabbrica Italiana Automobili Torino")


// function acronym(phr) {

//     console.log("Frase originale: ", phr)

//     // suppongo ogni parola sia separata da uno spazio
//     const words = phr.split(' ')
//     // il risultato sarà un array contenente tanti elementi (stringa in questo caso) quante sono le parole
//     console.log("Risultato della split: ", words)
  
//     // prendo la prima lettera di ogni parola
//     const letters = words.map(word => word.charAt(0))
//     // il risultato sarà: per ogni singolo elemento dell'array prendi il primo carattere e mettilo nel nuovo array letters
//     console.log("Risultato della map: ", letters)
  
//     // unisco le lettere e le trasformo in maiuscolo (tra ogni elemento che concateno e il suo precedente metto
//     // un carettere vuoto)
//     const acron = letters.join('').toUpperCase()
//     //il risultato sarà una stringa in cui tutte le lettere iniziali che prima erano elementi distinti dell'array
//     //letters sono attaccate e in maiuscolo
//     console.log("Risultato della join: ", acron)
  

//     return acron
//   }
  

//   console.log(acronym(phrase))





/*----------------------------------------------------------------- */





/*1. EXTRA Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa. */

// function caratterePiuUsato(stringa) {
//     // divido la stringa in un array di caratteri, cioè la splitto sulla base del carattere vuoto
//     const caratteri = stringa.split('')
  
//     // usa reduce per costruire un oggetto contatore e trovare il carattere più usato
//     const risultato = caratteri.reduce(
//         //passo la funzione di callback
//         (accumulatore, carattere) => {

//       // incrementa il conteggio del carattere corrente
//       // se accumulatore.contatore[carattere] non esiste, null || 0 dà 0, +1 da 1, quindi lo crea e lo inizializza a 1
//       // se accumulatore.contatore[carattere] esiste, allora sarà 1, 2, 3,... e in || con 0 dà ancora il numero 1, 2, 3,...
//       // dopodichè sommo 1 e incremento 
//       accumulatore.contatore[carattere] = (accumulatore.contatore[carattere] || 0) + 1
  
//       // aggiorna il carattere più frequente se necessario
//       if (accumulatore.contatore[carattere] > accumulatore.massimoConteggio) {
//         accumulatore.massimoConteggio = accumulatore.contatore[carattere]
//         accumulatore.caratterePiuFrequente = carattere
//       }
  
//       return accumulatore; // restituisce l'oggetto accumulatore aggiornato per la prossima iterazione
//     }, 
    
//     // di seguito l'oggetto passato alla reduce come accumulatore
//     {
//       contatore: {},           // array contatore per le occorrenze, inizialmente vuoto
//       massimoConteggio: 0,     // massimo trovato, inizialmente 0
//       caratterePiuFrequente: '' // carattere più frequente trovato, inizialmente vuoto
//     });
  
//     // restituisce il carattere più frequente
//     return risultato.caratterePiuFrequente
//   }
  

//   const stringa = prompt ("Insert string")
//   console.log(caratterePiuUsato(stringa))





/*2. EXTRA  Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura 
e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti 
ritorna `false`.  */

// const stringa1 = prompt ("Insert first string")
// const stringa2 = prompt ("Insert second string")

// const anagram = (str1, str2) => {

//     return str1
//     .replace(',','') //sostituisce punteggiatura, ma solo la prima occorrenza di ogni carattere
//     .replace(' ','')
//     .replace('.','')
//     .toLowerCase()
//     .split('')
//     .sort() //ordina gli elementi dell'array in base ai valori Unicode dei caratteri
//     .join()
//     ===
//     str2
//     .replace(',','')
//     .replace(' ','')
//     .replace('.','')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join()


// }


// console.log(anagram(stringa1,stringa2))





/*3. EXTRA Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna 
un nuovo array contenente tutti gli anagrammi corretti della parola data.  
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere
 [”carenti”, “incerta”].*/

// const stringa = "cartine"
// const array = ["carenti", "incerta", "espatrio"]

// const stringa2 = "volitare"
// const array2 = ["livreato","relativo","bbbbbb", "popopopo", "rilevato","rivelato","vetriola","aaaaaa"]


// const selectAnagrams = (str, anagrams) => {
    
//     const arrayOfAnagrams =[]

//     anagrams.forEach(anagram => {

        

//         if( anagram
//         .replace(',','') //sostituisce punteggiatura, ma solo la prima occorrenza di ogni carattere
//         .replace(' ','')
//         .replace('.','')
//         .toLowerCase()
//         .split('')
//         .sort() //ordina gli elementi dell'array in base ai valori Unicode dei caratteri
//         .join()

//         ===
//         str
//         .replace(',','')
//         .replace(' ','')
//         .replace('.','')
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join()
//         )
//         {
//             arrayOfAnagrams.push(anagram)
//         }

        
//     })

// return arrayOfAnagrams


// }


// console.log(selectAnagrams(stringa2, array2))





 /*4. EXTRA Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non 
 lo è.  */

// const stringa = prompt ("Insert string")

// function checkPalindrome (str){

//     // console.log(str.toLowerCase().replace(' ','').replace(',','').replace('.',''))
//     // console.log( str.toLowerCase().replace(' ','').replace(',','').replace('.','').split('').reverse().join(''))

//     // reverse è un metodo degli array che inverte l'ordine degli elementi
//     // Lo uso dopo aver convertito una stringa in array con split.

//     return str.toLowerCase().replace(' ','').replace(',','').replace('.','')
//     ===
//     str.toLowerCase().replace(' ','').replace(',','').replace('.','').split('').reverse().join('')

// }

// console.log(checkPalindrome(stringa))





 /*5. EXTRA Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine 
 contrario. 
 Es. 189 ⇒ 981 */

// const number = parseInt(prompt ("Insert number"))

// const invertNumber = (num)=> {
//     return num.toString().split('').reverse().join('')
// }

// console.log(invertNumber(number))





 /*6. EXTRA Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console 
 una “scala” creata con il carattere “#” e avente X scalini.  
 
 Es. 
X = 2
'#'
'##'
X = 3
'#'
'##'
'###'

 */

// const number = parseInt(prompt ("Insert a positive number"))


// function createSteps(steps){

// for(let i=0; i<steps; i++){
//     let stringToPrint =''

//     for(let j=0; j<i+1; j++){
//         stringToPrint = stringToPrint + '#'


//     }
//     console.log(stringToPrint)

// }

// }

// createSteps(number)





/*7. EXTRA Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. 
Es. “Ciao” ****⇒ “oaiC” */

// const stringa = prompt ("Insert string", "Ciao")

// const invertString = (str)=> {
//     return str.split('').reverse().join('')
// }

// console.log(invertString(stringa))





/*8. EXTRA Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi 
lunghezza Y.  

Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]] 
array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]

*/

// const array1 = [1, 2, 3, 4, 5]
// const y1 = 4


// function divideArray (arr, nr_elements){

//     console.log(arr, nr_elements)
//     let arrayOfResults = []

//     for(let i=0; i<arr.length; i=i+nr_elements){

//         // prende gli elementi dell'array dall'i-esimo all'i+nr_elements-esimo -1

//         //es: 
//         // array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]
//         // i=0 ==> prende da arr[0] ad arr[4+0-1], quindi 4 elementi: 1,2,3,4
//         // i=0+4=4 ==> prende da arr[4] ad arr[4+4-1], che però non c'è perchè arr si ferma ad arr[4]

//         // Se il secondo indice è maggiore della lunghezza dell'array, slice estrae tutti gli elementi restanti 
//         // dall'indice iniziale fino alla fine dell'array senza generare errori.

//         //NB: ritorna un nuovo array, che è newArray
//         const newArray = arr.slice(i, i+nr_elements)

//         arrayOfResults.push (newArray)


//     }
// return arrayOfResults

// }


// console.log(divideArray(array1, y1))


// // NB: slice accetta anche indici negativi, parte dalla fine dell'array
// // const array = [1, 2, 3, 4, 5];
// // const parte = array.slice(-4, -1); // Estrae dal quarto ultimo elemento fino al penultimo (incluso)
// // console.log(parte); // Output: [2, 3, 4]



/*9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una 
“piramide” create con il carattere “#” e avente X strati. 

Es. 
X = 3
'#'
'###'
'#####'

*/


// const number = parseInt(prompt ("Insert a positive number"))


// function createPyramid(layers){

// for(let i=1; i<=layers; i++){
//     let stringToPrint =''
//     //console.log("i ",i)

//     for(let j=1; j<=(i*2)-1; j++){
//         stringToPrint = stringToPrint + '#'
//         //console.log("j ", j)


//     }
//     console.log(stringToPrint)

// }

// }

// createPyramid(number)





/*10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN: 

Es. 

N = 2
[[1, 2],[4, 3]]

N = 3
[[1, 2, 3],[8, 9, 4],[7, 6, 5]]

N = 4
[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]

*/


// const number = parseInt(prompt ("Insert a number"))


// function matriceASpirale(N) {
//     // Inizializza una matrice NxN piena di zeri

//     // Array.from è un metodo statico che crea un nuovo array da un oggetto simile a un array o da un oggetto iterabile.
//     // La sua sintassi è Array.from(arrayLike, mapFn), dove arrayLike è un oggetto simile a un array (come { length: N }),
//     // e mapFn è una funzione di mappatura che viene chiamata su ogni elemento dell'array risultante.

//     //L'oggetto che gli passo è la lunghezza N, la funzione di mappatura è una funzione che lo riempie di 0.
//     const matrice = Array.from({ length: N }, () => Array(N).fill(0));
    
//     //NB: matrice quadrata NxN, il limite inferiore è = al limite destro
//     let valore = 1; // Valore iniziale da inserire nella matrice
//     let top = 0; // Limite superiore
//     let bottom = N - 1; // Limite inferiore
//     let left = 0; // Limite sinistro
//     let right = N - 1; // Limite destro
  
//     while (valore <= N * N) {
//       // Riempie da sinistra a destra
//       for (let i = left; i <= right; i++) {
//         matrice[top][i] = valore++;
//       }
//       top++;
      
//       // Riempie dall'alto verso il basso
//       for (let i = top; i <= bottom; i++) {
//         matrice[i][right] = valore++;
//       }
//       right--;
      
//       // Riempie da destra a sinistra
//       for (let i = right; i >= left; i--) {
//         matrice[bottom][i] = valore++;
//       }
//       bottom--;
      
//       // Riempie dal basso verso l'alto
//       for (let i = bottom; i >= top; i--) {
//         matrice[i][left] = valore++;
//       }
//       left++;
//     }
  
//     return matrice;
//   }

//   console.log(matriceASpirale(number))