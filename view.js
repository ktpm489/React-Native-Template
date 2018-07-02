import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import CoreLayout from 'frontend/Container/CoreLayoutContainer'
import I18n from 'assets/Lang'
import styles from './styles'
import { getUserById } from 'frontend/Screen/ChatScreen/services'
import { keyExtractor } from 'common/globalFunction'
import FastImage from 'react-native-fast-image'
import images from 'assets/Image'
import HBInputError from 'frontend/Components/HBInput/HBInputError'
import { HBCOLOR } from 'common/globalStyles'

const dataChat = [
  {
    user_id: '5b35efab68c1793a9d35b773',
    type: 'message',
    message: `- Course roadmap and demo some amazing application
- Install requirement for setup and run react native
- Demo first page Hello world.`,
    createdAt: new Date()
  },
  {
    user_id: '5b35efab68c1793a9d35b773',
    type: 'message',
    message: 'Chat screen 2',
    createdAt: new Date()
  },
  {
    user_id: '5b35f02768c1793a9d35b774',
    type: 'message',
    message: 'Chat screen 3',
    createdAt: new Date()
  },
  {
    user_id: '5b35f02768c1793a9d35b774',
    type: 'message',
    message: `- Course roadmap and demo some amazing application
- Install requirement for .`,
    createdAt: new Date()
  },
  {
    user_id: '5b35efab68c1793a9d35b773',
    type: 'message',
    message: `- Course roadmap and demo some amazing application
- Install requirement for .`,
    createdAt: new Date()
  },
  {
    user_id: '5b35efab68c1793a9d35b773',
    type: 'message',
    message: `- Course roadmap and demo some amazing application
- Install requirement for .`,
    createdAt: new Date()
  },
  {
    user_id: '5b35efab68c1793a9d35b773',
    type: 'message',
    message: `- Course roadmap and demo some amazing application
- Install requirement for .`,
    createdAt: new Date()
  },
  {
    user_id: '5b35f02768c1793a9d35b774',
    type: 'message',
    message: `- Course roadmap and demo some amazing application
- Install requirement for .`,
    createdAt: new Date()
  }
]

const profilePage = (props) => {
  const { handleBackRoute, txtMessage, selectedUser, userListData, onChangeMessage } = props

  let userExistId
  const renderChat = ({ item, index }) => {
    let isUserChat = false
    let isExist = true
    let user = getUserById(userListData.userList, item.user_id)
    if (item.user_id === userListData.userData._id) {
      isUserChat = true
      userExistId = ''
      user = userListData.userData
    }
    if (user._id === userExistId) {
      isExist = false
    }
    userExistId = user._id

    return (
      <View style={[styles.chatListContainer,
        isUserChat && styles.userChatContainer]}>
        {
          (!isUserChat && isExist)
            ? user.image
              ? <FastImage style={styles.imgUserPicture}
                source={{
                  uri: user.image,
                  priority: FastImage.priority.normal
                }}
                resizeMode={FastImage.resizeMode.cover} />
              : <View style={[styles.imgUserPicture, styles.bgNull]}>
                <Image source={images.userDefault} style={styles.imgUserPictureNull} />
              </View>
            : <View style={styles.imgUserPictureNull}/>
        }

        <View style={styles.rightView}>
          {
            (!isUserChat && isExist) &&
            <Text style={styles.textUserName}>
              {user.username}
            </Text>
          }
          {
            isUserChat
              ? <View style={styles.chatContainerRight}>
                <Text>{item.message}</Text>
              </View>
              : <View style={styles.chatContainer}>
                <Text style={styles.textMessage}>{item.message}</Text>
              </View>
          }
        </View>

      </View>

    )
  }

  return (
    <CoreLayout title={selectedUser.username} leftAction={handleBackRoute}>
      <View style={styles.headerPayment}>
        <TouchableOpacity style={styles.btnHeader}>
          <Text>{I18n.t('ChatScreen.pay')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnHeader}>
          <Text>{I18n.t('ChatScreen.request')}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataChat}
        renderItem={renderChat}
        extraData={props}
        contentContainerStyle={styles.contentStyle}
        keyExtractor={keyExtractor} />

      <View style={styles.footerChat}>
        <HBInputError
          value={txtMessage}
          txtHolder={'Message...'}
          containerStyle={styles.inputContainer}
          placeHolderTextStyle={styles.placeHolderTextStyle}
          colorActive={HBCOLOR.ACTIVE_INPUT}
          onChangeText={onChangeMessage}
        />
        <TouchableOpacity style={styles.btnSend}>
          <Text>{I18n.t('Initial.Send')}</Text>
        </TouchableOpacity>
      </View>

    </CoreLayout>

  )
}

export default profilePage
