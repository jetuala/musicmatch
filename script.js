  // const rainbowArray = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
  //
  // var RandomRainbow = function() {
  //   return(
  //     "<" + returnRainbow() + "/>"
  //   );
  // }

  var randColor = function() {
      return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  var Box = () => {
      return <div style={{
          display: "inline-block",
          background: randColor(),
          width: "100px",
          height: "100px",
          border: "4px",
          borderStyle: "solid",
          borderColor: "white",
          borderRadius: "3px",
          margin: "0 2px"
      }} />;
  }

  const Row = () => {
      return <div>
          <Box />
          <Box />
          <Box />
          <Box />
      </div>
  }

  // Render React to the DOM - will accept two arguments (React what, React where)
    ReactDOM.render(
      //React what - JSX
      <div><Row /><Row /><Row /></div>,
      //React where - Div with ID of "App"
      document.getElementById("cardArea")
    );
