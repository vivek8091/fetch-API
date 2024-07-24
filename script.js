const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// Using Async & Await... (Much simplier and easy to read)
const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response.status);
    let data = await response.json();
    console.log(data);
    factPara.innerText = data[1].text;
}



//  Using Promice Chaining...
// const getFacts = () => {
//     fetch(URL).then((res) => {
//         return res.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data[2].text;
//     });
// }
btn.addEventListener("click",getFacts);
