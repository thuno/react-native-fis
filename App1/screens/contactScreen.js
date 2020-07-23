import React, {useState} from 'react';
import {Text, View, PermissionsAndroid, Button, TextInput} from 'react-native';
import Contacts from 'react-native-contacts';

export default function contactScreen() {
  const [inforContact, setInforContact] = useState();
  const [filter, setFilter] = useState('');

  const getContact = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(() => {
      Contacts.getAll((err, contacts) => {
        if (err === 'denied') {
          // error
        } else {
          setInforContact(contacts);
        }
      });
    });
    console.log(inforContact);
  };

  const filterHandler = () => {
    setInforContact(inforContact.filter((e) => e.displayName.includes(filter)))
    console.log(1)
  };

  return (
    <View>
      <Button title="Contact" onPress={getContact} />
      <TextInput value={filter} onChangeText={(text) => setFilter(text)} />
      <Button title="Search" onPress={filterHandler} />
      {inforContact
        ? inforContact.map((item, index) => {
            return (
              <View key={index}>
                <Text>
                  {item.displayName}:
                  {item.phoneNumbers.length === 0
                    ? 'null'
                    : item.phoneNumbers[0].number}
                </Text>
              </View>
            );
          })
        : null}
    </View>
  );
}
