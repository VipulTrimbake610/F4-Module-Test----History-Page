
import { useState } from 'react';
import './Home.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dictLoading,dictSuccess, dictError } from '../../redux/Actions/dictionaryAction';
import { historyData, historyUpdate } from '../../redux/Actions/historyActions';


const Home = ()=>{
    let [search, setSearch] = useState("");
    let x = useSelector(info=>info);
    let dispatch = useDispatch();
    
    let {loading,data} = x.dictionary;
    let myData = data.data;
    // console.log(x);
    
    

 
    function handleClick(){
            dispatch(dictLoading());
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
            .then((data)=>{
                dispatch(dictSuccess(data));
                if(!data){
                    dispatch(historyData(data.data));
                }else{
                    dispatch(historyUpdate(data.data));
                }
            })
            .catch((err)=>dispatch(dictError(err)))
        }
    return (
        <>
            <div className='home'>
                <div className='searchDiv'>
                    <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
                    <button onClick={handleClick}>Search</button>
                </div>
                {
                    loading && <span className="loader"></span>
                }
               {
                !loading &&
                <div className='displayData'>

                {
                    myData && 
                    myData.map((e1,i)=>(
                        <div key={i} className='eachData'>
                                <h2 key={e1.word}>{e1.word}</h2>
                                <div id={"a"+i+10} className='audios'>
                                {
                                    e1.phonetics.map((e2)=>(
                                        <>
                                        <div className='audio' key={e2.sourceUrl}>
                                            <p key={e2.text}>{e2.text}</p>
                                            {
                                                e2.audio &&
                                            <audio key={e2.audio} src={e2.audio} controls></audio>
                                            }
                                        </div>
                                        </>
                                    ))
                                }
                               </div>
                                <p key={e1.phonetic}>{e1.phonetic}</p>
                                {
                                    e1.meanings[0] &&
                                        <div  className='noun'>
                                            <h3>{e1.meanings[0].partOfSpeech}</h3>
                                            {

                                                e1.meanings[0].definitions.map((e3)=>(
                                                    <p>{e3.definition}</p>
                                                ))
                                            }
                                        </div>
                                }
                                {
                                    e1.meanings[1] &&
                                            <div className='verb'>
                                                <h3>{e1.meanings[1].partOfSpeech}</h3>
                                                {

                                                    e1.meanings[1].definitions.map((e3)=>(
                                                        <p>{e3.definition}</p>
                                                    ))
                                                }
                                            </div>
                                }

                        </div>
                        // console.log("Barking : ",e1)
                    ))
                }
                </div>
               }
            </div>
        
        </>
    )
}


export default Home;