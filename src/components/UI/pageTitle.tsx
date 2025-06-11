import React from "react";
import classes from "./pageTitle.module.scss";
import Subtitle from "@/components/UI/subtitle";

type PageTitleProps = {
  pageTitle: string;
  subtitle: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ pageTitle, subtitle }) => {
  return (
    <div className={classes.pageTitle}>
      <Subtitle
        className={classes.pageTitle__title}
        title={subtitle}
        bigHeader
      >
        {pageTitle}
      </Subtitle>
    </div>
  );
};

export default PageTitle;
