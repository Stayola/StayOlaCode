import React, { useState, useEffect } from 'react';
import moment from 'moment';
import "./ClockContainer.modul.css";


function ClockContainer() {
    let timer = null;
    const [time, setTime] = useState(moment());
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timer = setInterval(() => {
            setTime(moment());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div style={{textAlign:'center'}}>
            <font className="neon-pink" style={{ fontSize:"xxx-large" }}>
                {time.format('YYYY/MM/DD')}
            </font>
            <br/>
            <font className="neon-blue" style={{fontSize:"xx-large"}}> {time.format('HH:mm:ss')}</font>
        </div>
    );
}

export default ClockContainer;