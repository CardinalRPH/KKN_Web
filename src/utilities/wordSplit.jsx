import React from "react";
const wordSplit = (string, size = 0) => {
    const parts = string.split(' ');
    if (parts.length > 1) {
        return (
            <>
                {parts.map((item, index) => {
                    if (index >= size) {
                        return (
                            <React.Fragment key={index}>
                                {item}
                                < br />
                            </React.Fragment>
                        )
                    }

                })}
            </>
        );
    }
    return string;

}

export default wordSplit