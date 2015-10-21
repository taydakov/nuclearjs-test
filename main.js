import reactor from './reactor'
import ProductStore from './stores/ProductStore'
import CartStore from './stores/CartStore'
import actions from './actions'

reactor.registerStores({
	'product': ProductStore,
	'cart': CartStore
})

console.log(reactor.evaluate([]));

actions.fetchProducts();

setTimeout(() => {
	console.log(reactor.evaluate([]));
}, 1000);