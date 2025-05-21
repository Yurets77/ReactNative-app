import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

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

const Service = () => {
    return (
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
    
    
    
    )
}

export default Service;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  serviceItem: {
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 16,
  },

});