// ÉTOILE :

window.onload = () => {
    const etoiles = document.querySelectorAll (".la-star") ; //on récupère les étoiles  de l'html
    
    const note = document.getElementById("note") ; //on récupère la valeurs des notes de l'html
   
    //création d'une boucle pour les évenements liées à la notation
    for (star of etoiles) {
   
        star.addEventListener("mouseover", function(){ //evenements au survol
            resetStars();
           this.style.color = "yellow"; //devient yellow au survol
   
            var précédent = this.previousElementSibling;
   
            while(précédent){
                précédent.style.color = "yellow"; //l'étoile qui précede devient yellow aussi
                précédent = précédent.previousElementSibling; //récupération de l'etoile précédente
            }
        });
   
        // On prend en compte le clique
        star.addEventListener('click', function(){
            note.value = this.dataset.value; //la note change en fonction de la valeurs de l'etoile sur laquelle on clique
        });
   
        star.addEventListener('mouseout', function(){
            resetStars(note.value) //utilisation de la fonction reset stars
        })
   
    }
   
    function resetStars (nb = 0){ // soit c'est 0 soit c'est la note
       for (star of etoiles) { 
           if (star.dataset.value > nb ){ //si la valeur de l'etoile est plus grand que le nombre
           star.style.color = "white"; //alors etoile est white
           }else{
               star.style.color ="yellow";
           }
       }
    }
   
   }


   //ANIMATION barre

   window.onscroll = function (){
       if(document.documentElement.scrollTop > 700){

       var lien = document.querySelector('a') ;

           document.getElementById('navigation').style.background = 'white' ;
           document.getElementById('o').style.color = 'black' ;
           lien.style.color = 'black' ;
       }
       else{
        document.getElementById('navigation').style.background = 'black' ;
        document.getElementById('o').style.color = 'white' ;
        lien.style.color = 'white' ;
       }
   }

 