import {Box, Button, Collapse, Container, Typography} from "@mui/material";
import {useState} from "react";

function CommonRules() {
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
                    <li> 실내에서는 탈취에 어려움이 있는 음식 조리는 삼가해주세요. (생선, 고기, 청국장 등)</li>
                    <li>사용하신 비품은 제자리에 정리 부탁드립니다.</li>
                    <li>실내외 자쿠지와 계단, 가구, 모서리, 문 등에 의한 안전사고에 항상 유의바랍니다.</li>
                    <li>외출 시 중요한 귀중품은 꼭 소지해 주시고, 현관문과 대문은 꼭 닫아주세요. <br/>(대문은 3초 정도 당기고 있어 주세요.
                        현관문으로는 모기나 벌레가 들어올 수 있으니 반드시 닫아주세요.)
                    </li>
                    <li>벌레방역에 최선을 다하지만, 한옥주택의 특성상 완전히 없앨 수가 없답니다.
                        이로 인한 환불은 어려우니 양해바랍니다.
                    </li>
                    <li>침구류 위에서 음식 섭취를 삼가해 주세요.</li>
                    <li>진한 색상의 음식물이나 오염은 휴지를 사용해주시고, 하얀 수건으로 닦지 말아주세요ㅠㅠ</li>
                    <li>상업촬영은 반드시 사전 협의 후 진행해주세요.</li>
                </b>
            </ol>
            <br/>
            <Box style={{textAlign: 'center'}}>
                <h3><b>※ CCTV 및 안전 용품</b></h3>
                <p>스테이 올라는 고객 안전 및 도난방지를 위해 외부용 cctv가 작동되고 있습니다. <br/>
                    실내에는 화재경보기와 일산화탄소 경보기 및 소화기 2대(실내1, 실외1)가 설치되어 있습니다.
                </p>
                <br/>
                <h3><b style={{color: "red", textDecoration: 'underline'}}>★ 모든 시설물의 분실 및 파손이나 커튼, 침구류 등 패브릭 제품에 지워지지 않은
                    오염
                    발생 시,
                    배상의 책임이 있으니 소중하게 이용 부탁드립니다.</b></h3>
                <h3><b style={{color: "red", textDecoration: 'underline'}}>★ 개인 부주의로 인한 안전사고, 분실/파손에 대해 스테이 올라에서는 책임지지
                    않으니
                    주의바랍니다.
                    특히 영유아, 어린이를 동반한 고객님께서는 아이들의 안전에 더욱더 신경 써 주세요!</b></h3>
            </Box>
        </Container>
    )
}

function Jaccuzi() {
    return (
        <Container display='flex' justifyContent='center' sx={{textAlign: 'left', mt: 2, mb: 2}}>
            <h2 style={{textAlign: 'center'}}>
                <div>[자쿠지 이용 안내]</div>
            </h2>
            <b>
                <ol style={{marginTop: '1rem', marginBottom: '1rem', fontSize: '1.2rem', paddingLeft: '2rem'}}>
                    <li> 자쿠지 이용시 반드시 <b style={{color: 'red'}}> 수영복을 착용</b> 해주세요</li>
                    <li> 어린 아이들은 반드시 부모님의 보호 아래에서 <b style={{color: 'red'}}>안전한 물놀이</b>를 할 수 있도록 <b
                        style={{color: 'red'}}>안전에
                        유의해주세요.</b></li>
                    <li> 영유아동은 양말을 신고 들어가면 미끄럼사고를 예방할 수 있어요.</li>
                    <li><b style={{color: "red"}}>젖은 수영복은 마당에 비치 된 건조대</b>에 걸어주세요</li>
                    <li> 자쿠지 사용 후 <b style={{color: "red"}}>물마개를 빼서 물을 모두 빼주세요.</b></li>
                    <li> 자쿠지 내 입욕제 사용을 금합니다. (과한 거품이 날 경우 역류가능성이 있어요.) <br/>퇴실 후 문제가 생긴다면, 청소 및 수리비를 청구할 수 있습니다.</li>
                    <figure style={{textAlign: "center", justifyContent: "center"}}>
                        <img src="/image01.png" alt="Jaccuzi" style={{width: '80%'}}/>
                        <figcaption>(실내·외) 자쿠지 사용시 마개 고리가 위로 올라와야 합니다.<br/>
                            간혹 거꾸로 쓰시는 분들이 계십니다. 이 경우 마개가 빠지지 않아 직접 물을 퍼내고<br/>
                            전문가를 불러서 마개를 빼야합니다. 시간도 많이 소요되어 다음 입실고객님께 피해가 생기게 되어요.<br/>
                            이 경우 수리비청구가 될 수 있습니다.
                        </figcaption>
                    </figure>

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
            </ol>
            <br/>
            <b style={{color: 'red'}}><h3>[긴급사항시 연락망]</h3></b>


            <b>*관리인 : 010 - 3143 - 8838</b>
            <b>-삼덕 119 안전센터 : 053) 601 - 4575</b>
            <b>-봉덕 119 안전센터 : 053) 601 - 4573</b>
            <b>*화재발생시: 119</b>


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
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setOpen(!open)} variant="contained">
                [▼BBQ 파이어콘 사용안내]
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
                <Box style={{justifyContent: 'center', display: 'block'}}>
                    <img src="/img.png" alt="BBQ1" style={{width: '100%'}}/>
                    <img src="/img_1.png" alt="BBQ2" style={{width: '100%'}}/>
                </Box>
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
            <h1 style={{color: 'red'}}>[긴급상황시 연락망]</h1>
            <br/>

            <h3 style={{color: 'red'}}>※관리인</h3>
            <b>010-3143-8838</b>
            <b>010-3500-4825</b>
            <b>010-2893-7575</b>
            <br/>

            <h3 style={{color: 'red'}}>※화재발생시 : 119</h3>
            <b>- 삼덕 119 안전센터  053) 601-4575 </b>
            <b>- 봉덕 119 안전센터  053)601-4573</b>
            <br/>

            <h3 style={{color: 'red'}}>※응급환자 발생시 응급의료기관</h3>
            <b>경북대학교 병원 응급실 053)200-5100</b>
            <b>곽병원 응급실 053)605-3333</b>
            <b>계명대학교 동산병원 응급실 053)250-8481</b>
            <br/>

            <h3 style={{color:'red'}}>※대구 중구 심야약국</h3>
            <b>대하약국(마감 22:30) 053)254-8164</b>
            <b>복음약국(마감 밤12시) 053)252-1325</b>
            <b>갤러리약국(마감 23:30) 053)256-3651</b>
            <b>**간단한 해열제 및 의약품은 주변 편의점에서 쉽게 구매할 수 있습니다.</b>
        </Container>
    )
}

export {CommonRules, Jaccuzi, Bbq, Warning}