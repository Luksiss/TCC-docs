

function card() {
    document.getElementById("card-info").classList.add('blocko');
    document.getElementById("pix-info").classList.remove('blocko');
    document.getElementById("paypal-info").classList.remove('blocko');
}


function pixo() {
    document.getElementById("card-info").classList.remove('blocko');
    document.getElementById("paypal-info").classList.remove('blocko');
    document.getElementById("pix-info").classList.add('blocko');
  }
  

  function paypale() {
    document.getElementById("card-info").classList.remove('blocko');
    document.getElementById("pix-info").classList.remove('blocko');
    document.getElementById("paypal-info").classList.add('blocko');
  }