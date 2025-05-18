import {StyleSheet, TextStyle} from 'react-native';
import {getFontFamily} from "../../assets/fonts/helper";

const style = StyleSheet.create({
    userContainer: {flexDirection: 'row'},
    userTextContainer: {justifyContent: 'center', marginLeft: 10},
    user:{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
    userName: {
        color:'#000',
        fontFamily: getFontFamily('Inter', 500),
        fontSize: 16,
    },
    location: {
        color: '#79869F',
        fontFamily: getFontFamily('Inter', 400),
        fontSize: 12,
        marginTop: 5
    },
    postImage: {
        alignItems: 'center',
        marginTop: 20
    },
    userPostContainer:{
        marginTop: 35,
    },
    userPostStat:{ marginLeft: 20, flexDirection: 'row', marginTop: 10 },
    userPostStatButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    userPostStatButtonRight: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 27 },
    userPostStatText: { marginLeft: 5, color: '#79869F' }
});

export default style;