
function card() {

    document.getElementById("card-info").classList.add('visible');
    document.getElementById("pix-info").classList.remove('visible');
    document.getElementById("paypal-info").classList.remove('visible');
}


function pixo() {
    document.getElementById("card-info").classList.remove('visible');
    document.getElementById("paypal-info").classList.remove('visible');
    document.getElementById("pix-info").classList.add('visible');
  }
  

  function paypale() {
    document.getElementById("card-info").classList.remove('visible');
    document.getElementById("pix-info").classList.remove('visible');
    document.getElementById("paypal-info").classList.add('visible');
  }

  function resetcards() {
    document.getElementById("card-info").classList.remove('visible');
    document.getElementById("pix-info").classList.remove('visible');
    document.getElementById("paypal-info").classList.remove('visible');
  }



  
  function validateForm() {
    var a = document.forms["Form"]["email"].value;
    var b = document.forms["Form"]["nome"].value;
    var c = document.forms["Form"]["password"].value;
    var d = document.forms["Form"]["password2"].value;
    if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "") {
      alert("Por favor preencha o formulario!");
      return false;
      
    }

    
    // modal
var modal = document.getElementById("myModal");


var img = document.getElementById("submit");
var modalImg = document.getElementById("img01");
 img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src = "Vlw.png";

}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}


  }
