import {StyleSheet, TextStyle} from 'react-native';
import {getFontFamily} from "../../assets/fonts/helper";

const styles = StyleSheet.create({
    title: {
        color: '#022150',
        fontFamily: getFontFamily('Inter', 700),
        fontSize: 24,
    },
});

export default styles;