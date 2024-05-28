import { AiOutlineMail } from 'react-icons/ai';
import { FaBabyCarriage } from 'react-icons/fa';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';

export const Profile = ({ props: { avatar, name, email, age } }) => {
  return (
    <>
      <img src={avatar} alt={name} width="100" />
      <div>
        <p>
          <MdOutlineDriveFileRenameOutline size="30" color="red" /> Name: {name}
        </p>
        <p>
          <AiOutlineMail size="30" color="blue" /> Email: {email}
        </p>
        <p>
          <FaBabyCarriage size="30" color="green" /> Age: {age}
        </p>
      </div>
    </>
  );
};
