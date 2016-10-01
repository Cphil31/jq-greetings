
$("button").click (function(){
var space={
//recuperer la valeur des champs
	prenom : $("#first_name").val(),
	nom : $("#last_name").val(),
	city : $("#city").val(),
	de : $("#de").val(),
}

//selectionner un champ

$("#username").text(space.prenom + " " + space.nom+ " " + "de" + " " + space.city);


console.log(ok
)


});

