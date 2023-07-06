function Button({text, action, classes}) {

    return (
      <button className={`${classes} border border-solid border-gray-700 px-16 py-2`} onClick={action}>
        { text }
      </button>
    )
  }
  
  export default Button
  