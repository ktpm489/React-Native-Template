import { StyleSheet } from 'react-native'
import { width, height, scale } from 'common/globalStyles'

const styles = StyleSheet.create({
  headerPayment: {
    paddingVertical: height(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width(5)
  },
  btnHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width(2),
    borderWidth: scale(1),
    borderColor: 'white',
    width: width(43),
    paddingVertical: height(0.8)
  },
  chatContainer: {
    paddingVertical: height(1),
    paddingHorizontal: width(3),
    backgroundColor: 'white',
    borderRadius: width(2.5),
    maxWidth: width(80)
  },
  chatContainerRight: {
    paddingVertical: height(1),
    paddingHorizontal: width(3),
    backgroundColor: '#1682F3',
    borderRadius: width(2.5),
    maxWidth: width(80)
  },
  chatListContainer: {
    flexDirection: 'row',
    marginTop: height(2),
    justifyContent: 'space-between',
    alignSelf: 'flex-start'
  },
  userChatContainer: {
    marginTop: height(1),
    alignSelf: 'flex-end'
  },

  textMessage: {
    color: 'black'
  },
  imgUserPicture: {
    height: height(6),
    width: height(6),
    borderRadius: height(2),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgUserPictureNull: {
    height: height(6),
    width: height(6)
  },
  bgNull: {
    backgroundColor: '#414F60'
  },
  textUserName: {
    color: '#939599',
    marginBottom: height(1)
  },
  rightView: {
    marginLeft: width(3)
  },
  contentStyle: {
    marginTop: height(2),
    paddingHorizontal: width(5),
    paddingBottom: height(4)
  },
  inputContainer: {
    height: height(6),
    width: width(70),
    borderColor: '#45576C',
    borderWidth: scale(1),
    marginBottom: height(2),
    alignItems: 'center'
  },
  placeHolderTextStyle: {
    paddingLeft: width(12)
  },
  btnSend: {
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: width(3),
    height: height(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width(2)
  },
  footerChat: {
    marginHorizontal: width(5),
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})
export default styles
