import {StyleSheet, TextStyle} from 'react-native';
import {getFontFamily} from "../../assets/fonts/helper";

const style = StyleSheet.create({
    storyContainer: {
        marginRight: 10
    },
    firstName: {
        fontFamily: getFontFamily('Inter', 500),
        fontSize: 14,
        color: '#022150',
        marginTop: 8,
        textAlign: 'center',
    }
});

export default style;