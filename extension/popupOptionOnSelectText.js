let eventEnd;
let selectedText;
let selected;

// Create a message channel
const channel = new MessageChannel();
// const mouseup = document.addEventListener("mouseup", function (event) {
//     eventEnd = setTimeout(() => {
//         let selectedText = window.getSelection().toString().trim();
//         if (selected) {
//             hidePopup();
//         } else if(selectedText.length > 0) {
//             showPopup(event.pageX, event.pageY, selectedText);
//         }
//     }, 1000);
// });

const ctrlPlusC = document.addEventListener("copy", (event)=> {
    // clearTimeout(eventEnd)
       selectedText =  window.getSelection().toString().trim();
            if(selectedText.length > 0) {
                copytoExtension()
            }
});// the drawback of using copy event listner is that it will all copy the text to the extension which can be a cencern form the user is he is copying some sensitive data

function showPopup(x, y, text) {
    let popup = document.getElementById("text-popup");

    if (!popup) {
        popup = document.createElement("div");
        popup.id = "text-popup";
        popup.style.position = "absolute";
        popup.style.background = "#333";
        popup.style.color = "#fff";
        popup.style.padding = "8px";
        popup.style.borderRadius = "5px";
        popup.style.fontSize = "14px";
        popup.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
        popup.style.zIndex = "1000";
        popup.style.width = "300px";
        popup.style.maxHeight = "300px";
        popup.style.overflow = "hidden";
        popup.style.whiteSpace = "wrap";
        popup.style.display = "block";
        document.body.appendChild(popup);
    }

    selectedText = text;
    popup.innerHTML = `${text} <button id="copy-btn" style="background: gray">Copy</button>`;

    popup.style.left = x + "px";
    popup.style.top = y + 20 + "px";
    popup.style.display = "block";

    // Attach event listener to the button dynamically
    document.getElementById("copy-btn").addEventListener("click", copytoExtension);
    
}

function hidePopup() {
    let popup = document.getElementById("text-popup");
    if (popup) {
        popup.style.display = "none";
    }
    selected = false;
}

document.addEventListener("mouseup", function () {
    hidePopup();
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received message:", request.message);
});

function copytoExtension() {  
    if (selectedText) {
        chrome.runtime.sendMessage({ text: selectedText }, (response) => {
            console.log("Response from the extension:", response);
        });
        selected = true;
    }
}
