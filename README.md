# HypermediaProject 
[comment]: <**LINK of the WEBSITE**: https://hyper4hypermediaproject.herokuapp.com>

## Team Hyper4
Francesco Calabrese
 - Person Code: 10849050
 - Mail: francesco1.calabrese@mail.polimi.it
 - Contribution: Fronted: CSS style in whole project. Content research. Components: CardCarousel, Mapbox, Card, LongCard, TheHeader, TheFooter. Pages: service_details, event_details, poi_details, itinerary_details, all_events, contactus. SEO and Accessability checks with various fixes in all pages.
 
Federica Carrano
 - Person Code: 10851879
 - Mail: federica.carrano@mail.polimi.it
 - Contribution: Content research; Code comments; Fronted: CSS style in whole project; Components: TheHeader, TheFooter, BreadCrumb, DropUp, Slideshow, Card; Pages: index, contactus, alleventgroupings, allevents, winterevents, summerevents, allservicetypes; Error page layout.
 
Francesco Corso
 - Person Code: 10867595
 - Mail: francesco.corso@mail.polimi.it
 - Contribution: Backend: endpoints in api.js; Components: Slideshow, Mapbox, CardCarousel, BreadCrumb; Pages: allpois, allitineraries,poi_details, itinerary_details, event_details, allevents, error page layout; Content search for website; comments in the code; content of the README file.
 
Leonardo Scapolan
 - Person Code: 10801854
 - Mail: leonardo.scapolan@mail.polimi.it
 - Contribution: Database design, implementation and population, content research, some api endnpoints. Components: Card, CardCarousel, CardList, LoadingIcon. Pages: thetown, winterevents, summerevents, allpois, allitineraries, allevents, allservicetypes. SEO and Accessability checks. Several various fixes in the whole project;
 
## Project Documentation - Organization of the application
Here we describe how the application has been generally organized for development and production.
### Pages
- index: homepage of the website
- alleventgroupings: gives the user the possibility to access the events offered in the website. Organized by season, or displaying them all.
  - allevents: displays all the events
  - summerevents: displays all the summer events
  - winterevents: displays all the winter events
- allpois: displays all the point of interest
  - poi_details: displays information about a single topic 
- allitineraries: displays all the itineraries
  - itinerary_details: displays information about a single itinerary
- allservicetypes: displays all the service types
  - service_details: displays a series of services belonging to the chosen type.
- thetown: displays information about the history of Florence, with also information on how to get there.
- contactus: contains an information request form.

### Components
- **BreadCrumb**: component used to give the user informations about his/her position inside the website structure.
- **Card**: implements the basic functionality of displaying the preview of an item of the website, with a set of basis information to grab user's attention. It also doubles up as a link to pages containing the details of said item.
- **CardCarousel**: it's a carousel of cards, often used to display related topics of a single page in a compact and easy way.
- **CardList**: list of cards, used to display a series a items to which the user can choose from. Perfect for head of group pages.
- **DropUp**: small button placed at the bottom of long pages to offer the user an easy way back to the top of the page.
- **LoadingIcon**: an animated loading icon fundamental for giving the user the information about the status of the application.
- **LongCard**: used for displaying preview information of a service like address, phone number and opening hours.
- **MapBox**: used for displaying a styled map starting from its URL.
- **SlideShow**: used for displaying many images in a compact way.
- **TheFooter**:Fundamental part of the template, holds the link to the contact us page.
- **TheHeader**:Fundamental part of the template, holds all the navigation links to the main topics of the application.

### Functionalities
- **Routing**: we used the basic routing functionalites offered by Nuxt.
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
- **Store**: we opted to not use any store functionality
- **Layouts**: we decided to build only one layout for all the application, since the structure of the landmarks inside the pages was basically the same. 
```
layouts/
--| default.vue --> Includes: TheHeader component, Nuxt, TheFooter component.
--| empty.vue ---> empty layout for the error page
--| error.vue --> new visualization of the default error page, adapted to the custom look of the website.
```
- **Rendering**: we opted for a Server Side Rendering (**SSR**), which gave us some advantages, especially in the SEO and optimization departments. It will also allow us to easly add new content (like new points of interest or services) to the website without much trouble after release.
- **Static**: contains the elements of out project that are fixed.
```
static/
--| css/ --> Contains some global css for the application
--| icons/ --> Contains incons used in the application
--| images/ --> Contains all the images used in the application
```
- **Server**: we linked the API trough the serverMiddleware property in the nuxt.config.js file, adding the corrispondent path to it.
```
server/
--| model/ 
-----| database.js --> Handles the sequelize connection to the remote database, and creates the ORM model to which we can extract data trough the API
--| api.js--> Contains the methods used by the application to get data troguh the ORM. 
```
### Best Practices 
**Components**: we utilized one of the most powerful feature of the framework in use, which is the possibility to implement reusable components in order to create modular designs and avoid rewriting redundant code.

**Layouts**: another powerful feature of vue, it allowed us to create a standard design for the pages, again to make the design more scalable across the whole website and write less code.

**SEO**: the website is optimized for the search engines indicization, which is fundamental for an optimal placement on the search results. Nuxt allowed us to insert a common head and meta. Also, Server Side Rendering resulted in a good choice, since it allows the server to send to the client pages already filled with content, which are preferred by the crawlers.
