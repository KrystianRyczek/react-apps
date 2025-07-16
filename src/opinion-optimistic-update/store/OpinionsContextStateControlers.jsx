import { useEffect, useReducer, useState } from 'react';
import { OpinionsContext } from './OpinionsContext';


//const initialState={}

export default function OpinionsContextProvider({ children }) {
    //const [opinionsState, opinionsStateDispatch]=useReducer(OpinionsContextStateReducers, initalState )
    
    const [opinions, setOpinions] = useState();
  
    useEffect(() => {
      async function loadOpinions() {
        try{
          const responseOpinions = await fetch('https://react-apps-6b050-default-rtdb.europe-west1.firebasedatabase.app/opinions.json');
          let fetchedOpinions = await responseOpinions.json();

          if (!responseOpinions.ok) {
            return;
          }
          const responseOpinion = await fetch('https://react-apps-6b050-default-rtdb.europe-west1.firebasedatabase.app/opinion.json');
          const fetchedAdedOpinion = await responseOpinion.json()

          if (!responseOpinion.ok) {
            return;
          }
          for (let key in fetchedAdedOpinion) {
            fetchedOpinions=[{id:key,...fetchedAdedOpinion[key]}, ...fetchedOpinions]
          }


          setOpinions(fetchedOpinions);
        }catch(e){
          return console.log(e)
        }

      }
      loadOpinions();
    }, []);
  
    async function addOpinion(enteredOpinionData) {
      try{
        const response = await fetch('https://react-apps-6b050-default-rtdb.europe-west1.firebasedatabase.app/opinion.json', {
          method: 'POST',
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          body: JSON.stringify(enteredOpinionData),
        });
        const objectName = await response.json()
        if (!response.ok) {
          return;
        }
        setOpinions((prevOpinions) => [{id:objectName.name, ...enteredOpinionData}, ...prevOpinions]);

      }catch(e){
        return console.log(e)
      }
    }
  
    async function upvoteOpinion(id) {

      try{
        const index = opinions.findIndex(opinion=>opinion.id===id)
        const upVotes = opinions[index].votes +1
        let url
        if(+id===0||+id===1||+id===2){
          url=`https://react-apps-6b050-default-rtdb.europe-west1.firebasedatabase.app/opinions/${id}.json`
        }else{
          url=`https://react-apps-6b050-default-rtdb.europe-west1.firebasedatabase.app/opinion/${id}.json`
        }
        const response = await fetch(url, {
          method: 'PATCH',
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          body: JSON.stringify({votes:upVotes}),
        });
  
        if (!response.ok) {
          return;
        }

        setOpinions((prevOpinions) => {
          return prevOpinions.map((opinion) => {
            if (opinion.id === id) {
              return { ...opinion, votes: opinion.votes + 1 };
            }
            return opinion;
          });
        });

      }catch(e){
        return console.log(e)
      }
    }
  
    async function downvoteOpinion(id) {
      const index = opinions.findIndex(opinion=>opinion.id===id)
      const downVotes = opinions[index].votes>0 ? opinions[index].votes-1 : 0
      try{
        let url
        if(+id===0||+id===1||+id===2){
          url=`https://react-apps-6b050-default-rtdb.europe-west1.firebasedatabase.app/opinions/${id}.json`
        }else{
          url=`https://react-apps-6b050-default-rtdb.europe-west1.firebasedatabase.app/opinion/${id}.json`
        }
        const response = await fetch(url, {
          method: 'PATCH',
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          body: JSON.stringify({votes:downVotes}),
        });
  
        if (!response.ok) {
          return;
        }

        setOpinions((prevOpinions) => {
          return prevOpinions.map((opinion) => {
            if (opinion.id === id) {
              return { ...opinion, votes: opinion.votes>0? opinion.votes- 1 : 0 };
            }
            return opinion;
          });
        });

      }catch(e){
        return console.log(e)
      }
    }
  
    const contextValue = {
      opinions: opinions,
      addOpinion,
      upvoteOpinion,
      downvoteOpinion,
    };
  
    return <OpinionsContext value={contextValue}>{children}</OpinionsContext>;
  }
  