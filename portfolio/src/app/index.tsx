import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Page, Card, Chip } from '../components/UI';
import { COLORS } from '../constants/theme';

export default function Home() {
  return (
    <Page>
      <View style={styles.top}>
        <View style={styles.badge}>
          <View style={styles.dot} />

          <Text style={styles.badgeText}>
            PORTFÓLIO • 2026
          </Text>
        </View>

        <Text style={styles.greeting}>
          Olá, eu sou
        </Text>

        <Text style={styles.name}>
          Lucas.
        </Text>

        <Text style={styles.description}>
          Estudante de Ciência da Computação apaixonado por
          tecnologia, programação e desenvolvimento de soluções.
        </Text>

        <View style={styles.tags}>
          <Chip label="Desenvolvedor em formação" />

          <Chip
            label="Ciência da Computação"
            color={COLORS.purple}
          />
        </View>
      </View>

      <Card>
        <Text style={styles.label}>
          SOBRE MINHA JORNADA
        </Text>

        <Text style={styles.cardText}>
          Estou construindo minha jornada na programação,
          explorando tecnologias, desenvolvendo projetos e
          ampliando meus conhecimentos na área de
          desenvolvimento de software.
        </Text>
      </Card>

      <Text style={styles.section}>
        O que estou explorando
      </Text>

      <View style={styles.highlight}>
        <Ionicons
          name="code-slash"
          size={24}
          color={COLORS.primary}
        />

        <View style={styles.highlightText}>
          <Text style={styles.highlightTitle}>
            Desenvolvimento
          </Text>

          <Text style={styles.highlightSub}>
            Java, JavaScript e desenvolvimento Web
          </Text>
        </View>
      </View>

      <View style={styles.highlight}>
        <Ionicons
          name="phone-portrait-outline"
          size={24}
          color={COLORS.green}
        />

        <View style={styles.highlightText}>
          <Text style={styles.highlightTitle}>
            Aplicativos
          </Text>

          <Text style={styles.highlightSub}>
            React Native e Expo
          </Text>
        </View>
      </View>

      <View style={styles.highlight}>
        <Ionicons
          name="server-outline"
          size={24}
          color={COLORS.purple}
        />

        <View style={styles.highlightText}>
          <Text style={styles.highlightTitle}>
            Backend
          </Text>

          <Text style={styles.highlightSub}>
            Spring Boot e banco de dados
          </Text>
        </View>
      </View>

      <Text style={styles.footer}>
        Desenvolvido com React Native + Expo
      </Text>
    </Page>
  );
}

const styles = StyleSheet.create({
  top: {
    marginBottom: 24,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    alignSelf: 'flex-start',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  dot: {
    width: 7,
    height: 7,
    backgroundColor: COLORS.green,
    borderRadius: 4,
    marginRight: 8,
  },

  badgeText: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: '700',
  },

  greeting: {
    color: COLORS.muted,
    fontSize: 19,
  },

  name: {
    color: COLORS.text,
    fontSize: 46,
    fontWeight: '900',
    marginVertical: 5,
  },

  description: {
    color: COLORS.muted,
    fontSize: 15,
    lineHeight: 24,
    marginTop: 12,
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },

  label: {
    color: COLORS.primary,
    fontWeight: '800',
    fontSize: 11,
    letterSpacing: 1.5,
    marginBottom: 12,
  },

  cardText: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 24,
  },

  section: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 16,
  },

  highlight: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    padding: 17,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12,
  },

  highlightText: {
    marginLeft: 15,
    flex: 1,
  },

  highlightTitle: {
    color: COLORS.text,
    fontWeight: '700',
    fontSize: 15,
  },

  highlightSub: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 5,
  },

  footer: {
    color: COLORS.muted,
    textAlign: 'center',
    fontSize: 11,
    marginTop: 24,
  },
});