import { useState } from "react";

function OddsForm(){

    const [realChance, setRealChance] = useState(0);
    const [balance, setBalance] = useState(0);
    const [userChance, setUserChance] = useState(0);

    const [message, setMessage] = useState("");
    const [messageStyle, setMessageStyle] = useState(false);

    const handleOddChange = (e) => {
        setRealChance((100 / e.target.value).toFixed(2));
    }

    const handleBalanceChange = (e) => {
        setBalance(e.target.value);
    }

    const handleUserChanceChange = (e) => {
        setUserChance(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if(realChance !== 0 && userChance !== 0 && balance !== 0){
            let ln = Math.log(realChance);
            let increasedLn = ln * 10;
            let realChancePercent = userChance * 100;

            let stakePercent = realChancePercent - increasedLn;
            let stakeDecimal = stakePercent / 100;

            let formula = (stakeDecimal * balance).toFixed(2);

            if(formula <= 0) {
                setMessage("You should not bet on this match !");
                setMessageStyle("text-center w-3/5 md:w-1/5 bg-red-200");
            }else{
                setMessage("You should place a bet of " + formula + " units");
                setMessageStyle("text-center w-3/5 md:w-1/5 bg-green-200");
            }
        }
    }

    return (
        <form className="shadow-2xl
                         text-lg md:text-3xl 
                         w-full 
                         text-center 
                         flex
                         flex-col
                         justify-center
                         items-center
                         gap-10
                         mb-12">

            <div className={messageStyle}>
                            {message}
            </div>

            <input 
                required 
                type="number"
                min="1"
                step="0.1"
                placeholder="bookmaker odds" 
                className="text-center 
                           w-3/5 md:w-1/5"
                onChange={handleOddChange}>
            </input>

            <input 
                required 
                type="number"
                step="100"
                placeholder="Your balance" 
                className="text-center 
                           w-3/5 md:w-1/5"
                onChange={handleBalanceChange}>
            </input>

            <input 
                required 
                type="number"
                step="0.05"
                min="0" 
                max="1"
                placeholder="Chances ( 0 - 1 )" 
                className="text-center 
                           w-3/5 md:w-1/5"
                onChange={handleUserChanceChange}>
            </input>

            <button 
                type="button"
                className="mb-12"
                onClick={handleSubmit}>
                Submit
            </button>

        </form>
    )
}

export default OddsForm;