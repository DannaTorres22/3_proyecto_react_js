import './banner.css';

import slide1 from './slide1.jpg';

function Banner() {
    return(


        
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
         
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
           
            <img src={slide1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <div id="txt">
                    <p>Lorem ipsum dolor sir ameteliter, <br/> consectetur adipiscing elit.</p>
                </div> 
              </div>
           
          </div>
          <div class="carousel-item">
            <img src={slide1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <div id="txt">
                    <p>Lorem ipsum dolor sir ameteliter, <br/> consectetur adipiscing elit.</p>
                </div> 
              </div>
          </div>
          <div class="carousel-item">
            <img src={slide1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <div id="txt">
                    <p>Lorem ipsum dolor sir ameteliter, <br/> consectetur adipiscing elit.</p>
                </div> 
              </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    );

    


}

export default Banner;