const Button = (props) => {
  const { className, text, style, onClick } = props;
  return (
    <>
      <button className={className} style={style} onClick={onClick}>
        {text}
      </button>
    </>
  );
};
export default Button;
