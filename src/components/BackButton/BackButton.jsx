import React from 'react';
import {useHistory} from 'react-router-dom';
// ---< MUI IMPORTS >-----
import SpeedDial from '@mui/material/SpeedDial';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function BackButton() {
    const history = useHistory();

    const handleBack = () => {
        history.goBack();
    };

    return (
        <>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'fixed', bottom: 25, left: 12 }}
                    icon={<ArrowBackIosNewIcon onClick={handleBack} />}
                    FabProps={{
                        sx: {
                          bgcolor: 'back.main',
                          '&:hover': {
                            bgcolor: 'back.main',
                          }
                        }
                    }}
                >
                </SpeedDial>
        </>
    );
}

export default BackButton;