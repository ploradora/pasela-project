import { faPlay, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabItem = (prop) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="radius-lg w-6 h-6 rounded-lg">
          <FontAwesomeIcon icon={faPlay} className />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>3:33</p>
        <p>Positive Action</p>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
    </div>
  );
};

export default TabItem;
