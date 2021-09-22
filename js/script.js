// Constants and Variables

 const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

 let pokeData;




// Cached Elements References

const $sprites = $("#sprites");
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
        // $("img").attr({src:""})
        $sprites.empty();
        $sprites.append(`<div id="sprites"><img src="${pokeData.sprites.front_default}" alt="image of Pokemon"></div>`);
        $id.text(pokeData.id);
        $name.text(pokeData.name);
        $type.text(pokeData.types[0].type.name);
        
    }


}