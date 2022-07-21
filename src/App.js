import Film from "./components/Film";
import Persone from "./components/Persone";

import poster from "./images/poster.jpeg";
import img from "./images/photo.jpeg";

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
    </>
  );
}

export default App;
