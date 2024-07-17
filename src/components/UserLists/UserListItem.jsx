import classNames from "classnames";
import { FaTrash } from "react-icons/fa6";
import styles from "./UserLists.module.css";

function UserListItem({
  userListItem: u,
  changeSelectedLink,
  linkIndex,
  onDelete,
}) {
  const selectedClassName = classNames(styles.userContainer, {
    [styles.selectedUser]: u.isSelected,
  });

  const linkClickHandler = () => {
    changeSelectedLink(linkIndex);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(u.id);
  };

  return (
    <li onClick={linkClickHandler} className={selectedClassName}>
      <img className={styles.userPhoto} src={u.imgSrc} />
      <div className={styles.userContainerName}>
        <span>
          {u.firstName} {u.lastName}
        </span>
        <span className={styles.userAge}> {u.age} age old</span>
      </div>
      <button className={styles.trashIcon} onClick={handleDeleteClick}>
        <FaTrash />
      </button>
    </li>
  );
}

export default UserListItem;
