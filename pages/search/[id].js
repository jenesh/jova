export async function getServerSideProps(context) {
  console.log(context)
  const url = `https://dog.ceo/api/breeds/image/random`;
  const response = await fetch(url)
  const data = await response.json()
  return {
    props: {
      data,
      id: context.params.id
    }
  }
}


const SearchID = ({ data, id }) => {
  console.log(data)
  console.log(id)

  if (!data) return <h1>Loading...</h1>

  return (
    <div>
      <h1>SEARCH ID PAGE</h1>
      <img src={data.message} />
    </div>
  )
}

export default SearchID;