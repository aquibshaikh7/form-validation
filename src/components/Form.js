import { useState } from "react";
import classes from "./Form.module.css";

const Form = () => {
  const [userName, setUsername] = useState("");
  const [ratting, setRatting] = useState("");
  const [comment, setComment] = useState("");
  const [IsValid, setIsValid] = useState(false);

  const userNameHandler = (event) => {
    setUsername(event.target.value);
    if (userName.trim().length >= 2) {
      setIsValid(false);
    }
  };
  const commentHandler = (event) => {
    setComment(event.target.value);
  };
  const rattingHandler = (event) => {
    setRatting(+event.target.value);
  };
  const submitHandler = () => {
    if (userName.trim().length >= 2) {
      const data = {
        name: userName,
        ratting: ratting,
        comment: comment,
      };

      alert(`${userName} Ratting ${ratting} ${comment}`);
      setComment("");
      setRatting("");
      setUsername("");
    } else {
      setIsValid(true);
    }
  };

  return (
    <div className={classes.content}>
      <div>
        <h2>Submit Comment</h2>
        <label>Ratting</label>
        <select onChange={rattingHandler} value={ratting}>
          <option value={""}>Select</option>
          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
          <option value={"3"}>3</option>
          <option value={"4"}>4</option>
          <option value={"5"}>5</option>
        </select>
        <label>Name</label>
        <input value={userName} onChange={userNameHandler} type={"text"} />
        {IsValid && <p>must be grater than 2 char</p>}

        <label>Comments</label>
        <textarea value={comment} onChange={commentHandler}></textarea>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
};
export default Form;
