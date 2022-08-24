import React, { useEffect, useState } from 'react';
import sleep from '../utils/sleep';
import ArrowDown from '../icons/ArrowDown';

const Discover = React.memo(() => {
    const[showing, setShowing] = useState("");
    const[incr, setIncr] = useState(true);
    const fullMsg = "Discover";

    useEffect(() => {
        const tick = setInterval(async () => {
            if(incr) await sleep(120);
            const newShowing = fullMsg.substring(0, showing.length + (incr ? 1 : -1));
            setShowing(newShowing);
            if(newShowing === "" || newShowing === fullMsg){
                await sleep(newShowing === "" ? 480 : 960);
                setIncr(!incr);
            }
        }, 120);

        return () => clearInterval(tick);
    }, [showing, incr]);

    return (
        <div className='cover__discover'>
            {showing.split('').map(ch =>
                <span className='cover__discover__letter' key={'discover_' + ch}>{ ch }</span>
            )}<span className='cover__discover__letter cover__discover__cursor' key='discover_|'>|</span>
        </div>
    );
});

const Cover = () => (
    <div className='cover'>
        <div className='cover__title'>Sothis</div>
        <Discover/>
        <ArrowDown className='icon icon--large cover__scroll-down-icon--top'/>
        <ArrowDown className='icon icon--large cover__scroll-down-icon--bottom'/>
    </div>
);

export default React.memo(Cover);