
function ErrorText(props) {

    return (
        <div style={{ color: "red", fontSize: "16px" }}>
            {props.children}
        </div>
    )
}

export default ErrorText