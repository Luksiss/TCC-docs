
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
      alert("Por favor preencha o formulrio");
      return false;
    }
    window.location.href="Index.html";
  }
 