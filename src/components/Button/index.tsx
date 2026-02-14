import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: never;
    to?: never;
    children: ReactNode;
};

type ButtonAsLink = {
    as: typeof Link;
    to: string;
    children: ReactNode;
    className?: string;
    type?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

function Button(props: ButtonProps) {
    const { children, className = '' } = props;
    const combinedClassName = `${styles.button} ${className}`.trim();

    if (props.as === Link && props.to) {
        return (
            <Link to={props.to} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    const { as: _as, to: _to, ...buttonProps } = props as ButtonAsButton & { as?: never; to?: never };
    void _as;
    void _to;

    return (
        <button className={combinedClassName} {...buttonProps}>
            {children}
        </button>
    );
}

export default Button;
