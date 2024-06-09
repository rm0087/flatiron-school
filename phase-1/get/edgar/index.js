/*fetch("https://data.sec.gov/api/xbrl/companyconcept/CIK0000320193/us-gaap/AccountsPayableCurrent.json")
.then((response)=> {return response.json();})
.then(account => {
    const accountsPayable = account;
    console.log(accountsPayable);
})
*/
document.querySelector("#stock-form").addEventListener("submit",(event)=>{
    event.preventDefault();
    event === "submit";
    
    //fetch request to polygon.io API to retrieve basic data about selected company
    let ticker = event.target["ticker-input"].value.toUpperCase();

    fetch("https://corsproxy.io/?https%3A%2F%2Fwww.sec.gov%2Ffiles%2Fcompany_tickers_exchange.json")
    .then((response)=>{return response.json();})
    .then(findCik =>{
        findCik.data.forEach((findCik)=>{
            
        });
        console.log(cik);
    });

    fetch("https://api.polygon.io/v2/aggs/ticker/"+ticker+"/prev?adjusted=true&apiKey=1N9taZpI2W8P93B4H2WNYn3Fjk4aF0M0")
    .then((response)=> {return response.json();})
    .then(convertedResponse=>{
        console.log(convertedResponse.results[0].c);
        const volume = convertedResponse.results[0].v;
        const price = convertedResponse.results[0].c;
        document.querySelector("#price").textContent = price;
        document.querySelector("#volume").textContent = volume;

    });
    
    //use CORS proxy to facilitate request from: https://data.sec.gov/api/xbrl/companyfacts/CIK0000320193.json
    fetch("https://corsproxy.io/?https%3A%2F%2Fdata.sec.gov%2Fapi%2Fxbrl%2Fcompanyfacts%2FCIK0000320193.json")
    .then((response)=>{return response.json();})
    .then(companyFacts=>{
        const entityName = companyFacts.entityName;
        console.log(companyFacts.entityName);
        document.querySelector("#stock-quote-header").textContent = `${ticker} - ${entityName}`;
    });
    
    //changes header to stock ticker symbol (i.e. AAPL, NVDA, BABA etc).
    
});   
   