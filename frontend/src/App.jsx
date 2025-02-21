import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging"
import './App.css'

function App() {
  new Notification('Hello')

  return (
    <>
     notification
    </>
  )
}

export default App
