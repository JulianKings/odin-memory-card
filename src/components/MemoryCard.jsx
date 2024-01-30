function MemoryCard({gifItem, currentArray, updateCurrentArray, currentScore, updateCScore, bestScore, updateBScore})
{
    return(<>
    <div className="memoryCardHolderItem">
        <img src={gifItem.data.images.fixed_height.url} data-index={gifItem.data.id} onClick={(e) => {
            let currentIndex = (e.target.dataset.index);
            if(currentArray.includes(currentIndex))
            {
                // failed!
                updateCScore(0);
                updateCurrentArray([]);
            } else {
                if((currentScore+1) > bestScore)
                {
                    updateBScore(currentScore+1);
                }
                updateCScore(++currentScore);
                updateCurrentArray(currentArray.concat([currentIndex]))
            }
        }} />
    </div>
    </>);
}

export default MemoryCard