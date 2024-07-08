import React from "react";
import ReactDOM from "react-dom/client";

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
/*
const heading=React.createElement("div",{id:'parent'},[React.createElement("div",{id:'children'},
[React.createElement("h1",{},"this is inside child"),
React.createElement("h2",{},"this is inside child"),]),React.createElement("div",{id:'children2'},
[React.createElement("h1",{},"this is inside child"),
React.createElement("h2",{},"this is inside child"),])]);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)*/

/*
const heading=React.createElement(
    "h1",
    {id:"main",className:"Myclass"},
    "Hey this is ignation ch#3"
);

console.log(heading);*/
//React Element//
/*const jsxheading=<h1 id="heading">JSX code ites similar like html</h1>
console.log(jsxheading);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxheading);*/

//React Functional Component
const lm=(<span>this is the reeact normal var</span>)
 const element=(<p> this is the react element {lm}</p>)
const Title=()=>(<p id="main" className="myh1"> this is the title</p>)
const FunctionComponent = () => (
  <div className="mainClass" tabIndex={3}>
  {element}
  {Title()}
  <Title/>
    <h1 className="main">This is inside the functional component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionComponent />);
