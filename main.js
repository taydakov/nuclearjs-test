import reactor from './reactor'
import ProductStore from './stores/ProductStore'
import CartStore form './stores/CartStore'

reactor.registerStores({
	'product': ProductStore,
	'cart': CartStore
})

