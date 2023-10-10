import React from 'react'

const Skills = () => {
  return (
    <section class="skills section" id="skills">
                <h2 class="section-title">Skills</h2>

                <div class="skills__container bd-grid">
                    <div class="skills__box">
                        <h3 class="skills__subtitle">Frontend</h3>
                        <span class="skills__name">HTML</span>
                        <span class="skills__name">CSS</span>
                        <span class="skills__name">SCSS</span>
                        <span class="skills__name">Bootstrap</span>
                        <span class="skills__name">Tailwind</span>
                        <span class="skills__name">Javascript</span>
                        <span class="skills__name">React</span>

                        
                        <h3 class="skills__subtitle">Backend</h3>
                        <span class="skills__name">Python</span>
                        <span class="skills__name">Django</span>
                        <span class="skills__name">Rest API</span>
                    </div>

                    <div class="skills__img">
                        <img src={require('./img/skill.jpg')} alt=""/>
                    </div>
                </div>
            </section>
  )
}

export default Skills