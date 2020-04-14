console.log("app js is working");

// var template = <p>this is from jsx </p>;
var template = React.createElement("hi", null, "create elemenet");

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
