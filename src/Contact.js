import React from 'react'

const Contact = () => {
  return (
    <section class="contact section" id="contact">
                <h2 class="section-title">Contact</h2>

                <div class="contact__container bd-grid">
                    <div class="contact__info">
                        <h3 class="contact__subtitle">EMAIL</h3>
                        <span class="contact__text">dipeshgyawali365@gmail.com</span>

                        <h3 class="contact__subtitle">PHONE</h3>
                        <span class="contact__text">9840031045</span>

                        <h3 class="contact__subtitle">ADRESS</h3>
                        <span class="contact__text">Kumarigal-7, Kathmandu</span>
                    </div>

                    <form action="" class="contact__form">
                        <div class="contact__inputs">
                            <input type="text" placeholder="Name" class="contact__input"/>
                            <input type="mail" placeholder="Email" class="contact__input"/>
                        </div>

                        <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>

                        <input type="submit" value="Enviar" class="contact__button"/>
                    </form>
                </div>
    </section>
  )
}

export default Contact