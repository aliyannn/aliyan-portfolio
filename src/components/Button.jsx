
// Button taking set of props
const Button = ({
    children,
    variant = "default",
    href,
    download = false,
    onClick,
    className = "",
    ...props
}) => {
    // Map of variants, whatever variant you pass it will apply the following css classes.
    const classMap = {
        navbar: "resumeButton",
        primary: "primaryButton",
        outline: "outlineButton",
        default: "defaultButton",
    };

    const btnClass = `${classMap[variant]} ${className}`;

    return href ? (
        <a
            href={href}
            target="_blank"
            download={download}
            className={btnClass}
            {...props}
        >
            {children}
        </a>
    ) : (
        <button className={btnClass} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
