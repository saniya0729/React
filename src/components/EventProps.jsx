import "./Ev.css"
export const EventProps = () => {
    const handleWelcomeUser = () => {
        console.log("Hey i am onclick event");

    }
    const handleHover = () => {
        console.log("Hey i am Hover event");

    }
    return (
        <>
            <WelcomeUser onClick={() => handleWelcomeUser("saniya")} onMouseEnter={handleHover} />
        </>
    )
}

const WelcomeUser = (props) => {
    const {onClick, onMouseEnter}= props;
    const handleGreeting = () => {
        console.log(`Hey User Welcome`);
            onClick()
    }
    return (
        <>
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover Me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}