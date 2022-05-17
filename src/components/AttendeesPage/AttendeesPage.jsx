import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
//-------------- COMPONENTS ------------
import AttendanceItem from '../AttendanceItem/AttendanceItem';

// ** Trainers can view the list of signed up guests/members for a specific class
// ** Trainers can check in guests/members upon arrival
// ** Trainers can send individual messages to guests/members
// ** STRETCH: Trainers can remove guests/members
// ** STRETCH: Trainers can send messages to ALL guests/members



function AttendeesPage(){
    
    //------------<  Setup  >-------------
    const dispatch = useDispatch();
    const attendees = useSelector(store => store.attendees);
    // const userId = useSelector(store => store.user.id);
    const { id } = useParams()

    useEffect(() => {
        dispatch({
            type: 'FETCH_ATTENDANCE',
            payload: id
        });
    }, [])

    //------------< Functions >----------------
    const handleMassMessage = () => {
        console.log('this will open the option to send a mass message to all members signed up for a class');
    }

    const handleCheckIn = () => {
        console.log('send a dispatch to the server to update if users are checked in in the database');
        dispatch({
            type: 'UPDATE_ATTENDANCE',
            payload: {
                attendees,
                id
            }
        })

    }
    console.log('this is the attendees info', attendees);
    return(
        <>
            <button onClick={handleMassMessage}>Message all</button>
            {attendees.map((customer, i)=>(
                // console.log(customer, i)
                <AttendanceItem key={i} customer={customer}/>
            ))}
            <button onClick={handleCheckIn}>Check-In</button>

        </>
    )
}
export default AttendeesPage;