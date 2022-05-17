import React from 'react';
import ClassListItem from '../ClassListItem/ClassListItem';
import Nav from '../Nav/Nav';

function AllClassesPage() {


  const classes = [ /// DELETE this when we have working sagas and reducers, this is temporary test data
    {
      id: 1,
      classname: "HIIT",
      description: "high intensity interval training",
      trainer_user_id: 2,
      date: "2022-04-12",
      start_time: "12:00:00",
      end_time: "13:00:00",
      location: "at the park?",
      class_size: 20
    },
    {
      id: 3,
      classname: "Kick boxing",
      description: "This is a class where we are going to kick and box",
      trainer_user_id: 1,
      date: "2022-04-13",
      start_time: "09:00:00",
      end_time: "10:00:00",
      location: "Near the truck",
      class_size: 18
    },
    {
      id: 2,
      classname: "Yoga",
      description: "Its yoga",
      trainer_user_id: 1,
      date: "2022-04-13",
      start_time: "14:00:00",
      end_time: "15:00:00",
      location: "Some place noisy",
      class_size: 10
    }
  ] /// DELETE this when we have working sagas and reducers, this is temporary test data

  return (
    <div>
      <Nav/>
      <ul>
      {classes.map((event, i) =>(
        <ClassListItem event={event} key={i} />
      ))}
      </ul>
    </div>
  );
}

export default AllClassesPage;
