"use client";

import { ActionIcon, Button, Group, rem, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function IndexPage() {

  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark');

  return (
    <Group pt={50} justify="center" align="center" style={{ height: '100vh', display: "flex", flexDirection: "column" }}>
      <Button /* color="myColor"  */ size="xl">Welcome to Mantine!</Button>
      <Button mt={10} leftSection={computedColorScheme === 'dark' ? <IconSun style={{ width: rem(22), height: rem(22) }} stroke={1.5} /> : <IconMoon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />} size="md" onClick={() => {
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
      }}>{computedColorScheme === 'dark' ? `Light` : `Dark`} Theme</Button>
      <ActionIcon
        mt={10}
        onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        {
          computedColorScheme === 'dark' ?
            <IconSun stroke={1.5} style={{ width: rem(22), height: rem(22) }} /> :
            <IconMoon stroke={1.5} style={{ width: rem(22), height: rem(22) }} />
        }
      </ActionIcon>
    </Group>
  );
}
