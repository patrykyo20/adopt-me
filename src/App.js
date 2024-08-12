const Heading = (title) => {
  return React.createElement("h1", {}, title);
};

const Pet = (props) => {
  return React.createElement("div", { id: "dogs" }, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", { className: "container" }, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      animal: 'Dog',
      name: 'Luna',
      breed: 'Havanese'
    }),
    React.createElement(Pet, {
      animal: 'Bird',
      name: 'Pepper',
      breed: 'Cockatiel'
    }),
    React.createElement(Pet, {
      animal: 'Cat',
      name: 'Donik',
      breed: 'Mixed'
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
