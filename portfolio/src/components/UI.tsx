import React, { ReactNode } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { COLORS } from '../constants/theme';

interface PageProps {
  children: ReactNode;
}

interface HeadingProps {
  title: string;
  subtitle?: string;
}

interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
}

interface ChipProps {
  label: string;
  color?: string;
}

interface SectionTitleProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <View style={styles.heading}>
      <Text style={styles.title}>{title}</Text>

      {subtitle ? (
        <Text style={styles.subtitle}>{subtitle}</Text>
      ) : null}
    </View>
  );
}

export function Card({ children, style }: CardProps) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

export function Chip({
  label,
  color = COLORS.primary,
}: ChipProps) {
  return (
    <View style={[styles.chip, { borderColor: `${color}55` }]}>
      <Text style={[styles.chipText, { color }]}>
        {label}
      </Text>
    </View>
  );
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Text style={styles.sectionTitle}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: 22,
    paddingTop: 58,
    paddingBottom: 40,
  },

  heading: {
    marginBottom: 24,
  },

  title: {
    color: COLORS.text,
    fontSize: 29,
    fontWeight: '800',
    marginBottom: 8,
  },

  subtitle: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 22,
  },

  card: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },

  chip: {
    backgroundColor: COLORS.surface2,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  chipText: {
    fontWeight: '600',
    fontSize: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 14,
  },
});