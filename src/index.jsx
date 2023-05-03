import React, { useState } from 'react';
import { render, Text, Box, useInput, useApp } from 'ink';

function ClearTerminalBug() {
  const lines = [];

  for (let i = 1; i <= 20; i++) {
    lines.push(`line ${i}`);
  }

  const [done, setDone] = useState(false)
  const {exit} = useApp()

  useInput((_input, key) => {
    if (key.return) {
      setDone(true)
      exit()
    }
  });

  return done ? <Text>done</Text> : <Box flexDirection="column">
    {lines.map((line, index) => (
      <Text key={index}>{line}</Text>
    ))}
  </Box>
}

render(
  <ClearTerminalBug />
)
