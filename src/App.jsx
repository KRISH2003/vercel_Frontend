// Links used in this Project 
// https://tailwindcss.com/docs/installation/using-vite    for adding tailwind to this project
// https://bg.ibelick.com/   for background
// https://tailwindcss.com/docs/adding-custom-styles#adding-component-classes    for adding layer components in index.css
// https://lordicon.com/icons/wired/outline     for animated icons
// https://www.iconfinder.com/                  for static icons
// https://www.npmjs.com/package/react-toastify       Copied to clipboard effect 
// https://www.npmjs.com/package/uuid          to generate unique id


// localStorage.clear()        write thus in console to clear all the saced passwords



 
import { useState } from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';

import './App.css'

function App() {

  return (
    <>
    <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                // transition={"Bounce"}
            />
    <Navbar/>
    <Manager/>
    <Footer/>
    </>
  )
}

export default App
