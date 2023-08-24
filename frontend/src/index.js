import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ChatProvider from "./Context/ChatProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChatProvider>
  </BrowserRouter>,
);
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { ChakraProvider } from "@chakra-ui/react";
// import { BrowserRouter } from "react-router-dom";
// import ChatProvider from "./Context/ChatProvider";

// ReactDOM.render(
//   <ChatProvider>
//     <BrowserRouter>
//       <ChakraProvider>
//         <App />
//       </ChakraProvider>
//     </BrowserRouter>
//   </ChatProvider>,
//   document.getElementById("root")
// );
