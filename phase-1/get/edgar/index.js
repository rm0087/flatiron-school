fetch("https://data.sec.gov/api/xbrl/companyconcept/CIK0000320193/us-gaap/AccountsPayableCurrent.json")
.then((response)=> {return response.json();})
.then(account => {
    const accountsPayable = account.cik;
    console.log(accountsPayable);
})