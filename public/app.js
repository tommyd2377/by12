function toggle() {
    var mainFrameOne = document.getElementById("mainFrameOne"); 
    var mainFrameTwo = document.getElementById("mainFrameTwo");

    mainFrameOne.style.display = (
        mainFrameOne.style.display == "none" ? "block" : "none"); 
    mainFrameTwo.style.display = (
        mainFrameTwo.style.display == "none" ? "block" : "none"); 
}