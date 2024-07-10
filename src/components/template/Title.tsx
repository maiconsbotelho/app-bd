import { ElementType } from "react";


export interface TitleProps {
  title: string;
  subtitle: string;
  icon: ElementType;
}

const Title = (props: TitleProps) => {
  return (
    <div className="flex gap-2">
      <props.icon size={55} stroke={1} />
      <div>
        <h1 className="text-2xl font-black">{props.title}</h1>
        <h2 className="text-zinc-400">{props.subtitle}</h2>
      </div>

    </div>
  );
};

export default Title;