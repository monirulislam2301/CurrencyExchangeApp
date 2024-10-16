// practice on API: application programming Interface

//Fetch API

const URL = "https://api.chucknorris.io/jokes/random";
const factPath = document.querySelector("#fact")
const btn = document.querySelector("#btn");


const getFacts= async () =>
{
    console.log("getting facts...");
    let response = await fetch(URL,Options.POST);
    console.log(response);   // JSON format
    let data = await response.json();
    console.log(data.value);
    factPath.textContent = data.value;
}
    //fetch(URL ,[options])
    //by default fetch uses GET request as options
getFacts();
btn.addEventListener("click",getFacts)// get different fact on click


