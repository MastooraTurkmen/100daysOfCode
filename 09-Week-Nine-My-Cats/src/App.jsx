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
      
    </div>
  );
}

export default App;
