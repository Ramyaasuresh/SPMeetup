import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

export default function ProfileScreen({ auth, setAuth }) {
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    setAuth({ loggedIn: false, token: null, user: null });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("profile")}</Text>

      {auth?.user ? (
        <>
          <Text style={styles.info}>{t("email")}: {auth.user.email}</Text>
          <Text style={styles.info}>{t("userId")}: {auth.user.id}</Text>
        </>
      ) : (
        <Text style={styles.info}>No user info available</Text>
      )}

      <Button title={t("logout")} color="red" onPress={handleLogout} />

      <View style={{ marginTop: 20 }}>
        <Text>Select Language:</Text>
        <Button title="English" onPress={() => changeLanguage("en")} />
        <Button title="Hindi" onPress={() => changeLanguage("hi")} />
        <Button title="Tamil" onPress={() => changeLanguage("ta")} />
        <Button title="Chinese" onPress={() => changeLanguage("zh")} />
        <Button title="Aboriginal" onPress={() => changeLanguage("pit")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 20, fontWeight: "bold" },
  info: { fontSize: 16, marginBottom: 10 },
});
