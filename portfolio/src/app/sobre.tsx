import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Page,
  Heading,
  Card,
  Chip,
  SectionTitle,
} from '../components/UI';

import { COLORS } from '../constants/theme';

const technologies: string[] = [
  'React Native',
  'Expo',
  'TypeScript',
  'Expo Router',
  'React Hooks',
  'StyleSheet',
  'Ionicons',
  'ScrollView',
  'View',
  'Text',
  'Pressable',
  'useState',
];

export default function Sobre() {
  return (
    <Page>
      <Heading
        title="Sobre mim"
        subtitle="Conheça um pouco do meu perfil e das tecnologias utilizadas."
      />

      <Card>
        <Text style={styles.label}>
          PERFIL
        </Text>

        <Text style={styles.text}>
          Sou estudante de Ciência da Computação e tenho
          interesse em desenvolvimento de software.
          Busco aprender novas tecnologias, desenvolver
          projetos práticos e aprimorar minhas
          habilidades técnicas.
        </Text>
      </Card>

      <SectionTitle>
        Stack deste aplicativo
      </SectionTitle>

      <Card>
        <Text style={styles.text}>
          Este aplicativo foi desenvolvido com React Native
          e Expo, utilizando TypeScript, Expo Router para
          navegação entre telas, componentes nativos e
          estilos definidos através do StyleSheet.
        </Text>
      </Card>

      <Text style={styles.label}>
        TECNOLOGIAS E MÓDULOS
      </Text>

      <View style={styles.chips}>
        {technologies.map((tech) => (
          <Chip key={tech} label={tech} />
        ))}
      </View>

      <SectionTitle>
        Conhecimentos
      </SectionTitle>

      <Card>
        {[
          ['Java', 'Programação orientada a objetos e fundamentos.'],
          ['JavaScript', 'Lógica e desenvolvimento de aplicações.'],
          ['React / Next.js', 'Desenvolvimento de interfaces Web.'],
          ['Spring Boot', 'Backend e desenvolvimento de APIs.'],
          ['React Native / Expo', 'Aplicações mobile.'],
        ].map(([title, description], index) => (
          <View key={title}>
            <Text style={styles.skillTitle}>
              {title}
            </Text>

            <Text style={styles.text}>
              {description}
            </Text>

            {index !== 4 && (
              <View style={styles.line} />
            )}
          </View>
        ))}
      </Card>
    </Page>
  );
}

const styles = StyleSheet.create({
  label: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.3,
    marginBottom: 14,
  },

  text: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 23,
  },

  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },

  skillTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
  },

  line: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 16,
  },
});