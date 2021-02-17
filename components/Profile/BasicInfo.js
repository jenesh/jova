import React,{useEffect} from 'react'

const BasicInfo = ({data}) => {

    useEffect(() => {
        console.log('data',data)
    })
   
    return(
        <div>
            <h2>{data.first_name}{" "}{data.last_name}</h2>
            <p>D.O.B:{" "}{data.date_of_birth}</p>
            <p>Party:{" "}{data.current_party}</p>
            <p>Website:{" "}<a href={data.url}>{data.url}</a></p>
            <a href={data.rss_url}>{data.rss_url}</a>
        </div>
    )
}

export default BasicInfo