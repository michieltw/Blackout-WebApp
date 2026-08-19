interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors border focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md'

  const variantClasses = {
    primary: 'bg-emerald-700 text-white border-transparent hover:bg-emerald-800 focus:ring-emerald-700',
    secondary: 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 focus:ring-slate-500',
    danger: 'bg-amber-700 text-white border-transparent hover:bg-amber-800 focus:ring-amber-700'
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
