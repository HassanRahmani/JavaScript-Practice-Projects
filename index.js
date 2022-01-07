// chrome://extensions/
let myLeads = []
let ulEl = document.getElementById("ul-el")
let saveButton = document.getElementById("input-btn")
let inputField = document.getElementById("input-el")
let deleteAll = document.getElementById("deleteAll")
let saveTab = document.getElementById("saveTab")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

saveButton.addEventListener("click",function(){
    myLeads.push(inputField.value) 
    inputField.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    renderLeads()

})

function renderLeads() {
    listItems = ""
    for(i=0; i < myLeads.length; i++) {
    
    
        listItems += `
        <li> 
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
        </li>`
    }
    
    ulEl.innerHTML = listItems
}

deleteAll.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
})

saveTab.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        renderLeads()

    })
})