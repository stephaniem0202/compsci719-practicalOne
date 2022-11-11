window.addEventListener("load", function () {

    // TODO (B) Create a function called addCard(), which takes a single concert as an argument and adds a card to the
    // #container div to display that concert to the user. For reference, a card's HTML looks like:
    /*

        <div class="card">
            <div class="card-header"><a href="CONCERT_URL"><img class="card-image" src="./assets/CONCERT_IMAGE_NAME"></a></div>
            <div class="card-body">
                <h1 class="card-title">CONCERT_NAME</h1>
                <p class="card-text">CONCERT_DESCRIPTION</p>
            </div>
        </div>

    */


    function addCard(concert){
        const container = document.querySelector("#container");

        const divCardContainer = document.createElement("div");
        divCardContainer.classList= "card";
        divCardContainer.innerHTML += `<div class="card-header"><a href="${concert.url}"><img class="card-image" src="./assets/${concert.imageName}"></a></div>`;
        divCardContainer.innerHTML += `<div class="card-body">
                                    <h1 class="card-title">${concert.name}</h1>
                                    <p class="card-text">${concert.description}</p>
                                </div>`;    
                                
                                
        container.append(divCardContainer);
    }


    // TODO (C) Loop through all concerts in the concerts array (see question3-concerts.js). For each one,
    // call the addCard() function, supplying that concert as a parameter.

    // concerts.forEach(element => {
    //     addCard(element);
    // });





    let i = 0;                  

    function loadDelay() {         
    setTimeout(function() {   
        addCard(concerts[i]);   
        i++;                    
        if (i < concerts.length) {          
        loadDelay();             
        }                       
    }, 200)
    }

    loadDelay();  


});

