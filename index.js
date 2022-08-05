const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1 = document.getElementById("p1");
let pass2 = document.getElementById("p2");
function generate(){
    let password1 = "";
    let password2 = "";
    for(let i = 0; i<15 ; i++){
        let index = Math.floor(Math.random()*characters.length)
        password1+=characters[index]
        index = Math.floor(Math.random()*characters.length)
        password2+=characters[index]
    }
    pass1.textContent=password1;
    pass2.textContent=password2;
}



