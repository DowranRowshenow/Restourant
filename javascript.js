function onMenuClick()
{
    var navMenu = document.getElementById("navMenu");
    var navBar = document.getElementById("navBar");
    if (navMenu.textContent == "× Menu")
    {
        navMenu.textContent = "☰ Menu";
        navBar.style.height = "0px";
    }
    else
    {
        navMenu.textContent = "× Menu";
        navBar.style.height = "auto";
    }
}