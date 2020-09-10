import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListItemRightActionButton = ({ name, color, size = 25, onPress }) => {
  return (
    <TouchableOpacity style={styles.doneButton} onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}

export default ListItemRightActionButton;