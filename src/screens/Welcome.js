function Welcome() {
  return (
    <div className="container my-3 py-1 px-0">
      <div id="carouselId" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselId" data-slide-to="0" className="active"></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
          <li data-target="#carouselId" data-slide-to="2"></li>
          <li data-target="#carouselId" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="img-responsive w-100" src="img_welcome.jpg" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="img-responsive w-100" src="img_carousel_1.jpg" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="img-responsive w-100" src="img_carousel_2.jpg" alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="img-responsive w-100" src="img_carousel_3.jpg" alt="Fourth slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselId" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#carouselId" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>   
  );
}

export default Welcome;
  