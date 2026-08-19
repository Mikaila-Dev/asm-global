

export const ServicesSection = () => {
    return(
    <div className="services-section">
         <h3 style={{color: "white"}} className="sercices-heading">What We Offer</h3>
    <div className="p">Quality products and reliable services, all in one convenient place.</div>
    <div style={{gap: "20px"}} className="main-services">
    <div className="phone-accessories" style={{color: "white"}}>
    <h3>Phone Accessories</h3>
    <p>
    Find reliable phone accessories made to keep your devices
    powered, protected, and ready to go.
    </p>
    <div className="service-tags">
        <span>Quality Cables</span>
        <span>Fast Chargers</span>
        <span>Earphones</span>
        <span>Phone Cases</span>
        <span>Screen Protectors</span>
  </div>
</div>


<div className="airtime-and-data-section" style={{color: "white"}}>
<h3>Data & Airtime</h3>
<p>
  Stay connected with fast, reliable data and airtime services,
  available whenever you need them.
</p>
    <div className="service-tags">
    <span>Data Bundles</span>
    <span>Airtime</span>
    <span>MTN</span>
    <span>Airtel</span>
    <span>Glo</span>
    <span>9mobile</span>
    </div>
  </div>

<div className="movies-container" style={{color: "white"}}>
<h3>Movies</h3>
<p>
  Enjoy your favorite Kannywood and Bollywood movies,
  available for easy and convenient access.
</p>
<div className="service-tags">
  <span>Kannywood</span>
  <span>Bollywood</span>
  <span>Latest Movies</span>
  <span>Classic Movies</span>
 </div>
</div>


<div className="drinks" style={{color: "white"}}>
    <h3>Cold Drinks</h3>

<p>
  Refresh yourself with a variety of cold and refreshing drinks,
  perfect for every moment and occasion.
</p>

<div class="service-tags">
  <span>Soft Drinks</span>
  <span>Energy Drinks</span>
  <span>Water</span>
  <span>Juices</span>
  <span>Cold & Fresh</span>
</div>
</div>


 </div>
</div>
    )
}