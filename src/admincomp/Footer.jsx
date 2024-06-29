import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
     <footer>
        <div class="top">
      



          {/* form */}




          <div className='location'>
            <ul>
              <h3>Nibhas HRD Solutions</h3>
              <li></li>



              <li><i class="fa-solid fa-location-dot"> </i> Neyyan's Plaza,</li>
              <li>Opp. Vyabarabhavan,</li>
              <li>Chandakkunnu, Irinjalakuda,</li>
              <li>Thrissur, Kerala, 680121</li>


            </ul>


          </div>

          <div className='numb'>
            <li>
              <i class="fa-solid fa-phone-volume"> +91 80-86-22-00-07</i>
            </li>
            <li>
              <i class="fa-solid fa-phone-volume"> +91 80-86-09-48-84</i>
            </li>
            <br />
            <li>
            <i class="fa-regular fa-envelope"></i> <a href="" className='mailid'> cv.nibhashrdsolutions@gmail.com</a>
            </li>
          </div>

        </div>


        <div class="info">
          {/* <div class="legal">
            <a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a>
          </div> */}
          <div class="copyright">2024 Copyright &copy; Nibhas HRD Solutions</div>
        </div>

      </footer>
    </>
  )
}

export default Footer