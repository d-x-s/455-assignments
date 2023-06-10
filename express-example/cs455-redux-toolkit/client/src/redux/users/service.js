const getUsers = async () => {
    const res = await fetch('http://localhost:3001/users',
    {
        method: 'GET'
    });
    return res.json();
}

export default {
    getUsers
};