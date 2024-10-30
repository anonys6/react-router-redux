import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { FC } from 'react';

interface ProtectecdProps {
    Component: FC;
}

const Protectecd: FC<ProtectecdProps> = ({ Component }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const login = localStorage.getItem('login');
        console.log(login);

        if (!login) {
            navigate("/login");
        }
    }, [navigate])

    return (
        <>
            <Component />
        </>
    )
}

export default Protectecd