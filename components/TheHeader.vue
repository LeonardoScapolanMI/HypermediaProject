<template>

<nav class="navbar sticky-top navbar-expand-lg">
    
    <a class="navbar-brand" href="/" id="logo">
      <img src="/images/firenze.png" alt="HOME" id="icon"/>
      <span class="sr-only">(current)</span>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a href="/alleventgroupings">EVENTS</a>
            </li>
            <li class="nav-item">
              <a href="/allpois">POINTS OF INTEREST</a>
            </li>
            <li class="nav-item">
              <a href="/allitineraries">ITINERARIES</a>
            </li>
            <li class="nav-item">
              <a href="/allservicetypes">SERVICES</a>
            </li>
            <li class="nav-item">
              <a href="/thetown">THE TOWN</a>
            </li>
          </ul>
    </div>
</nav>
</template>

<script>
export default {
  name: 'TheHeader',
  head() {
    return {
        link: [
          {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css',
            integrity:
              'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
            crossorigin: 'anonymous',
          },
        ],
        script: [
          {
            src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
            integrity:
              'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN',
            crossorigin: 'anonymous',
          },
          {
            src: 'https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js',
            integrity:
              'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
            crossorigin: 'anonymous',
          },
          {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js',
            integrity:
              'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl',
            crossorigin: 'anonymous',
          },
          {
            src: 'https://code.jquery.com/jquery-2.2.4.js',
            integrity:
              'sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=',
            crossorigin: 'anonymous',
          },
        ],
      }
  },
}
</script>


<style scoped>

  nav {
    background-color: var(--aqua);
    font-family: Georgia;
    font-weight: bold;
    scroll-behavior: smooth;
  }

  nav ul {
    margin: 0;
    padding: 0;
  }

  nav li {
    list-style-type: none;
  }

  #logo {
    padding: 5px 0px;
    border-bottom-left-radius: 20px;
    background-color: var(--vanish);
  }

  #icon {
    border: 0;
    width: 90px;
  }

  nav a {
    display: block;
    padding: 22px 20px;
    color: var(--white);
    text-decoration: none;
  }

  nav a:hover, nav a:focus{
    border-bottom-left-radius: 20px;
    background-color: var(--vanish);
    transition: 0.2s;
    color: var(--green);
    text-decoration: none;
  }

.navbar-toggler {
    background-color: var(--vanish);
    margin-right: 10px;
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(65, 69, 53)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

</style>