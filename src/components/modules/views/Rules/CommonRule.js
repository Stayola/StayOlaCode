import {Box, Button, Collapse, Container, Grid, Typography} from "@mui/material";
import {useState} from "react";
import Carousel from 'react-material-ui-carousel';

function CommonRule() {
    return (
        <Container style={{marginTop: '1rem', marginBottom: '1rem', fontSize: '1.2rem', paddingLeft: '2rem'}}>
            <h2 style={{textAlign: 'center'}}>
                [ 입실안내 ]
            </h2>
            <ol>
                <b>
                    <li> 스테이 내 모든 구역(실내외)은 <b style={{color: "red"}}>금연구역</b>입니다.</li>
                    <li>목재로 지어진 한옥의 특성상 화재위험이 높아 <b style={{color: "red"}}>개인적인 화기사용은 절대 금해</b> 주시기 바랍니다.<br/> (가스버너,
                        라이터,
                        촛불,향,
                        폭죽 등)
                    </li>
                    <li>예약 인원 외 방문자 입실과 반려동물의 동반 입실은 불가합니다. (적발 시 강제 퇴실 조치될 수 있으니 유의바랍니다.)</li>
                    <li>스테이 주변은 주민들의 생활공간 입니다. <b style={{color: "red"}}> 밤 10시 이후 지나친 소음은 자제 부탁드립니다. </b></li>
                    <li> 실내에서는 <b style={{color: "red"}}>탈취에 어려움이 있는 음식 조리는 삼가</b>해주세요. (생선, 고기, 청국장 등)</li>
                    <li>실내외 자쿠지와 계단, 가구, 모서리, 문 등에 의한 <b style={{color: "red"}}>안전사고</b>에 항상 유의바랍니다.</li>
                    <li>외출 시 중요한 귀중품은 꼭 소지해 주시고, 현관문과 대문은 꼭 닫아주세요. <br/><b style={{color: "red"}}>(대문은 3초 정도 당기고 있어 주세요.
                        현관문으로는 모기나 벌레가 들어올 수 있으니 반드시 닫아주세요.)</b>
                    </li>
                    <li>벌레방역에 최선을 다하지만, 한옥주택의 특성상 완전히 없앨 수가 없답니다.
                        이로 인한 환불은 어려우니 양해바랍니다.
                    </li>
                    <li>침구류 위에서 음식 섭취를 삼가해 주세요.</li>
                    <li>진한 색상의 음식물이나 오염은 휴지를 사용해주시고, 하얀 수건으로 닦지 말아주세요</li>
                    <li>상업촬영은 반드시 사전 협의 후 진행해주세요.</li>
                </b>
            </ol>
        </Container>
    )
}

function Jacuzzi() {
    const slideSrc = ["/Jacuzzi/jacuzzi1.jpg", "/Jacuzzi/jacuzzi2.jpg"];
    return (
        <Container display='flex' justifyContent='center' sx={{textAlign: 'left', mt: 2, mb: 2}}>
            <h2 style={{textAlign: 'center'}}>
                <div>[자쿠지 이용 안내 & 주의 사항]</div>
            </h2>
            <Box style={{textAlign: 'center', justifyContent: 'center'}}>
                <figure style={{textAlign: "center", justifyContent: "center", display: "inline-block", border: '1px'}}>
                    <Carousel autoPlay={true} sx={{width: '100vh', height: '100vh', justifyContent: 'center'}}>
                        {slideSrc.map((item, i) => {
                            return (
                                <img src={item} alt='' style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                            )
                        })}
                    </Carousel>
                    <figcaption>
                        <b>
                            <p>➖ 자쿠지 추가 이용시 미온수 무료<br/>
                                (실내/실외 자유이용)
                            </p>
                            <p>✔실내자쿠지-사계절 이용가능<br/>
                                ✔실외자쿠지-동절기(12월~2월 제한)<br/>
                                ➖기온에 따라 11월/3월은 유동적으로 바뀔 수 있어요.<br/>
                            </p>
                        </b>
                    </figcaption>
                </figure>
            </Box>
            <b>
                <ol style={{marginTop: '1rem', marginBottom: '1rem', fontSize: '1.2rem', paddingLeft: '2rem'}}>
                    <li> 자쿠지 이용시 반드시 <b style={{color: 'red'}}> 수영복을 착용</b> 해주세요</li>
                    <li> 어린 아이들은 반드시 부모님의 보호 아래에서 <b style={{color: 'red'}}>안전한 물놀이</b>를 할 수 있도록 <b
                        style={{color: 'red'}}>안전에
                        유의해주세요.</b></li>
                    <li> 영유아동은 양말을 신고 들어가면 미끄럼사고를 예방할 수 있어요.</li>
                    <li><b style={{color: "red"}}>젖은 수영복은 마당에 비치 된 건조대</b>에 걸어주세요</li>
                    <li> 자쿠지 사용 후 <b style={{color: "red"}}>물마개를 빼서 물을 모두 빼주세요.</b></li>
                    <li><b style={{color: 'red'}}> 입욕제는 제공해드리는 입욕제만 사용해주세요.</b> <br/>
                        <Box style={{border: '3px solid red', padding: '6px 6px 6px 6px', display: 'inline-block'}}>
                            ✔이외에 입욕제 사용시 타일착색 또는 변색위험, 배수시 거품 역류 현상 등 시설에 문제가 생길 수 있습니다.<br/>
                        </Box>
                        <br/>
                    </li>
                    <li>
                        음식물, 이물질이 물에 들어가지 않게 꼭 유의해주세요.(배수시 하수구 막힘)
                    </li>
                    <li>
                        (실내·외) 자쿠지 사용시 마개 고리가 위로 올라와야 합니다.<br/>
                        간혹 거꾸로 쓰시는 분들이 계십니다. 이 경우 마개가 빠지지 않아 직접 물을 퍼내고<br/>
                        전문가를 불러서 마개를 빼야합니다.<br/>
                        <figure style={{textAlign: "center", justifyContent: "center"}}>
                            <img src="/image01.png" alt="Jaccuzi" style={{width: '80%'}}/>
                            <Box style={{
                                border: '2px solid red',
                                padding: '1% 2% 1% 2%',
                                marginTop: '2rem',
                                display: 'inline-block',
                                justifyContent: 'center'
                            }}>
                                <figcaption>
                                    위와 같은 자쿠지 이용시 주의사항을 위반하여 설비 세척 또는 고장으로 자쿠지 이용이 제한 될 경우,<br/>
                                    수리 시간이 많이 소요되며 다음 입실 고객님께 큰 피해를 주게 됩니다.<br/>
                                    이 때는 이용가능 시점까지의 숙박요금 또는 수리비가 청구될 수 있습니다.
                                </figcaption>
                            </Box>
                        </figure>
                    </li>

                </ol>
            </b>


        </Container>
    )
}

function Bbq() {

    return (
        <Container fixed maxWidth="lg" sx={{
            mt: 3,
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <h2>[캠핑감성 BBQ 이용 및 안전수칙]</h2>
            <b style={{textDecoration: 'underline'}}>BBQ 이용시간 : PM 3:00 ~ PM 22:00 </b>
            <ol style={{
                marginTop: '1rem',
                marginBottom: '1rem',
                fontSize: '1.2rem',
                paddingLeft: '2rem',
                textAlign: 'left'
            }}>
                <li><b style={{color: 'red'}}>개인화기 및 인화성 물질 절대 사용 금지(화재위험)</b><br/>스테이 올라에서 준비한 도구들로 정해진 장소에서만 사용해 주세요.
                </li>
                <li>제공해 드린 <b style={{color: 'red'}}>캠핑 전용 식기류를 사용</b>해 주세요.</li>
                <li><b style={{color: 'red'}}>사용한 식기류는 세척 후 실내 싱크대에 올려주세요.</b></li>
                <li><b style={{color: 'red'}}>밤 10시 이후 지나친 소음은 자제 부탁</b>드립니다.</li>
                <li> 스테이 (실·내외)에서는 <b style={{color: 'red'}}>절대 금연</b>입니다.</li>
                <li>쓰레기는<b style={{color: 'red'}}>분리배출</b>하여 주세요.(음식물/재활용)</li>
                <li><b style={{color: 'red'}}>영유아, 어린이 동반시 반드시 부모님의 보호가 필요합니다.</b></li>
                <li> 마지막까지 <b style={{color: 'red'}}>숯이 완전히 소화</b> 되었는지 반드시 확인바랍니다. <br/> (화재의 주된 원인입니다. <b
                    style={{color: 'red'}}> 꺼진 불씨도 다시 보자!!!</b> )
                </li>
                <br/>
                <b>**숯 추가시 +10000원 추가결제<br/>
                    **비치된 토치는 사용하지 않으셔도 됩니다.<br/>
                    [파이어콘+핸디롱라이터]로도 쉽게 불을 지필 수 있어요.</b>
            </ol>

            <br/>
            <h3 style={{color: 'red'}}>※ 안전수칙을 어기고 생긴 안전사고의 발생에 있어서<br/>
                스테이올라 에서는 민·형사상 책임을 지지 않으니<br/>
                충분히 숙지하시고 꼭 지켜주시기 바랍니다.<br/>
            </h3>
            <br/>
            <BbqMore/>
        </Container>)
}

function BbqMore() {
    const [open, setOpen] = useState(true);
    const imageSrc = ['/BBQ/BBQ1.jpg', '/BBQ/BBQ2.jpg', '/BBQ/BBQ3.jpg']

    return (
        <div>
            <Button onClick={() => setOpen(!open)} variant="contained">
                <h1>[ ▼BBQ 파이어콘 사용안내 ]</h1>
            </Button>
            <Collapse in={open}>
                <br/>
                <Typography textAlign='center'>
                    <b>스테이올라는 비대면입퇴실 독채스테이로 BBQ 이용시 고객님이 직접 불을 지피셔야 합니다.<br/>
                        여성분들은 토치사용이 어려울 수 있어서,<br/>
                        좀 더 쉽고 간편하게 불을 붙일 수 있도록 파이어 콘을 준비해두었습니다:)<br/>
                        셋팅 되어있는 긴 라이터로도 쉽게 점화가 되어요~<br/>
                        사진을 참고하여 간편하고 쉽게 BBQ를 즐겨보세요🥩<br/>
                    </b>
                    (점화시에는 적당한 거리를 두고 반드시 안전에 유의해주세요!)
                </Typography>
                <br/>
                <Grid container spacing={1} style={{justifyContent: 'center', display: 'inline-flex'}}>
                    {imageSrc.map((item, i) => {
                        return (
                            <Grid item xs={4}>
                                <img src={item} style={{width: '100%', height: '100%'}} alt={i}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Collapse>
        </div>
    )
}

function Warning() {
    return (
        <Container fixed maxWidth="lg" sx={{
            mt: 3,
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <h1 style={{color: 'red'}}>[긴급 상황 시 연락망]</h1>


            <h3 style={{color: 'red'}}>※관리인</h3>
            <b>010-3143-8838</b>
            <b>010-3500-4825</b>
            <b>010-2893-7575</b>
            <br/>

            <h3 style={{color: 'red'}}>※화재발생시</h3>
            <b>119</b>
            <b>- 삼덕 119 안전센터 053) 601-4575 </b>
            <b>- 봉덕 119 안전센터 053)601-4573</b>
            <br/>

            <h3 style={{color: 'red'}}>※응급환자 발생시 응급의료기관</h3>
            <b>경북대학교 병원 응급실 053)200-5100</b>
            <b>곽병원 응급실 053)605-3333</b>
            <b>계명대학교 동산병원 응급실 053)250-8481</b>
            <br/>

            <h3 style={{color: 'red'}}>※대구 중구 심야약국</h3>
            <b>대하약국(마감 22:30) 053)254-8164</b>
            <b>복음약국(마감 밤12시) 053)252-1325</b>
            <b>갤러리약국(마감 23:30) 053)256-3651</b>
            <b>**간단한 해열제 및 의약품은 주변 편의점에서 쉽게 구매할 수 있습니다.</b>
        </Container>
    )
}

function Items() {
    return (
        <Container fixed maxWidth="lg" sx={{
            mt: 3,
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <h2>[ 마당 & 자쿠지 ]</h2>
            <b>실외화 4켤레, 야외의자 2개</b>
            <b>실외자쿠지(플로팅트레이)</b>
            <b>실내자쿠지(성인튜브1.영유아튜브2)</b>
            <b>미끄럼방지 매트(2장), 대형비치타올2개</b>

            <h2>[ 부엌 ]</h2>
            <b>인덕션(전용냄비&프라이팬)</b>
            <b>일리커피머신(커피캡슐제공),웰컴음료</b>
            <b>전자레인지,정수기,미니와플기, 냉장고</b>
            <b>각종 식기도구, 플로팅 접시,그릇세트, 유리컵, 머그잔, 아크릴 와인잔, 수저세트, 얼음곽, <br/>식탁 앞치마</b>

            <h2>[ 침실 ]</h2>
            <b>침대, 침구류, 벽걸이에어컨(냉방), 옷걸이6개, 전기매트(겨울) <br/> **인원추가시 토퍼+침구제공**</b>

            <h2>[ 거실 ]</h2>
            <b>좌식테이블, 공기청정기, 스탠바이미 (흰색-전용리모컨 /검정색-HDMI리모컨) 시스템에어컨(냉난방), 블루투스스피커</b>
        </Container>
    )
}

function Coffee() {
    return (
        <Container fixed maxWidth="lg" sx={{
            mt: 3,
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <Grid container>
                <Grid item xs={12}>
                    <h2>[ 일리커피머신기 사용안내 ]</h2>
                </Grid>
                <Grid item xs={7}>
                <b>
                        <ol style={{textAlign: 'left'}}>
                            <li>물통에 물을 채운다. <br/>(물통은 조심히 빼주세요. 빼시다가 파손되는 경우가 잦아요.)<br/><font
                                style={{fontSize: '12px'}}>파손시,
                                부품(물통) 구매비용이 청구됩니다.</font></li>
                            <li>버튼 두개중 아무거나 눌러서 전원을 켠다. <br/>(예열이 완료되면 더 이상 깜박거리지않고 두버튼 모두 켜져있어요.-1분소요)</li>
                            <li>커피 캡슐을 넣는다.</li>
                            <li> 원하는 스타일에 따라 버튼을 선택하여 눌러주세요.<br/>
                                (작은컵-에스프레소/큰컵-아메리카노)
                            </li>
                        </ol>
                    </b>
                </Grid>
                <Grid item xs={5}>
                    <video src={'/coffee.mp4'} controls autoPlay={true} loop={true} style={{width: '100%', height: 'auto'}}/>
                </Grid>
            </Grid>
        </Container>
    )
}

function StandByMe() {
    return (
        <Container fixed maxWidth="lg" sx={{
            mt: 3,
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <h2>[ 스탠바이미 사용안내 ]</h2>
            <Box>
                <Box maxWidth={"sm"}
                     sx={{textAlign: "center", justifyContent: "center", display: 'inline-flex'}}>
                    <Box style={{justifyContent: "center"}}>
                        <img src='remocon.jpg' alt='' style={{width: '100%'}}></img>
                    </Box>
                </Box>
            </Box>
            <b style={{textAlign: 'center'}}>
                <p>- 스탠바이미 전용리모컨(흰색)으로 전원ON/OFF 해주세요.</p>
                <p>-케이블 시청을 원하시면 HDMI로 변경 후
                    검정색 리모컨을 사용해주세요.</p>
                <br/>
                <Box style={{border: '2px solid red', padding: '1% 2% 1% 2%', display: 'inline-block'}}>
                    <h3>☆주의사항☆</h3>
                    <p>스탠바이미 이동시 본체와 모니터에 연결된 HDMI 선을 완전히 분리해 주세요!<br/>
                        연결된 HDMI 선을 끼워둔 채 무리하게 이동하게되면 고장 및 파손의 원인이 됩니다. </p>
                </Box>
            </b>
        </Container>
    )
}

function Fire() {
    return (
        <Container fixed maxWidth="lg" sx={{
            mt: 3,
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <h2>[ ※ 불멍 사용방법 ※ ]</h2>
            <b>
                <ol style={{textAlign: "center", justifyContent: "center", listStylePosition: "inside"}}>
                    <li>유리심지(하얀솜)가 담긴 통에 꺼내어 식물성 에탄올을 적당량 주입합니다.<br/>
                        <b style={{backgroundColor: 'yellow', textDecoration: 'underline'}}> (에탄올을 많이 넣을수록 지속시간이 길어지는 것은
                            아니며, 불꽃이 강해집니다.<br/>
                            천천히 부으면서 솜이 흠뻑 젖은 정도가 되면 멈춰주세요!)</b>
                    </li>
                    <li>유리심지 통을 불멍 본체에 넣은 후 <b style={{color: 'red'}}>고정되었는지 확인</b>하고, <b style={{color: 'red'}}>롱 라이터를
                        통해 불을 점화</b>합니다.<br/>
                        (점화시 처음에 불꽃이 튈 수 있으니 반드시 적당한 거리를 유지해주세요.)
                    </li>
                    <li>안전을 위해 불멍시간은 30분 내외로 지속됩니다.<br/>
                        불꽃은 서서히 줄어들며,<b style={{color: 'red'}}> 중간에 혹시 불을 꺼야 한다면<br/>
                            반드시 소화용 덮개(검정색T자)를 이용하여 불을 꺼주세요.</b>
                    </li>
                </ol>
                <Grid container>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
                <img src="/fire/fire1.jpg" alt='' width="auto" height="700vh"/>
            </b>
            <div>
                <hr style={{borderColor: 'black'}}/>
            </div>
            <h2>[ ※ 불멍 사용시 주의사항 ※ ]</h2>
            <h3 style={{textDecoration: "underline"}}>!! 아래 내용을 반드시 읽어보시고 올바른 사용방법으로 안전에 주의를 기울여 주시길 바랍니다!!</h3>
            <b>
                <ol style={{textAlign: "center", justifyContent: "center", listStylePosition: "inside"}}>
                    <li>폭발 및 화재위험이 있으므로 <b style={{color: 'red'}}> 제공해드리는 에탄올만 사용</b>해주세요. <br/>
                        (국내산 식물성 바이오에탄올95% 사용)
                    </li>
                    <li>처음 불 점화시에 불꽃이 튀어 오를 수 있으니 거리를 둔 상태에서 <b style={{color: 'red'}}>롱 라이터를 사용하여 점화</b>해주세요.</li>
                    <li>불을 점화 한 후, <b style={{color: 'red'}}>손으로 절대 만지지 마세요.(본품 전체가 뜨거워요!)</b></li>
                    <li>불꽃이 있을 때는 에탄올 추가주입을 절대금지합니다.</li>
                    <li>연료나 불꽃 가까이서 흡연이나 화재위험이 있는 물건은 가까이 하지 말아주세요.</li>
                    <li>불멍 본품 안에 다른 이물질은 넣지 말아주세요.</li>
                    <li><b style={{color: 'red'}}>어린아이들이 있는 경우에는 사용을 제한</b>해주세요.</li>
                    <li>불꽃이 있는 때 <b style={{color: 'red'}}>자리를 비우지 말아주세요.</b><br/>
                        (이동시 불멍 다리에 걸리지 않게 조심해주세요.)
                    </li>
                    <li>불꽃이 있을 때 <b style={{color: 'red'}}>불멍 본체 이동은 절대금지</b>입니다!</li>
                    <li><b style={{color: 'red'}}>불꽃을 끌 때에는 전용 소화용 덮개를 사용</b>하여 에탄올 통을 덮어주세요.<br/>
                        (검정색 T자 모양 = 전용 소화용 덮개)
                    </li>
                    <li>불멍 난로용 식물성 에탄올로 냄새, 색깔, 연기가 최소화되어 실내에 적합한 불멍 제품이지만, <br/>
                        <b style={{color: 'red'}}>오랜 시간 사용하실 경우에는 실내 환기를 1~2분정도 꼭 시켜주세요!</b>
                    </li>


                </ol>
                <p>
                    <b style={{backgroundColor: 'yellow'}}>
                        ‣점화 후에는 불멍 본체 이동을 금지하며, 본체가 뜨거우니 절대 손으로 만지지 마세요.<br/>
                        ‣ 불꽃이 사라지면 본체가 식는 속도도 빨라요. 다 식고 난 후, 안전하게 만져 주세요.
                    </b>
                </p>
                <h4><b style={{backgroundColor: '#faa5a5'}}>위의 주의사항 미준수시 발생하는 안전사고의 책임은 사용자에 있음을 안내드립니다.<br/>
                    꼭! 안전에 유념하여 불멍을 즐겨주세요☺</b></h4>
            </b>
            <Grid container style={{alignItems: 'stretch', textAlign: 'center', justifyContent: 'center'}}>
                <Grid item md={8} sx={{border: 1}}>
                    <Box style={{justifyContent: 'center', textAlign: 'center'}}>
                        <h3>♥불멍 리뷰이벤트♥</h3>
                        <p style={{fontSize: '18px'}}><b style={{textDecoration: 'underline'}}>- 네이버 방문자리뷰 / 블로그리뷰 / 인스타
                            리뷰(피드or스토리공유)</b><br/>
                            스테이올라 태그필수! @stay_ola_ #스테이올라 #대구스테이올라<br/>
                            #대구감성숙소#대구한옥스테이#대구펜션#대구펜션추천<br/>
                            #대구여행#대구숙소#자쿠지펜션 등등<br/>
                            <br/>
                            리뷰 약속 꼭~지켜주실꺼죠?(간절☺)저희에겐 너무나도 소중하고 감사한 리뷰랍니다♥
                        </p>
                    </Box>
                </Grid>
                <Grid item md={4} sx={{border: 1}}>
                    <img src='/fire/fire2.jpg' alt='' style={{objectFit: 'cover', width: '100%', height: '100%'}}/>

                </Grid>
            </Grid>

        </Container>
    )
}

export {CommonRule, Jacuzzi, Bbq, Warning, Items, Coffee, StandByMe, Fire}