const Box = (props) => {
  const styles = { backgroundColor: props.on ? '#222222' : 'transparent' };

  return <div onClick={props.toggle} style={styles} className="square"></div>;
};

export default Box;
