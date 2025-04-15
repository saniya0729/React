import { useId } from "react";

export const UseID = () => {
  //  const usernameId = useId()
  //  const emailId = useId()
  //  const passwordId = useId()

  const id = useId();
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div>
        <label htmlFor={id + "usernameId"}>username:</label>
        <input type="text" id={id + "usernameId"} name="name" />
      </div>
      <div>
        <label htmlFor={id + "passwordId"}>password:</label>
        <input type="email" id={id + "passwordId"} name="password" />
      </div>
      <div>
        <label htmlFor={id + "emailId"}>email:</label>
        <input type="email" id={id + "emailId"} name="email" />
      </div>
      <button type="submit" onClick={handleOnSubmit}>
        submit
      </button>
    </div>
  );
};
