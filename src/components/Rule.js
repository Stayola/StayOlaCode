import { ButtonGroup, Grid, ToggleButtonGroup, ToggleButton, Button, Container } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Jacuzzi from "./Jacuzzi";
import BBQ from "./Bbq";
import StandByMe from "./StandByMe";
import { Fragment, useState } from "react";
import Rulebody from "./RuleBody";

export default function Rule() {

    return (
        <Container justifyContent='center' textAlign={'center'}>
            <h1>이용 수칙</h1>
            <Rulebody></Rulebody>
        </Container>
    );
}