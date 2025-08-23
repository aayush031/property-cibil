import React from 'react';

export function Badge({ children, className = '', ...props }) {
    return (
        <span
            className={`inline-block px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-semibold ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}
