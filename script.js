
function elementClick() {

  var navItem = $(".navbar-item-i");
  navItem.click(function() {

    console.log("click");

    var me = $(this);
    me.children(".navbar-item-ii").slideToggle();
  });

}

function init() {

  console.log("ok");
  elementClick();
}

$(document).ready(init);
