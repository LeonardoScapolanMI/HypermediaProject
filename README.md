# HypermediaProject

## Team Hyper4
Francesco Calabrese
 - Person Code: 10849050
 - Mail: francesco1.calabrese@polimi.it
 - Contribution:
 
Federica Carrano
 - Person Code: 
 - Mail: federica.carrano@mail.polimi.it
 - Contribution:
 
Francesco Corso
 - Person Code: 10867595
 - Mail: francesco.corso@mail.polimi.it
 - Contribution: Backend: Api.js; Components: Slideshow, Mapbox, CardCarousel; Pages: allpois,allitineraries,poi_details, itinerary_details, event_details;
 
Leonardo Scapolan
 - Person Code: 10801854
 - Mail: leonardo.scapolan@mail.polimi.it
 - Contribution:
 
## Project Documentation - Organization of the application
Here we describe how the application has been generally organized for development and production.
### Pages
- index: homepage of the website
- alleventgroupings: gives the user the possibility to access the events offered in the website. Organized by season, or displaying them all.
  - allevents: displays all the events
  - summerevents: displays all the summer events
  - winterevents: : displays all the winter events
- allpois: displays all the point of interest
  - poi_details: displays information about a single topic 
- allitineraries: displays all the itineraries
  - itinerary_details: displays information about a single itinerary
- allservicetypes: displays all the service types
  - service_details: displays a series of services belonging to the chosen tyoe.
- thetown: displays information about the history of Florence, with also information on how to get there.
- contact us: hosts a contact form.

### Components
- Card: implements the basic functionality of displaying the preview of an item of the website, with a set of basis information to grab user's attention.
- CardCarousel: it's a carousel of card items, allowing us to display related topics of a single page in a compact and easy way.
- CardList: list of cards, used to display a series a items to which the user can choose from. Perfect for topic pages.
- LoadingIcon: fundamental for giving the user the information about the status of the application.
- LongCard: used for displaying preview information on a wider format.
- MapBox: used for displaying the location of an event a point of interest or a set of point of interest in an itinerary.
- SlideShow: used for displaying many images in a compact way.
- TheFooter:Fundamental part of the template, holds the link to the contact us page.
- TheHeader:Fundamental part of the template, holds all the navigation links to the main topics of the application.
### Functionalities
- Routing: we resorted into using the basic routing (and automatic) functionalites offered by Nuxt. 
```
pages/
--| event_details/
-----| _id.vue
--| itinerary_details/
-----| _id.vue
--| poi_details/
-----| _id.vue
--| service_details/
-----| _id.vue
--| index.vue
--| alleventsgrouping.vue
--| allevents.vue
--| winterevents.vue
--| summerevents.vue
--| allitineraries.vue
--| allpois.vue
--| allservicetypes.vue
--| contactus.vue
--| thetown.vue
```
- Store: we opted to not use any store functionality
- Layouts: we decided to build only one layout for all the application, since the structure of the 'fixed points' inside the pages was basically the same. 
```
layouts/
--| default.vue --> Includes: TheHeader component, Nuxt, TheFooter component.
--| error.vue --> new visualization of the default error page, adapted to the custom look of the website.
```
- Rendering: we opted for a Server Side Rendering (SSR), which gave us some advantages, especially on the SEO and optimization side. 
- Static: contains the elemnts of out project that are likely not chaing soon in the future.
```
static/
--| css/ --> Contains some global css for the application
--| icons/ --> Contains incons used in the application
--| images/ --> Contains all the images used in the application
```
- Server
### Best Practices 
