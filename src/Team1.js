
import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
function Team1() 
{
    var targetTingTimeStampSecond = 1667995251000
    var difference = targetTingTimeStampSecond - Date.now()

    const [seconds, setSeconds] = useState( parseInt(difference / 100));

    useEffect(() => {
        const countdown = setInterval(() => {
          if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
          }
          if (parseInt(seconds) === 0) {
            clearInterval(countdown);
          }
        }, 100);
        return () => clearInterval(countdown);
      }, [seconds]);

    return (
        <div>
            <div> 
                <div style={{height: '48px', paddingLeft: '16px', paddingRight: '16px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                            <img alt="http://k.kakaocdn.net/dn/cfhf3P/btrpjvvVbsB/jvOMpFzXxkLscRfvM9f7Ok/img_640x640.jpg" src="http://k.kakaocdn.net/dn/cfhf3P/btrpjvvVbsB/jvOMpFzXxkLscRfvM9f7Ok/img_640x640.jpg" style={{objectFit: 'cover', height: '32px', width: '32px', borderRadius: '32px', marginRight: '-12px', border:' 2px solid rgb(255, 255, 255)', filter:' blur(0px)'}}></img>
                    </div>
                        <div style={{marginLeft: '20px', fontSize: '14px', display: 'flex', flexDirection: 'row'}}>
                        <div className="LinesEllipsis " style={{maxWidth: '52px'}}>
                        오연*
                        <wbr></wbr>
                    </div>
                </div>
                </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', color: 'rgb(153, 153, 153)', fontSize: '14px'}}>
                            <div>
                                남은인원
                                <span style={{color: 'rgb(234, 63, 73)'}}>1명</span>
                                </div>
                                <div>
                                    {formattingToDate(seconds)}
                                </div>
                        </div>
                        <div>
                            <button type= "button" style={{border: 'none', display: 'flex', color: 'rgb(255, 255, 255)', flexDirection: 'row', backgroundColor: 'rgb(234, 63, 73)', borderRadius: '4px', justifyContent: 'center', alignItems: 'center', fontSize: '14px', height: '32px', paddingLeft: '12px', paddingRight: '12px', marginLeft: '12px',}}>참여하기</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div style={{height: '0.5px', backgroundColor: 'rgb(224, 224, 224)', marginRight: '16px', marginLeft: '16px'}}> </div>
            
            <div> 
                <div style={{height: '48px', paddingLeft: '16px', paddingRight: '16px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                            <img alt="http://k.kakaocdn.net/dn/cfhf3P/btrpjvvVbsB/jvOMpFzXxkLscRfvM9f7Ok/img_640x640.jpg" src="http://k.kakaocdn.net/dn/cfhf3P/btrpjvvVbsB/jvOMpFzXxkLscRfvM9f7Ok/img_640x640.jpg" style={{objectFit: 'cover', height: '32px', width: '32px', borderRadius: '32px', marginRight: '-12px', border:' 2px solid rgb(255, 255, 255)', filter:' blur(0px)'}}></img>
                    </div>
                        <div style={{marginLeft: '20px', fontSize: '14px', display: 'flex', flexDirection: 'row'}}>
                        <div className="LinesEllipsis " style={{maxWidth: '52px'}}>
                        오연*
                        <wbr></wbr>
                    </div>
                </div>
                </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', color: 'rgb(153, 153, 153)', fontSize: '14px'}}>
                            <div>
                                남은인원
                                <span style={{color: 'rgb(234, 63, 73)'}}>1명</span>
                                </div>
                                <div>
                                    숫자
                                </div>
                        </div>
                        <div>
                            <button type= "button" style={{border: 'none', display: 'flex', color: 'rgb(255, 255, 255)', flexDirection: 'row', backgroundColor: 'rgb(234, 63, 73)', borderRadius: '4px', justifyContent: 'center', alignItems: 'center', fontSize: '14px', height: '32px', paddingLeft: '12px', paddingRight: '12px', marginLeft: '12px',}}>참여하기</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    ); 
}
  
export default Team1;

function formattingToDate(time) {
    var tick = time % 10
    var second = parseInt(time / 10)
    var seconds = second % 60
    var minute = parseInt(second / 60)
    var minutes = minute % 60
    var hours = parseInt(minute / 60)
    
    return hours + ":" + minutes + ":" + seconds + "." + tick
}