import { useEffect, useRef, useState, useCallback } from 'react';

import './styles/styles.css';
import Header from './components/Header'
import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './helpers/data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import {sortPlacesByDistance} from './helpers/loc.js'



const initPlaces = JSON.parse(localStorage.getItem('selectedPlaces'))||[]

export default function SimpleApss() {
    console.log('APP COMPONENT EXECUTING');
    const selectedPlace = useRef();
    const [modalIsOpen, setModalIsOpen]=useState(false)
    const [pickedPlaces, setPickedPlaces] = useState(initPlaces);
    const [places, setPlaces] =useState([])

    useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude,position.coords.longitude)
        setPlaces(sortedPlaces)  
       })
    },[])
 
    function handleStartRemovePlace(id) {
      setModalIsOpen(true)
      selectedPlace.current = id;
    }
  
    function handleStopRemovePlace() {
      setModalIsOpen(false)
    }
  
    function handleSelectPlace(id) {
      setPickedPlaces((prevPickedPlaces) => {
        if (prevPickedPlaces.some((place) => place.id === id)) {
          return prevPickedPlaces;
        }
        const place = AVAILABLE_PLACES.find((place) => place.id === id);
        const updatedPlaces = [place, ...prevPickedPlaces]
        localStorage.setItem('selectedPlaces', JSON.stringify(updatedPlaces))
        return updatedPlaces;
      });

      
    }
  
const handleRemovePlace = useCallback(function handleRemovePlace() {
      setPickedPlaces((prevPickedPlaces) =>{
        const updatedPlaces = prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
        localStorage.setItem('selectedPlaces', JSON.stringify(updatedPlaces))
        return updatedPlaces
      });
      setModalIsOpen(false)
    },[])

    return(
    <div id="placepicker">
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>  {/*can be closed by ESC required to change modalIsOpen state */}
        <DeleteConfirmation
          open={modalIsOpen}
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>
      <Header/>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={places}
          fallbackText={"Sorting places by distance..."}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </div>
    )

}