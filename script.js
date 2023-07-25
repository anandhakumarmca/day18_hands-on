var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0;i<data1.length;i++){
        console.log(data1[i].name);
        var div = document.createElement("div");
        div.innerHTML=`
<div class="p-2 col-lg-4 col-sm-12">
  <div class="card text-center">
    <img class="card-img-top" src="${data1[i].flags.svg}" alt="${data1[i].name}">
    <div class="card-body text-center">
    <h5 class="card-title text-center">${data1[i].name}</h5>
    <p class="card-text"> ${data1[i].region} </p>
    <p class="card-text">${data1[i].subregion}</p>
    </div>
  </div>
      `;
        document.body.append(div);
    }
});
