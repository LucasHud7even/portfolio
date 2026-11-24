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

const subjects: string[] = [
  'Programação e algoritmos',
  'Programação orientada a objetos',
  'Estruturas de dados',
  'Desenvolvimento Web',
  'Desenvolvimento backend',
  'Engenharia de software',
  'Testes de software',
  'Sistemas digitais',
];

export default function Academica() {
  return (
    <Page>
      <Heading
        title="Acadêmica"
        subtitle="Minha trajetória educacional e formação."
      />

      <Card>
        <View style={styles.row}>
          <Ionicons
            name="school"
            size={26}
            color={COLORS.primary}
          />

          <View style={styles.info}>
            <Text style={styles.title}>
              Ciência da Computação
            </Text>

            <Text style={styles.subtitle}>
              Graduação • Em andamento
            </Text>
          </View>
        </View>

        <View style={styles.timeline}>
          <View style={styles.timelineDot} />

          <Text style={styles.text}>
            Atualmente cursando Ciência da Computação,
            desenvolvendo conhecimentos em programação,
            estruturas de dados, desenvolvimento de
            software e fundamentos da computação.
          </Text>
        </View>

        <View style={styles.line} />

        <Text style={styles.label}>
          STATUS
        </Text>

        <Text style={styles.status}>
          Graduação em andamento
        </Text>
      </Card>

      <SectionTitle>
        Áreas de estudo
      </SectionTitle>

      {subjects.map((item, index) => (
        <View key={index} style={styles.item}>
          <Ionicons
            name="checkmark-circle-outline"
            size={20}
            color={COLORS.green}
          />

          <Text style={styles.itemText}>
            {item}
          </Text>
        </View>
      ))}
    </Page>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  info: {
    marginLeft: 15,
    flex: 1,
  },

  title: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: '800',
  },

  subtitle: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 5,
  },

  timeline: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 24,
  },

  timelineDot: {
    backgroundColor: COLORS.primary,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 7,
    marginRight: 12,
  },

  text: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 23,
    flex: 1,
  },

  line: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 20,
  },

  label: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: '800',
    marginBottom: 8,
  },

  status: {
    color: COLORS.green,
    fontWeight: '700',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    marginBottom: 10,
  },

  itemText: {
    color: COLORS.text,
    marginLeft: 12,
    fontSize: 14,
  },
});