import './Button.css';

function Button({className, disabled, onClick, children}) {
    return (
      <button disabled={disabled} onClick={onClick} className={`btn ${className}`}>
          {children}
      </button>
    );
}

export default Button;
