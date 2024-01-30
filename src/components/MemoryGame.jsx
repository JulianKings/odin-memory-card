
import { useEffect, useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api'
import MemoryCard from './MemoryCard';
import '../style/memoryGame.css'

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function MemoryGame({cScore, bScore, updateCurrentScore, updateBestScore})
{
    const [gifArray, setGifArray] = useState([]);
    const [clickedArray, setClickedArray] = useState([]);
    
    useEffect(() => {
        async function fetchData()
        {
            const gf = new GiphyFetch('AhVdX3Gsspe7GmIo0uRhD1SFyeBJBZs1');
            let gifs = [];
            let clickedClone = clickedArray.map((x) => x);
            for(let i = 0; i < 12; i++)
            {
                if(clickedClone.length > 0 && i < 10)
                {
                    let gifId = clickedClone.pop();
                    let gif = await gf.gif(gifId);
                    gifs.push(gif);
                } else {
                    let gif = await gf.random({tag: 'cartoon', i, cScore});
                    gifs.push(gif);
                }
            }

            shuffle(gifs);
            
            console.log(gifs);
            setGifArray(gifs);
        }
        fetchData();
        return() => {

        };        
    }, [cScore, clickedArray])

    let memoryContent = '';

    if(gifArray.length > 0)
    {
        memoryContent = gifArray.map((arrayItem) => 
            <MemoryCard key={arrayItem.id} gifItem={arrayItem} currentArray={clickedArray} updateCurrentArray={setClickedArray} bestScore={bScore} updateBScore={updateBestScore} currentScore={cScore} updateCScore={updateCurrentScore}  />
        ); 
    }
    
    return (<>
    <div className='memoryCardHolder'>
        {memoryContent}
    </div>
    </>)

}

export default MemoryGame