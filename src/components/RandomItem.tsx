import { useEffect, useState } from "react"


const RandomItem = () => {

    const [item, setItem] = useState([])

    useEffect(()=>{
        const url = import.meta.env.VITE_JSON_ITEM
        const fetchData = async ()=>{
            try{
                const res = await fetch(url)
                const data = await res.json()
                setItem(data.data)
                console.log(data.data)
            }catch (err){
                console.log(err)
            }
        }
        fetchData()
    },[])

  return (
    <div>
        <p>items lado a lado
            maximo 5
        </p>
        <p>colocar um campo para a bota aleatoria</p>
    </div>
  )
}

export default RandomItem