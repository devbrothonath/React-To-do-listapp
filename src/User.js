const User = (props) => {
    return (
      <div>
        <h1> {props.name}</h1>
        <h1> {props.age}</h1>
        <br></br>
      </div>
    );
  };

export {User}