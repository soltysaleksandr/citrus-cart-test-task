import 'bootstrap/scss/bootstrap-reboot.scss';
import './assets/scss/style.scss';
 
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./assets/images/', true));


