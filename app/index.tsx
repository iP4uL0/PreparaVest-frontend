import * as React from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    reset,
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View className="flex-1 justify-center items-center">
      {/* Add items-center for horizontal centering */}
      <Text className="text-2xl text-center">Junte-se ao Photo</Text>
      <View className="gap-4 p-6 w-full">
        {/* Add w-full to stretch inner view */}
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <TextInput
                mode="outlined"
                label="Email"
                value={value}
                onChangeText={onChange}
              />
            );
          }}
        />
        {errors.email && <Text>This is required.</Text>}
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <TextInput
                mode="outlined"
                label="Senha"
                value={value}
                onChangeText={onChange}
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
              />
            );
          }}
        />
        {errors.password && <Text>This is required.</Text>}
        <Button
          icon="login"
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          buttonColor="#1591EA"
          style={{ width: "80%", alignSelf: "center" }}
        >
          Entrar
        </Button>
      </View>
    </View>
  );
}
