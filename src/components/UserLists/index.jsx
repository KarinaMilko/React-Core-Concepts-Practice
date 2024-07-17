import { useState } from "react";
import styles from "./UserLists.module.css";
import UserListItem from "./UserListItem";

const USERS_DATA = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    imgSrc: "/userPhoto/John Doe.jpg",
    isSelected: true,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    imgSrc: "/userPhoto/Jane Smith.jpg",
    isSelected: false,
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Johnson",
    age: 35,
    imgSrc: "/userPhoto/Michael Johnson.jpg",
    isSelected: false,
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Davis",
    age: 28,
    imgSrc: "/userPhoto/Emily.jpeg",
    isSelected: false,
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Brown",
    age: 32,
    imgSrc: "/userPhoto/David Brown.jpg",
    isSelected: false,
  },
  {
    id: 6,
    firstName: "Sarah",
    lastName: "Wilson",
    age: 27,
    imgSrc: "/userPhoto/Sarah Wilson.jpg",
    isSelected: false,
  },
  {
    id: 7,
    firstName: "Chris",
    lastName: "Martinez",
    age: 31,
    imgSrc: "/userPhoto/Chris Martinez.jpg",
    isSelected: false,
  },
  {
    id: 8,
    firstName: "Jessica",
    lastName: "Garcia",
    age: 29,
    imgSrc: "/userPhoto/Jessica.jpeg",
    isSelected: false,
  },
  {
    id: 9,
    firstName: "Daniel",
    lastName: "Rodriguez",
    age: 34,
    imgSrc: "/userPhoto/Daniel Rodriguez.jpg",
    isSelected: false,
  },
];

function UserLists() {
  const [users, setUsers] = useState(USERS_DATA);

  function changeSelectedLink(selectedUserListIndex) {
    const copyUserLists = [...users];

    const prevSelectedUserListIndex = copyUserLists.findIndex(
      (uItem) => uItem.isSelected
    );
    if (prevSelectedUserListIndex !== -1) {
      copyUserLists[prevSelectedUserListIndex].isSelected = false;
    }
    copyUserLists[selectedUserListIndex].isSelected = true;
    setUsers(copyUserLists);
  }

  function deleteUser(userId) {
    const copyUserLists1 = [...users];
    const deleteUserIndex = copyUserLists1.filter((u) => u.id !== userId);
    setUsers(deleteUserIndex);
  }

  const mapUsersData = (u, index) => {
    return (
      <UserListItem
        key={u.id}
        userListItem={u}
        linkIndex={index}
        changeSelectedLink={changeSelectedLink}
        onDelete={deleteUser}
      />
    );
  };

  return <ul className={styles.usersData}>{users.map(mapUsersData)}</ul>;
}

export default UserLists;
