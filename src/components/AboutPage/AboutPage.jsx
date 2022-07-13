import React, { useState } from 'react';
// ---------< COMPONENT VIEW IMPORTS >----------------
import About from './About';
import Packages from './Packages';
import BackButton from '../BackButton/BackButton';

// ---------< MUI IMPORTS >----------------
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Container from '@mui/material/Container';

function AboutPage() {
  // ========< TABS LOGIC >===================
  const [value, setValue] = useState('1');

  // ------< TABS CLICK HANDLER >-------------
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container sx={{ border: 4, borderColor: '#c3c4c5', mt: 1, pb: 2, pt: 1 }}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            {/* TABS TITLE  */}
            <Box sx={{ bgcolor: "#6d6e71", color: '#F0FFFF', borderBottom: 1, borderColor: 'divider' }}>
              {/* <TabList> */}
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                  centered
                >
                  <Tab label="About" value="1" />
                  <Tab label="Classes & Packages" value="2" />
                </Tabs>
              {/* </TabList> */}
            </Box>
            {/* TABS CONTENT (ABOUT) */}
            <TabPanel value="1">
              <About />
            </TabPanel>
            {/* TABS CONTENT (CLASSES & PACKAGES) */}
            <TabPanel value="2">
              <Packages />
            </TabPanel>
          </TabContext>
        </Box>
        <BackButton />
      </Container>
    </>
  );
}

export default AboutPage;
