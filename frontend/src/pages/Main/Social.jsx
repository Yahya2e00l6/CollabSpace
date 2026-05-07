import style from "../../Style/Main/Social.module.css"
import Header from "../../components/StructuralUI/Header"
import UserList from "../../components/StructuralUI/social/UserList";
import UserDash from '../../components/StructuralUI/social/UserDash'

const Social = () =>{
    const allUsers = [
    {
        id: 1, // used for the 'key' prop
        firstName: "Saad",
        lastName: "Mansour",
        Role: "manager",
        Age: 24,
        Team: "Penguins"
    },
    {
        id: 2,
        firstName: "Lina",
        lastName: "Chen",
        Role: "Member",
        Age: 29,
        Team: "Creative Bees"
    },
    {
        id: 3,
        firstName: "Ayoub",
        lastName: "Benali",
        Role: "Member",
        Age: 21,
        Team: "Penguins"
    },
    {
        id: 4,
        firstName: "Sarah",
        lastName: "Williams",
        Role: "Member",
        Age: 32,
        Team: "Alpha Squad"
    },
    {
        id: 5,
        firstName: "Ossama",
        lastName: "Zahir",
        Role: "Manager",
        Age: 22,
        Team: "Penguins"
    },
    {
        id: 6,
        firstName: "Yahya",
        lastName: "Dev",
        Role: "Member",
        Age: 20,
        Team: "Penguins"
    },
    {
        id: 7,
        firstName: "Yasmine",
        lastName: "Idris",
        Role: "Member",
        Age: 26,
        Team: "Delta Force"
    }
];
    return(
        <>
            <div className={style.selectedSection}>
                <Header selectedPage={'Social'}/>
                <div className={style.Overview}>
                    <UserList UsersData={allUsers}/>
                    <UserDash/>
                </div>
            </div>
        </>
    )
}

export default Social