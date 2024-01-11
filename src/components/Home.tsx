
import { useEffect } from 'react'

const url = import.meta.env.API_url

function Home() {
    const recepies = async(url: string)=>{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data);
        return data
    }
    
    useEffect(()=>{
        recepies(url)
    },[])
    return (
    
        <div>
            <h1>Home</h1>
        <p>
        
        </p>
        
        </div>
        
    )
}

export default Home