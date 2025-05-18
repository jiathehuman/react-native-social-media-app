import React, {useState, useEffect} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, FlatList} from 'react-native';
import Title from "./components/Title/Title";
import {FontAwesome} from "@expo/vector-icons"
import globalStyle from "./assets/styles/globalStyle";
import UserStory from "./components/UserStory/UserStory";
import UserPost from "./components/UserPost/UserPost";

export default function App() {
    const userStories = [
        {
            firstName: 'Jeremy',
            id: 1,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Jolene',
            id: 2,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Job',
            id: 3,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Jeremiah',
            id: 4,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Jacob',
            id: 5,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Jason',
            id: 6,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Julia',
            id: 7,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Jack',
            id: 8,
            profileImage: require('./assets/images/default_profile.png'),
        },
        {
            firstName: 'Nimo',
            id: 9,
            profileImage: require('./assets/images/default_profile.png'),
        },
    ]

    const userPosts = [
        {
            firstName: 'Allison',
            lastName: 'Becker',
            location: 'Boston, MA',
            likes: 1201,
            comments: 24,
            bookmarks: 55,
            id: 1,
            image: require('./assets/images/default_post.png'),
            profileImage: require('./assets/images/default_profile.png'),


        },
        {
            firstName: 'Jennifer',
            lastName: 'Wiklson',
            location: 'Worcester, MA',
            likes: 5,
            comments: 1,
            bookmarks: 3,
            id: 2,
            image: require('./assets/images/default_post.png'),
            profileImage: require('./assets/images/default_profile.png'),

        },
        {
            firstName: 'Adam',
            lastName: 'Spera',
            location: 'Worcester, MA',
            likes: 555,
            comments: 22,
            bookmarks: 423,
            id: 3,
            image: require('./assets/images/default_post.png'),
            profileImage: require('./assets/images/default_profile.png'),

        },
        {
            firstName: 'Nate',
            lastName: 'Spiera',
            location: 'New York, NY',
            likes: 11,
            comments: 22,
            bookmarks:3,
            id: 4,
            image: require('./assets/images/default_post.png'),
            profileImage: require('./assets/images/default_profile.png'),

        },
        {
            firstName: 'Jason',
            lastName: 'Amulet',
            location: 'New York, NY',
            likes: 1213,
            comments: 223,
            bookmarks: 45,
            id: 5,
            image: require('./assets/images/default_post.png'),
            profileImage: require('./assets/images/default_profile.png'),

        }
    ]

    const userStoriesPageSize = 4;
    const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1)
    const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([])
    const [isLoadingUserStories, setIsLoadingUserStories] = useState(false)

    const userPostsPageSize = 2;
    const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1)
    const [userPostsRenderedData, setUserPostsRenderedData] = useState([])
    const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false)

    const pagination = (database, currentPage, pageSize) => {
        const startIndex = (currentPage - 1) * pageSize // start 0
        const endIndex = startIndex + pageSize;
        if(startIndex >=database.length){
            return [];
        }
        return database.slice(startIndex, endIndex);
    }
    useEffect(() => {
        setIsLoadingUserStories(true);
        const getInitialData = pagination(userStories, 1, userStoriesPageSize);
        setUserStoriesRenderedData(getInitialData);
        setIsLoadingUserStories(false);

        setIsLoadingUserPosts(true);
        const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
        setUserPostsRenderedData(getInitialDataPosts);
        setIsLoadingUserPosts(false);

    },[]);
  return (
    <SafeAreaView>

            <View style={globalStyle.userPostContainer}>
                <FlatList
                    ListHeaderComponent={
                    <>
                        <View style={globalStyle.header}>
                            <Title title={"Let's Explore"}/>
                            <TouchableOpacity style={globalStyle.messageIcon}>
                                <FontAwesome name="envelope" size={20} color={"#898DAE"}/>
                                <View style={globalStyle.messageNumberContainer}>
                                    <Text style={globalStyle.messageNumber}>2</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={globalStyle.userStoryContainer}>
                            <FlatList
                                onEndReachedThreshold={0.5}
                                onEndReached={()=>{
                                    if(isLoadingUserStories) return;
                                    setIsLoadingUserStories(true);
                                    const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize);
                                    if(contentToAppend.length > 0){
                                        setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                                        setUserStoriesRenderedData(prev=>[...prev, ...contentToAppend]);
                                    }
                                    setIsLoadingUserStories(false);
                                }}
                                data={userStoriesRenderedData}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal // if you're showing stories like Instagram
                                renderItem={({ item }) => (
                                    <UserStory
                                        firstName={item.firstName}
                                        profileImage={item.profileImage}
                                    />
                                )}
                            />
                        </View>
                    </>
                    }
                    onEndReachedThreshold={0.5}
                    onEndReached={()=>{
                        console.log('We have reached the end of posts')
                        if(isLoadingUserPosts) return;
                        setIsLoadingUserPosts(true);
                        const contentToAppend = pagination(userPosts, userPostsCurrentPage + 1, userPostsPageSize);
                        if(contentToAppend.length > 0){
                            setUserPostsCurrentPage(userPostsCurrentPage + 1);
                            setUserPostsRenderedData(prev=>[...prev, ...contentToAppend]);
                        }
                        setIsLoadingUserPosts(false);
                    }}
                    showsVerticalScrollIndicator={false}
                    data={userPostsRenderedData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        (
                        <UserPost
                            firstName={item.firstName}
                            lastName={item.lastName}
                            likes={item.likes}
                            comments={item.comments}
                            bookmarks={item.bookmarks}
                            image={item.image}
                            profileImage={item.profileImage}
                            location={item.location}
                        />
                    )
                }
                />
            </View>

    </SafeAreaView>
  );
}


