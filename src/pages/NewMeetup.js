import { useHistory } from "react-router-dom"; // this HOOK is a function that we will use to do something after the http post req

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory(); // const vars are final, once declared, they do not change

  // the function bellow, is the event handler that stores the data from the form
  function addMeetupHandler(meetupData) {
    //when this function is called, a meetupData object is passed containing the info for the database
    fetch(
      // also, fetch returns a promise
      // the fetch function is integrated on JS to execute http calls, libraries like axios make this easier
      process.env.React_App_Meetups_db, // we set the url to send the req, by defualt this method is get
      {
        method: "POST", // adding this configs change the type to POST so we send data
        body: JSON.stringify(meetupData), // the body contains the object parsed to json
        headers: {
          // the headers are metadata that some APIs need, check this sample. Remember that http is a tranfer protocol
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      // we use the history and replace method to send the user back to the home page
      history.replace("/"); // this is what will happen when the promise is back
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
