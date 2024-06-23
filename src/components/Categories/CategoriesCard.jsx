import { Link } from "react-router-dom";

const CategoriesCard = ({ item, index }) => {
  const bgColor = [
    "#a0e1e1", // light cyan blue
    "#ffeb68", // soft yellow
    "#fec091", // peach
    "#ffd6ef", // pale pink
    "#92bdf6", // light blue
    "#f8bc54", // light orange
    "#b0e0e6", // powder blue
    "#f0e68c", // khaki
    "#ffe4e1", // misty rose
    "#f5f5dc", // beige
  ];

  return (
    <Link
      to={`/allCategory/${item?.label}`}
      className="relative max-w-xs overflow-hidden min-w-28 md:min-w-40"
    >
      <div
        className={`rounded-xl`}
        style={{ backgroundColor: bgColor[index % bgColor.length] }}
      >
        <img
          className="object-cover w-full h-32 md:h-56 rounded-xl"
          src={item?.image}
          alt="avatar"
        />
      </div>

      <div className="py-2 md:py-5 text-center">
        <a
          href="#"
          className="block text-sm md:text-xl font-bold text-gray-800"
          tabIndex="0"
          role="link"
        >
          {item?.label}
        </a>
      </div>
    </Link>
  );
};

export default CategoriesCard;
