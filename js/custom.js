$(document).ready(function(){$(".preloader").fadeOut(),$(".mintaokVideo").bind("contextmenu",function(){return!1}),$(".career-position").click(function(){var e=this.id;$(this).hasClass("open")||($(".career-details").slideUp(),$(".career-position").removeClass("open")),$("."+e).slideToggle("slow"),$(this).toggleClass("open")}),$(".backtotop").on("click",function(){$("html, body").animate({scrollTop:0},1e3)}),$(window).scroll(function(){40<$(this).scrollTop()?$("header").addClass("stickyheader"):$("header").removeClass("stickyheader"),100<$(this).scrollTop()?$(".backtotop").fadeIn():$(".backtotop").fadeOut()}),$(".menuBtn").on("click",function(){$(this).toggleClass("actMenuBtn"),$(".navbar").slideToggle()}),$(".navbar ul li p a").on("click",function(){$(".navbar ul li p a span").removeClass("activeLink"),$(this).find("span").addClass("activeLink")}),$(".popoverlay,.closepop").on("click",function(){$(".popoverlay,.smartpopup").fadeOut()}),$(".openPopup").on("click",function(){$(".popoverlay,.smartpopup").fadeIn()}),$(window).width()<940&&$(".navbar ul li p a").on("click",function(){$(".menuBtn").removeClass("actMenuBtn"),$(".navbar").slideUp()}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);(o=o.length?o:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:o.offset().top},1e3,function(){var e=$(o);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}})});