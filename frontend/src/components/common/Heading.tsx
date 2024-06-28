import { twMerge } from 'tailwind-merge';

interface HeadingProps {
  text: string;
  classname?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, classname }) => {
  const splitedText = text.split('');
  const firstLetter = splitedText[0];
  const remainingText = text.slice(1);

  return (
    <div className="flex gap-4 items-center">
      <span className="w-14 h-0.5 bg-themeColor" />
      <h4
        className={twMerge(
          'uppercase text-2xl md:text-3xl font-bold',
          classname
        )}
      >
        <span className="text-themeColor">{firstLetter}</span>
        {remainingText}
      </h4>
    </div>
  );
};

export default Heading;
