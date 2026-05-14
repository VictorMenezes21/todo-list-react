export default function Button({ name, onClick, variant = "default", className = "" }) {
  return (
    <button className={`app-button app-button--${variant} ${className}`.trim()} onClick={ onClick }>
      { name }
    </button>
  )
}
