import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const PickDocScreen = () => {
  const [document, setDocument] = useState();

  const pickFile = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      for (const res of results) {
        setDocument(res.uri);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  return (
    <View style={{marginTop: 20}}>
      <Button title="Pick file" onPress={pickFile} />
      <Text>{document}</Text>
    </View>
  );
};

export default PickDocScreen;
