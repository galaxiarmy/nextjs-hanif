import Layout from "../../components/Layout";
import {useRouter} from 'next/router'
import styles from '../../styles/Users.module.css'

interface UsersProps {
    dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
    const router = useRouter()
    const {dataUsers} = props;

    console.log('test data user', dataUsers)
 
    return (
        <Layout pageTitle="User Page">
            {
                dataUsers.map(user => {
                    return(
                        <div onClick={() => router.push(`/users/${user.id}`)}  key={user.id} className={styles.card}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        </div>
                    )
                })
            }
        </Layout>
        
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json()
    return {
        props: {
            dataUsers,
             
        }
    }
}