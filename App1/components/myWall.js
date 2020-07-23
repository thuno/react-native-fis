import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';

const MyWall = ({navigation}) => {
  const [avaLink, avaLinkState] = useState(
    'https://i.pinimg.com/originals/7f/75/6b/7f756bcb3481db56650768cc5fc0cf50.jpg',
  );
  const [fontLink, fontLinkState] = useState(
    'https://ae01.alicdn.com/kf/HTB1Q2a.XxD1gK0jSZFsq6zldVXau.jpg',
  );

  const accessGalleryAva = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      avaLinkState(images[0].path);
    });
  };

  const accessGalleryFont = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      fontLinkState(images[0].path);
    });
  };

  const Screen = [
    {
      id: 1,
      title: 'Push notification',
      name: 'NotiScreen',
      icon: 'message-text-outline',
    },
    {
      id: 2,
      title: 'Pick Document',
      name: 'PicDoc',
      icon: 'file-document-outline',
    },
    {
      id: 3,
      title: 'View Location',
      name: 'Location',
      icon: 'map-marker-outline',
    },
    {
      id: 4,
      title: 'View Contacts',
      name: 'Contact',
      icon: 'contacts',
    },
    {
      id: 5,
      title: 'View SMS',
      name: 'SMS',
      icon: 'android-messages',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center',position: 'relative'}}>
      <View style={styles.fontImgBG}>
        <Image
          source={{uri: fontLink}}
          style={styles.fontImg}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.iconCameraFont}
          onPress={() => accessGalleryFont()}>
          <Icon name="camera-retro" size={30} style={{padding: 3}} />
        </TouchableOpacity>
      </View>
      <View style={styles.avaConatiner}>
        <Image
          source={{uri: avaLink}}
          style={styles.avaImg}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.iconCameraAva}
          onPress={() => accessGalleryAva()}>
          <Icon name="camera-retro" size={25} style={{padding: 3}} />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>Thư nô</Text>
      <View style={styles.addNews}>
        <Button
          icon="camera-outline"
          color="#4267B2"
          mode="contained"
          style={{width: '100%', flex: 1, marginHorizontal: 5}}
          labelStyle={{fontSize: 20}}>
          Thêm tin
        </Button>
        <Button
          color="#ddd"
          mode="contained"
          labelStyle={{fontSize: 15, marginHorizontal: 5}}>
          . . .
        </Button>
        </View>
      </View>
      <View style={{position: 'relative', marginTop: '-15%'}}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Screen}
        renderItem={({item}) => {
          return (
            <View style={styles.BtnFeature}>
              <Button
                mode="contained"
                icon={item.icon}
                labelStyle={{fontSize: 15}}
                onPress={() => {
                  navigation.navigate(item.name);
                }}
              >{item.title}</Button>
            </View>
          );
        }}
      /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fontImgBG: {
    margin: 5,
    borderRadius: 15,
    height: '40%',
    width: '100%',
  },
  fontImg: {
    borderRadius: 15,
    height: '100%',
    width: '100%',
  },
  avaConatiner: {
    margin: 5,
    borderRadius: 130,
    backgroundColor: '#fff',
    width: 150,
    height: 150,
    marginTop: '-15%',
  },
  avaImg: {
    margin: '5%',
    borderRadius: 100,
    width: '90%',
    height: '90%',
  },
  iconCameraFont: {
    backgroundColor: '#ddd',
    margin: 20,
    marginTop: '-15%',
    alignSelf: 'flex-end',
  },
  iconCameraAva: {
    backgroundColor: '#ddd',
    margin: 20,
    alignSelf: 'flex-end',
    marginTop: '-25%',
  },
  name: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  addNews: {
    flexDirection: 'row',
    margin: 5,
  },
  BtnFeature: {
    margin: 10,
  },
});

export default MyWall;
