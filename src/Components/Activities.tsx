import { createClient } from '@supabase/supabase-js';
import { useEffect,useState } from 'react';
import ActivityCard from './ActivityCard';


//making sure to be able to have varying ids and descriptions of the activities
export type Activity = {
    id: number;
    description: string;
}

//creating the url and key to be able to access the supabase
const supabaseUrl = 'https://auhpdielrdyucfnebizd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1aHBkaWVscmR5dWNmbmViaXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExODE2MzMsImV4cCI6MjAxNjc1NzYzM30.FqBm_Z7BTQk9lNLTx9XblL9mtfl-LnvkCaazFAJKPAw'
export const supabase = createClient(supabaseUrl, supabaseKey);

const Activities = () => {
//we need two pieces of state, one to store activities ones we fetch them and the errors if there are any when we fetch
//values of the const - error and function to update it. Null to begin with.
    const[fetchError, setFetchError] = useState('');
    const [activities, setActivities] = useState<Array<Activity>>([]);
//we now fetch the data, we use useEffect Hook - fires function when the componentfirst renders.It fires straightaway and fetch data.
//second argument needs to be an empty array for dependencies, we only wants this to fire once
//inside create asyncronous function
//data got from Activities table and we want to get all data so we pass blank (), meaning no arguments, it will fetch all the data for us

    useEffect(() => {
        const fetchActivities = async () => {
            const { data, error } = await supabase
            .from('Activities')
            .select();

            //error message if we're unable to fetch an activity
            if (error) {
                setFetchError('Could not fetch the Activities');
                setActivities([]);
                console.log(error);
            } 
            if (data) {
                setActivities(data);
                setFetchError('');
            }
        };
        fetchActivities();
    }, []);

    //getting a random activity between the length of the activity list
    const getRandomActivity = () => {
        const randomIndex = Math.floor(Math.random() * activities.length);
        return activities[randomIndex];
    };

    return (
        //getting a random activity in a styled div
        <div className='Activities' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            {fetchError && <p>{fetchError}</p>}
            {activities.length > 0 && (
                <div className='Activities'>
                    <ActivityCard activity={getRandomActivity()}></ActivityCard>
                </div>
            )}
        </div>
    );
};

export default Activities;