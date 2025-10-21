const variants = {
  default: 'bg-black text-white hover:opacity-90',
  secondary: 'bg-gray-100 text-black hover:bg-gray-200',
  outline: 'border text-black hover:bg-gray-50',
  ghost: 'text-black hover:bg-gray-50',
};
const sizes = { sm: 'text-sm px-3 py-1.5 rounded-xl', md: 'text-sm px-4 py-2 rounded-2xl' };

export function Button({ children, className = '', variant = 'default', size = 'md', ...props }) {
  return <button className={`${variants[variant]} ${sizes[size]} ${className}`} {...props}>{children}</button>;
}
