
$("button").click (function(){
//recuperer la valeur des champs
var space={
	//selectionner un champ
	prenom : $("#first_name").val(),
	nom : $("#last_name").val(),
	city : $("#city").val(),
}

$("#username").text(space.prenom + " " + space.nom);


console.log(space)


});

