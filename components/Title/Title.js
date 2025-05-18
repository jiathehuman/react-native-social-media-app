import React from 'react';
import {Text} from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';

const Title = (props) => {
    return <Text style={styles.title}>{props.title}</Text>;
};
// Prop types expected
Title.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Title;