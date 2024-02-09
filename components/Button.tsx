import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title?: string;
  icon?: string;
  variant?: string;
  full?: boolean;
}

// Wrap your Image component to control its size more responsively
const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  const sizingClasses = full ? 'w-full sm:w-3/4 md:w-1/3 lg:w-1/6' : '';
  const hoverClasses = icon ? 'hover:opacity-30' : 'hover:opacity-70';

  return (
    <button className={`flex items-center justify-center gap-3 ${variant} ${sizingClasses} ${hoverClasses} lg:px-4 md:px-4 sm:px-4 xs:px-4 px-2.5 py-2 transition-all duration-300 ease-in-out`} type={type}>
      {icon && (
        <div className="icon-wrapper inline-flex">
          <Image src={icon} alt={title || 'Button icon'} layout="fill" />
        </div>
      )}
      {title && (
        <span className="text-xs font-sans font-normal tracking-widest uppercase text-gray-50 transition-all whitespace-nowrap cursor-pointer">{title}</span>
      )}
    </button>
  );
};



export default Button