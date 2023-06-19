// HOC is a JS fn
// that takes in a Component as input and returns a new Component as output

const applyStyles = (OriginalComponent) => {
  // receiving the original comp
  console.log(OriginalComponent);

  // creating a new fn comp
  const NewComponent = (props) => {
    console.log(props);

    return (
      <div className="red-box">
        <OriginalComponent {...props} />
      </div>
    );
  };

  // returning the new comp
  return NewComponent;
};

export default applyStyles;
