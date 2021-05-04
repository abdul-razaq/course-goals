import React, { useState } from "react";
import { View, Button, TextInput, Modal, StyleSheet } from "react-native";

export default function GoalInput({ onAddGoal, visible, onInputCancel }) {
	const [enteredGoal, setEnteredGoal] = useState("");

	function enteredGoalHandler(enteredText) {
		setEnteredGoal(enteredText);
	}

	function addGoalHandler() {
		onAddGoal(enteredGoal);
		setEnteredGoal("");
	}

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					value={enteredGoal}
					onChangeText={enteredGoalHandler}
					style={styles.input}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="CANCEL" color="red" onPress={onInputCancel} />
					</View>
					<View style={styles.button}>
						<Button title="ADD" onPress={addGoalHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},

	input: {
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		width: "80%",
		marginBottom: 10,
	},

	buttonContainer: {
		width: "60%",
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},

	button: {
		width: "40%",
	},
});
