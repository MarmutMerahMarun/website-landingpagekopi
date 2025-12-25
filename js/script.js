document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('subscribeForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert('Masukkan email yang valid.');
        return;
      }
      try{ localStorage.setItem('kopikana_subscribe', JSON.stringify({email, at:Date.now()})); }catch(_){}
      form.reset();
      alert('Terima kasih! Kami akan mengirimkan info ke email Anda.');
    });
  }
});
