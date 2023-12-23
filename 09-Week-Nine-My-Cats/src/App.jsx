import React from "react";
import Contact from "./Contact";
import MrWhiskerson from "./images/mr-whiskerson.png";
import Fluffykins from "./images/fluffykins.png";
import Felix from "./images/felix.png";
import Pumpkin from "./images/pumpkin.png";

function App() {
  return (
    <div className="contacts">
      <Contact
        img={MrWhiskerson}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={Fluffykins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={Felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={Pumpkin}
        name="Pumpkin"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
