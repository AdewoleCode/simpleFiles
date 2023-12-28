import { SignIn } from "@clerk/nextjs";
import styles from "../../../../../styles/signIn.module.css"

export default function Page() {
  return (
    <div className={styles.accountContainer}>
      {/* <div className={styles.left}>
        <h1> <span>Login to</span> SimpleShare</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Soluta esse qui iusto, magni quasi laboriosam! Perspiciatis minus, neque nulla maiores
          nisi veritatis laudantium, error animi accusantium doloremque illum distinctio delectus.
        </p>
      </div> */}
      <div className={styles.right}>
        <SignIn />
      </div>
    </div>
  )
}