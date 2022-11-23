import React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppFormField from "./../components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              name="email"
              keyboardType="email-address"
              placeHolder="Email"
              textContentType="email-address"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              keyboardType="numeric"
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
