import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const defaultGoal = { text: "" };
  const [goalList, setGoalList] = useState([]);
  const [goal, setGoal] = useState(defaultGoal);
  const goalInputHandler = (val) => {
    setGoal({ text: val, id: Math.random().toString() }); // Not foolproof for random keys but okay for this small demo
  };
  const addGoalHandler = () => {
    setGoalList((current) => [...current, goal]);
    setGoal(defaultGoal);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal"
          value={goal.text}
        />
        <Button
          disabled={goal.text.trim() === ""}
          onPress={addGoalHandler}
          title="Add Goal"
        />
      </View>
      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          {goalList.map((g, i) => (
            <View key={i} style={styles.goalsItem}>
              <Text style={styles.goalsText}>{g}</Text>
            </View>
          ))}
        </ScrollView> */}

        <FlatList
          data={goalList}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalsItem}>
                <Text style={styles.goalsText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        ></FlatList>
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
  goalsItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalsText: {
    color: "white",
  },
});
