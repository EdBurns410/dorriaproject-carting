const getUserFromServer = async() =>{
    const res = await fetch(`/api/auth/user`,{
        credentials:'include'
    })
    const data = await res.json()

    return data
}

export default getUserFromServer