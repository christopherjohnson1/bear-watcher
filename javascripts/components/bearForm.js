import util from '../helpers/util.js'
import bearData from '../helpers/data/bearData.js'
import river from './river.js'

const addBearEvent = (e) => {
    e.preventDefault();
    const bearName = $('#bear-name').val();
    const bearImage = $('#bear-image').val();
    bearData.addBear({name: bearName, imageURL: bearImage});
    river.buildBears();
    $('bear-form').trigger("reset");
};


const printBearForm = () => {
    let domString = '';
    domString += '<div class="bear-form">'
    domString += '<form class="mx-5 py-3">'
    domString +=    '<div class="form-group">'
    domString +=       '<label for="name">Bear Name</label>'
    domString +=       '<input type="name" class="form-control" id="bear-name">'
    domString +=     '</div>'
    domString +=     '<div class="form-group">'
    domString +=       '<label for="image">Image URL</label>'
    domString +=       '<input type="url" class="form-control" id="bear-image">'
    domString +=     '</div>'
    domString +=     '<button id="add-bear" type="submit" class="btn btn-dark bear-btn">Submit</button>'
    domString +=   '</form>'
    domString += '</div>'
    util.printToDom('bear-form', domString);
    $('#add-bear').click(addBearEvent);
};

export default { printBearForm, addBearEvent };