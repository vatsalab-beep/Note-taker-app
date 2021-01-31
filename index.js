
    let newbutton;
let arrofcolors = ["lightblue", "pink", "plum","darkseagreen", "lightyellow"];

arrofcolors.forEach((color) =>{

    let option = document.createElement("option");
    option.text = color;
    option.value = color;
    document.getElementById("colorselect").add(option);
});

let textinput;
let newdiv;
let selectinput; 
let option; 
//creates new note on click if "add note" button is clicked
document.getElementById("notebutton").addEventListener("click", function (){
    textinput = document.getElementById("textinput").value;
   
  
    console.log (option);
    if (textinput != ""  && option != "colorselector"){
    
         addNote ();
         delButton ();
    }
    else  {
        alert ("Please enter your note");
    }
   
    

});

function addNote () {

        newdiv = createNewEle("div", null, "note");
       document.querySelector(".allnotes").appendChild(newdiv);

       newbutton = createNewEle("button", "x", "delbutton");
        newdiv.appendChild(newbutton);

        let newh1 = createNewEle("h1",AddDatetoNote());
        newdiv.appendChild(newh1);

        let newp = createNewEle("p",textinput);
        newp.contentEditable="true";

        newdiv.appendChild(newp);
    
        AssignNoteColor ();

}

function AssignNoteColor (){

arrofcolors.forEach((color)=> {

    if (document.getElementById("colorselect").value == color)
    {newdiv.style.backgroundColor = color;  }
});
}
function AddDatetoNote() { 


var today = new Date ();
let d = today.getDate();
let month = today.getMonth() ;
let year = today.getFullYear();

let arrofmonths = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

for ( let x  = 0; x<arrofmonths.length; x++){

    if (month == x){

        month = arrofmonths [x];
    }
}

return month + " " + d + " " + year;
       

}  

function createNewEle (typeOf, innerhtml, classname)
{
 var sampleelement = document.createElement(typeOf);

    sampleelement.innerHTML = innerhtml;
    sampleelement.classList.add(classname);
    return sampleelement;
}

function delButton (){

document.querySelectorAll(".delbutton").forEach (item =>
    {
        item.addEventListener("click", function (){
            item.parentElement.remove();
        
        });

    })


    
}


