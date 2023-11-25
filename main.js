let cl = document.querySelector("#btnn");
let txt = document.querySelector("#intxt");
let ul = document.querySelector("ul");
let h1 = document.querySelector("h1");

ul.innerHTML = window.localStorage.getItem("List");

document.addEventListener("click", function( event )
{
    if( event.target.tagName === "SPAN" )
    {
        event.target.parentElement.remove();
    }
    else if( event.target.tagName === "LI" )
    {
        if( event.target.className === "checked" )
            event.target.className = "";
        else
            event.target.className = "checked";
    }
    else if( event.target.className === "btn" )
    {
        if( txt.value !== "" )
        {
        let newEl = document.createElement("li");
        let span = document.createElement("span");
        newEl.textContent = txt.value;
        span.innerHTML = "\u00d7";
        newEl.appendChild(span);
        ul.appendChild(newEl);
        txt.value = "";
        }
    }
    store();
});

let store = function()
{
    window.localStorage.setItem("List", ul.innerHTML);
}