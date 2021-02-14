import React, {useEffect} from 'react'
// import headers from './pages/headers.js'


export async function getAllSenateMembers() {
    const url = `https://api.propublica.org/congress/v1/117/senate/members.json`
    const headers = {
        headers: {
            'X-API-KEY': process.env.PROPUBLICA_API_KEY
        }
    }
    const response = await fetch(url,headers)
    const data = await response.json()
    console.log(data)

    return {
        data
    }
}

export async function getAllHouseMembers() {
    const url = `https://api.propublica.org/congress/v1/117/house/members.json`
    const headers = {
        headers: {
            'X-API-KEY': process.env.PROPUBLICA_API_KEY
        }
    }
    const response = await fetch(url,headers)
    const data = await response.json()
    console.log(data)

    return {
        data
    }
}

export async function getMemberById(memberId){
    const url = `https://api.propublica.org/congress/v1/members/${memberId}.json`
    const headers = {
        headers: {
            'X-API-KEY': process.env.PROPUBLICA_API_KEY
        }
    }
    const response = await fetch(url,headers)
    const data = await response.json()
    console.log(data)

    return {
        data
    }
}

const Member = ({data}) => {
    useEffect(() => {
        // getAllSenateMembers()
        // getAllHouseMembers()
        // getMemberById('O000172')
     })
     return(
         <div>
             <h1>Member</h1>
             <p>k</p>
         </div>
     )
}


export default Member