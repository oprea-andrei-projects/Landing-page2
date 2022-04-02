let mainArea = document.querySelector('.mainArea');

let btnArea = document.querySelector('.butoane');

let modalArea = document.querySelector('.modal');


function createCard(obj){

    let mySection=document.createElement('section');

    mySection.classList.add('cutie');


    mySection.innerHTML = `
    
    
        <img class="s1_img s_img" src=${obj.picture}>
        <div class="box5">
            <h3>${obj.title}</h3>
            <p class="s1_p s_p">${obj.description}</p>
        </div>
            
    
    
    `

    return mySection;


}

function populateSections(arr){

    let continut = [];

    arr.forEach(element => {

        continut.push(createCard(element));
        
    });


    return continut;
}

function introduceSections(arr){


    mainArea.innerHTML="";

    populateSections(arr).forEach(element=>{

        mainArea.appendChild(element);

    })



}


function addButtons(number){

    let butoane=[];

    for(let i=1; i<=number; i++){

        let buton = document.createElement('input');
        buton.type = 'button';
         buton.classList.add('btnPagina');
        buton.value = i;

        butoane.push(buton);
    }

    return butoane;

}

function populateWithButtons(number){

    let buttonSection = document.querySelector(".butoane");

    buttonSection.innerHTML="";

    addButtons(number).forEach(e=>{

        buttonSection.appendChild(e);


    });

}

function detNoOfBtns(arr){

    return arr.length%2==0 ? arr.length/2 : arr.length/2 +1;

}

function paginatie(arr,pageNo, cardsPerPage){

    let newArr=[];

    for(i=(pageNo-1)*cardsPerPage; i<= pageNo*cardsPerPage-1 && i<arr.length; i++){

        newArr.push(arr[i]);
    }

    return newArr;

}

function populateCardsPerPage(arr, pNr){


    introduceSections(paginatie(arr,pNr,2));

}


btnArea.addEventListener("click", (e)=>{

    let obj = e.target;

    populateCardsPerPage(data,obj.value);

});

modalArea.style.display = "none"; 


function createModal(obj){


    modalArea.innerHTML=`
    
    
    <img class="modal-img" src=${obj.picture}>

    <div class="modal-cutie">
        <h3 class="modal-titlu">${obj.title}</h3>
        <p class="modal-descriere">${obj.description}</p>

    </div>

   <svg class="stanga" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"/></svg>
   <svg class="dreapta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"/></svg>
   <svg class="inchide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
    
    
    
    
    `

    return modalArea;



}

function filtrare(arr ,text){

    let objects= arr.filter(
        e=>e.title.includes(text));

    return objects;

}

mainArea.addEventListener("click", (e)=>{

    let obj = e.target;

    let keyWord = mainArea.children[1].children[1].children[0].innerText;

 

    if(obj.classList.contains("s_img")){

        createModal(filtrare(data,keyWord)[0]).style.display = "block"; 

    }

});



modalArea.addEventListener("click", (e)=>{

    let obj=e.target;

    if(obj.classList.contains("inchide")){


        modalArea.style.display = "none"; 

    }



})











