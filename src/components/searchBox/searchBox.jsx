import { useDispatch } from "react-redux";
import { filterContact } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <div className="search-box-conteiner">
      <p>Find contacts by name</p>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Search..."
        className="search-box-input"
      />
    </div>
  );
};
