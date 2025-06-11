import classes from "./advantages.module.scss";
import Advantage from "../UI/animation/advantage";
import Section from "../UI/section";

const Advantages: React.FC = () => {
  return (
    <Section>
      <div className={classes.advantages}>
        <Advantage
          targetNumber={15}
          text="lat doświadczenia"
        />
        <Advantage
          targetNumber={2000}
          text="przeprowadzonych szkoleń"
        />
        <Advantage
          targetNumber={100}
          text="zadowolonych klientów"
          suffix="%"
        />
      </div>
    </Section>
  );
};

export default Advantages;
