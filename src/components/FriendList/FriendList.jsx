import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
	return (
		<ul className={css.friends}>
			{friends.map(({ id, name, avatar, isOnline }) => (
		<li className={css.item} key={id}>
				<FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
			</li>
			))}			
		</ul>);
};

export default FriendList;
