


import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"

function Home() {
  return (
    <div>
<Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false} showIndicators={false}>
<div>
<img src={img1} alt="ImageOne" />

</div>
<div>
<img src={img2} alt="ImageSecond" />

</div>
<div>
<img src={img3} alt="ImageThird" />

</div>
<div>
<img src={img4} alt="ImageFOr" />

</div>



</Carousel>

    </div>
  )
}

export default Home