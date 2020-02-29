import util from '../helpers/util.js'

const addBearEvent = () => {
    event.preventDefault();
    console.log('bear added');
};

const printBearForm = () => {
    let domString = '';
    domString += '<div class="bear-form">'
    domString += '<form class="mx-5 py-3">'
    domString +=    '<div class="form-group">'
    domString +=       '<label for="exampleInputEmail1">Bear Name</label>'
    domString +=       '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">'
    domString +=     '</div>'
    domString +=     '<div class="form-group">'
    domString +=       '<label for="exampleInputPassword1">Image URL</label>'
    domString +=       '<input type="url" class="form-control" id="exampleInputPassword1">'
    domString +=     '</div>'
    domString +=     '<button id="add-bear" type="submit" class="btn btn-dark">Submit</button>'
    domString +=   '</form>'
    domString += '</div>'
    util.printToDom('bear-form', domString);
    document.getElementById('add-bear').addEventListener('click', addBearEvent);
};

export default { printBearForm };