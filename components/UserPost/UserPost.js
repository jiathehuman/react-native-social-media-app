import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserPost = props => {
    return (
        <View style={style.userPostContainer}>
            <View style={style.user}>
                <View style={style.userContainer}>
                    <UserProfileImage
                        profileImage={props.profileImage}
                        imageDimensions={48}
                    />
                    <View style={style.userTextContainer}>
                        <Text style={style.username}>
                            {props.firstName} {props.lastName}
                        </Text>
                        {props.location && (
                            <Text style={style.location}>{props.location}</Text>
                        )}
                    </View>
                </View>
                <Text><FontAwesome name="ellipsis-h" color="#79869F" size={24} /></Text>
            </View>

            <View style={style.postImage}>
                <Image source={props.image} style={style.image} resizeMode="cover" />
            </View>

            <View style={style.userPostStat}>
                <View style={style.userPostStatButton}>
                    <Text><FontAwesome name="heart" color="#79869F" size={24} /></Text>
                    <Text style={style.userPostStatText}>{props.likes}</Text>
                </View>
                <View style={style.userPostStatButtonRight}>
                    <Text><FontAwesome name="comment" color="#79869F" size={24} /></Text>
                    <Text style={style.userPostStatText}>{props.comments}</Text>
                </View>
                <View style={style.userPostStatButtonRight}>
                    <Text><FontAwesome name="bookmark" color="#79869F" size={24} /></Text>
                    <Text style={style.userPostStatText}>{props.bookmarks}</Text>
                </View>
            </View>
        </View>
    );
};

UserPost.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    profileImage: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,
};

export default UserPost;
