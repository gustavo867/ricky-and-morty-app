import React from "react";
import { View, Text, Image } from "react-native";
import { CharacterType } from "../../screens/Home";

import styles from "./styles";

interface Props {
  data: CharacterType;
}

const Character: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: data.image }}
        />
        <View
          style={{
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.status}>{data.status}</Text>
          <Text style={styles.name}>{data.name}</Text>
          <Text
            style={[
              styles.status,
              {
                textTransform: "uppercase",
              },
            ]}
          >
            {data.species}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingHorizontal: 20,
          }}
        >
          <Text style={[styles.status, { fontSize: 25, textAlign: "left" }]}>
            Informations
          </Text>
          <Text style={styles.informationTitle}>Gender</Text>
          <Text style={styles.smallText}>{data.gender}</Text>

          <Text style={styles.informationTitle}>Origin</Text>
          <Text style={styles.smallText}>{data.origin.name}</Text>

          <Text style={styles.informationTitle}>Type</Text>
          <Text style={styles.smallText}>
            {data.type === "" ? "Unknown" : data.type}
          </Text>

          <Text style={styles.informationTitle}>Location</Text>
          <Text style={styles.smallText}>{data.location.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default Character;
