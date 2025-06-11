"use client";
import React, { useState, useEffect } from "react";

const FooterYear = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return <span>{currentYear}</span>;
};

export default FooterYear;
