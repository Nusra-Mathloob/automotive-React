import React from 'react'

function Header() {
  return (
    <>
     <header id="site-header" class="fixed-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <h1><a class="navbar-brand " href="index.html">
          <img src="assets/images/logo.png" class="padding-bottom-2" alt="automotive"/>
           
          </a></h1>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="fa icon-expand fa-bars"></span>
          <span class="fa icon-close fa-times"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active mr-5">
              <a class="nav-link" href="/">Home </a>
            </li>
            <li class="nav-item mr-5">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item mr-5">
              <a class="nav-link" href="/services">Services</a>
            </li>
            <li class="nav-item mr-5">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
          
          <ul class="navbar-nav search-right mt-lg-0 mt-2">
            <li class="nav-item mr-3" title="Search"><a href="#search" class="btn search-search">
                <span class="fa fa-search" aria-hidden="true"></span></a></li>
            
          </ul>

        
      
          <div id="search" class="pop-overlay">
            <div class="popup">
              <form action="#" method="GET" class="d-sm-flex">
                <input type="search" placeholder="Search.." name="search" required="required" autofocus/>
                <button type="submit">Search</button>
                <a class="close" href="#url">&times;</a>
              </form>
            </div>
          </div>
  
        </div>
     
        <div class="mobile-position">
          <nav class="navigation">
            <div class="theme-switch-wrapper">
              <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox"/>
                <div class="mode-container">
                  <i class="gg-sun"></i>
                  <i class="gg-moon"></i>
                </div>
              </label>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  </header>
    </>
  )
}

export default Header