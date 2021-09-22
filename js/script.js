// Constants and Variables

 const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

 let pokeData;




// Cached Elements References

const $sprites = $("#sprites img");
const $id = $("#id");
const $name = $("#name");
const $type = $("#type");

// Event Listeners
const $form = $("form");
const $input = $("input[type='text']");
$form.on("click", handleGetPokeData);

// Functions

function handleGetPokeData(event) {

    event.preventDefault();

    const pokeName = $input.val();
    $input.val("");

    $.ajax(`${BASE_URL}${pokeName}`).then(function(data){
        pokeData = data;
        render();

    }, function (error) {
        console.log(error);
    });

    function render() {
        $sprites.attr("src", pokeData.sprites.front_default);
        // $sprites.empty();
        // $sprites.append(`<div id="sprites"><img src="${pokeData.sprites.front_default}" alt="image of Pokemon"></div>`);
        $id.text(pokeData.id);
        $name.text(pokeData.name);
        $type.text(pokeData.types[0].type.name);
        
    }
    $("#id",).css( { color: "#3C59A5", "font-weight": "bold", "font-size": "40px" } );
    $("#name",).css( { color: "#3C59A5", "font-weight": "bold", "font-size": "40px" } );
    $("#type",).css( { color: "#3C59A5", "font-weight": "bold", "font-size": "40px" } );

}