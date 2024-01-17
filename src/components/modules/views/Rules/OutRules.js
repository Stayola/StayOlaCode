import * as React from 'react';
import {Container} from '@mui/material';

export default function OutRules() {
    return (
        <Container fixed maxWidth="lg" sx={{marginTop: '1rem', marginBottom: '1rem', fontSize: '1.2rem', paddingLeft: '2rem'}}>
            <h2 style={{textAlign : 'center'}}>[ 퇴실안내 ]</h2>
            <b>
                <ol style={{marginTop: '1rem', marginBottom: '1rem', fontSize: '1.2rem', paddingLeft: '2rem'}}>
                    <li> 음식물 쓰레기 / 일반쓰레기 & 재활용 분리수거를 하여 마당 입구 앞에 놓아주세요.</li>
                    <li>사용한 식기는 깨끗하게 세척 후 건조대(싱크대)에 놓아주세요.<br/> (반드시 건조대(싱크대) 위에 올려주세요. 저희가 다시 한 번 확인하고 세척 후 정리 한답니다!)
                    </li>
                    <li>실내외 자쿠지는 사용 후 물마개를 빼서 물을 모두 빼주세요.</li>
                    <li>퇴실 시 천장에어컨, 침실에어컨 , TV ,조명 등 전기 전원을 모두 꺼주세요.<br/> (겨울철 – 천장 온풍기, 침실 전기매트를 꺼주세요!)</li>
                </ol>
            </b>
        </Container>
    )
}


