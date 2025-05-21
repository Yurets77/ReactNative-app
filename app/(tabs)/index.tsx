import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


const newsData = [
  {
    title: 'Таксистов-эмигрантов депортировали на родину.',
    image: 'https://avatars.mds.yandex.net/i?id=011eb0a25585dcf7174ea065b363c69b_l-12423448-images-thumbs&n=13',
  },
  {
    title: 'Неудачный дрифт на МКАДе.',
    image: 'https://avatars.mds.yandex.net/i?id=9b1c0f30f712f972a981d049427a2c67_l-4902992-images-thumbs&n=13',
  },
  {
    title: 'Юный хасанатор на отцовской машине влетел в пост ДПС.',
    image: 'https://auto.vercity.ru/img/news/old/33216.jpg',
  },
];

const servicesData = [
  'Запись к врачу',
  'Оформление паспорта РФ',
  'Регистрация по месту жительства',
  'Получение загранпаспорта',
  'Запись ребёнка в детский сад',
  'Штрафы ГИБДД',
  'Передача показаний счётчиков',
  'Подача заявления на брак',
];

export default function App() {
const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Госуслуги</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Добро пожаловать!</Text>
            <Text>Ваши доступные услуги:</Text>
          </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/service')}
      >
        <Text style={styles.buttonText}>Посмотреть услуги</Text>
      </TouchableOpacity>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Новости</Text>
            {newsData.map((info, index) => (
              <View key={index} style={styles.newsItem}>
                <Image source={{ uri: info.image }} style={styles.newsImage} />
                <Text style={styles.newsText}>{info.title}</Text>
              </View>
            ))}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Популярные услуги</Text>
            {servicesData.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={styles.serviceItem}
                onPress={() => alert(`Переход к услуге: ${service}`)}
              >
              <Text style={styles.serviceText}>• {service}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const PRIMARY_COLOR = '#005BAC';
const SECONDARY_COLOR = '#D52B1E';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appBar: {
    backgroundColor: PRIMARY_COLOR,
    paddingTop: 50,
    paddingBottom: 15,
    alignItems: 'center',
  },
  appBarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  // под кнопку
  button: {
    backgroundColor: SECONDARY_COLOR,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

  newsItem: {
    marginBottom: 16,
  },
  newsImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  newsText: {
    fontSize: 16,
  },
  // блок услуг
  serviceItem: {
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 16,
  },

});
