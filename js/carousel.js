if (window.matchMedia("(max-width: 991px)").matches) {
  $(".box-noticias").slick({
    dots: false,
    infinite: false,
      arrows: false,
    autoplay: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

