import Hero from '@/components/hero/Hero'
import styles from './page.module.css'
import NavigationBar from '@/components/navigationBar/NavigationBar'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <NavigationBar />
      <Hero />

    </main>
  )
}
