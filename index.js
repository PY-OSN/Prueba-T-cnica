const apiButton = document.getElementById('apiButton');
const apiData = document.getElementById('apiData')
const apiButton1 = document.getElementById('apiButton1');
const apiData1 = document.getElementById('apiData1')


const callAPI = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1302')
    .then(res => res.json())
    .then (data => {
        apiData.innerText = JSON.stringify(data);

    })
 
}   

const callAPI1 = () => {
    fetch('https://pokeapi.co/api/v2/type/')
    .then(res => res.json())
    .then (data => {
        apiData1.innerText = JSON.stringify(data);

})
    
    .catch(e => console.error(new Error(e)));

}
apiButton.addEventListener('click', callAPI);
apiButton1.addEventListener('click', callAPI1);

