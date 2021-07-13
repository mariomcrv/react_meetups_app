import { useRef } from "react"; // this is a hook, we are importing a function

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
const titleInputRef = useRef();


    function submitHandler(event) { // this is the function that will be executed once the event is triggered
        event.preventDefault();
        
        const enteredTitle = titleInputRef.current.value;

    }


  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}> Here, we add th
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea required id="description" rows="5" />
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
