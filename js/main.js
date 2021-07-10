var elSiteHeaderSection = document.querySelector(".header");
var elSiteHeaderToggle = elSiteHeaderSection.querySelector(".site-header__toggler");



if( elSiteHeaderToggle){
  elSiteHeaderToggle.addEventListener("click", function(){
    elSiteHeaderSection.classList.toggle("header-open");
  });
}