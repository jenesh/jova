import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MapChart from "./maps/MapChart"


export default function Home() {
  return (
    <div>
    <MapChart/>
  </div>
  )
}
