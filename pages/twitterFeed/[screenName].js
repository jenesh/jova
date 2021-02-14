import { Timeline } from 'react-twitter-widgets'
export async function getServerSideProps(context) {
    console.log(context)
    // const url = `https://dog.ceo/api/breeds/image/random`;
    // const response = await fetch(url)
    // const data = await response.json()
    return {
      props: {
        screenName: context.params.screenName
      }
    }
  }
  
  const TwitterFeed = ({  screenName }) => {
    console.log(screenName)
  
    if (!screenName) return <h1>Loading...</h1>
  
    return (
      <div>
      <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: screenName
  }}
  options={{
    height: '900'
  }}
/>
      </div>
    )
  }
  
  export default TwitterFeed;