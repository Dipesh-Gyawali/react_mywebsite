import React from 'react'

const Portfolio = () => {
  return (
    <section class="portfolio section" id="portfolio">
        <h2 class="section-title">Portfolio</h2>

        <div class="portfolio__container bd-grid">
            <div class="portfolio__img">
                <img src={require('./img/work1.jpg')} alt=""/>

                <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">View details</a>
                </div>
            </div>
            <div class="portfolio__img">
                <img src={require('./img/work2.jpg')} alt=""/>

                <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">View details</a>
                </div>
            </div>
            <div class="portfolio__img">
                <img src={require('./img/work3.jpg')} alt=""/>

                <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">View details</a>
                </div>
            </div>
            <div class="portfolio__img">
                <img src={require('./img/work4.jpg')} alt=""/>

                <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">View details</a>
                </div>
            </div>
            <div class="portfolio__img">
                <img src={require('./img/work5.jpg')} alt=""/>

                <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">View details</a>
                </div>
            </div>
            <div class="portfolio__img">
                <img src={require('./img/work6.jpg')} alt=""/>

                <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">View details</a>
                </div>
            </div>
        </div>
</section>
  )
}

export default Portfolio