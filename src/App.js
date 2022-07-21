import Film from "./components/Film";
import poster from "./images/poster.jpeg";

function App() {
  return (
    <>
      <Film
        name="Джон Уик"
        producer="Чад Стахелски"
        year="2014"
        company="Thunder Road Pictures 87Eleven MJW Films DefyNite Films"
        poster={poster}
      />
    </>
  );
}

export default App;
