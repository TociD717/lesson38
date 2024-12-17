const Button = ({ text, placeholder }) => {
  return (
    <div>
      <button>{text}</button>
      <input type={"text"} placeholder={placeholder}/>
    </div>
  )
}

export default Button
