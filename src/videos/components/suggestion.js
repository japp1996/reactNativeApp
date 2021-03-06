import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,

} from 'react-native';

function Suggestion(props) {
    return (
    	<TouchableOpacity
    		onPress={props.onPress}>
	    	<View style={styles.container}>
	    		<View style={styles.left}>
	    			<Image
	    			  style={styles.cover}
	    			  source={{uri:props.medium_cover_image}}
	    			/>
	    			<View style={styles.gender}>
	    				<Text style={styles.genderText}>
	    					{props.genres[0]}
	    				</Text>
	    			</View>
	    		</View>
	    		<View style={styles.right}>
	    			<Text style={styles.title}>{props.title}</Text>
	    			<Text style={styles.secondary}>{props.year}</Text>
	    			<Text style={styles.paragraph}>{props.rating} Estrellas</Text>
	    		</View>
	    	</View>
    	</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	left: {

	}, 
	right: {
		paddingLeft: 10,
		justifyContent: 'space-between'
	},
	cover: {
		width: 100,
		height: 150,
		resizeMode: 'contain'
	},
	gender: {
		position: 'absolute',
		left: 0,
		top: 0,
		backgroundColor: '#eba214'
	},
	genderText: {
		fontWeight: 'bold',
		color: 'black',
		fontSize: 11,
		paddingVertical: 4,
		paddingHorizontal: 7,
	},
	title: {
		fontSize: 18,
		color: '#44546b'
	},
	secondary: {
		backgroundColor: 'black',
		color: '#fff',
		paddingVertical: 4,
		paddingHorizontal: 6,
		fontSize: 11,
		borderRadius: 5,
		overflow: 'hidden',
		alignSelf: 'flex-start'
	},
	paragraph: {
		color: '#6b6b6b',
		fontSize:14,
		fontWeight: 'bold',
	}
});


export default Suggestion;