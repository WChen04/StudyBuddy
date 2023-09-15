import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MyCard = (props) => (
  <Card>
    <Card.Title
      title="Magic Hat"
      subtitle="Cast spells with your Avatar!"
      left={LeftContent}
    />
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Actions>
      <Button>Purchase Using Coins</Button>
    </Card.Actions>
  </Card>
);

export default MyCard;
