import reactor from './reactor'
import ProductStore from './stores/ProductStore'
import CartStore from './stores/CartStore'

reactor.registerStores({
	'product': ProductStore,
	'cart': CartStore
})

console.log(reactor.evaluate([]));