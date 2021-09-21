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
        $sprites.text(pokeData.sprites);
        $id.text(pokeData.id);
        $name.text(pokeData.name);
        $type.text(pokeData.type);
    }


}