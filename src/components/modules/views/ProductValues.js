import * as React from 'react';
import {Bbq, CommonRules, Jaccuzi, Warning} from './Rules/CommonRules.js'
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
                    <Route exact path="/" element={<CommonRules/>} />
                    <Route exact path="/Jaccuzi" element={<Jaccuzi/>} />
                    <Route exact path="/BBQ" element={<Bbq/>} />
                    <Route exact path="/Warning" element={<Warning/>} />
                    <Route exact path="/OutRules" element={<OutRules/>} />
                </Routes>
            </Container>
        </Box>
    );
}

export default ProductValues;
