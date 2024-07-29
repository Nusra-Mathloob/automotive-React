import React from 'react'

function BreadCrumps(props) {
  return (
    <>
        <section class="nus-about-breadcrumb position-relative text-center">
    <div class="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
      <div class="container py-lg-5 py-3">
        <h2 class="title">{props.title}</h2>
        <ul class="breadcrumbs-custom-path mt-2">
          <li><a href="#url">Home</a></li>
          <li class="active"><span class="fa fa-angle-double-right mx-2" aria-hidden="true"></span> {props.page} </li>
        </ul>
      </div>
    </div>
  </section>
    </>
  )
}

export default BreadCrumps