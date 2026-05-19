import React, { useEffect, useState } from 'react'
import '../styles/Table.css'

const Table = () => {
    const [table, setTable] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        try {
            setLoading(true)
            const res = await fetch("https://dummyjson.com/todos")
            const data = await res.json()
            setTable(data.todos)
        } catch (error) {
            console.error("Error fetching data:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="table-container">
            <h1 className="table-title">📋 Tasks Management</h1>
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Task</th>
                            <th>Completed</th>
                            <th>User ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((e) => (
                            <tr key={e.id} className={e.completed ? 'completed-row' : ''}>
                                <td>{e.id}</td>
                                <td className="task-title">{e.title}</td>
                                <td className={`status ${e.completed ? 'completed' : 'pending'}`}>
                                    {e.completed ? '✓ Yes' : '✗ No'}
                                </td>
                                <td>{e.userId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Table