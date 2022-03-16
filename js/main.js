$(document).ready(function(){
  $('.playing_list').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
          
        }
      }
    ]
  });

  $('.playlist_list').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.music_list').slick({
    dots: true,
    infinite: false,
    fade: false,
    cssEase: 'linear',
    arrows: false
  });
});