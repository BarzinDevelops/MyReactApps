
import React from 'react';
import ContactCard from './ContactCards';

function App() {
  return (
    <div className="contacts">
        <ContactCard contact={{img: "http://placekitten.com/300/200", name: "Mr. Whiskerson", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}} />
        <ContactCard contact={{img: "http://placekitten.com/400/200", name: "Fluffykins", phone: "(212) 555-2345", email: "fluff@me.com"}} />
        <ContactCard contact={{img: "http://placekitten.com/400/300", name: "Destroyer", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}} />
        <ContactCard contact={{img: "http://placekitten.com/200/100", name: "Felix", phone: "(212) 555-4567", email: "thecat@hotmail.com"}} />
    </div>
  );
}

export default App;
