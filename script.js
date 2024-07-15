//Création des variables issues des id du fichier HTML
let myForm = document.getElementById("myForm"); 
let firstName = document.getElementById("firstName"); 
let lastName = document.getElementById("lastName"); 
let comment = document.getElementById("comment"); 
let commentList = document.getElementById("commentList"); 
console.log(firstName);
console.log(lastName);
console.log(comment);
console.log(commentList);
console.log(myForm);

//Vérification dans la console de la valeur des champs (avant l'envoi du formulaire)
function validatingFields (myFirstName, myLastName, myComment){
    if (firstName.value === ""){
        console.log("enter your first name");
    } 
    if (lastName.value === ""){
        console.log("enter your last name");
    } 
    if (comment.value === ""){
        console.log("enter your message");
    } 
};

// Empêcher le rechargement de la page au clic du bouton
let button = document.querySelector("button");
button.addEventListener("click", event => {
        event.preventDefault();
        console.log("page does not reload");
    });

//Création des nouvelles variables pour le nouveau commentaire 
let newDiv1 = document.createElement("div");
let newDiv2 = document.createElement("div");
let myH3 = document.createElement("h3");
let newDiv3 = document.createElement("div");
let newP = document.createElement("p");

button.addEventListener("click", e => {
commentList.appendChild(newDiv1);
newDiv1.setAttribute ("class", "flex space-x-4 text-sm text-gray-500");
console.log(newDiv1);

newDiv1.appendChild(newDiv2);
newDiv2.setAttribute ("class", "flex-1 py-10 border-t border-gray-200");
console.log(newDiv2);

newDiv2.appendChild(myH3);
myH3.setAttribute ("class", "font-medium text-gray-900");
console.log(myH3);

newDiv2.appendChild(newDiv3);
newDiv3.setAttribute ("class", "prose prose-sm mt-4 max-w-none text-gray-500");
console.log(newDiv3);

newDiv3.appendChild(newP);
console.log(newP);
});

//Au clic du bouton: affichage du prénom, du nom et du commentaire dans la liste des commentaires et effacement du formulaire
button.addEventListener("click", eve => {
    myH3.innerHTML = firstName.value + " " + lastName.value;
    newDiv3.innerHTML = comment.value + " ";
    myForm.reset();
});
