import React from "react";

const Container = ({ children, ...props }) => {
    return (
        <div style={{
            position: 'relative',
            padding: '26px 24px',
            width: '100%',
        }}
             {...props}
        >
            {children}
        </div>
    );
};

export default Container;
