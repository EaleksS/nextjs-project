import Layout from "./Layout";
import Link from "next/link";
import { routerConstants } from "@/Constants/RouterConstants";
import { Text, TranslationsProvider } from "@eo-locale/react";
import Main from "./main";

export default function Home() {
  const locales = [
    {
      language: "en",
      messages: {
        hello: "Hello!",
      },
    },
    {
      language: "fr",
      messages: {
        hello: "Bonjour!",
      },
    },
  ];

  const siteLanguage = "en";
  return <Main />;
}
