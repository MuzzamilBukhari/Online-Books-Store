const QuickLinks = () => {
  const listItems = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Contact",
    },
    {
      id: 4,
      name: "Blog",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg sm:text-xl font-bold">Important Links</h1>
      <ul className="flex flex-col gap-2 cursor-pointer">
        {listItems.map((item) => (
          <li
            key={item.id}
            className="hover:text-primary hover:translate-x-1 text-gray-500 duration-300"
          >
            <span>⮚</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
