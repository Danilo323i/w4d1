/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

//Primo metodo con funzione

/*const jobTitleInput = document.getElementById("jobTitle")
const jobLocationInput = document.getElementById ("jobLocation")
const searchButton = document.getElementById ("sendSearch")
let resultList = document.getElementById ("list")
let countDisplay = document.getElementById("count")

function search(jobTitle, jobLocation){
  let inputTitle = jobTitle.toLowerCase();
  let inputLocation = jobLocation.toLowerCase();
  
  let filteredJobs = jobs.filter((job) => {
    
  
    return (
      job.title.toLowerCase().includes(inputTitle) &&
      job.location.toLowerCase().includes(inputLocation)
    );
  });
  
  let countDisplay = resultList.length;
  
  return { result: filteredJobs, count: filteredJobs.length};
}


searchButton.addEventListener('click', function(){

  resultList.innerHTML = "";

  let returnedJobs = search(jobTitleInput.value, jobLocationInput.value);

returnedJobs.result.forEach((job) =>{
  let li = document.createElement("li");
  li.textContent = `${job.title} - ${job.location}`;
  resultList.appendChild(li);
});

countDisplay.textContent = returnedJobs.count;
  
});*/




//secondo metodo, più breve ma senza funzione

/*const jobTitleInput = document.getElementById("jobTitle")
const jobLocationInput = document.getElementById ("jobLocation")
const searchButton = document.getElementById ("sendSearch")
let resultList = document.getElementById ("list")
let countDisplay = document.getElementById("count")

searchButton.addEventListener("click", () => {
  resultList.innerHTML = "";
  countDisplay.innerHTML = "";

  let jobTitle = jobTitleInput.value.toLowerCase();
  let jobLocation = jobLocationInput.value.toLowerCase();

  const listJob = jobs.filter(result =>
    (jobTitle === "" || result.title.toLowerCase().includes(jobTitle)) &&
    (jobLocation === "" || result.location.toLowerCase().includes(jobLocation))
  );

    if (listJob.length === 0) {
      resultList.innerText = "no workers found"
    } else {
      listJob.forEach((found) => {
        let result = document.createElement("li")
        result.innerText = `${found.title} - ${found.location}`;
        resultList.appendChild(result);
      });
    }

    countDisplay.innerText = `Found ${listJob.length} jobs`;
  });*/



  //terzo metodo con utilizzo di map, queryselector e l'elemento di comparazione sort

  function search(jobTitle, jobLocation) {
    let input = jobTitle.toLocaleLowerCase()
    let input2 = jobLocation.toLocaleLowerCase()
    let result = jobs.filter((element) => {
      return element.title.toLowerCase().includes(input) &&
      element.location.toLocaleLowerCase().includes(input2);
    });

    result.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      if (a.location.toLowerCase() < b.location.toLowerCase()) return -1;
      if (a.location.toLowerCase() > b.location.toLowerCase()) return 1;
      return 0;
    });

    count = result.length;

    return {
      jobs: result,
      count: count
    }
  };


  let button = document.querySelector(`#sendSearch`);
  
  button.addEventListener(`click`, function() {
    let ul = document.querySelector(`#list`);
    let count = document.querySelector(`#count`);
    ul.innerHTML = "";

    let jobTitle = document.querySelector(`#jobTitle`).value;
    let jobLocation = document.querySelector(`#jobLocation`).value;

    let returnedJobs = search(jobTitle, jobLocation);

    ul = returnedJobs.jobs.map((element) =>{


      let li = document.createElement("li");
      li.appendChild(document.createTextNode(element.title + " " + element.location));
      ul.appendChild(li);
    });

    count.innerText = `Found ${ul.length} jobs`; 
  });
