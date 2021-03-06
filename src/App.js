// import logo from "./logo.svg";
import './App.css';
import SearchBar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal/Modal';
import { useState } from 'react';

function App() {
  const [image, setImage] = useState('');
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const openModal = e => {
    setShowModal(true);
    setImage(e.currentTarget.dataset.largeimage);
  };

  const closeModal = () => {
    setShowModal(false);
    setImage('');
  };

  return (
    <>
      {showModal && <Modal src={image} onClose={closeModal} />}
      <SearchBar onSubmit={searchQuery => setQuery(searchQuery)} />
      <ImageGallery query={query} openModal={openModal} />
    </>
  );
}

// ===========================================================================
// class App extends Component {
//   state = {
//     image: '',
//     query: '',
//     showModal: false,
//   };

//   onSearch = searchQuery => {
//     this.setState({ query: searchQuery });
//   };

//   openModal = e => {
//     const imageURL = e.currentTarget.dataset.largeimage;
//     this.setState(prevState => ({
//       showModal: !prevState.showModal,
//       image: imageURL,
//     }));
//   };

//   closeModal = () => {
//     this.setState(prevState => ({
//       showModal: !prevState.showModal,
//       image: '',
//     }));
//   };

//   render() {
//     const { query, showModal, image } = this.state;
//     return (
//       <>
//         {showModal && <Modal src={image} onClose={this.closeModal} />}
//         <SearchBar onSubmit={this.onSearch} />
//         <ImageGallery query={query} openModal={this.openModal} />
//       </>
//     );
//   }
// }

export default App;
