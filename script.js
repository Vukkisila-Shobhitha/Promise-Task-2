let coin= document.getElementById('coin')
var coin_url='https://date.nager.at/api/v3/publicholidays/2017/AT'

async function coin_fetching(){
    try{
        var url_fetch=await fetch(coin_url)
        method:"GET"
    var res= await url_fetch.json()
    // console.log(res);
    res.forEach((coins)=>{
        let li =document.createElement('h3')
        li.innerText=coins.name
        coin.appendChild(li) 
        let hi =document.createElement('h3')
        hi.innerText=coins.date
        coin.appendChild(hi)
    })
  
}
    catch(err){
        console.log(err);
      
        }   
}
coin_fetching()