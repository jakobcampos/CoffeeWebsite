import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title?: string;
  icon?: string;
  variant?: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {

  // Provide a default value for title if it's undefined. For example, use an empty string or a specific default text.
  const imageAlt = title || ''; // Using 'Button icon' as a default alt text if title is not provided

  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''} px-4 py-2`}
      type={type}
    >
    
    {icon && (
        <Image src={icon} alt={imageAlt} width={17} height={19} />
    )}

    {title && (
        <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    )}
    
    </button>
  )
}

export default Button