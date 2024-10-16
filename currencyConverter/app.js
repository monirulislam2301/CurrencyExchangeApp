const baseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdown = document.querySelectorAll(".form select");
const exchangeBtn = document.querySelector(".btn");
const fromCurrency = document.querySelector(".fromSelect");
const toCurrency = document.querySelector(".toSelect");
const text = document.querySelector(".text");
const swapBtn = document.querySelector("#swap");

    

for( let select of dropdown){
    for(let code in countryList)
        {
         let newOption = document.createElement("option");
         newOption.innerText=code;
         newOption.value= code;
         select.append(newOption);
        if(select.name==="from" && code=="USD")
            {
                newOption.selected = "selected";
            }
        else if(select.name==="to" && code=="BDT")
            {
                newOption.selected = "selected";
            }           
        }
    select.addEventListener("click",updateFlag);
        

}

function updateFlag(element)
{
    let code = element.target.value;
    let flagCode = countryList[code];
    let newImage =`https://flagsapi.com/${flagCode}/flat/64.png`;

    if(element.target.name==="from")
        {
            let fromImg = document.querySelector(".fromImg");
            fromImg.src = newImage;
        }else if (element.target.name==="to")
            {
                let toImg = document.querySelector(".toImg");
                 toImg.src = newImage;
            }


}


async function getExchangeRate(element)
{
    element.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(amountVal==="" || amountVal<1){
    amountVal=1;
    amount.value="1"
    }

    let url = `${baseUrl}/${fromCurrency.value.toLowerCase()}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let fromCurrencyCode = fromCurrency.value.toLowerCase();
    console.log(fromCurrencyCode);
    let toCurrencyCode = toCurrency.value.toLowerCase();
    console.log(toCurrencyCode);
    let rate = (data[fromCurrencyCode])[toCurrencyCode];
    let exRate =rate*amount.value;
    text.innerText = `${amount.value} ${fromCurrencyCode.toUpperCase()} = ${exRate} ${toCurrencyCode.toUpperCase()}`;

    
}

//changing from and to currency using the swap button
function swapCurrency()
{

    let temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    updateFlag({ target: fromCurrency });
    updateFlag({ target: toCurrency });
}


//eventListeners
exchangeBtn.addEventListener("click",getExchangeRate);
swapBtn.addEventListener("click",swapCurrency); 






