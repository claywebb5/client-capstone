import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//--------------< MUI IMPORTS >------------
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send'; // SEND MESSAGE TO CUSTOMER
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'; // NOT CHECKED IN
import CheckBoxIcon from '@mui/icons-material/CheckBox'; // CHECKED IN
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
    newroot: {
        padding: 8,
        '&:last-child': {
            paddingBottom: 8,
        },
    },
});


function AttendanceItem(props) {
    //------------<  Setup  >-------------
    const dispatch = useDispatch();
    const attendees = useSelector(store => store.attendees);
    const classes = useStyles(); // MUI Theme
    const [clicked, setClicked] = useState(false)

    // ======< USER ICON LOGIC >============================== 
    let initials = '';
    const getInitials = (nameObject) => {
        let firstLetter = 'H';
        let secondLetter = 'i';
        if (nameObject.first_name && nameObject.last_name) {
            firstLetter = (nameObject.first_name[0]).toUpperCase();
            secondLetter = (nameObject.last_name[0]).toUpperCase();
        } else if (nameObject.first_name) {
            firstLetter = (nameObject.first_name[0]).toUpperCase();
            secondLetter = (nameObject.first_name[1]);
        }
        initials = firstLetter + secondLetter;
        return true;
    };

    // ======< INDIVIDUAL MESSAGE >===============================
    // LINK TO MUI SNACKBAR FOR MESSAGE SENT NOTIFICATION: https://mui.com/material-ui/react-snackbar/ 
    const handleMessage = () => {
        console.log('this will open the option to send a specific user a message. Think "Hey, still able to make it today?"');
    };

    //----------< CLICKED INDIVIDUAL CHECKBOXES >--------------
    // this sends a dispatch to the attendees reducer to update local state
    const checkUserIn = () => {
        // console.log('this will update a piece of local state');
        setClicked(!clicked);
        dispatch({
            type: 'CHECK_USER_IN',
            payload: {
                attendees: attendees,
                userId: props.customer.id
            }
        });
    };
    


    return (
        <>
            {props.customer.checked_in || clicked?
                // ===================< CHECKED IN >===================================
                <Card>
                    <CardContent  component="div" sx={{ display: 'inline-flex'}} className={classes.newroot}>
                        <Box component="div" sx={{display: 'inline-flex'}}>
                            <CheckBoxIcon onClick={checkUserIn} sx={{ mr: 1, p: 1, mt: 1,  }}/> 
                            <Avatar src={props.customer.profile_image} sx={{ mr: 1, mt: 1, mx: 'auto' }} />
                            <Typography variant="h5" sx={{ mx: 'auto', width: 200, p: 1, mt: 1, ml: 1  }}>
                                {props.customer.first_name} {props.customer.last_name}
                            </Typography>
                            {/* <Typography variant="h5">
                                Not Checked in
                            </Typography> */}
                            <SendIcon onClick={handleMessage} sx={{ mr: 1, p: 1, mt: 1, pr: 3 }}/>
                        </Box>
                    </CardContent>
                </Card>
                : 
                // ===================< NOT CHECKED IN >===================================
                <Card>
                    <CardContent  component="div" sx={{ display: 'inline-flex'}} className={classes.newroot}>
                        <Box component="div" sx={{display: 'inline-flex'}}>
                            <CheckBoxOutlineBlankIcon onClick={checkUserIn} sx={{ mr: 1, p: 1, mt: 1,  }}/>
                            <Avatar src={props.customer.profile_image} sx={{ mr: 1, mt: 1, mx: 'auto' }} />
                            <Typography variant="h5" sx={{ mx: 'auto', width: 200, p: 1, mt: 1, ml: 1  }}>
                                {props.customer.first_name} {props.customer.last_name}
                            </Typography>
                            {/* <Typography variant="h5">
                                Not Checked in
                            </Typography> */}
                            <SendIcon onClick={handleMessage} sx={{ mr: 1, p: 1, mt: 1, pr: 3 }}/>
                        </Box>
                    </CardContent>
                </Card>
            }



        </>
    );
}

export default AttendanceItem;

// {props.customer.checked_in ?
//     // ===================< CHECKED IN >===================================
//     <div>
//         <h4>Checked In</h4>                    
//         {/* the attribute 'defaultChecked' is what allows the input to render in the 'checked' state */}
//         <input type="checkbox" id="customer" value="user?" onClick={checkUserIn} defaultChecked></input>
        
//         {/* INITIALS AVATAR  */}
//         {/* {(getInitials(props.customer)) && <Avatar sx={{ bgcolor: '#ace23a' }}>{initials}</Avatar>} */}
        
//         {/* PROFILE PICTURE AVATAR  */}
//         <Avatar src={props.customer.profile_image} />
        
//         {/* CUSTOMER NAME  */}
//         <label htmlFor="customer">{props.customer.first_name} {props.customer.last_name}</label>
       
//         {/* MESSAGE BUTTON */}
//         <button onClick={handleMessage}>Message User</button>                
//     </div>
//     :
//     // ===================< NOT CHECKED IN >===================================
//     <div>
//         <h4>Not Checked In</h4>
//         {/* onChange could be used here instead of onClick due to it being the type 'checkbox'
//         onClick used just due to it more semantic sense to me */}
//         <input type="checkbox" id="customer" value="user?" onClick={checkUserIn}></input>

//         {/* INITIALS AVATAR  */}
//         {/* {(getInitials(props.customer)) && <Avatar sx={{ bgcolor: '#ace23a' }}>{initials}</Avatar>} */}
        
//         {/* PROFILE PICTURE AVATAR  */}
//         <Avatar src={props.customer.profile_image} />
        
//         {/* CUSTOMER NAME  */}
//         <label htmlFor="customer">{props.customer.first_name} {props.customer.last_name}</label>
       
//         {/* MESSAGE BUTTON */}
//         <button onClick={handleMessage}>Message User</button>            
//     </div>
// }