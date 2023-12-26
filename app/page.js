import Hero from '@/components/hero/Hero'
import styles from './page.module.css'
import NavigationBar from '@/components/navigationBar/NavigationBar'

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <NavigationBar />
      <Hero />

    </main>
  )
}
