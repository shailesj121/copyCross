import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging"
import './App.css'
import "/service-worker.js"

function App() {
  // Notification.requestPermission().then((permission)=> {
  //   if(permission == "granted"){
  //     new Notification('Hello')
  //   }
  // })

  self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
    // Perform installation steps, like pre-caching resources
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            return response || fetch(event.request);
        })
    );
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
        console.log('Service Worker Registered with scope:', registration.scope);
    })
    .catch(function(error) {
        console.error('Service Worker registration failed:', error);
    });
}



  return (
    <>
     notification
    </>
  )
}

export default App
