
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import About from "./src/components/About";
import Helps from "./src/components/Helps";
import Price from "./src/components/Price";
import Offers from "./src/components/Offers";
import Error from "./src/components/Error";
import ResturantMenu from "./src/components/ResturantMenu";



const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter=createBrowserRouter([
  {path:"/",
    element:<Applayout />,
    children:[
      {path:"/",
        element:<Body />
      },
      {path:"/about",
        element:<About />
      },
      {path:"/price",
        element:<Price/>
      },
      {path:"/offers",
        element:<Offers />
      },
      {path:"/helps",
        element:<Helps />
      },
      {path:"/resturants/:resId",
        element:<ResturantMenu />
      },
      
    ],
    errorElement:<Error/>,
  },
 
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
/*const heading =React.createElement("h1",{id:'heading',xyz:"placehold",className:"myh1"},"hello this is react in js scrpit")
console.log(heading)*/

/*
<div id="parent">
<div id="children">
    <h1> this is inside child</h1>
    <h2> this is inside child</h2>
</div>
<div id="children2">
    <h1> this is inside child</h1>
    <h2> this is inside child</h2>
</div>
</div>*/
/*const heading=React.createElement("div",{id:'parent'},[React.createElement("div",{id:'children'},
[React.createElement("h1",{},"this is inside child"),
React.createElement("h2",{},"this is inside child"),]),React.createElement("div",{id:'children2'},
[React.createElement("h1",{},"this is inside child"),
React.createElement("h2",{},"this is inside child"),])]);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)*/

