## Jibe Branding Challenge
Submitted by Kristyn Lyncheski

### Instructions
Your challenge is to duplicate the element featured in the screenshot and video using only html and css (you can use sass or less if you'd like). Your challenge should be fully responsive and reproduce the hover effects on the top three cards. The hover effects that make the bars below fill is extra credit. We ask that you only spend maximum of 6 hours on this project. You will create a repo on your Github account and that is how we will review your work. To submit this challenge send us the name of the repository and the link to your Github account. Good Luck!

### Technologies
#### Frontend
- HTML
- CSS (complied from SASS)
- JavaScript (in version 2 of bonus)

#### Workflow
- Gulp
  * Including packages, including live reload and SASS compiler
- SASS

### Bonus
#### Version 1 - Pure CSS
*This version can be found in the FINAL/pure-css directory.*

The bars on the bottom section are filled dynamically using the sibling selector on hover. To do this, the top three pricing boxes had to live in the same parent component as the bottom content.

#### Version 2 - With JS
*This version can be found in the FINAL/with-js directory.*

With a more modular setup, the top and bottom content are separated into their own div elements. With Javascript, each pricing box is based two event listeners - one on mouse enter and one on mouse leave.
