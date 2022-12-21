import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TextInput, Button, View, Image, BackHandler } from "react-native";

const LoginScreen = ({ navigation }) => {
    const { login } = useAuth();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
        <Text style={styles.header}>{`Hello`}</Text>
        <Text style={styles.title}>{`Create Your Own Notes Here`}</Text>
        <TextInput
                value={user}
                onChangeText={(text) => setUser(text)}
                placeholder={"Username"}
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder={"Password"}
                secureTextEntry={true}
                style={styles.input}
            />
            <Button
                title={"Login"}
                style={styles.button}
                onPress={() => login(user, password)}
            />
            </View>
                
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FAF8F1",
    },
    header: {
      paddingLeft: 8,
      fontSize: 35,
      fontWeight: 'bold',
    },
    title: {
        fontSize: 17,
        marginBottom: 25
    },
    input: {
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#434242",
        marginBottom: 10,
    }, 
    button: {
        backgroundColor: "black"
    }
});
