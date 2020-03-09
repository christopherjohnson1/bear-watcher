import form from '../javascripts/components/bearForm.js'
import river from './components/river.js'
import bearData from './helpers/data/bearData.js'

const addBearEvent = (e) => {
    e.preventDefault();
};

const init = () => {
    form.printBearForm();
    river.buildBears();
};

init();
