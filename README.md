![screenshot of the site on different devices](/assets/images/am-i-responsive.png)
# Magic Cards game! 
## This is a Memory cards game, flip the cards and find a matching pair.
Magic cards is a game where you flip cards to find a matching pair. Match all the cards and the timer stops, do it again and improve your time.
### Modal.
![screenshot of two old cottages with grassroof](/assets/images/screenshot-cottage.png)
The user is greeted with an modal, it discribes to the user the rules of the game, and the user can easily close the modal and start playing.
### The playground.
![screenshot of the play-ground](/assets/images/navbar.png)
* On the playgroung there is 16 cards with the faces down.
* The user clicks a card and a flip animation is triggerd reveiling the face of the card
### Player text.
![Screenshot of some welcome text](/assets/images/welcome.png)<br>
The purpose is for the user to receive a confirmation whether the user received a match or not.

### The Footer.
![Screenshot of the stone footer with icons to social media and contact information](/assets/images/stone-footer.png)
* The footer is placed at the bottom of the page with a black background color.
* In the footer we find a timer and a "flip" counter.
* The footer is responsive on all devices


### Existing features.
* Responsive design
* Flip function 
* Match function
* Shuffle function
* modal
### Features left to implement.
I would like to implement IFRAME in the #contact section with a working map.
### Technologies.
* HTML
    * The structure of the Website was developed using HTML as the main language.
* CSS
    * The website was styled using css in a seperate file.
* Git
    * Used to commit and push code during the development of the Website
* Git hub
    * Source code is hosted on GitHub and delpoyed using Git Pages.
* JavaScript

* [Fontawesome](https://fontawesome.com/)
    * Is used to download icons used in the cards.
## Testing.
### Responsivenes.
The site were tested to ensure responsiveness on screen sizes from 320px and upwards on Chrome and Edge.
### Steps to test:
1. Open browser and navigate to [Viking weekend](/index.html).
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width
### Expected:
Website is responsive on all screen sizes and no images are pixelated or stretched. No horizontal scroll is present. No elements overlap.
### Actual:
Website is responsive on all screen sizes and no images are pixelated or stretched. No horizontal scroll is present. No elements overlap.
### Website was also opened on the following devices and no responsive issues were seen:
* Samsung S22
* Iphone 13
* Lenovo ideapad S340
## Lighthouse Testing.
![screenshot of index.html lighthouse score](/assets/images/lighthouse-index.png)<br>
![screenshot of events.html lighthouse score](/assets/images/lighthouse-event.png)<br>
![screenshot of gallery.html lighthouse score](/assets/images/lighthouse-gallery.png)<br>
![screenshot of signup.html lighthouse score](/assets/images/lighthouse-signup.png)


### Form Testing.
The form on the signup page was tested to ensure it functioned as expected when correct data was input and when incorrect data was input.<br>
Steps to test:
1. Navigate to [Viking weekend signup page.](https://jesdah.github.io/Viking_weekend/signup.html)
2. Scroll down to the form and input the following data:
   - First Name: John
   - Last Name: Doe
   - Email: doe.john@test.com
   - Phonenumber: 123456789
   - age: 8
   - Allergies: none
   - Dates: select a date
   - Anything else you like to add?: This is optional
3. Click Submit
4. User should be redirected to thank-you.html confirmation page.<br>
### Expected:

Form submits with no warnings or errors and user is redirected to index.html confirmation page.

### Actual:

Website behaved as expected with no errors or warnings and redirected to index.html.<br>
If a required field is missing the user will not be able to submit and an error field will be displayed.
### Footer Social Media Icons / Links
Testing was performed on the Font Awesome Social Media icons in the footer to ensure that each one opened in a new tab.

Each item opened a new tab when clicked as expected.

### Validator Testing
- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org)
  ![validator result index.html](/assets/images/validator-index.png)<br>
  ![validator result events.html](/assets/images/validator-events.png)<br>
  ![validator result gallery.html](/assets/images/validator-gallery.png)<br>
  ![validator result signup.html](/assets/images/validator-signup.png)<br>
  ![validator result thank-you.html](/assets/images/validator-thank-you.png)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org)
  ![validator result css](/assets/images/validator-css-vikingweekend.png)
### Unfixed Bugs
No bugs unfixed.
### Deployment.
The following git commands were used throughout development to push code to the remote repo:

```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.<br>
```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.<br>
```git push``` - This command was used to push all committed code to the remote repository on github.
### Deployment to Github Pages
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the menu on left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully. 
The live link can be found here. https://jesdah.github.io/Viking_weekend/
### Clone the Repository Code Locally
Navigate to the GitHub Repository you want to clone to use locally:
- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal
The project will now been cloned on your local machine for use.
### Credit.
* The code for the navbar is taken from the [loverunning project](https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode/blob/main/07-gallery/02-gallery-images/index.html)
* I learned how to use flex [w3schools](https://www.w3schools.com/css/css3_flexbox_responsive.asp)and at [Flexboxfroggy](https://www.flexboxfroggy.com/)
* I got the code to make the thank-you page redirect to the homepage from gareth_mentor:
```
<meta http-equiv="refresh" content="10; url=index.html">
```
* I have used [w3schools](https://www.w3schools.com/) a lot for inspiration and tips and tricks
* To compress images I have used [squoosh](https://squoosh.app/editor)
* To get a fixed footer I have taken the code from [w3schools](https://www.w3schools.com/howto/howto_css_fixed_footer.asp)
* For symbols in the footer I have used [Fontawesome](https://fontawesome.com/)
* I found the pictures at [pexels](https://www.pexels.com/sv-se/)