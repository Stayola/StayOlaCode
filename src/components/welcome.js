import * as React from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <Grid container display={'block'} textAlign={'center'}>
            <Grid item>
                <h1>대구 한옥 스테이 올라!</h1>
                <p>올라(Hola)는 스페인어로 "안녕하세요"라는 뜻입니다.</p>
                <p>올라를 기억하신다면 스페인어 한 단어는 마스터 하신 것입니다. 😉</p>
                <p>방문해 주셔서 감사합니다.</p>
                <p>오늘 하루만큼은 모든것 다 잊고 편안히 쉬면서</p>
                <p>하나뿐인 사랑하는 사람들과 좋은 추억 만들고 가세요🧡</p>
            </Grid>
        </Grid>
    )
}


