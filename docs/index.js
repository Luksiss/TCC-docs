
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

  if (document.getElementById("card-info").classList.contains('visible')){





  }

 