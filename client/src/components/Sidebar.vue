<template>
	<aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div class="sidenav-header">
      <router-link class="navbar-brand m-0" to="/" target="_blank">
		<i class="fa-solid fa-graduation-cap fa-xl"></i>
        <span class="ms-1 font-weight-bold text-white">Study Tracker</span>
      </router-link>
    </div>
    <hr class="horizontal light mt-0 mb-2">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link text-white active bg-gradient-primary" to="/">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-gauge fa-xl"></i>
            </div>
            <span class="nav-link-text ms-1">Dashboard</span>
		  </router-link>
        </li>
		<li class="nav-item">
          <router-link class="nav-link text-white active bg-gradient-primary" to="/subjects">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-bookmark fa-xl"></i>
            </div>
            <span class="nav-link-text ms-1">Subjects</span>
		  </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>