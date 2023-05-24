// loader js
$(window).on("load", function () {
    $(".loader-container").delay(300).fadeOut(1000);
});

// Active Link
$(".navbar-m .links .link-ac").each(function () {
    if (window.location.href.includes($(this).attr("href"))) {
      $(this).addClass("active");
    }
});

window.addEventListener('scroll', function(){

  if( window.scrollY > 135){
      $('.navbar-m').addClass('big')
    }else{
      $('.navbar-m').removeClass('big')
  }
});

// Go To Up
let upBtn = document.querySelector('.up-btn');

window.addEventListener('scroll', function(){
    // Go To UpBtn Show
    if( window.scrollY > 80){
        upBtn.classList.add('active')
      }else{
        upBtn.classList.remove('active')
    }
});

// clicked to top
upBtn.addEventListener('click', function(){
    window.scrollTo(0,0);
});

// Show And Hide Search Navbar
$('.search-open').on('click', function(){
  $('.main-search').addClass('active');
  $('.overlay-m').fadeIn(600);
});

// SideBar
$('.side-open').on('click', function(){
  $('.links').addClass('active');
  $('.overlay-m').fadeIn(600);
});

$('.close').on('click', function(){
  $('.links').removeClass('active');
  $('.overlay-m').fadeOut(500);
});


// User Account filter
$('.open-filter').on('click', function(){
  $('.flex-1').addClass('open');
  $('.overlay-m').fadeIn(500);
})

$('.overlay-m').on('click', function(){
  $('.main-search').removeClass('active');
  $('.links').removeClass('active');
  $(".side-filter-cards").removeClass('open-side');
  $('.side-links-con').removeClass('open');
  $('.flex-1').removeClass('open');
  $(this).fadeOut(500);
});


// dropDown stopPropagation
$(".dropdown-menu").click(function(e){
    e.stopPropagation();
});


let isRtl = $('html[lang="ar"]').length > 0;

// Normal Select To
$(".select").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
});


// Search Select To
$(".select-search").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
  theme: "custom-option-select-me"
});

// Filter Select To
$(".select-filter").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
  theme: "filter-m"
});