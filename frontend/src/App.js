// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from './Pages/HomePage';
// import ChatPage from './Pages/ChatPage';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<HomePage/>} exact />
//           <Route path="/chats" element={<ChatPage/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom"; // Adjust imports as needed
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Wrap your components with the router and ChatProvider */}
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/chats" element={<ChatPage />} />
          </Routes>
        
    </div>
  );
}

export default App;
