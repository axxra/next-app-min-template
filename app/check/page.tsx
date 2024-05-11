"use client";

import { Button, Group, rem } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useStore } from "../../store";

export default function CheckPage() {
    const { count, inc, dec } = useStore();

    return (
        <Group pt={50} justify="center" align="center" style={{ height: '100vh', display: "flex", flexDirection: "column" }}>
            <Link href="/">
                <Button /* color="myColor"  */ size="xl" leftSection={<IconArrowLeft style={{ width: rem(22), height: rem(22) }} stroke={1.5} />}>Go Home Page</Button>
            </Link>
            <div style={{ marginTop: 10 }}>
                <span>{count}</span>
                <Button onClick={inc} ml={15}>one up</Button>
                <Button onClick={dec} ml={15}>one down</Button>
            </div>
        </Group>
    )

}