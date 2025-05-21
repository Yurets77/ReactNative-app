import React from 'react';
import { TextStyle, StyleProp } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export type IconLibrary = 'material' | 'ion';

type IconProps = {
  name: string;
  size?: number;
  color: string;
  style?: StyleProp<TextStyle>;
  library?: IconLibrary; // по умолчанию material
};

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  library = 'material',
}: IconProps) {
  if (library === 'ion') {
    return <Ionicons name={name as any} size={size} color={color} style={style} />;
  }
  return <MaterialIcons name={name as any} size={size} color={color} style={style} />;
}
