// Constants and Variables

 const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";


// Cached Elements References

const $sprites = $("#sprites img");
const $id = $("#id");
const $name = $("#name");
const $type = $("#type");
const $info = $("#info");

// Event Listeners
const $form = $("form");
const $input = $("input[type='text']");
$info.hide();
$form.on("click", handleGetPokeData);

// Functions
function render(pokeData) {
    $sprites.attr("src", pokeData.sprites.front_default);
    // $sprites.empty();
    // $sprites.append(`<div id="sprites"><img src="${pokeData.sprites.front_default}" alt="image of Pokemon"></div>`);
    $id.text(pokeData.id);
    $name.text(pokeData.name);
    $type.text(pokeData.types[0].type.name);
    $info.show();

}

function restyle(pokeData) {
    if(pokeData.types[0].type.name === "water") {
        $("body",).css( { "background-color": "#3C59A5"} );
        $("#id",).css( { color: "white","font-weight": "bold", "font-size": "40px"} );
        $("#name",).css( { color: "white", "font-weight": "bold", "font-size": "40px"} );
        $("#type",).css( { color: "white","font-weight": "bold", "font-size": "40px"} );
    
    }else {
        $("body",).css( { "background-color": "#FFCC03"} );
        $("#id",).css( { color: "#3C59A5", "font-weight": "bold", "font-size": "40px"} );
        $("#name",).css( { color: "#3C59A5", "font-weight": "bold", "font-size": "40px"} );
        $("#type",).css( { color: "#3C59A5", "font-weight": "bold", "font-size": "40px"} );
    }
}
function handleGetPokeData(event) {

    event.preventDefault();

    const pokeName = $input.val();
    $input.val("");

    $.ajax(`${BASE_URL}${pokeName}`).then(function(data){
        
        render(data);
        restyle(data);

    }, function (error) {
        console.log(error);
    });

    


    

    // I want a function that changes the background color depending on the type of Pokemon

    //EXAMPLES:
    // if the Pokemon is a water type change background to blue
    // if the Pokemon is a fire type change background to red
    // if the Pokemon is a electric type change background to yellow
    // if the Pokemon is a grass type change background to green

   

    

}