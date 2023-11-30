import { type } from "os";
import supabase from "../supabaseClient";
import { useEffect,useState } from "react";
import WishCard from "./WishCard";

const Wishes = () =>{
//we need two peaces of state, one to store wishes ones we fetch them and the errors if there are any when we fetch
// values of the const - error and function to update it. Null to begin with.
    const[fetchError, setFetchError] = useState('')
    const [wishes, setWishes] = useState([] as any[])
// we now fetch the data, we use useEffect Hook - fires function when the componentfirst renders.It fires straightaway and fetch data.
// second argument needs to be an empty array for dependencies, we only wants this to fire once
//inside create asyncronous function
// data got from WIshes table and we want to get all data so we pass blank (), meaning no arguments, it will fetch all the data for us

    useEffect(() =>{
        const fetchWishes = async () =>{
            const { data, error } = await supabase
            .from('Wishes')
            .select()

            if (error){
                setFetchError('Could not fetch the Wishes')
                setWishes([])
                console.log(error)
            }
            if (data){
                setWishes(data)
                setFetchError('')
                console.log(data)
            }
        }
        fetchWishes()
    }, [])

const randomWish = Math.floor(Math.random()*wishes.length)
console.log(wishes)
return(
    //template if there error or we have wish it will gave us output, I need to map through wishes.
<div className='Wishes'>
    {fetchError && (<p>{fetchError}</p>)}
    {wishes.length && (
        <div className="Wishes">
          <WishCard wish={wishes[randomWish]}/>

        </div>
    )}
</div>
)
}
export default Wishes

// seems like I need to have this in App.tsx so I can have <WishesCard key={Wishes.id} --and pass prop-- Wishes{Wishes}