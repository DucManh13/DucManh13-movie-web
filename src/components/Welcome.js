function Welcome() {
  return (
    <div className="container my-3 py-1 px-0">
      <div id="carouselId" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselId" data-slide-to="0" class="active"></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
          <li data-target="#carouselId" data-slide-to="2"></li>
          <li data-target="#carouselId" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className="img-responsive w-100" src="img_welcome.jpg" alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img className="img-responsive w-100" src="img_carousel_1.jpg" alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img className="img-responsive w-100" src="img_carousel_2.jpg" alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img className="img-responsive w-100" src="img_carousel_3.jpg" alt="Fourth slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselId" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#carouselId" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>   
  );
}

export default Welcome;
  