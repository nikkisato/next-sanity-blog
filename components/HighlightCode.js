import highlight from "highlight.js"
import { createRef, useEffect } from "react";

const HighlightCode = ({ children, language }) => {
    const code = createRef();

    useEffect(() => {
        highlight.highlightBlock(code.current);
    }, [code])
    
    return (
        <code
            ref={code}
            className={language}
        >
            {children}
        </code>
    )
}

export default HighlightCode;