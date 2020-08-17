const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-til-green hover:bg-til-green-dark rounded-lg text-white py-2 px-4 font-bold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
