import React from 'react';

const Banner = () => {
          return (
                    <div>
                              <div className="carousel w-full">
                                        <div id="slide1" className="carousel-item relative w-full">
                                                  <img src="https://images.unsplash.com/photo-1636761358954-cebc0e5dfebb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" className="w-full"></img> /
                                                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                            <a href="#slide4" className="btn btn-circle"></a>
                                                            <a href="#slide2" className="btn btn-circle"></a>
                                                  </div>
                                        </div>
                                        <div id="slide2" className="carousel-item relative w-full">
                                                  <img src="https://cdn.pixabay.com/photo/2016/09/18/16/36/motorcycle-1678552_960_720.jpg" className="w-full"></img> /
                                                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                            <a href="#slide1" className="btn btn-circle"></a>
                                                            <a href="#slide3" className="btn btn-circle"></a>
                                                  </div>
                                        </div>
                                        <div id="slide3" className="carousel-item relative w-full">
                                                  <img src="https://images.unsplash.com/photo-1470946556807-878bb0801af1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869" className="w-full"></img> /
                                                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                            <a href="#slide2" className="btn btn-circle"></a>
                                                            <a href="#slide4" className="btn btn-circle"></a>
                                                  </div>
                                        </div>
                                        <div id="slide4" className="carousel-item relative w-full">
                                                  <img src="https://images.unsplash.com/photo-1636761358777-f0a2165a7d6e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" className="w-full"></img> /
                                                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                            <a href="#slide3" className="btn btn-circle"></a>
                                                            <a href="#slide1" className="btn btn-circle"></a>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          );
};

export default Banner;