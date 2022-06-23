<template>

<nav class="navbar navbar-expand-lg sticky-top">
    <a id="logo" href="/">
      <img id="icon" src="/images/firenze.png" alt="HOME"/>
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    
      <div id="collapsibleNavbar" class="collapse navbar-collapse">
        <ul class="navbar-nav">
            <li><a href="/alleventgroupings">EVENTI</a></li>
            <li><a href="/allpois">PUNTI DI INTERESSE</a></li>
            <li><a href="/allitineraries">ITINERARI</a></li>
            <li><a href="/allservicetypes">SERVIZI</a></li>
            <li><a href="/thetown">LA CITT&Agrave;</a></li>
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
    margin-left: 5px;
    margin-right: 5px;
    border-bottom-left-radius: 20px;
    background-color: var(--vanish);
  }

  #icon {
    border: 0;
    width: 90px;
  }

  nav a {
    display: block;
    padding: 22px 10px;
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