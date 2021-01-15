import { useState } from 'react';
import s from './Searchbar.module.css';

function SearchBar(props) {
  const [query, SetQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (query === '') {
      return alert('Enter search query');
    }
    props.onSubmit(query);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          value={query}
          onChange={e => SetQuery(e.target.value)}
        />
      </form>
    </header>
  );
}

// ==============================================================
// class SearchBar extends Component {
//   state = {
//     query: "",
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.query === "") {
//       return alert("Enter search query");
//     }
//     this.props.onSubmit(this.state.query);
//   };

//   onInputChange = (e) => {
//     this.setState({ query: e.target.value });
//   };

//   render() {
//     return (
//       <header className={s.Searchbar}>
//         <form className={s.SearchForm} onSubmit={this.onSubmit}>
//           <button type="submit" className={s.SearchFormButton}>
//             <span className={s.SearchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             className={s.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             placeholder="Search images and photos"
//             value={this.state.query}
//             onChange={this.onInputChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

export default SearchBar;
