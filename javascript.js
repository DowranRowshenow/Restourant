function onMenuClick()
{
    var element = document.getElementById("mainNavBar");
    var menu = document.getElementById("menuButton");
    if (element.style.visibility == "visible")
    {
        element.style.visibility = "hidden";
        element.style.height = 0;
        menu.textContent = "☰ Menu";
    }
    else
    {
        element.style.visibility = "visible";
        element.style.height = "auto";
        menu.textContent = "× Menu";
    }
}