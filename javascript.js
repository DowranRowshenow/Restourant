function onMenuClick()
{
    var navMenu = document.getElementById("navMenu");
    var navBar = document.getElementById("navBar");
    if (navMenu.textContent == "× Menu")
    {
        navMenu.textContent = "☰ Menu";
    }
    else
    {
        navMenu.textContent = "× Menu";
    }
}