
import { useEffect, useState } from 'react'



function Home() {

    const [champion, setChampion] = useState([])
    
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
        const name = Object.keys(champion)
        const randomName = Math.floor(Math.random() * name.length)
        console.log(randomName, name[randomName])
    }

    return (
    
        <div>
            <h1>Home</h1>
        <button onClick={randomizer}>Gerar build</button>
        {/* tem os nomes já mapeados e no state */}
        {/* {champion && (
            <div className='champsName'>
                {Object.keys(champion).map((names)=>(
                    <p key={names}>{champion[names].name}</p>
                ))}
            </div>
        )} */}
        
        <div>
            build lado a lado de itens
        </div>
        
        </div>
        
    )
}

export default Home