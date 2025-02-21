const backendUrl = "http://localhost:3000";


// Use runtime.onInstalled to set and get values in storage
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed.");
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  // Process the data and send a response back
  const responseData = {
    message: "Received the message!",
  };
  // localStorage.getItem("copyedText")
  let allcopyedtext;

  chrome.storage.local.get("copyedText").then(async (value) => {
    allcopyedtext = await value.copyedText
    let newAllText = `${request.text} >?: ${allcopyedtext}`;
    chrome.storage.local.set({ copyedText: newAllText }, function () {
      newAllText = "";
    });

    fetch(backendUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'  // Indicate the content type
    },
      body: JSON.stringify({copyedText: request.text})
    }).then((response) => {
        console.log(response)
      })

  });
});
