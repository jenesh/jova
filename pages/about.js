import Link from 'next/link'
export default function About() {
  return (
    <div>
      <h1> About page! </h1>
      <h2> Mission Statement:</h2>
      <p>
        {" "}
        [NAME OF APPLICATION] purpose is to keep the public informed and updated
        with their current represenatives in the United States. etc...{" "}
      </p>
      <Link href= '/'><a>Home</a></Link>
    </div>
  );
}
