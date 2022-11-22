import React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import { Formik } from "formik";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeHolder="Email"
              textContentType="email-address"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              keyboardType="numeric"
              onChangeText={handleChange("password")}
              placeHolder="Password"
              secureTextEntry={true}
              textContentType="password"
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 48,
    marginBottom: 20,
  },
});

export default LoginScreen;
