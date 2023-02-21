const searchForm=document.querySelector('form');
const searchResultDiv=document.querySelector('.search-result');
const container=document.querySelector('.container');
let searchQuery="";
const api_id="e724134e";
const api_key="7248e23c3a665c9f32dbfb3cb847ddbf";

searchForm.addEventListener("submit",(e)=>{
    
    
    


    
    e.preventDefault();
    searchQuery= e.target.querySelector("input").value;
    fetchAPI();
    
});
async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${api_id}&app_key=${api_key}&from=0&to=20`;
    const response = await fetch(baseURL);
    const data = await response.json();
    // console.log(response);
    generateHTML(data.hits);
    console.log(data);
  }
  function generateHTML(results){
      let generatedHTML="";
      results.map(result=>{

        generatedHTML+=
        `
        <div class="item">
                    <img src="${result.recipe.image}" alt="">
                    <div class="flex-container">
                    <h1 class="title">${result.recipe.label}</h1>
                        <a href="${result.recipe.url}" target="_blank " class="view-btn" >view recipe</a>
                    </div>
                    <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
                </div>`
      })
      searchResultDiv.innerHTML=generatedHTML;
  }