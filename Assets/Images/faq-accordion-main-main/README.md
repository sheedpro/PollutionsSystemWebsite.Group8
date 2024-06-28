# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
![alt text](<Faq Final Screenshot.png>)

### Links

- Live Site URL: [Add live site URL here](https://mirrorinstinct.github.io/faq-accordion-main/)

## My process

Mainly, I just looked at the final result picture from the beginning and went ahead to make the code for HTML, CSS and JavaScript. What I tried to do is use flexbox to scale to whatever device you are using that it
would save time and lines of code if I just optimize the layout from the beginning. I won't lie, I did have to look a lot of things up but I made sure to at least go as far as I could with my own knowledge before I
began looking anything up.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

I learned how to get more use out of "summary" and "details" when using it in HTML. The next time I make anything similar to this though, I will
likely make the dropbox in a different way because this did feel very stiff and limited to use. I prefer the official solution a lot more
but by the time I made it to the end I felt that I fought with my chosen layout enough. Always better to create and practice than to watch
a video telling me exactly what to do step by step.

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.


This really helped me to better understand how to center the FAQ box:
```css
.faqcontainer {
    position: absolute; /* or fixed */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    max-width: 600px;
    min-height: 300px;
    box-shadow: 5px 5px 2cap #888888;
  }  
```
### Continued development

Although this project is considered "newbie," I really did struggle for a while with this one but it is well known that you can't grow or learn without pain.
From here, I hope the other projects I work on will help push my limits so I can become more comfortable with concepts that I normally
would not dare try on my own.

### Useful resources

Honestly, stack overflow and general searches do go a long way to help you with any problems or questions you may have.
A big help overall though was (https://www.w3schools.com)
If you somehow haven't already come across it, it's an amazing resource for any and all methods of programming.

### Author

- Website - [Jarol](https://mirrorinstinct.github.io/faq-accordion-main/)
- Frontend Mentor - [@MirrorInstinct](https://www.frontendmentor.io/profile/MirrorInstinct)
