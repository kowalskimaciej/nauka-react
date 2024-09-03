import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';


const SearchForm = () => {
      return (
      <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <Button text="DUPA..." />
            <Button text="I TYLE"/>
      </form>
      );
};

export default SearchForm;