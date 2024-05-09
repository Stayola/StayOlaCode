import * as React from 'react';
import {useEffect, useState} from 'react';
import Notice from './components/modules/views/Notice';
import ProductValues from './components/modules/views/ProductValues';
import AppAppBar from './components/modules/views/AppAppBar';
import withRoot from './components/modules/withRoot';
import {Link, useLocation} from 'react-router-dom';
import {Box, ToggleButton, ToggleButtonGroup} from '@mui/material';


function Index() {

    const category = [
        <ToggleButton value="/" LinkComponent={Link} to="/" replace={true}><h3>입실</h3></ToggleButton>,
        <ToggleButton value="/OutRules" LinkComponent={Link} to="/OutRules" replace={true}><h3>퇴실</h3></ToggleButton>,
        <ToggleButton value="/Jaccuzi" LinkComponent={Link} to="/Jaccuzi" replace={true}><h3>자쿠지</h3></ToggleButton>,
        <ToggleButton value="/fire" LinkComponent={Link} to="/fire" replace={true}><h3>불멍</h3></ToggleButton>,
        <ToggleButton value="/BBQ" LinkComponent={Link} to="/BBQ" replace={true}><h3>BBQ</h3></ToggleButton>,
        <ToggleButton value="/Items" LinkComponent={Link} to="/Items" replace={true}><h3>비품 안내</h3></ToggleButton>,
        <ToggleButton value="/Coffee" LinkComponent={Link} to="/Coffee" replace={true}><h3>커피 머신</h3></ToggleButton>,
        <ToggleButton value="/StandByMe" LinkComponent={Link} to="/StandByMe" replace={true}><h3>스탠바이미</h3></ToggleButton>,
        <ToggleButton value="/Warning" LinkComponent={Link} to="/Warning" style={{color: 'red'}} replace={true}><h3>비상 연락망</h3></ToggleButton>,
    ]

    const [alignment, setAlignment] = useState('/');
    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };
    const location = useLocation();
    useEffect(()=>{
        const currentPath = location.pathname.replace('/#/', '/');
        setAlignment(currentPath);
    },[location])

    return (
        <React.Fragment>
            <AppAppBar/>
            <Notice/>
            <Box justifyContent='center' sx={{backgroundColor: '#fffaf0', pt: 3, pb: 1}}>
                <Box textAlign='center' justifyContent='center' sx={{pt: 2, ml: 2, mr: 2}}>
                    <ToggleButtonGroup size="small" fullWidth={true} exclusive value={alignment}
                                       onChange={handleChange} aria-label="Medium sizes">
                        {category}
                    </ToggleButtonGroup>
                </Box>
                <ProductValues/>
            </Box>
        </React.Fragment>
    );
}

export default withRoot(Index);
