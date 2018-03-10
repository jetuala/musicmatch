  const rainbowArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
  //
  // var RandomRainbow = function() {
  //   return(
  //     "<" + returnRainbow() + "/>"
  //   );
  // }

  // var audio = new Audio('Piano_C4.aiff');

  var randColor = function() {
      return Math.floor(Math.random()*7);
  }

  class Box extends React.Component {
    constructor() {
      super();
      this.state = {
      color: rainbowArray[randColor()]
      }
    }

    render() {
      return <div className={this.state.color} style={{
        display: "inline-block",
        background: this.state.color,
        width: "200px",
        height: "200px",
        border: "4px",
        borderStyle: "solid",
        borderColor: "white",
        borderRadius: "3px",
        margin: "0 2px"
      }}
      onClick={() =>
        // var attribute = document.getElementByClassName(this.state.color)
        squareClick();}/>; //this.state.color + " square clicked!"
    }
  }

  const Row = () => {
      return <div>
          <Box />
          <Box />
      </div>
  }

  // Render React to the DOM - will accept two arguments (React what, React where)
    ReactDOM.render(
      //React what - JSX
      <div><Row /><Row /></div>,
      //React where - Div with ID of "App"
      document.getElementById("cardArea")
    );

function startGame() {

}

function squareClick() {
  if (className === this.state.color) {
    alert("Correct!")
  } else {
    alert("Incorrect!")
  };
}
