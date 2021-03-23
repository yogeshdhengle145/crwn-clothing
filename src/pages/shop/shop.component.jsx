import React from  'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component {
	constructor(props) {
			super();
			this.state = {
				collection: SHOP_DATA
			}
	}

	render () {
		const collections = this.state;
		console.log(collections);
		return (<div  className="shop-page">
		{
			collections.collection.map(({id, ...otherCollectionsProps}) => (
				<CollectionPreview key={id} {...otherCollectionsProps} />
			))
		}
		</div>)
	}
}

export default ShopPage;