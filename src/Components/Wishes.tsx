import { type } from "os";
import { createClient } from '@supabase/supabase-js';
import { useEffect,useState } from "react";
import WishCard from "./WishCard";
import styled from "styled-components";

export type Wish = {
    id: number;
    description: string;
}



const supabaseUrl = 'https://auhpdielrdyucfnebizd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1aHBkaWVscmR5dWNmbmViaXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExODE2MzMsImV4cCI6MjAxNjc1NzYzM30.FqBm_Z7BTQk9lNLTx9XblL9mtfl-LnvkCaazFAJKPAw'
export const supabase = createClient(supabaseUrl, supabaseKey);

const Wishes = () => {
//we need two pieces of state, one to store wishes ones we fetch them and the errors if there are any when we fetch
// values of the const - error and function to update it. Null to begin with.
    const[fetchError, setFetchError] = useState('');
    const [wishes, setWishes] = useState<Array<Wish>>([]);
// we now fetch the data, we use useEffect Hook - fires function when the componentfirst renders.It fires straightaway and fetch data.
// second argument needs to be an empty array for dependencies, we only wants this to fire once
//inside create asyncronous function
// data got from Wishes table and we want to get all data so we pass blank (), meaning no arguments, it will fetch all the data for us

    useEffect(() => {
        const fetchWishes = async () => {
            const { data, error } = await supabase
            .from('Wishes')
            .select();

            if (error) {
                setFetchError('Could not fetch the Wishes');
                setWishes([]);
                console.log(error);
            }
            if (data) {
                setWishes(data);
                setFetchError('');
                console.log(data);
            }
        };
        fetchWishes();
    }, []);

    const getRandomWish = () => {
        const randomIndex = Math.floor(Math.random() * wishes.length);
        return wishes[randomIndex];
    };

    return (
        //template if there error or we have wish it will gave us output, I need to map through wishes.
        <div className='Wishes' style={{margin: 'auto', position: 'absolute'}}>
            {fetchError && <p>{fetchError}</p>}
            {wishes.length > 0 && (
                <div className='Wishes'>
                    <WishCard wish={getRandomWish()}></WishCard>
                </div>
            )}
        </div>
    );
};

export default Wishes;

// seems like I need to have this in App.tsx so I can have <WishesCard key={Wishes.id} --and pass prop-- Wishes{Wishes}