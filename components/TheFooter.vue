<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<nav class="navbar navbar-expand-md">
    
        <div class="navbar-collapse">
        <ul>
            <li
          v-for="(footItem, footItemIndex) of footerList"
          :key="`navItem${navItemIndex}`">

        
        
          <nuxt-link :to="footItem.path" class="nav-link">
            {{ footItem.name }}
          </nuxt-link>
        </li>
          </ul>
      </div>   
      </nav>
      </template>

      <style>
   
    
  .footer {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #618985;
    font-family: Georgia;
    font-weight: bold;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

   li {
    display: inline;
    padding: 5px 5px;
  }

   a {
    display: inline-block;
    padding: 15px 10px;
    color: white;
    text-decoration: none;
  }

  a:hover, a:focus{
    border-bottom-left-radius: 20px;
    background-color: rgba(198, 239, 235, 0.4);
    transition: 0.2s;
    color: #414535;
    text-decoration: none;
  }
      </style>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      headerList: [
        {
          name: 'ABOUT US',
          path: '/aboutus',
        },
        {
          name: 'CONTACT US',
          path: '/contactus',
        },
      ],
    }
  },
}
</script>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
