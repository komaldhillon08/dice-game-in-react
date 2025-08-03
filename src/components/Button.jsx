export default function Button({children , onClick}) {
    return (
        <>
            <button className="main-btn" onClick={onClick}>{children}</button>
        </>
    )
}