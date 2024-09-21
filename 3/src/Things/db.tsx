import { useState } from 'react';


 const organs1 = [ /////ORGANS LIST ITS AN ARRAY OF FLESH
  { 
    id: 0,
    name: "Heart",
    Value: 1200,
    desciption: "IF YOU ARE AMERICAN, YOU SIMILTANOUSLY DON't HAVE ONE BUT ALSO NEED A NEW ONE EVERY 3 YEARS BECAUSE OF THE FOOD"
  },
  {
id: 1,
    name: "TESLA CYBERBRAIN", ////MY NIEGHBOR OWNS ONE OF THESE MONSTROSITIES, I MAKE SURE TO INSULT HIM EVERY TIME I SEE HIM
    Value: 12000,
    desciption: "DOESN'T ACTUALLY DO ANYYTHING SPECIAL BUT LOOKS REALLY COOL, (ASSUMING YOU HAVE NO TASTE) TAKES 10 HOURS TO RECHARGE AND MUST BE RECHARGED EVER 3HOURS JUST DON'T GO OUTSIDE WhEN ITS RAINING (OR WHEN ITS NOT)"
  },
  {
  id: 2,
  name: "BEAN STOMACH",
  Value: 2445,
  desciption: "ORGAN SPECIAFFICALLY DESIGNED TO ASSIST TOURISTS TRAVELING TO ENGLAND ADJUST TO THE LOCAL CUISINE"
},
{
id: 3,
name: "EMPATHY GLAND ",
Value: 5,
desciption: "NO LONGER IN STYLE"
}, 

{
id: 4,
name: "WOJAK PROJECTOR",
Value: 2635,
desciption: "IMPLANTED INTO THE MIND IT MAKES ALL PEOPLE APPEAR AS WOJAKS MAKING YOU AUTOMATICALLY WIN ANY ARGUMENT"
},
{  id: 5,
    name: "FAMILY GUY CLIPS ",
    Value: 2445,
    desciption: "A BUILT IN IN PROJECTOR THAT PLAYS FAMILY GUY CLIPS ON THE INSIDE OF YOUR EYELIDS EVEN WHEN YOU SlEEP"
  },
  {  id:  6,
    name: "HAlF A CAR ORGAN ",
    Value: 2024,
    desciption: "TURNS YOU INTO HALF A CAR FROM THE GUCCI 2074 FALL/NUCLEAR WINTER COLLECTION"
  },
  {  id:  7,
    name: "FENT PUMP",
    Value: 2035,
    desciption: "I LOVE FENT"
  },
  {  id:  8,
    name: "BROCKHAMPTON CLONES ",
    Value: 2017,
    desciption: "ALL 13 MEMBERS OF BROCKHAMPTON CLONED AND IMPLANTED INTO YOUR BODY AT MICROSCOPIC SCALE TO FIGHT CANER AND MAKE YOU A BETTER RAPPER"
  },
  {  id:  9,
    name: "GAMBLING SUPERCOMPUTER", 
    Value: 806,
    desciption: "+1 BLACKJACK SKILL -1 SOCIAL SKILL MAKES THE USER 90% MORE LIKELY TO INVEST THEIR LIFE SAVINGS INTO A SHITCOIN PUMP AND DUMP SCHEME"
  },
  {  id:  10,
    name: "GOLDEN CORE/DANTIAN", 
    Value: 806,
    desciption: "The first fruit of cultivating your Chi! Gives you powers that you'd expect from a wuxia/xianxia novel."
  },
  {
    id: 11,
    name: "VIDEODROME BETAMAXX TAPE",
    Value: 646,
    desciption: "NO COMMENT"
  }






  ////////////////////
]; ////// END OF LIST

interface Organ { //////COULDNT GET IT TO WORK ELSEWHERE
  id: number;
  name: string;
  Value: number;
  desciption: string;
}


//////////////////////
/////////////////////
////////////////////



const Organsc = () => { ///////////////IM PROUD OF THIS //////////ALL OF THE FUNCTIONS ARE DEFINED UP HERE 
const [organs,setOrgans] = useState<Organ[]>(organs1); ///SET ORGANS TO THE ARRAY OF ORGANS
const [newOrgan, sewOrgan] = useState<Organ>({ id: 0, name: '', Value: 0, desciption: '' }); ///SET NEW ORGAN TO THE DEFAULT ORGAN
const [updateId, updateBodice] = useState<number | null>(null); ///SET UPDATE ID TO NULL

  const change = (e: React.ChangeEvent<HTMLInputElement>) => { ///FUNCTION TO HANDLE CHANGES
    const { name, value } = e.target; ////SET NAME AND VALUE TO THE TARGET OF THE EVENT
    sewOrgan({ ...newOrgan, [name]: value });
  };

  const handleAdd = () => {
    setOrgans([...organs, { ...newOrgan, id: organs.length }]); ////ADD THE NEW ORGAN TO THE ARRAY
    sewOrgan({ id: 0, name: '', Value: 0, desciption: '' });
  };
/////////FUNCTION TO REMOVE AN ORGAN
  const removal = (id: number) => { ///set removal = to the id of the organ
    setOrgans(organs.filter(organ => organ.id !== id)); 
  };

  // FUNCTION TO HANDLE UPDATING AN ORGAN
  const handleUpdate = () => {
    if (updateId !== null) {
    // FIND THE ORGAN TO BE UPDATED AND UPDATE ITS VALUES
      setOrgans(organs.map(organ => (organ.id === updateId ? newOrgan : organ))); // UPDATE THE ORGAN IN THE ARRAY IF THE ID MATCHES
      updateBodice(null);
      sewOrgan({ id: 0, name: '', Value: 0, desciption: '' });
    }
  };

  const edit = (organ: Organ) => {  ////FUNCTION TO EDIT AN ORGAN
    sewOrgan(organ); ////SET THE ORGAN TO BE EDITED
    updateBodice(organ.id); 
  };





return (








<div>
 <h1>Organs List</h1>
      <ul>
        {organs.map(organ => (
   <li key={organ.id}>
            {organ.name} - {organ.Value} - {organ.desciption}
            <button onClick={() => removal(organ.id)}>Delete</button>
            <button onClick={() => edit(organ)}>Edit</button>
     </li>
        ))}
  </ul>
      <h2>{updateId !== null ? 'Update Organ' : 'Add Organ'}</h2>
        <input type="text" name="name" value={newOrgan.name}
        onChange={change} placeholder="Name"
      />
          <input type="number" name="Value"  value={newOrgan.Value} onChange={change}  placeholder="Value"
      />
      <br />

               <input type="text" name="desciption" value={newOrgan.desciption} onChange={change} placeholder="Description"
      />


      <br />
      <button onClick={updateId !== null ? handleUpdate : handleAdd}>
        {updateId !== null ? 'Update' : 'Add'}
      </button>
    </div>
  );
};

export default Organsc;
