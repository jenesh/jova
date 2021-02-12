// const Search = () => {
//   return (
//     <h1>SEARCH PAGE</h1>
//   )
// }

// export default Search;
export async function getStaticProps() {
  const url = `https://dog.ceo/api/breeds/image/random`;
  const response = await fetch(url)
  const data = await response.json()
  return {
    props: {
      data
    }
  }
}

const Search = ({ data }) => {
  // const data = fetchData();
  // console.log(data)

  if (!data) return <h1>Loading...</h1>

  return (
    <div>
      <h1>SEARCH ID PAGE</h1>
      {/* <p>{data}</p> */}
    </div>
  )
}

export default Search