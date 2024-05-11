"use client";

import { ActionIcon, Button, Group, rem, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconArrowRight, IconMoon, IconSun } from "@tabler/icons-react";
import { useStore } from "../store";
import Link from "next/link";

export default function IndexPage() {

  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark');
  const { count, inc, dec } = useStore();

  return (
    <Group pt={50} justify="center" align="center" style={{ height: '100vh', display: "flex", flexDirection: "column" }}>
      <Link href="/check">
        <Button /* color="myColor"  */ size="xl" rightSection={<IconArrowRight style={{ width: rem(22), height: rem(22) }} stroke={1.5} />}>Go to Page 2</Button>
      </Link>

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
      <div style={{ marginTop: 10 }}>
        <span>{count}</span>
        <Button onClick={inc} ml={15}>one up</Button>
        <Button onClick={dec} ml={15}>one down</Button>
      </div>
    </Group>
  );
}
