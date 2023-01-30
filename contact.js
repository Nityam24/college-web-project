var form = document.getElementById("form");

      form.addEventListener('submit', function(e){ 
        e.preventDefault();
         var alert = document.getElementById("alert");
         alert.innerHTML="Your message has been deliver successfully";
      })