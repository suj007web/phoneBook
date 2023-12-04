const phoneNo = document.querySelector("#phone")
const nameOfContact = document.querySelector("#name")
const saveBtn = document.getElementsByTagName("button")[0]
const contactBox = document.getElementsByClassName("contactContainer")[0]

const form = document.getElementsByTagName("form")[0]

let list = localStorage.getItem("key")? JSON.parse(localStorage.getItem("key")):[] ;
showContacts()

function showContacts(){
    list.forEach((value, index)=>{
        
        const div = document.createElement("div")
        div.setAttribute("class", "contact");

        const innerDiv = document.createElement("div")
        div.append(innerDiv)

        const p = document.createElement("p")
        p.innerText = value.name
        innerDiv.append(p)

        const span = document.createElement("span")
        span.innerText = value.phone
        innerDiv.append(span)

        const button = document.createElement("button")
        button.setAttribute("class", "btn")
        button.innerText = "-"
        div.append(button)

        button.addEventListener("click", ()=>{
            removeAll()
            list.splice(index, 1)
            localStorage.setItem("key", JSON.stringify(list))
            showContacts()
        })
     
        div.addEventListener("click", ()=>{
            navigator.clipboard.writeText(span.innerText)
        })

        contactBox.append(div)
        
    })
}

function removeAll(){
    list.forEach((value, index)=>{
        const div = document.querySelector(".contact")
        div.remove()
    })
}

console.log(form)
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    removeAll()
    list.push({
        phone : phoneNo.value,
        name: nameOfContact.value
    })
    
    localStorage.setItem("key", JSON.stringify(list))
    showContacts()

    console.log(list)
})


