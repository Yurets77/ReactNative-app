import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Explore = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle-outline" size={100} color="#888" />
        <TouchableOpacity>
          <Text style={styles.addPhotoText}>Добавить фото</Text>
        </TouchableOpacity>
        <Text style={styles.name}>Пчельников Юрий Александрович</Text>
        <View style={styles.verifiedContainer}>
          <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
          <Text style={styles.verifiedText}>подтверждённая учётная запись</Text>
        </View>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>Электронная почта</Text>
        <View style={styles.infoRow}>
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
          <Text style={styles.infoText}>yuriypochtamailru@mail.ru</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>изменить</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>Номер телефона</Text>
        <View style={styles.infoRow}>
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
          <Text style={styles.infoText}>+7 985 906-36-73</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>изменить</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>Город</Text>
        <View style={styles.infoRow}>
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
          <Text style={styles.infoText}>Москва</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>изменить</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>Дата рождения</Text>
        <View style={styles.infoRow}>
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
          <Text style={styles.infoText}>24 июля 2006 г.</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>изменить</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.passwordButton}>
        <Text style={styles.passwordButtonText}>Сменить пароль</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  addPhotoText: {
    color: '#3399FF',
    marginTop: 8,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
  },
  verifiedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    backgroundColor: '#222',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  verifiedText: {
    color: '#ccc',
    marginLeft: 6,
    fontSize: 12,
  },
  infoBlock: {
    backgroundColor: '#1c1c1c',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    color: '#888',
    marginBottom: 8,
    fontSize: 14,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    color: '#fff',
    marginLeft: 10,
    flex: 1,
  },
  editText: {
    color: '#3399FF',
  },
  passwordButton: {
    alignItems: 'center',
    marginTop: 30,
  },
  passwordButtonText: {
    color: '#3399FF',
    fontSize: 16,
  },
});
