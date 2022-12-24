import React from 'react'

const Home = () => {
  return (
    <div>
      <main class="l-main"></main>
        <section class="home" id="home">
            <div class="home__container bd-grid">
                <h1 class="home__title"><span>HI</span><br></br>THERE</h1>

                <div class="home__scroll">
                    <a href="#about" class="home__scroll-link"><i class='bx bx-up-arrow-alt' ></i>Scroll down</a>
                </div>

                <img src={require('./img/perfil.png')} alt="" class="home__img"/>
            </div>
        </section>
    </div>
  )
}

export default Home



