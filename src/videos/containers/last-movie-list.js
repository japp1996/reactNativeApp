/**
*	Los Containers son los que se pueden conectar al estado de Redux
*
**/

import React, { Component } from 'react';
import {FlatList,Text} from 'react-native';
import Empty from '../components/empty';
import Separator from '../../../src/sections/components/horizontal-separator';
import LastMovie from '../components/last-movie';
import Layout from '../components/last-movie-list-layout';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		list: state.lastMoviesList
	}
}

class LastMovieList extends Component {
	renderEmpty = () => <Empty text="No hay sugerencias"/>
	itemSeparator = () => <Separator/>
	renderItem = ({item}) => {
		return (
			<LastMovie {...item} />
		)	
	}
	keyExtractor = (item) => item.id.toString() 
	render() {
		return (
			<Layout title="Categorias">
				<FlatList 
					horizontal
					keyExtractor={this.keyExtractor}
					data={this.props.list} 
					ListEmptyComponent={this.renderEmpty}
					ItemSeparatorComponent={this.itemSeparator}
					renderItem={this.renderItem} />	
			</Layout>			
		)
	}
}

export default connect(mapStateToProps)(LastMovieList);