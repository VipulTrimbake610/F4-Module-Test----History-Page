import { useSelector } from 'react-redux';
import './History.css'
import { NavLink } from 'react-router-dom';

const History =({setLinkValue})=>{
    let x = useSelector(info=>info);
    let data = x.history;
    console.log(data);

    function handleClick(e){
        setLinkValue(e.target.innerText);
    }
    return (
        <>
            <div className='searchHistory'>
                <h2>Search History</h2>
                <div className='historyLinks'>
                    {
                        data.map((e)=>(
                            <NavLink to={"/word/"+e[0].word} onClick={handleClick}>{e[0].word}</NavLink> 
                        ))
                    }
                </div>

            </div>

        </>
    )
}

export default History; 