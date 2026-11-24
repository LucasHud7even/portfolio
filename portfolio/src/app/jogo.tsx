import React, { useState } from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

import {
  Page,
  Heading,
  Card,
} from '../components/UI';

import { COLORS } from '../constants/theme';

const WORDS: string[] = [
  'JAVASCRIPT',
  'COMPUTADOR',
  'ALGORITMO',
  'PROGRAMA',
  'DESENVOLVEDOR',
  'INTERNET',
  'APLICATIVO',
  'ESTRUTURA',
  'INTERFACE',
  'TECNOLOGIA',
  'DATABASE',
  'ANDROID',
  'SOFTWARE',
  'HARDWARE',
  'PROGRAMACAO',
  'ROTEADOR',
  'TECLADO',
  'MEMORIA',
  'SERVIDOR',
  'PROCESSADOR',
  'COMPILADOR',
  'REACT',
  'SPRING',
  'EXPO',
  'MOBILE',
  'PYTHON',
  'JAVA',
  'CODIGO',
  'VARIAVEL',
  'SISTEMA',
];

const LETTERS: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const DRAWINGS: string[] = [
  '',
  'O',
  'O\n|',
  'O\n/|',
  'O\n/|\\',
  'O\n/|\\\n/',
  'O\n/|\\\n/ \\',
];

export default function Jogo() {
  const [word, setWord] = useState<string>(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );

  const [guessed, setGuessed] = useState<string[]>([]);
  const [errors, setErrors] = useState<number>(0);

  const maxErrors = 6;

  const won = word.split('').every((letter) =>
    guessed.includes(letter)
  );

  const lost = errors >= maxErrors;

  const finished = won || lost;

  function guess(letter: string) {
    if (guessed.includes(letter) || finished) {
      return;
    }

    setGuessed((previous) => [...previous, letter]);

    if (!word.includes(letter)) {
      setErrors((previous) => previous + 1);
    }
  }

  function restart() {
    let newWord = word;

    while (newWord === word) {
      newWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    }

    setWord(newWord);
    setGuessed([]);
    setErrors(0);
  }

  return (
    <Page>
      <Heading
        title="Jogo da Forca"
        subtitle="Adivinhe a palavra antes que a forca seja completada."
      />

      <Card>
        <View style={styles.gameHeader}>
          <Text style={styles.gameLabel}>
            TENTATIVAS
          </Text>

          <Text style={styles.counter}>
            {errors}/{maxErrors}
          </Text>
        </View>

        <View style={styles.drawingContainer}>
          <Text style={styles.drawing}>
            {DRAWINGS[errors]}
          </Text>
        </View>

        <View style={styles.wordContainer}>
          {word.split('').map((letter, index) => (
            <View key={index} style={styles.letterBox}>
              <Text style={styles.letter}>
                {guessed.includes(letter) || lost ? letter : ''}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.status}>
          {won
            ? '🎉 Você venceu!'
            : lost
              ? '💀 Você perdeu!'
              : 'Descubra a palavra!'}
        </Text>

        {finished && (
          <Text style={styles.reveal}>
            Palavra: {word}
          </Text>
        )}
      </Card>

      <Text style={styles.keyboardTitle}>
        TECLADO
      </Text>

      <View style={styles.keyboard}>
        {LETTERS.map((letter) => {
          const used = guessed.includes(letter);
          const correct = word.includes(letter);

          return (
            <Pressable
              key={letter}
              disabled={used || finished}
              onPress={() => guess(letter)}
              style={({ pressed }) => [
                styles.key,
                used && correct && styles.correctKey,
                used && !correct && styles.wrongKey,
                pressed && !used && styles.pressedKey,
              ]}
            >
              <Text
                style={[
                  styles.keyText,
                  used && styles.usedText,
                ]}
              >
                {letter}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Card>
        <Text style={styles.gameLabel}>
          LETRAS UTILIZADAS
        </Text>

        <Text style={styles.usedLetters}>
          {guessed.length > 0
            ? guessed.join(' • ')
            : 'Nenhuma letra utilizada'}
        </Text>
      </Card>

      <Pressable
        onPress={restart}
        style={({ pressed }) => [
          styles.restart,
          pressed && { opacity: 0.8 },
        ]}
      >
        <Text style={styles.restartText}>
          ↻  Jogar novamente
        </Text>
      </Pressable>
    </Page>
  );
}

const styles = StyleSheet.create({
  gameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  gameLabel: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
  },

  counter: {
    color: COLORS.primary,
    fontWeight: '900',
    fontSize: 18,
  },

  drawingContainer: {
    minHeight: 150,
    backgroundColor: COLORS.background,
    borderRadius: 16,
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  drawing: {
    color: COLORS.primary,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 40,
  },

  wordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 24,
  },

  letterBox: {
    minWidth: 24,
    height: 40,
    borderBottomWidth: 3,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  letter: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '800',
  },

  status: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 24,
  },

  reveal: {
    color: COLORS.green,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 12,
  },

  keyboardTitle: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 15,
  },

  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 7,
    marginBottom: 24,
  },

  key: {
    width: '10.5%',
    aspectRatio: 1,
    backgroundColor: COLORS.surface2,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  keyText: {
    color: COLORS.text,
    fontWeight: '800',
    fontSize: 14,
  },

  usedText: {
    opacity: 0.4,
  },

  correctKey: {
    backgroundColor: '#064E3B',
    borderColor: COLORS.green,
  },

  wrongKey: {
    backgroundColor: '#451A1A',
    borderColor: COLORS.red,
  },

  pressedKey: {
    backgroundColor: COLORS.primaryDark,
  },

  usedLetters: {
    color: COLORS.muted,
    marginTop: 12,
    fontSize: 13,
    lineHeight: 22,
  },

  restart: {
    backgroundColor: COLORS.primaryDark,
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 25,
  },

  restartText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 15,
  },
});