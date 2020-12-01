import React, { useState } from "react";
import { useQuery } from "react-apollo-hooks";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { RICKY_QUERY } from "../../Apollo";
import Character from "../../components/Character";

import styles from "./styles";

export interface CharacterType {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  created: string;
}

interface Data {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number;
      prev: number;
    };
    results: CharacterType[];
  };
}

interface Query {
  data: Data;
  error: boolean;
  loading: boolean;
}

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, error, loading }: Query = useQuery(RICKY_QUERY, {
    variables: { page },
  }) as any;

  function loadNextPage() {
    if (data.characters.info.next) {
      setPage(data.characters.info.next);
    }
    return;
  }

  function loadPrevPage() {
    if (data.characters.info.prev) {
      setPage(data.characters.info.prev);
    }
    return;
  }

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size={80} color="#000" />
      </View>
    );

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Error</Text>
      </View>
    );

  const Footer = () => {
    return (
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          delayPressIn={1}
          delayPressOut={100}
          delayLongPress={500}
          onPress={() => loadPrevPage()}
        >
          <Text style={styles.title}>Load prev page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          delayPressIn={1}
          delayPressOut={100}
          delayLongPress={500}
          onPress={() => loadNextPage()}
        >
          <Text style={styles.title}>Load next page</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.characters.results}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => <Character data={item} />}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{
          flexGrow: 1,
        }}
        pagingEnabled
        bounces={false}
      />
      <Footer />
    </View>
  );
};

export default Home;
