import React from 'react';
import logo from '../assests/logo.png';

const NavBar = () => {
  return (
  <>
 <nav class="container navbar navbar-expand-lg d-flex justify-content-center">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src={logo} alt="Logo" className='' />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav fs-5 m-auto mb-lg-0 gap-5">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <hr style={{ width: '70px', height: '2px', backgroundColor: 'orange', border: 'none' }} />

        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Contact Us</a>
        </li>
      </ul>
    <div className='d-flex'>
       <button className='mx-4 border-0 btn btn-light fs-5'> login</button>
      <button className='border-0 btn btn-warning rounded-5 fw-bold text-white'>Book Scooter</button>
    </div>
    </div>
  </div>
</nav>

  </>
  );
}

export default NavBar;