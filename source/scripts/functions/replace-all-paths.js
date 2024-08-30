import { replacePath } from './replace-path.js';

const imageElements = document.querySelectorAll('img');
const linkElements = document.querySelectorAll('a');
const svgElements = document.querySelectorAll('svg use');

export function replaceAllPaths() {
  if (imageElements.length > 0) {
    imageElements.forEach(element => {
      let src = element.getAttribute('src');
      let newSrc = replacePath(src);
      element.setAttribute('src', newSrc);
    });
  }
  if (linkElements.length > 0) {
    linkElements.forEach(element => {
      let href = element.getAttribute('href');
      if (href !== null && (href !== '#' || href !== '')) {
        let newHref = replacePath(href);
        element.setAttribute('href', newHref);
      }
    });

  }

  if (svgElements.length > 0) {
    svgElements.forEach(element => {
      let href = element.getAttribute('href');
      let newHref = replacePath(href);
      element.setAttribute('href', newHref);
    });
  }





}
