import PropTypes, { InferProps } from "prop-types";
import { useSelector } from "react-redux";

import { selectStatus } from "../../redux/reducers/standardTypesReducer";
import { SearchContainer, InputSearch, Label, InputContainer } from "./styles";

function SearchBar({
  onkeychange,
  onClick,
}: InferProps<typeof SearchBar.propTypes>): React.ReactElement {
  const status = useSelector(selectStatus);
  return (
    <SearchContainer>
      <InputContainer>
        <InputSearch
          id="search-input"
          disabled={!status}
          onChange={onkeychange}
          placeholder="Informe número do processo"
        />
        <Label onClick={onClick}>
          <i className="fas fa-search" />
        </Label>
      </InputContainer>
    </SearchContainer>
  );
}

SearchBar.propTypes = {
  onkeychange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
