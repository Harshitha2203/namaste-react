import React from "react";
import ReactDOM from "react-dom/client";

//functional component which returns jsx is react component
const Head = () => {
  return (
    <div>
      {/* {heading} */}
      <h1> React component Heading</h1>;
    </div>
  );
};

const para = <p>this is paragraph</p>

// react element
const heading = (
  <div>
    <h1 className="redColor" tabIndex="7">
      Hi, This is namste js
    </h1>
    {para}

  </div>
);



// component inside another component
const Main = () => {
  return (
    <div>
      <Head>
         
      </Head>
      <p> React component paragrph</p>
    </div>
  );
};

// this is for dealing with browsers
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
