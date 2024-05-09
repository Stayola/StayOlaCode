import * as React from 'react';
import {Box, Container} from '@mui/material';
import './style/OutRules.module.css';

export default function OutRules() {
    return (
        <Container fixed maxWidth="lg"
                   sx={{marginTop: '1rem', marginBottom: '1rem', fontSize: '1.2rem', paddingLeft: '2rem'}}>
            <h2 style={{textAlign: 'center'}}>[ 퇴실안내 ]</h2>
            <b>
                <ol style={{marginTop: '1rem', marginBottom: '1rem', fontSize: '1.2rem', paddingLeft: '2rem'}}>
                    <li> 음식물 쓰레기/ 일반쓰레기(종량제)&재활용분리수거(흰봉지)에 <b style={{color: 'red'}}>분리수거 하여 마당 앞에 놓아주세요.</b><br/>
                        봉지는 싱크대 밑에 있으며, 퇴실시 쓰레기를 실내에 두면 벌레가 생길 수 있어요.
                    </li>
                    <li>사용한 식기는 깨끗하게 세척 후 건조대(싱크대)에 놓아주세요.<br/><b style={{color: 'red'}}> (반드시 건조대(싱크대) 위에 올려주세요. 저희가 다시
                        한 번 확인하고 세척 후 정리 한답니다!) </b>
                    </li>
                    <li>사용하신 <b>비품은 제자리</b>에 정리 부탁드립니다.</li>
                    <li style={{color: 'red'}}>퇴실 시 천장에어컨, 침실에어컨 , TV ,조명 등 전기 전원을 모두 꺼주세요.<br/>
                        (겨울철 – 천장 온풍기, 침실 전기매트를 꺼주세요!) <br/>
                        ❌보일러는 끄시면 안되요❌
                    </li>
                    <li>물품&비품 파손 및 오염, 또는 시설물 <b style={{color: 'red'}}>문제가 생긴 경우, 반드시 퇴실시 말씀해 주시길 바랍니다.</b><br/>
                        다음 입실 고객님을 위해 저희가 신속하게 파악 후 대처(대체)를 해놓아야 합니다.
                    </li>
                </ol>
                <Box style={{justifyContent:'center', textAlign:'center'}}>
                    <Box style={{border: '2px solid red', padding: '1% 2% 1% 2%', display: 'inline-block'}}>
                        <ul style={{
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            fontSize: '1.2rem',
                            paddingLeft: '2rem',
                        }}>
                            <li className='outList'>
                                현관문 / 대문을 <b style={{color: "red"}}>반드시 닫아주세요.</b> 꼬옥 확인바랍니다!
                            </li>
                            <li className='outList'>
                                잊은 물건이 없으신지 한 번 더 둘러봐주세요!<br/>
                                (휴대폰충전기, 악세사리 가장 많이 놓고 가세요ㅜㅜ)
                            </li>
                        </ul>
                    </Box>
                </Box>
            </b>
        </Container>
    )
}


