import { ReactNode } from "react";
import type { StaticImageData } from "next/image";

export interface NavItem {
  href: string;
  name: string;
}

export interface Slide {
  id: number;
  title: ReactNode;
  image: StaticImageData;
  position?: string;
  icon: ReactNode;
}

export interface HomeService {
  href: string;
  icon: ReactNode;
  title: ReactNode;
  description: string;
}

export interface StepsItem {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  description: string;
  icon: ReactNode;
}

export interface WhyMeItem {
  title: string;
  description: string;
  image: StaticImageData;
}

export interface AccordionServicesItem {
  id: string;
  title: string;
  list: string[];
}

export interface FormDataType {
  name: string;
  email: string;
  message: string;
}

export interface ErrorsType {
  name: string;
  email: string;
  message: string;
  privacyPolicy: string;
}
