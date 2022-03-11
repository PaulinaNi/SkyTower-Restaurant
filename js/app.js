const navOpenImg = document.getElementById("navOpenImg")
const navCloseImg = document.getElementById("navCloseImg")
const mobileLinksLi = Array.from(document.querySelectorAll(".mobileLinksLi"))
const mobileLinks = Array.from(document.querySelectorAll(".mobileLinks"))

function openMenu(){
 navOpenImg.classList.add("hide")
 navCloseImg.classList.remove("hide")
 mobileLinksLi.map(li => li.classList.remove("hide"))
}

function closeMenu(){
 navCloseImg.classList.add("hide")
 navOpenImg.classList.remove("hide")
 mobileLinksLi.map(li => li.classList.add("hide"))
}

navOpenImg.addEventListener("click", openMenu)

navCloseImg.addEventListener("click", closeMenu)

mobileLinks.map(link=> link.addEventListener("click", closeMenu))


//Contact form disabled
const form = document.getElementById("form")
const submitMessage = document.getElementById("submitMessage")

form.addEventListener("submit", (event)=>{
 event.preventDefault();
 submitMessage.classList.remove("hide")
})