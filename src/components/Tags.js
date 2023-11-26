import Head from "next/head";
import { useRouter } from "next/router";

export default function Tags(props) {
  const router = useRouter();

  const title = props.title ? props.title + " | WizardLM" : "WizardLM";
  const desc = props.desc
    ? props.desc
    : "WizardLM, Large Language Model.";
  const image = props.image ? props.image : "/social.png";
  const alt = props.alt
    ? props.alt
    : "The text: WizardLM, Large Language Model.";
  const slug = props.slug ? props.slug : router.route;

  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <meta name="twitter:description" content={desc} />

      <meta property="og:image" content={"https://wizardlm.github.io" + image} />
      <meta name="twitter:image" content={"https://wizardlm.github.io" + image} />

      <meta name="twitter:image:alt" content={alt} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={"https://wizardlm.github.io" + slug} />
      <meta name="twitter:url" content={"https://wizardlm.github.io" + slug} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#6767b5" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="icon" href="/favicon.png" type="image/png" />
    </Head>
  );
}
