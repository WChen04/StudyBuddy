import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MyCard = (props) => {
  const { name, description } = props.data;

  <Card>
    <Card.Title title={name} subtitle={description} left={LeftContent} />
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Actions>
      <Button>Purchase Using Coins</Button>
    </Card.Actions>
  </Card>;
};

export default MyCard;
