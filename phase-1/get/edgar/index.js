/*fetch("https://data.sec.gov/api/xbrl/companyconcept/CIK0000320193/us-gaap/AccountsPayableCurrent.json")
.then((response)=> {return response.json();})
.then(account => {
    const accountsPayable = account;
    console.log(accountsPayable);
})
*/

document.querySelector("#stock-form").addEventListener("submit",(event)=>{
    let ticker = event.target["ticker-input"].value.toUpperCase();
    let zeroes ="";
    event.preventDefault();
    event === "submit";
    fetch("https://api.polygon.io/v3/reference/tickers/"+ticker+"?apiKey=1N9taZpI2W8P93B4H2WNYn3Fjk4aF0M0")
    .then((response)=> {return response.json();})
    .then(convertedResponse=>{
        
        const marketCap = new Intl.NumberFormat('en-US').format(convertedResponse.results.market_cap);
        document.querySelector("#market-cap").textContent = "$"+marketCap;
        
        
        //const logo = convertedResponse.results.branding.logo_url;
       
        //DO NOT DELETE BELOW
        //const price = convertedResponse.results[0].c;
        //document.querySelector("#price").textContent = price;
        //document.querySelector("#volume").textContent = volume;
    });
    
    //fetch request to polygon.io API to retrieve basic data about selected company
    
    //use CORS proxy to facilitate request from: https://corsproxy.io/?https%3A%2F%2Fwww.sec.gov%2Ffiles%2Fcompany_tickers_exchange.json
    fetch("https://corsproxy.io/?https%3A%2F%2Fwww.sec.gov%2Ffiles%2Fcompany_tickers_exchange.json")
    .then((response)=>{return response.json();})
    .then(findCik =>{
        findCik.data.forEach((cikEntry)=>{
            if (cikEntry[2] === ticker){
                const cik = cikEntry[0].toString();
                console.log(cik);
                
                const cikDiff = 10-cik.length;
                for (let i =0; i<cikDiff; i++){
                zeroes +="0";
                }
                convertedCik = zeroes+cik;
                console.log(convertedCik);
                
                //use CORS proxy to facilitate request from: https://data.sec.gov/api/xbrl/companyfacts/CIK0000320193.json
                fetch(`https://corsproxy.io/?https%3A%2F%2Fdata.sec.gov%2Fapi%2Fxbrl%2Fcompanyfacts%2FCIK${convertedCik}.json`)
                .then((response)=>{return response.json();})
                .then(companyFacts=>{
                console.log(companyFacts.facts);
                console.log(companyFacts.facts[`us-gaap`]);
                const entityName = companyFacts.entityName;
                const sharesOutstandingLength = companyFacts.facts.dei.EntityCommonStockSharesOutstanding.units.shares.length;
                const sharesOutstanding = new Intl.NumberFormat('en-US').format(companyFacts.facts.dei.EntityCommonStockSharesOutstanding.units.shares[sharesOutstandingLength-1].val);
                
                document.querySelector("#shares-outstanding").textContent = sharesOutstanding;
                document.querySelector("#stock-quote-header").textContent = `${ticker} - ${entityName}`;
                
                const cashAndEquivLength = companyFacts.facts[`us-gaap`].CashAndCashEquivalentsAtCarryingValue.units.USD.length;
                const cashAndEquiv = new Intl.NumberFormat('en-US').format(companyFacts.facts[`us-gaap`].CashAndCashEquivalentsAtCarryingValue.units.USD[cashAndEquivLength-1].val);
                const cashDate = companyFacts.facts[`us-gaap`].CashAndCashEquivalentsAtCarryingValue.units.USD[cashAndEquivLength-1].end;
                document.querySelector("#cash").textContent = "$"+cashAndEquiv+" as of "+cashDate;
                console.log(Object.keys(companyFacts.facts[`us-gaap`]).length);

                const revenueLength = companyFacts.facts[`us-gaap`].RevenueFromContractWithCustomerExcludingAssessedTax.units.USD.length;
                const revenue = new Intl.NumberFormat('en-US').format(companyFacts.facts[`us-gaap`].RevenueFromContractWithCustomerExcludingAssessedTax.units.USD[revenueLength-1].val);
                const revenueDate = companyFacts.facts[`us-gaap`].RevenueFromContractWithCustomerExcludingAssessedTax.units.USD[revenueLength-1].end;
                document.querySelector("#revenue").textContent = revenue;

                const cogsLength = companyFacts.facts[`us-gaap`].CostOfGoodsAndServicesSold.units.USD.length;
                const cogs = new Intl.NumberFormat('en-US').format(companyFacts.facts[`us-gaap`].CostOfGoodsAndServicesSold.units.USD[cogsLength-1].val);
                document.querySelector("#cogs").textContent = cogs;
                
                const grossProfitLength = companyFacts.facts[`us-gaap`].GrossProfit.units.USD.length;
                const grossProfitVal = new Intl.NumberFormat('en-US').format(companyFacts.facts[`us-gaap`].GrossProfit.units.USD[grossProfitLength-1].val);
                console.log(document.querySelector("#gross-profit").textContent);
                document.querySelector("#gross-profit").textContent = grossProfitVal;

                const opExLength= companyFacts.facts[`us-gaap`].OperatingExpenses.units.USD.length;
                const opEx = new Intl.NumberFormat('en-US').format(companyFacts.facts[`us-gaap`].OperatingExpenses.units.USD[opExLength-1].val);
                document.querySelector("#op-ex").textContent = opEx;
                    
                const netIncomeLength = companyFacts.facts[`us-gaap`].NetIncomeLoss.units.USD.length;
                const netIncome = new Intl.NumberFormat('en-US').format(companyFacts.facts[`us-gaap`].NetIncomeLoss.units.USD[netIncomeLength-1].val);
                document.querySelector("#net-income").textContent = netIncome;
            
                });
            };
        });
    });
});   

/*category length and category value templates
                const changeMe1 = companyFacts.facts[`us-gaap`].CHANGEME.units.USD.length;
                const changeMe2 = new Intl.NumberFormat('en-US').format(companyFacts.facts[`us-gaap`].CHANGEME.units.USD[Length-1].val);
                document.querySelector("#change-me").textContent = grossProfit;
*/

