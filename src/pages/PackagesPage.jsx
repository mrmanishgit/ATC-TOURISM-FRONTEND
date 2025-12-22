
import Navbar from "../components/Navbar";
import "./DashboardPage.css";
import "./PackagesPage.css";

function PackagesPage() {
  return (
    <>
    <Navbar/>
    <div>

      {/* CAROUSEL */}


<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">

    {/* <!-- Slide 1 --> */}
    <div class="carousel-item active" data-bs-interval="3000">
      <img src="https://imgs.search.brave.com/gloyjMT0S-GIEJyorKp8iBlh7Tp8keCNG_hxVHK01fM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQxL0Nob3dtYWhh/bGxhX1BhbGFjZV8t/X0toaWx3YXRfTXVi/YXJhay5qcGc"
           class="d-block w-100" alt="..."/>

      <div class="carousel-caption">
        <h5>Chowmahalla Palace</h5>
        <p>The Royal heritage of Hyderabad</p>
      </div>
    </div>

    {/* <!-- Slide 2 --> */}
    <div class="carousel-item" data-bs-interval="3000">
      <img src="https://imgs.search.brave.com/8RgXpr9QDdeghsKzQGQvD_TNaJ9uvCT8N2cyH9ilTIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q1L0ZvcnRlX2Rp/X2dvbGNvbmRhLF92/ZWR1dGVfZGFfZXN0/XzA0LmpwZw"
           class="d-block w-100" alt="..."/>

      <div class="carousel-caption">
        <h5>Golconda Fort</h5>
        <p>A majestic hilltop fortress famed for its rich history, grand architecture, and panoramic city views.</p>
      </div>
    </div>

    {/* <!-- Slide 3 --> */}
    <div class="carousel-item" data-bs-interval="3000">
      <img src="https://imgs.search.brave.com/ivZ7ObN7gCtQ7guUtvuKJ0ILl5kKF2MVqxa9whylf2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cXV0YnNoYWhpaGVy/aXRhZ2VwYXJrLm9y/Zy9zdG9yYWdlL2Nv/bW1vbi1zZWN0aW9u/LzAxLTItLTI0MDcy/NDAxMzQ1NDE5Lmpw/Zw"
           class="d-block w-100" alt="..."/>

      <div class="carousel-caption">
        <h5>Qutb Shahi Tombs</h5>
        <p>The Seven Tombs of Qutb Shahi rulers</p>
      </div>
    </div> 

     {/* <!-- Slide 4 --> */}
    <div class="carousel-item" data-bs-interval="3000">
      <img src="https://imgs.search.brave.com/YeMbSDyvsSYib5kL-kZou3pSFg9d8fb1rfPU9rexLZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODI1/NDIxMzE4L3Bob3Rv/L3N0YXR1ZS1vZi1i/dWRkaGEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVNBQWZI/V0dkd0syT3RNWEZV/MGZwVUdKX2FydkRm/SU9GcVRSUk5GVG4z/QTQ9"
           class="d-block w-100" alt="..."/>

      <div class="carousel-caption">  
        <h5>Tank Bund</h5>  
        <p>A famous lakeside road in Hyderabad, known for its skyline views and iconic statues.</p>
      </div>
    </div>

     {/* <!-- Slide 5 --> */}
    <div class="carousel-item" data-bs-interval="3000"> 
      <img src="https://imgs.search.brave.com/d0JjgV2RxCD8amBFqgBGEWMdzDk7AEZg06qkAc3irs8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzcxL0JpcmxhX21h/bmRpcl8yLmpwZw"
           class="d-block w-100" alt="..."/>

      <div class="carousel-caption">
        <h5>Birla Temple</h5>
        <p>A magnificent hilltop temple built in white marble, offering serenity and panoramic city views.</p>
      </div>
    </div>

     {/* <!-- Slide 6 --> */}
    <div class="carousel-item" data-bs-interval="3000">
      <img src="https://imgs.search.brave.com/97_JntaAmXkYJZYcUqk9RtRg5DOuDasheDydrVN6afM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YWJoaWJ1cy5jb20v/MjAyNC8wNS9IeWRl/cmFiYWQtWm9vLVBh/cmstNjk2eDQ2NC5q/cGc"
           class="d-block w-100" alt="..."/>

      <div class="carousel-caption">
        <h5>Nehru Zoological Park</h5>
        <p>One of India’s largest zoos, home to diverse wildlife in a natural habitat setting.</p>
      </div>
    </div>

     {/* <!-- Slide 7 --> */}
    <div class="carousel-item" data-bs-interval="3000">
      <img src="https://imgs.search.brave.com/rbE2ebWsyDKR7KbOiYoH1UGzqfbv_NAYw90sV7aRG9g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZmLzY1/L2JlLzZmNjViZTY1/ZGY3ZDQyMjQ5MzM0/NGEwMGI5N2FkNmNi/LmpwZw"
           class="d-block w-100" alt="..."/>

      <div class="carousel-caption">
        <h5>Charminar</h5>
        <p>The iconic monument of Hyderabad, symbolizing its rich history and architectural grandeur.</p>
      </div>
    </div>

     {/* <!-- Slide 8 --> */}
    <div class="carousel-item" data-bs-interval="3000">
      <img src="https://imgs.search.brave.com/wFmNHublzKt3LOa2-k00_HV1_SZk6hEQqS3aYVV4G4M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmxvZ2d5bWFzdGVy/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNC9wZWRk/YW1tYS10ZW1wbGUt/aHlkZXJhYmFkLndl/YnA"
           class="d-block w-100" alt="..."/>

      <div class="carousel-caption">
        <h5>Pedamma Temple</h5>
        <p>A revered Hindu temple dedicated to Goddess Pedamma, known for faith, devotion, and vibrant festivals.</p>
      </div>
    </div> 

    {/* <!-- Slide 9 --> */}
    <div class="carousel-item" data-bs-interval="3000">
      <img src="https://imgs.search.brave.com/rnOjQwv-A4-4zM__LEzN7zydF86bFMxsquKBtjia3e0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS53ZWRtZWdvb2Qu/Y29tL3Jlc2l6ZWQv/MTAwMFgvdXBsb2Fk/cy9tZW1iZXIvMTAx/Nzk1NC8xNTgwNDU2/MTI2XzMuUE5H"
           class="d-block w-100" alt="..."/>

      <div class="carousel-caption">
        <h5>Taramati Baradari</h5>
        <p>A historic cultural pavilion where architecture, music, and heritage come together.</p>
      </div>
    </div>

  </div>

  {/* Controls */}
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>


      {/* TITLE */}
      <div className="container mt-4 text-center">
        <h1 className="fw-bold">Plan • Travel • Experience</h1>
        <p className="text-muted">
          Discover places, plan trips, and travel smarter with AJA Tourism
        </p>
      </div>

      {/* CARDS SECTION */}
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">

          {/* CARD 1 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://imgs.search.brave.com/8RgXpr9QDdeghsKzQGQvD_TNaJ9uvCT8N2cyH9ilTIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q1L0ZvcnRlX2Rp/X2dvbGNvbmRhLF92/ZWR1dGVfZGFfZXN0/XzA0LmpwZw"
                className="card-img-top"
                alt="Family Package"
              />
              <div className="card-body">
                <h5 className="card-title">Family Package</h5>
                <p className="card-text">Price - ₹4,999</p>
                <button className="btn btn-success">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://imgs.search.brave.com/YeMbSDyvsSYib5kL-kZou3pSFg9d8fb1rfPU9rexLZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODI1/NDIxMzE4L3Bob3Rv/L3N0YXR1ZS1vZi1i/dWRkaGEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVNBQWZI/V0dkd0syT3RNWEZV/MGZwVUdKX2FydkRm/SU9GcVRSUk5GVG4z/QTQ9"
                className="card-img-top"
                alt="Friends Package"
              />
              <div className="card-body">
                <h5 className="card-title">Friends Package</h5>
                <p className="card-text">Price - ₹9,700</p>
                <button className="btn btn-success">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://imgs.search.brave.com/ivZ7ObN7gCtQ7guUtvuKJ0ILl5kKF2MVqxa9whylf2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cXV0YnNoYWhpaGVy/aXRhZ2VwYXJrLm9y/Zy9zdG9yYWdlL2Nv/bW1vbi1zZWN0aW9u/LzAxLTItLTI0MDcy/NDAxMzQ1NDE5Lmpw/Zw"
                className="card-img-top"
                alt="Students Package"
              />
              <div className="card-body">
                <h5 className="card-title">Students Package</h5>
                <p className="card-text">Price - ₹8,000</p> 
                <button className="btn btn-success">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://imgs.search.brave.com/gloyjMT0S-GIEJyorKp8iBlh7Tp8keCNG_hxVHK01fM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQxL0Nob3dtYWhh/bGxhX1BhbGFjZV8t/X0toaWx3YXRfTXVi/YXJhay5qcGc"
                className="card-img-top"
                alt="Couple Package"
              />
              <div className="card-body">
                <h5 className="card-title">Couple Package</h5>
                <p className="card-text">Price - ₹8,000</p>
                <button className="btn btn-success">
                 Book Now
                </button>
              </div>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://imgs.search.brave.com/d0JjgV2RxCD8amBFqgBGEWMdzDk7AEZg06qkAc3irs8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzcxL0JpcmxhX21h/bmRpcl8yLmpwZw"
                className="card-img-top"
                alt="Spritual Package"
              />
              <div className="card-body">
                <h5 className="card-title">Spritual Package</h5>
                <p className="card-text">Price - ₹4,000</p>
                <button className="btn btn-success">
                 Book Now
                </button>
              </div>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://imgs.search.brave.com/97_JntaAmXkYJZYcUqk9RtRg5DOuDasheDydrVN6afM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YWJoaWJ1cy5jb20v/MjAyNC8wNS9IeWRl/cmFiYWQtWm9vLVBh/cmstNjk2eDQ2NC5q/cGc"
                className="card-img-top"
                alt="Childrens Package"
              />
              <div className="card-body">
                <h5 className="card-title">Childrens Package</h5>
                <p className="card-text">Price - ₹7,000</p>
                <button className="btn btn-success">
                 Book Now
                </button>
              </div>
            </div>
          </div> 

          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://imgs.search.brave.com/InSwyhG7aFycAZsXoJjVmVtBQgMpDwRHIv8ZB86vYcE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kMjZk/cDUza3ozOTE3OC5j/bG91ZGZyb250Lm5l/dC9tZWRpYS91cGxv/YWRzL3Byb2R1Y3Rz/L0ZyYW1lLTFfcmVz/dWx0LTE3MzI5Mzc2/NTc4MDIud2VicA"
                className="card-img-top"
                alt="Adventures Package"
              />
              <div className="card-body">
                <h5 className="card-title">Adventures Package</h5>
                <p className="card-text">Price - ₹10,000</p>
                <button className="btn btn-success">
                 Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://imgs.search.brave.com/rnOjQwv-A4-4zM__LEzN7zydF86bFMxsquKBtjia3e0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS53ZWRtZWdvb2Qu/Y29tL3Jlc2l6ZWQv/MTAwMFgvdXBsb2Fk/cy9tZW1iZXIvMTAx/Nzk1NC8xNTgwNDU2/MTI2XzMuUE5H"
                className="card-img-top"
                alt="Historical Package"
              />
              <div className="card-body">
                <h5 className="card-title">Historical Package</h5>
                <p className="card-text">Price - ₹6,500</p>
                <button className="btn btn-success">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/0d/78/93/6e/entrance-gate.jpg"
                className="card-img-top"
                alt="Womens Package"
              />
              <div className="card-body">
                <h5 className="card-title">Women's Package</h5>
                <p className="card-text">Price - ₹5,000</p>
                <button className="btn btn-success">
                 Book Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    </>
  );
}

export default PackagesPage;
