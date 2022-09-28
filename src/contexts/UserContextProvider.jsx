import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

//? 1- Defining
export const UserContext = createContext();

//? 3-Consume function (Custom Hook)
export const useUserContext = () => {
  return useContext(UserContext);
};



//? 2- Provider Component
const UserContextProvider = ({ children }) => {
  const initialvalue={
    id: 1,
    title: "DARPA ANCILLARY",
    imageUrl:
      "https://spectrum.ieee.org/media-library/a-rendering-of-a-silvery-fixed-wing-drone-with-three-ducted-fan-propellers-arranged-in-a-triangle-at-its-tail.png?id=31626838&width=1200&height=612",
    desc: "First, we show Cassie a map with a hand-drawn path, which she needs to follow. Second, she localizes herself into the OpenStreetMap, used as a topological global map. Third, she then converts the drawn path to her own understanding in the OpenStreetMap. Fourth, she determines terrain types such as sidewalks, roads, and grass. Fifth, she decides what categories she should walk on at the moment. Sixth, a multi-layered map is built. Seventh, a reactive CLF planning algorithm is guiding Cassie to walk safely without hitting obstacles. Finally, the planning signal is sent to Cassie’s 20 degree-of-freedom motion controller.",
  }
   const [tasks, setTasks] = useState(
     JSON.parse(localStorage.getItem("tasks")) || initialvalue
   );

   useEffect(() => {
     localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);

 


console.log(tasks)

const values = { tasks,setTasks };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
