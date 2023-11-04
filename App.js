import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput } from "react-native";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [goal, setGoal] = useState("");
  const goalInputHandler = (val) => {
    setGoal(val);
  };
  const addGoalHandler = () => {
    setGoalList((current) => [...current, goal]);
    setGoal("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal"
          value={goal}
        />
        <Button
          disabled={goal === ""}
          onPress={addGoalHandler}
          title="Add Goal"
        />
      </View>
      <View style={styles.goalsContainer}>
        {goalList.map((g, i) => (
          <Text key={i}>{g}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { paddingTop: 50, paddingHorizontal: 16, flex: 1 },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "75%",
    // marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
