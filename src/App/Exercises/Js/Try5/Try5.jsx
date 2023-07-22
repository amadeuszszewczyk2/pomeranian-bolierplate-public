import './styles.css';

export function ExerciseTry6() {
  const codeSnippet = `

  Funkcja myFun tworzy obiekt Promise o nazwie obiecanki, który zawiera
  obiekt użytkownika. Następnie próbuje odczytać wartość name z obietnicy
  i wypisuje ją w konsoli. Jeśli operacja zakończy się powodzeniem, w
  konsoli pojawi się "Amadeusz". W przypadku błędu, zostanie
  wyświetlony odpowiedni komunikat o błędzie.


  const myFun = async () => {
    const obiecanki = new Promise((resolve, reject)=> {
      const user = {name: "Amadeusz", surname:"Szewczyk"}
      resolve(user);
    });
  
    try {
      const {name} = await obiecanki
      console.log(name);
    } catch(e) {
      console.error(e)
    }
  }

`;

  return (
    <div>
      <pre>
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
}




