export const MapListUsers = ({ userlist }) => {
  return (
    <div>
      {userlist.map((item, index) => {
      return <p key={index}>Username: {item.username}, Email: {item.email}</p>;
    })}
    </div>
  );
};
