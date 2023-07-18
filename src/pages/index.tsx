import Head from "next/head";
import { Inter } from "next/font/google";
import styled from "@xstyled/styled-components";
import { forwardRef } from "react";

const inter = Inter({ subsets: ["latin"] });

const ButtonStyled = styled.buttonBox`
  border-radius: md;
  font-weight: semibold;
  transition: default;
  background-color: emerald-500;
  color: #fff;

  @media (min-width: md) {
    font-size: lg;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <ButtonStyled as="a" href="http://google.com">
          123
        </ButtonStyled>
      </main>
    </>
  );
}
