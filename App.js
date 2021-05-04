import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	function addGoalHandler(enteredGoal) {
		if (enteredGoal === "") return;
		setCourseGoals(prevGoals => [
			...prevGoals,
			{ id: Math.random().toString(), value: enteredGoal },
		]);
		setIsAddMode(false);
	}

	function deleteGoalHandler(goalItemId) {
		setCourseGoals(prevGoals =>
			prevGoals.filter(goal => goal.id !== goalItemId)
		);
	}

	function cancelGoalAdditionHandler() {
		setIsAddMode(false);
	}

	return (
		<View style={styles.screen}>
			<Button title="Add New Goal" onPress={() => setIsAddMode(true)}></Button>
			<GoalInput
				visible={isAddMode}
				onAddGoal={addGoalHandler}
				onInputCancel={cancelGoalAdditionHandler}
			/>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={itemData => (
					<GoalItem
						onGoalDelete={deleteGoalHandler.bind(null, itemData.item.id)}
					>
						{itemData.item.value}
					</GoalItem>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
});
