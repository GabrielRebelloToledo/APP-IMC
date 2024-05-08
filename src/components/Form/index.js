import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Vibration,
  Pressable,
  FlatList
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);


  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let weightFormat = weight.replace(",", ".");

    let calculo = (weightFormat / (heightFormat * heightFormat))
      .toFixed(2)
      .replace(".", ",");
    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: calculo }]);
    setImc(calculo);

    console.log(imcList);
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("Campo Obrigatório*");
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual: ");
      setTextButton("Calcular Novamente!");
      Keyboard.dismiss();
      setErrorMessage(null);
    } else {
      verificationImc();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e altura");
    }
  }
  return (
    /* O Pressable substuiu o View para que se o usuário clicar em qualquer regiao fora do form, ele retira o telado. */

    <>
      <View style={styles.formContext}>
        {imc == null ? (
          <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Ex:. 1.75"
              keyboardType="numeric"
              onChangeText={setHeight}
              value={height}
            />
            <Text style={styles.erroMenssage}>{errorMessage}</Text>
            <Text style={styles.formLabel}>Peso</Text>

            <TextInput
              style={styles.formInput}
              placeholder="Ex:. 75.75"
              keyboardType="numeric"
              onChangeText={setWeight}
              value={weight}
            />
            <Text style={styles.erroMenssage}>{errorMessage}</Text>
            {/* <Button title={textButton} onPress={() => validationImc()} /> */}
            <TouchableOpacity
              style={styles.buttonCalculator}
              onPress={() => validationImc()}
            >
              <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonCalculator}
              onPress={() => getMovies()}
            >
              <Text style={styles.textButtonCalculator}>dasdasdsa</Text>
            </TouchableOpacity>
          </Pressable>
        ) : (
          <View style={styles.exibitionImc}>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
            <TouchableOpacity
              style={styles.buttonCalculator}
              onPress={() => validationImc()}
            >
              <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
}
