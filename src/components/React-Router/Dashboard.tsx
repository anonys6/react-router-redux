import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-3 p-4">
            Dashboard
            <Link to="admin">Admin</Link>
            <Link to="student">Student</Link>
            <Outlet />
        </div>
    )
}

export default Dashboard

export const Admin = () => {
    return (
        <>
            Admin From admin
        </>
    )
}

export const Student = () => {
    return (
        <>
            Student
        </>
    )
}