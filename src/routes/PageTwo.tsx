import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import useUsers from 'hooks/useUsers'

export default function PageTwo() {
    const users = useUsers();

    const usersList = useMemo(() => users.map(user => <li key={user.id}>{user.name}</li>)
        , [users]
    );

    return (
        <div data-testid='page_two'>
            <h1>Page two</h1>
            <h2>Users:</h2>
            <ul>
                {usersList}
            </ul>
            <Link to='/' data-testid='back_link'>Back</Link>
        </div>
    )
}
