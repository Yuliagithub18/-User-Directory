import React from "react";

const styles = {
    headerDiv: {
        backgroundColor: "white",
        borderBottom: "5px red solid"
    },
    h1: {
        textAlign: "center",
        color: "black"
    }
}
function Header() {
    return (
        <div style={styles.headerDiv}>
            <h1 style={styles.h1}>Employee Directory</h1>
        </div>
    )
}

export default Header;