import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function GoalItem(props) {
	return (
		<TouchableOpacity activeOpacity={0.6} onLongPress={props.onGoalDelete}>
			<View style={styles.listItem}>
				<Text>{props.children}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 5,
		marginVertical: 10,
	},
});
