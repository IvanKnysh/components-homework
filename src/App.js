import Film from "./components/Film";
import Persone from "./components/Persone";
import Time from "./components/Time";
import Pet from "./components/Pet";
import poster from "./images/poster.jpeg";
import img from "./images/photo.jpeg";
import dog from "./images/dog.jpeg";

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
      <hr/>
      <Persone
        name="Книш Іван Володимирович"
        phone="+3 (055) 44-32-211"
        email="1@gmail.com"
        city="Запоріжжя"
        experience="1 year"
        skills="React, JS, HTML, CSS, Gulp"
        img={img}
      />
      <hr/>
      <Time />
      <hr/>
      <Pet
        breeds="Немецкая овчарка"
        сountry="Германия"
        time_birth_breed="1899 год"
        type="Охранная порода"
        weight="30 – 40 кг (самцы), 22 – 32 кг (самки)"
        growth="60 – 65 см (самец), 55 – 65 см (самки)"
        lifespan="9 – 13 лет"
        img={dog}
      />
    </>
  );
}

export default App;
