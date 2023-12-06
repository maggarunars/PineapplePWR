import { createClient } from '@supabase/supabase-js';
import { useEffect,useState } from 'react';
import WishCard from './WishCard';


//making sure to be able to have varying ids and descriptions of the wishes
export type Wish = {
    id: number;
    description: string;
}

//creating the url and key to be able to access the supabase
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

            //error message if we're unable to fetch a wish
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

    //getting a random wish between the length of the wish list
    const getRandomWish = () => {
        const randomIndex = Math.floor(Math.random() * wishes.length);
        return wishes[randomIndex];
    };

    return (
        //getting a random wish in a styled div
        <div className='Wishes' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
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