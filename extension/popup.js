
const copylist = document.getElementById("textWrapper")
// console.dir(copyedtext)
chrome.storage.local.get("copyedText").then(async (event)=> {
const copyTextLists = await event.copyedText.split(" >?: ");
console.dir(copyTextLists)

copyTextLists.forEach(value => {  
    const li = document.createElement("li");
    const lilist = copylist.appendChild(li)
    lilist.innerText = value

})
    // if(copylist.children.length >= 10){

    // }
})