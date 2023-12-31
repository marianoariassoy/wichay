import { useDataContext } from "../context/useDataContext";

const Lan = () => {
  const { lan, setLan } = useDataContext();

  return (
    <ul className="flex gap-1 items-center text-sm">
      <li>
        <button className={` ${lan === "es" ? "opacity-50" : "hover:text-black"}`} onClick={() => setLan("es")}>
          ES
        </button>
      </li>
      <li> - </li>
      <li>
        <button className={` ${lan === "en" ? "opacity-50" : "hover:text-black"}`} onClick={() => setLan("en")}>
          EN
        </button>
      </li>
    </ul>
  );
};

export default Lan;
