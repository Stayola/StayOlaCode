import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {keyframes} from '@emotion/react';
import {Box} from "@mui/material";
import ClockContainer from "../components/clock/ClockContainer";

const backgroundImage = '/main.png';

export default function Notice() {

    const blinkAnimation = keyframes`
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    `;
    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            <img
                style={{display: 'none'}}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                NOTICE
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{mb: 2, mt: 4}}
            >
                안녕하세요. <b style={{color: "skyblue"}}>[스테이 올라]</b>입니다. <tr></tr>
                아래 공지사항을 꼼꼼히 확인해 주세요
            </Typography>
            <Box justifyContent={'center'}>
                <ClockContainer></ClockContainer>
            </Box>

            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{mt: {xs: 2, sm: 4}}}
            ><b>체크인 <b style={{color: '#f34e5a'}}>15:00</b> / 체크아웃 <b style={{color: '#fc5252'}}>11:00</b>
                <br/> (레이트체크아웃 신청시
                : 정오)</b>
            </Typography>

            <Typography variant="body2" color="inherit" sx={{mt: 2}}>
                객실 정비를 위해 체크아웃 시간은 반드시 지켜주시기 바랍니다.
            </Typography>
            <Typography variant="body2" color="inherit" sx={{mt: 2}}>
                *WIFI PASSWORD : 스탠바이미(TV) 뒤쪽에 부착되어 있어요.
            </Typography>
            <Typography variant="body2" color="inherit" sx={{mt: 2, textAlign: 'center'}}>
                스테이올라를 찾아주신 모든 분들이 이 공간에서 만큼은<br/>
                행복하고 편안한 시간을 보내시기 바랍니다. <br/>
                도움이 필요하시다면, 언제든지 연락주세요.😊 <br/>
                <b style={{textDecoration: 'underline', fontSize: '20px'}}>010-3143-8838 / 010-3500-4825</b>
            </Typography>
            <br/>
            <Box style={{textAlign: 'center'}}>
                <h3><b>※ CCTV 및 안전 용품※</b></h3>
                <p>스테이 올라는 고객 안전 및 도난방지를 위해 외부용 cctv가 작동되고 있습니다. <br/>
                    실내에는 화재경보기와 일산화탄소 경보기 및 소화기 2대(실내1, 실외1)가 설치되어 있습니다.
                </p>
                <br/>
                <h3><b style={{color: "#F79393", textDecoration: 'underline'}}>★ 모든 시설물의 분실 및 파손이나 커튼, 침구류 등 패브릭 제품에
                    지워지지 않은
                    오염
                    발생 시, <br/>
                    배상의 책임이 있으니 소중하게 이용 부탁드립니다.</b></h3>
                <h3><b style={{color: "#F79393", textDecoration: 'underline'}}>★ 개인 부주의로 인한 안전사고, 분실/파손에 대해 스테이 올라에서는
                    책임지지
                    않으니
                    주의바랍니다.<br/>
                    특히 영유아, 어린이를 동반한 고객님께서는 아이들의 안전에 더욱더 신경 써 주세요!</b></h3>
                <h2><b style={{color: "#fd3b3b", textDecoration: 'underline'}}>시설물 이용시 개인안전관리에 유념해주시고, <br/> 이용수칙 미준수 /
                    이용자부주의에 의한 안전사고는
                    본인에게 책임이 있음을 안내드립니다. </b></h2>
            </Box>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{mt: {xs: 4, sm: 10}}}
            >
                <KeyboardDoubleArrowDownIcon
                    sx={{
                        fontSize: 40,
                        animation: `${blinkAnimation} 1s infinite`,
                    }}
                />
            </Typography>
        </ProductHeroLayout>
    );
}
