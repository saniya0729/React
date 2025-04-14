import { useState } from "react";

export const LiftingTheStateUp = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="main-div">
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </div>
    );
};
const InputComponent = ({ inputValue, setInputValue }) => {
    return (
        <>
            <input
                type="text"
                placeholder="enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </>
    );
};

const DisplayComponent = ({ inputValue }) => {
    return (
        <p>Your current value is : {inputValue}</p>
    )
}
