import type { Metadata } from "next";

import { SITE } from "~/config.js";

import Hero from "~/components/widgets/Hero";
import Content from "~/components/widgets/Content";
import Steps from "~/components/widgets/Steps";
import {
  callToActionData,
  // content2Data,
  // contentData,
  // faqsData2,
  // featuresData,
  heroData,
  // pricingData,
  // socialProofData,
} from "~/shared/data";
import SubscribeForm from "~/components/widgets/SubscribeForm";

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero data={heroData} />
      {/* <SocialProof {...socialProofData} /> */}
      {/* <Features3 {...featuresData} /> */}
      {/* <Content {...contentData} /> */}
      {/* <Content {...content2Data} /> */}
      <Steps />
      <SubscribeForm />
      {/* <Testimonial /> */}
      {/* <FAQs2 {...faqsData2} /> */}
      {/* <Pricing {...pricingData} /> */}
      {/* <Team /> */}
      {/* <Contact /> */}
      {/* <CallToAction2 {...callToActionData} /> */}
    </>
  );
}
