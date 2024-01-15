import { useEffect, useState } from 'react'


const RandomChamps = () => {

    const [champion, setChampion] = useState([])

    const [randomChampion, setRandomChampio] = useState('')
    
    useEffect(()=>{
        const url = import.meta.env.VITE_JSON_URL
        const fetchData = async ()=>{
            try{
                const res = await fetch(url)
                const data = await res.json()
                setChampion(data.data)
            }catch (err){
                console.log(err)
            }
        }
        fetchData()
    },[])

    const randomizer = ()=>{
        if(champion){
        const name = Object.keys(champion)
        const randomName = Math.floor(Math.random() * name.length)
        setRandomChampio(name[randomName])
        }
    }

    return (
    <div>
        <button onClick={randomizer}>Gerar build aleatória</button>
        {/* tem os nomes já mapeados e no state */}
        {/* {champion && (
            <div className='champsName'>
                {Object.keys(champion).map((names)=>(
                    <p key={names}>{champion[names].name}</p>
                ))}
            </div>
        )} */}
        <div>
            {randomChampion && <p>{randomChampion}</p>}
        </div>
        
        </div>
)
}

export default RandomChamps