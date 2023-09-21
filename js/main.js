$(function () {
  window.addEventListener("resize", () => {
    $("#light_box").css({ left: "-100%" });
  });

  $(window)
    .resize(function () {
      if (window.innerWidth > 767) {
        $("#nav_li").css({ display: "" });
      } else {
        $("#nav_li").css({ display: "none" });
        var swiper = new Swiper(".mySwiper", {
          effect: "cards",
          grabCursor: true,
        });
      }
    })
    .resize();
  $("#bars").on("click", function () {
    $("#nav_li").slideToggle();
  });

  $(".light_show>img").on("click", function () {
    let newSrc = $(this).attr("src");
    $("#light_img").attr("src", newSrc);
    $("#light_box").css({ left: 0 });
  });
  $("#btn2").on("click", function () {
    $("#light_box").css({ left: "-100%" });
  });
});
