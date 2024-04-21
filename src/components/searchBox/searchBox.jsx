import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  // const contacts = useSelector((state) => state.contacts.contacts.items);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  // console.log(selectNameFilter);

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
