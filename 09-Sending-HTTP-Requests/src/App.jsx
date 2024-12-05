import { useRef, useState, useCallback, useEffect } from 'react';
import ErrorModal from './components/ErrorModal.jsx';
import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchUserPlaces, updateUserPlaces } from './http.js';

function App() {
  const selectedPlace = useRef();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState()
  const [userPlaces, setUserPlaces] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorUpdatePlaces, setErrorUpdatePlaces] = useState()



  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)
      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places);

      } catch (error) {
        setError({ message: error.message || 'Fai;ed to fetch places' });

      }
      setIsFetching(false);
    }

    fetchPlaces()
  }, [])
  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces])
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatePlaces({ message: error.message || 'Failed to update, please try again' })
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try {
      await updateUserPlaces(userPlaces.filter(place => place.id !== selectedPlace.current.id))

    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatePlaces({ message: error.message || 'failed to delete place' });
    }
    setModalIsOpen(false);
  }, [userPlaces]);


  function handleError() {
    setErrorUpdatePlaces(null)
  }

  return (
    <>
      <Modal open={errorUpdatePlaces} onClose={handleError}>
        {errorUpdatePlaces && <ErrorModal title="Error occured" message={errorUpdatePlaces.message} onConfirm={handleError} />}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <ErrorModal title="An error occured" message={error.message} />}
        {!error && <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
          loadingText="Fetching your places..."
          isLoading={isFetching}
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
