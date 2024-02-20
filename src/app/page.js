import NameForm from '../app/comp/NameForm'
import '../app/styles/styles.css';

export default function Home() {
  return (
   <div>
     <main>
        <h1>Guess Age, Gender, and Country</h1>
        <NameForm />
      </main>
   </div>
  );
}
