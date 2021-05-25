function scrollFunc() {
    let e = document.getElementById("life");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }

  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('#back-to-top').css("display","block");
        } else {
          $('#back-to-top').css("display","none");
        }
      });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 400);
        return false;
      });
  