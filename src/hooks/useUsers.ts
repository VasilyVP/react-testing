import { useEffect, useState } from "react";

export type User = {
    id: string;
    name: string;
    username: string;
    email: string;
}

export default function useUsers() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(usersData => {
                setUsers(usersData);
            });
    }, []);

    return users;
}
