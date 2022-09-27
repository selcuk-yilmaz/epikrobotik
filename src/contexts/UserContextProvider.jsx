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
  const [users, setUsers] = useState({
    id: 1,
    title: "DARPA ANCILLARY",
    imageUrl:
      "https://spectrum.ieee.org/media-library/a-rendering-of-a-silvery-fixed-wing-drone-with-three-ducted-fan-propellers-arranged-in-a-triangle-at-its-tail.png?id=31626838&width=1200&height=612",
    desc: "First, we show Cassie a map with a hand-drawn path, which she needs to follow. Second, she localizes herself into the OpenStreetMap, used as a topological global map. Third, she then converts the drawn path to her own understanding in the OpenStreetMap. Fourth, she determines terrain types such as sidewalks, roads, and grass. Fifth, she decides what categories she should walk on at the moment. Sixth, a multi-layered map is built. Seventh, a reactive CLF planning algorithm is guiding Cassie to walk safely without hitting obstacles. Finally, the planning signal is sent to Cassie’s 20 degree-of-freedom motion controller.",
  });
// localstoragebölümü
   const [tasks, setTasks] = useState(
     JSON.parse(localStorage.getItem("tasks")) || []
   );

   useEffect(() => {
     localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);

  // const changeWidth = (id, width) => {
  //   setUsers(
  //     users.map((user) => (user.id === id ? { ...user, width: width } : user))
  //   );
  // };
  const values = { users, setUsers,tasks,setTasks };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
