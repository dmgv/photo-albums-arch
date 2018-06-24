import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import baguetteBox from "baguettebox.js";
import "./scss/main.scss";

baguetteBox.run(".grid-gallery", { animation: "slideIn" });

$(document).ready(() => {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
    $(this).toggleClass("active");
  });
});
