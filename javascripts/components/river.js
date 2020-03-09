import bearData from '../helpers/data/bearData.js'
import util from '../helpers/util.js'
import bearForm from '../components/bearForm.js'

const buildBears = () => {
    const bears = bearData.getBears();
    let domString = '';
    domString += '<div class="col-4"';
    bears.forEach((bear) => {
        domString += `<img src=${bear.imageURL} class="card-img-top" alt=" Bear named ${bear.name}">`;
        domString += `<p class="card-text">${bear.name}</p>`;
    });
    domString += '</div>'

    util.printToDom('river', domString);
};

export default { buildBears };
