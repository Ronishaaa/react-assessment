
const Child = (props) => {
  
  const handleMinusClick = () => {
    props.onChange(props.num-1);
  };

  const handlePlusClick = () => {
    props.onChange(props.num+1);
  };

  return (
    <div>
      <button type="button" className="btn" onClick={handleMinusClick}>
        -
      </button>
      <button type="button" className="btn" onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
};

export default Child;

