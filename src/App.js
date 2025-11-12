
import './App.css';

function App() {
  return (
    <div className="App">
 
{/* About us */}
    <section class="container flex">
      <div class="image-cont" ></div>
      <div class="hero-details" >
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          corrupti suscipit et hic, sit omnis est rem minus incidunt, asperiores
          beatae! Maxime id dolores illum nulla modi minima magnam asperiores!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          corrupti suscipit et hic, sit omnis est rem minus incidunt, asperiores
          beatae! Maxime id dolores illum nulla modi minima magnam asperiores!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          corrupti suscipit et hic, sit omnis est rem minus incidunt, asperiores
          beatae! Maxime id dolores illum nulla modi minima magnam asperiores!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          corrupti suscipit et hic, sit omnis est rem minus incidunt, asperiores
          beatae! Maxime id dolores illum nulla modi minima magnam asperiores!
        </p>
        <button class="btn btn-primary">read more</button>
      </div>
    </section>

    {/* End of about us */}

    {/* newsletter section */}

    <section class="newsletter-main flex">
      <div class="container">
        <h3 >
          Join our ever growing community and build a better together
        </h3>
        <h1 >Join our community and club</h1>
        <p >
          No spam. Just details on upcoming events. Cancel anytime
        </p>
        <div class="flex">
          <input type="text" required  />
          <button class="btn btn-secondary" >
            subscribe now
          </button>
        </div>
      </div>
    </section>
 {/* end of newsletter */}
    
    </div>
  );
}

export default App;
