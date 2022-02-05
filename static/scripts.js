/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function changeNav() {
    if(document.getElementById("mySidebar").style.width === "300px") {
        document.getElementById("mySidebar").style.width = "0";
    } else {
        document.getElementById("mySidebar").style.width = "300px"
    }
    console.log("yay");
}