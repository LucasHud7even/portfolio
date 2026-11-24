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
  SectionTitle,
} from '../components/UI';

import { COLORS } from '../constants/theme';

type Objective = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  text: string;
};

const objectives: Objective[] = [
  {
    icon: 'code-slash',
    title: 'Desenvolvimento de software',
    text: 'Aprimorar habilidades em programação e construção de aplicações.',
  },
  {
    icon: 'git-branch',
    title: 'Projetos práticos',
    text: 'Desenvolver projetos que contribuam para meu aprendizado.',
  },
  {
    icon: 'trending-up',
    title: 'Evolução contínua',
    text: 'Aprender novas ferramentas, tecnologias e boas práticas.',
  },
];

export default function Profissional() {
  return (
    <Page>
      <Heading
        title="Profissional"
        subtitle="Experiências, projetos e desenvolvimento profissional."
      />

      <Card>
        <View style={styles.iconContainer}>
          <Ionicons
            name="briefcase"
            size={28}
            color={COLORS.primary}
          />
        </View>

        <Text style={styles.title}>
          Em desenvolvimento
        </Text>

        <Text style={styles.text}>
          Estou construindo minha trajetória profissional
          na área de tecnologia, desenvolvendo projetos
          acadêmicos e pessoais para colocar em prática
          meus conhecimentos e ampliar minhas experiências.
        </Text>
      </Card>

      <SectionTitle>
        Objetivos profissionais
      </SectionTitle>

      {objectives.map((item, index) => (
        <Card key={index}>
          <View style={styles.row}>
            <Ionicons
              name={item.icon}
              size={24}
              color={COLORS.green}
            />

            <Text style={styles.title}>
              {item.title}
            </Text>
          </View>

          <Text style={styles.text}>
            {item.text}
          </Text>
        </Card>
      ))}

      <Text style={styles.footer}>
        Aberto a oportunidades de aprendizado e crescimento.
      </Text>
    </Page>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 58,
    height: 58,
    backgroundColor: COLORS.surface2,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  title: {
    color: COLORS.text,
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 10,
    flex: 1,
  },

  text: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 23,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  footer: {
    color: COLORS.primary,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 15,
  },
});