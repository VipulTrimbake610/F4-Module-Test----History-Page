import { useSelector } from 'react-redux';
import './Details.css'

const Details = ({ linkValue }) => {
    // console.log(linkValue);

    let data = useSelector(info => info);
    // console.log(data.history);
    let data1 = data.history.find((e) => {
        if (e[0].word === linkValue) {
            return true;
        }
        return false;
    });
    let myData = data1;
    // console.log("Data1 : ", data1);

    return (
        <>
            <div className='myDetails'>
                <div className='displayData'>

                    {
                        myData &&
                        myData.map((e1, i) => (
                            <div key={i} className='eachData'>
                                <h2 >{e1.word}</h2>
                                <div key={e1.phonetics[i]} className='audios'>
                                    {
                                        e1.phonetics &&
                                         e1.phonetics.map((e2) => (
                                            <>
                                                <div className='audio' key={e2.sourceUrl}>
                                                    <p>{e2.text}</p>
                                                    {e2.audio && <audio src={e2.audio} controls></audio>}
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                                <p>{e1.phonetic}</p>
                                {
                                    e1.meanings[0] &&
                                    <div className='noun'>
                                        <h3>{e1.meanings[0].partOfSpeech}</h3>
                                        {

                                            e1.meanings[0].definitions.map((e3) => (
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

                                            e1.meanings[1].definitions.map((e3) => (
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
            </div>
        </>
    )
}

export default Details;