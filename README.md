# Simon-Game
 
Welcome to the world of "VibeSync," where classic meets contemporary in the realm of web-based gaming. Join us on a journey that reimagines the beloved Simon game with a fresh and vibrant twist.

In "VibeSync," we've taken the timeless challenge of Simon and infused it with cutting-edge web technology and interactive features. This isn't your grandparent's Simon game – it's a whole new vibe!

Get ready to put your memory and reflexes to the test as you sync with the colorful patterns and catchy tunes. But "VibeSync" isn't just about following the rhythm; it's about creating your own, too. With our modernized gameplay, you'll be able to share your progress, challenge friends, and experience the game's social side.

So, whether you're a die-hard Simon fan or a newcomer to the world of memory games, "VibeSync" offers something for everyone. Stay tuned as we embark on this thrilling adventure with New Vibe Game and set the stage for a web-based gaming experience that's bound to make your heart race and your brain groove.

![New Vibe Game shown on a range of devices](assets/documentation-media/Picture1.png)

[View New Vibe Game on Netlify](https://newvibe-game.netlify.app/)

![GitHub last commit](https://img.shields.io/github/last-commit/JuliaLavagnini/Simon-Game?color=red)
![GitHub contributors](https://img.shields.io/github/contributors/JuliaLavagnini/Simon-Game?color=orange)
![GitHub language count](https://img.shields.io/github/languages/count/JuliaLavagnini/Simon-Game?color=yellow)
![GitHub top language](https://img.shields.io/github/languages/top/JuliaLavagnini/Simon-Game?color=green)

## CONTENTS

* [User Experience (UX)](#User-Experience-(UX))
  * [Initial Discussion](#Initial-Discussion)
  * [User Stories](#User-Stories)

* [Design](#Design)
  * [Colour Scheme](#Colour-Scheme)
  * [Typography](#Typography)
  * [Imagery](#Imagery)
  * [Wireframes](#Wireframes)
  * [Features](#Features)
  * [Accessibility](#Accessibility)

* [Technologies Used](#Technologies-Used)
  * [Languages Used](#Languages-Used)
  * [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-&-Programs-Used)

* [Deployment & Local Development](#Deployment-&-Local-Development)
  * [Deployment](#Deployment)
  * [Local Development](#Local-Development)
    * [How to Fork](#How-to-Fork)
    * [How to Clone](#How-to-Clone)

* [Testing](#Testing)
  * [W3C Validator](#W3C-Validator)
  * [Solved Bugs](#Solved-Bugs)
  * [Known Bugs](#Known-Bugs)
  * [Testing User Stories](#Testing-User-Stories)
  * [Lighthouse](#Lighthouse)
    * [Index Page](#Index-Page)
    * [Books Page](#Books-Page)
    * [Contact Us Page](#Contact-Us-Page)
    * [Thank You Page](#Thank-You-Page)
  * [Full Testing](#Full-Testing)
  
* [Credits](#Credits)
  * [Code Used](#Code-Used)
  * [Content](#Content)
  * [Media](#Media)
  * [Acknowledgments](#Acknowledgments)

- - -

## User Experience (UX)

### Initial Discussion

New Vibe Game is a forward-thinking game agency renowned for their innovative approach to web-based gaming. They are dedicated to crafting experiences that not only captivate audiences but also set new standards in interactive entertainment. Their commitment to pushing boundaries aligns perfectly with our vision for "VibeSync."

They look for the right balance betweeb nostalgia and innovation. Bringing back from the past a redesigned with fresh and modern elements of 'Simon Game'. 


#### Key information for the site

* Modernized Interface: A sleek, user-friendly web interface designed for seamless gameplay across various devices.

* Vibrant and Engaging: Utilize a visually stimulating palette to create an immersive environment that complements the gameplay.

* Interactive Elements: Engaging elements that encourage user interaction and enhance the gaming experience.

* Clear Guide: Simple and clear guide for instructions.

### User Stories

#### Client Goals

* Quality Assurance and Bug-Free Gameplay: Conduct thorough testing to identify and rectify any bugs or issues, guaranteeing a polished and reliable gaming experience.

* Interactive Features: Incorporate elements that encourage player engagement and interaction within the game, enhancing overall enjoyment.

* Seamless Web-Based Gameplay: Ensure the game operates smoothly on various web browsers and devices, providing a consistent experience for all players.

* Engaging User Experience: Create a game that captivates players from the first interaction, offering an immersive and enjoyable experience.

* Nostalgia with a Modern Twist: Retain the essence of the classic Simon game while infusing it with contemporary elements to appeal to a broad audience.

#### First Time Visitor Goals

* I want to be captivated by the landing page, instantly drawn in by the visuals and intrigued by the concept of the game.

* I hope to receive a clear and concise explanation of how to play "VibeSync" so I can dive right into the action without any confusion.

* Navigating through the game should be intuitive and hassle-free, allowing me to focus on the gameplay itself.

* I hope to enjoy uninterrupted gameplay, without any technical glitches or performance issues that might disrupt my experience.

#### Returning Visitor Goals

* It's important to me that the gameplay experience feels familiar but with noticeable improvements in responsiveness, graphics, or user interface.

*  I look forward to reviewing my progress and achievements, gaining a sense of accomplishment and motivation to continue playing.

- - -

## Design

### Colour Scheme

![TRIP. Travel Agency Website colour palette](<assets/documentation-media/Trip. website colour palette.png>))

The website uses a palette of vibrat colours to assembly their logo image. The colour palette was created using the [Coolors](https://coolors.co/) website.

### Typography

Google Fonts was used for the following font with different font weight:

* Outfit is used on the whole website. It is a sans-serif font.

### Imagery

All images used was from license free websites as Unsplash.

### Wireframes

Wireframes were created for mobile, tablet and desktop.

[Home Page Wireframe](assets/documentation-media/Home.png)

[Destinations Page Wireframe](assets/documentation-media/Destinations.png)

[About Page Wireframe](assets/documentation-media/About-Us.png)

### Features

The website is comprised of three pages, all accessible from the navigation menu (home page, destination page & about us page).

* All Pages on the website have:

  * A responsive navigation bar at the top which allows the user to navigate through the site.  To the left of the navigation bar is an image of travrl agency logo. To the right of the navigation bar are the links to the websites pages (home, destinations, and about us). To allow a good user experience of the site, the TRIP. text is hidden with a media query on mobile devices to prevent the navigation bar looking cluttered. When viewing with mobile devices the navigation links change to a burger toggler. This was implemented to give the site a clean look and to promote a good user experience, as users are used to seeing the burger icon when on mobile devices to navigate a site.
  * On the navigation bar there is a button "get started" that will send the user imediatly to the bookind section.

* Home Page.
  * Popular Destination Section.
  The images are aligned in a grid system with zoom in when hover and access to the the specific destination aligned with the image on destination page.

  * Our Services Section.
  This section section changes each box color when hover to orange for a nice interaction.

  * Awesome Package Section.
  This section allows the user to see some packages and click for more information which will send them to destinations page, or send to book section. Each book now button will open the booking section on a new tab.

  * Booking Section.
  This section allows the user to book a trip with form interaction. After click "book now" a popup message will appear showing the order ID, a contact number in case of need and a message saying an agent will contact shortly. 

  * Newsletter Section.
  It will give to the user a chance to stay informed about trip, deals, article, tips and more. It will be shown on a popup message after put email and click "join our newsletter".
  
  * Back to the top button.
  This button when clicked will send the user back to the beggining of the page.


* Destinations Page.
  * Each destination has your own box image clickable that will shown up a popup screen with a video about this destination.
  * Back to the top button.
  This button when clicked will send the user back to the beggining of the page.

* Future Implementations.
  * Implement a more efficiaty booking system with a possibility online payment.
  * Review section to show trustworthiness and credibility to the customer.
  * Information on how to access customer services with chat, email and telephone number.
  * A user account - to give to the user acess and control of his data.
  * Create social media for a better engagement with potential users. 

### Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. I have achieved this by:

* Using semantic HTML.
* Using descriptive alt attributes on images on the site.
* Providing information for screen readers where there are icons used and no text - such as the review ratings for books & footer icons.
* Ensuring that there is a sufficient colour contrast throughout the site.
* Ensuring menus are accessible by marking the current page as current for screen readers.

- - -

## Technologies Used

### Languages Used

HTML and CSS were used to create this website.

### Frameworks, Libraries & Programs Used

Figma - Used to create wireframes.

Git - For version control.

Github - To save and store the files for the website.

Bootstrap Version 5.3 - The framework for the website. Code for the navigation bar, modal, and form were used and modified. Additional CSS styling was also implemented in style.css.

Google Fonts - To import the fonts used on the website.

Font Awesome - For the iconography on the website.

Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.

[Optimizilla](https://imagecompressor.com/) To compress images.

[Favicon.io](https://favicon.io/) To create favicon.

[Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

[Shields.io](https://shields.io/) To add badges to the README

- - -

## Deployment & Local Development

### Deployment

Netfily was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) with your Github.
2. Click on the Add new site.
3. Find the repository for this project, TRIP.-travel-agency-website.
4. Click on Create.
5. Now let it load, once is ready a link to access will be provided.

### Local Development

#### How to Fork

To fork the Bully-Book-Club repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, JuliaLavagnini/TRIP.-travel-agency-website.
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the TRIP.-travel-agency-website repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, JuliaLavagnini/TRIP.-travel-agency-website.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

Testing was ongoing throughout the entire build. I utilised Chrome developer tools while building to pinpoint and troubleshoot any issues as I went along.

The following issues were raised during my mid project meeting with my mentor:

* The first version of the website support a carrosel section but was not working properly. This lastest version get rid of carrosel section.
* All images was not responsive to small screen devices. The images now is fully reponsive and present a grid for a better follow on the website.
* The navagation bar was not showing up on small devices. It now present a collapse content and center.
* The date field on booking section was not appearing. It required a change on the date field class and data-target.

### W3C Validator

The W3C validator was used to validate the HTML on all pages of the website. It was also used to validate CSS in the style.css file.

* [Index Page HTML](assets/documentation-media/index-validator.png)
* [Destination Page HTML with errors stated](assets/documentation-media/destinations-error-validator.png)
* [Destination Page HTML with solved](assets/documentation-media/destinations-validator.png)
* [About Page HTML](assets/documentation-media/about-validator.png)
* [style.css CSS](assets/documentation-media/css-validator.png)

### Solved Bugs

1. The hero section would lose its alignment when on smaller devices, with a font size much bigger than the screen proportion. CSS queries is necessary suit the font size according to the screen proportion. Also, aligment with padding and background image were adjust to fit.

2. The button on navagation bar has to be adjust to be able to work as a link. By remove link tag and add a onclick event.

3. The navigation bar present on the pages with light background had to be adjust to fit the page. By adding a different class to style to CSS and named it 'navigation dark'.

4. The back to top function was implemented to improve usuability, with that in mind a Javascript file and code had to be added for a fully functionality. 

### Testing User Stories

* First Time Visitors

  * Since I often browse on my mobile device, I expect the website to be responsive and easy to navigate on my smartphone or tablet. A mobile-friendly design is essential for a seamless experience.

  ![Small device screen](assets/documentation-media/small-device.png)

  * I want to explore a diverse range of extraordinary destinations. As a wanderlust-driven traveler, I'm eager to uncover hidden gems, pristine beaches, majestic mountains, and culturally rich cities that TRIP has to offer.

  ![Destinations](assets/documentation-media/destinations-use.png)

* Returning Visitors

  * As a repeat visitor, I'm eager to see what fresh and exciting travel packages TRIP has introduced since my last visit. I want to discover new destinations, unique experiences, and exclusive offers that may not have been available before..

  ![Packages](assets/documentation-media/package.png)

  * I come back to the website to check for updates, promotions, and seasonal specials. I want to be informed about any limited-time deals or exclusive packages that align with my travel preferences.

  ![Ways of deals 1](assets/documentation-media/deals-1.png)
  ![Ways of deals 2](assets/documentation-media/deals-2.png)

* Frequent Visitors
  * Given my frequent use of the website, I rely on its mobile-friendly design to access information and book trips on the go. I expect the website to remain convenient and easy to navigate across all devices.

  ![Small device screen](assets/documentation-media/small-device.png)

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to allow me to test the performance, accessibility, best practices and SEO of the website.

Lighthouse testing :
[Lighthouse Testing for Desktop Index Page](assets/documentation-media/lighthouse-desktop.png)
[Lighthouse Testing for Mobile Index Page](assets/documentation-media/lighthouse-mobile.png)


### Full Testing

To fully test my website I performed the following testing using a number of browsers (google chrome, safari, mozilla firefox) and devices (Macbook Pro 14 inch, iPhone 13 pro).

I also went through each page using google chrome developer tools to ensure that they responsive on all different screen sizes.

Links.

1. Test each link on the index page. Each link worked as expected, and any links leading to external pages opened correctly in a seperate browser tab.
2. Test each link on the destisnation page. Each link worked as expected, and any links leading to external pages opened correctly in a seperate browser tab.
3. Test each link on the about page. Each link worked as expected.

- - -

## Credits

### Code Used

* [Button tag with onclick event](https://www.w3docs.com/snippets/html/how-to-create-an-html-button-that-acts-like-a-link.html)
* [Boostrap - navbar with modifications](https://getbootstrap.com/docs/5.3/components/navbar/#external-contentl)
* [Boostrap - modal with modifications](https://getbootstrap.com/docs/5.3/components/modal/)
* [Foolish Developer channel tutorial - back to the top button and images grid](https://www.youtube.com/watch?v=ws-_4yxKJ8g)

### Content

Content for the website was written by the owner of Julia Lavagnini.

### Media

* All media used to obtain from Unplash, an license free website.

#### Other Images

* TRIP. Logo - My self creation.

* icon from service section was part of Font Anwesome website.
[Font Anwesome - globe](https://fontawesome.com/icons/globe?f=classic&s=solid)
[Font Anwesome - plane](https://fontawesome.com/icons/plane?f=classic&s=solid)
[Font Anwesome - globe](https://fontawesome.com/icons/dollar-sign?f=classic&s=solid)

