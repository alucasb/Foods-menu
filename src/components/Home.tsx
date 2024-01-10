import { useEffect } from 'react'

const API_KEY =  import.meta.env.VITE_API_KEY
const API_ID =  import.meta.env.VITE_API_ID

const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${API_ID}&app_key=${API_KEY}&nutrition-type=cooking`

const foods = async(url: string)=>{
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}

function Home() {
    useEffect(()=>{
    foods(url)
    })
    return (
        <div>Home</div>
    )
}

export default Home