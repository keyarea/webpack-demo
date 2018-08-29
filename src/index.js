import _ from 'lodash';
import './style.css';
import icon from './img.jpg';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');


    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.classList.add('hello');

    var img = new Image();
    img.src = icon;

    element.appendChild(img);

    console.log(Data);

    return element;
}

document.body.appendChild(component());