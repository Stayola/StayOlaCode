import * as React from 'react';
import {Bbq, CommonRule, Items, Jacuzzi, Warning, Coffee, StandByMe, Fire} from './Rules/CommonRule.js'
import {Box, Container} from '@mui/material'
import {Route, Routes} from "react-router-dom";
import OutRules from "./Rules/OutRules";


function ProductValues() {
    return (
        <Box justifyContent={'center'} display={'flex'}>
            <Container fixed maxWidth="lg" sx={{
                mt: 5,
                mb: 8,
                ml: 2,
                mr: 2,
                justifyContent: 'center',
                display: 'flex',
                position: 'relative',
                border: 2,
                borderColor: '#fdde6d'
            }}>
                <Routes>
                    <Route exact path="/" element={<CommonRule/>} />
                    <Route exact path="/Jaccuzi" element={<Jacuzzi/>} />
                    <Route exact path="/BBQ" element={<Bbq/>} />
                    <Route exact path="/fire" element={<Fire/>} />
                    <Route exact path="/Items" element={<Items/>} />
                    <Route exact path="/Warning" element={<Warning/>} />
                    <Route exact path="/OutRules" element={<OutRules/>} />
                    <Route exact path="/StandByMe" element={<StandByMe/>} />
                    <Route exact path="/Coffee" element={<Coffee/>} />
                </Routes>
            </Container>
        </Box>
    );
}

export default ProductValues;
