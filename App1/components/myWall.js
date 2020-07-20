import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';

const MyWall = () => {
  const [avaLink, avaLinkState] = useState(require('./image/castle.jpg'));
  const [fontLink, fontLinkState] = useState();

  const accessGallery = () => {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images)
      console.log(images[0].path);
      avaLinkState({avaLink: images[0].path});
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.fontImgBG}>
        <Image
          source={{uri: 'https://ae01.alicdn.com/kf/HTB1Q2a.XxD1gK0jSZFsq6zldVXau.jpg'}}
          style={styles.fontImg}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.iconCameraFont}>
          <Icon name="camera" size={30} style={{padding: 3}} />
        </TouchableOpacity>
      </View>
      <View style={styles.avaConatiner}>
        <Image source={{uri: avaLink.avaLink}} style={styles.avaImg} resizeMode='cover' />
        <TouchableOpacity style={styles.iconCameraAva} onPress={() => accessGallery()}>
          <Icon name="camera" size={25} style={{padding: 3}} />
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
      <View style={styles.infor}>
        <View style={styles.eachInfo}>
          <Icon name="phone" size={20} style={styles.iconInfor} />
          <Text style={styles.textInfor}>19004766</Text>
        </View>
        <View style={styles.eachInfo}>
          <Icon name="address-book" size={20} style={styles.iconInfor} />
          <Text style={styles.textInfor}>63 Trần Quốc Vượng, Cầu Giấy, HN</Text>
        </View>
        <View style={styles.eachInfo}>
          <Icon name="graduation-cap" size={20} style={styles.iconInfor} />
          <Text style={styles.textInfor}>Đã học tại THPT Trần Nguyên Hãn</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 3,
  },
  fontImgBG: {
    margin: 5,
    borderRadius: 15,
    height: '30%',
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
  infor: {
    borderTopWidth: 0.5,
    margin: 10,
    width: '100%',
    padding: 5,
  },
  eachInfo: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#ddd',
    alignItems: 'center',
    padding: 5,
  },
  iconInfor: {
    margin: 10,
  },
  textInfor: {
    flex: 1,
    fontSize: 20,
  },
});

export default MyWall;
