const SectionHeader = ({
  first,
  heading,
  tagline,
}: {
  first: string;
  heading: string;
  tagline: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[400px]">
      <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
        {first}
      </span>
      <h1 className="text-3xl font-bold">{heading}</h1>
      <p className="text-xs text-gray-400 text-center">{tagline}</p>
    </div>
  );
};

export default SectionHeader;
