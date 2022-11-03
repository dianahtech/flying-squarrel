import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'karma': require('../../assets/fonts/karmaf.otf'),
  });