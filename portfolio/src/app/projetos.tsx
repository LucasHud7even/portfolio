import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import {
  Page,
  Heading,
  Card,
  Chip,
} from '../components/UI';

import { COLORS } from '../constants/theme';

type Project = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: 'Portfólio Mobile',
    icon: 'phone-portrait',
    color: COLORS.primary,
    description:
      'Aplicativo de currículo e portfólio desenvolvido em React Native, utilizando Expo e Expo Router.',
    tags: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    title: 'Aplicação REST',
    icon: 'server',
    color: COLORS.green,
    description:
      'Projeto de exploração de backend, criação de endpoints REST e integração com aplicações.',
    tags: ['Java', 'Spring Boot', 'REST'],
  },
  {
    title: 'Projeto Web',
    icon: 'globe-outline',
    color: COLORS.purple,
    description:
      'Aplicação Web desenvolvida com componentes React e estrutura Next.js.',
    tags: ['React', 'Next.js', 'CSS'],
  },
  {
    title: 'Jogo da Forca',
    icon: 'game-controller',
    color: COLORS.orange,
    description:
      'Jogo de adivinhação de palavras com lógica de programação e interface interativa.',
    tags: ['TypeScript', 'Lógica', 'React Native'],
  },
];

export default function Projetos() {
  return (
    <Page>
      <Heading
        title="Projetos"
        subtitle="Projetos acadêmicos, pessoais e experimentos."
      />

      {projects.map((project, index) => (
        <Card key={index}>
          <View style={styles.top}>
            <View style={styles.icon}>
              <Ionicons
                name={project.icon}
                size={26}
                color={project.color}
              />
            </View>

            <Text style={styles.number}>
              PROJETO {String(index + 1).padStart(2, '0')}
            </Text>
          </View>

          <Text style={styles.title}>
            {project.title}
          </Text>

          <Text style={styles.description}>
            {project.description}
          </Text>

          <View style={styles.tags}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                color={project.color}
              />
            ))}
          </View>
        </Card>
      ))}
    </Page>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  icon: {
    width: 54,
    height: 54,
    backgroundColor: COLORS.surface2,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  number: {
    color: COLORS.muted,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },

  title: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 12,
  },

  description: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 23,
    marginBottom: 18,
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});