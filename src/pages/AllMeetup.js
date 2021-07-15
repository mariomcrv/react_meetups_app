import { useState, useEffect } from "react"; // <----- React hooks!!!!

import MeetupsList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image: "https://wikitravel.org/upload/shared//c/cd/Guadalajara_Banner.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image: "https://www.applelanguages.com/en/img/top/guadalajara.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

// -------> ATENTION HERE, THIS SECTION IS A BIT COMPLEX, NEED TO EXAMINE HOW THESE HOOKS WORK <--------
// From my understanding, we need two useState and useEffect hooks here

function AllMeetupsPage() {
  const [isLoading, setIsloading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsloading(true);
    fetch(
      process.env.React_App_Meetups_db
    )
      .then((response) => {
        return response.json(); // json also returns a promise
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsloading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  // ----> Conditional JSX page while infor is being loaded from firebase <----

  if (isLoading) {
    return (
      <section>
        <p>Loading...⏲</p>
      </section>
    );
  }

  //----> JSX to render <-----
  console.log(process.env.MEETUPS_DB)

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupsList meetups={loadedMeetups} />
      {/* <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul> */}
    </section>
  );
}

export default AllMeetupsPage;
