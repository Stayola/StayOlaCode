import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { keyframes } from '@emotion/react';

const backgroundImage = //나중에 static 경로로 바꿀것
  '/main.png';

export default function ProductHero() {

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
        style={{ display: 'none' }}
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
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        안녕하세요. <b style={{ color: "skyblue" }}>[스테이 올라]</b>입니다. <tr></tr>
        아래 공지사항을 꼼꼼히 확인해 주세요
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mt: { xs: 4, sm: 10 } }}
      ><b>체크인 15:00 / 체크아웃 11:00 <br /> (레이트체크아웃 신청시 : 정오)</b>
      </Typography>

      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        객실 정비를 위해 체크아웃 시간은 반드시 지켜주시기 바랍니다.
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        *WIFI PASSWORD : 스탠바이미(TV) 뒤쪽에 부착되어 있어요.
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 ,textAlign:'center'}}>
        스테이올라를 찾아주신 모든 분들이 이 공간에서 만큼은<br/>
        행복하고 편안한 시간을 보내시기 바랍니다. <br/>
        도움이 필요하시다면, 언제든지 연락주세요. <br/>
        010-3143-8838 / 010-3500-4825 연락주세요 😊
      </Typography>

      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mt: { xs: 4, sm: 10 } }}
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
