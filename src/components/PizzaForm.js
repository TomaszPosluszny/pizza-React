import React from 'react';
import{useDispatch, useSelector} from 'react-redux'

export default function PizzaForm() {
  const dispatch = useDispatch()
  const NumberOfPeople = useSelector ((state) =>state.numberOfPeople)
  const onPeopleChange = (e) => {
    const peopleAction = {type:"CHANGE_NUMBER_OF_PEOPLE", payload: e.target.value}
    dispatch (peopleAction)
  };
  return (
    <div>
      <label>Enter number of people: </label>
      <input type="number" value={NumberOfPeople} onChange={onPeopleChange} />
    </div>
  );
}
