import './DashboardPage.css'

function PackagesPage() {
  return (
    <div className="dashboard-page">
      <h2 bg color='green'> Adventure Awaits — Let’s Go Explore</h2>
      {/* <p>Coming Soon</p>  */}

      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators my-2">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://thumbs.dreamstime.com/b/charminar-iconic-historic-monument-hyderabad-india-where-elaborate-islamic-architecture-intricate-stone-carvings-form-382685419.jpg" className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color: "white", fontweight: 100}}>charminar</h5>
        <p style={{color: "white", fontweight: 100}}>The Capital of Hyderabad.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/golconda-fort-3720711.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color: "white", fontweight: 100}}>Golconda</h5>
        <p style={{color: "white", fontweight: 100}}>The historical Place.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.hyderabadtourism.travel/images//v2/header-places/chowmahalla-palace-hyderabad-tourism-entryfee-timings-reviews-header.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color: "white", fontweight: 100}}>chowmahalla-palace</h5>
        <p style={{color: "white", fontweight: 100}}>Chowmahalla Palace stands as a grand symbol of Nizami heritage, showcasing royal architecture and timeless elegance..</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 

    </div>
      
  )
}

export default PackagesPage

