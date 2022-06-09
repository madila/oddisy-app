const changeColour = (elem, colour) => {
    elem.style.color = colour;
}

document.addEventListener('DOMContentLoaded', () => {
    const colour = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');

    window.addEventListener('load', () => {
        changeColour(document.querySelector('a'), colour);
    });

});

