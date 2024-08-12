const Heading = (title) => {
  return React.createElement('h1', title)
}

const Pet = () => {
  return React.createElement(
    "div",
    { id: "dogs" },
    Heading("luna"),
    Heading("Dog"),
    Heading("Havanese"),
    Heading("luna")
  );
}

const App = () => {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", {}, "Adopt me")
  );
};

console.log(App);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
