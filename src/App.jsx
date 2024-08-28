import React from "react";
import "./App.css";
import "./index.css";
import Diagram from "./components/Diagram.jsx";
import Header from "./Header";
import Menu from "./components/Menu";
import Cards from "./components/Cards";
import { Flex, Container, Box, Grid } from "@radix-ui/themes";
import Info from "./components/Info";
import DownloadBtn from "./components/popover";

function App() {
  return (
    <Box
      style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}
    >
      <Container size="3">
        <Header />
        <Menu />
        <br />

        <h1>Dashboard</h1>
        <DownloadBtn />
        <br />
        <br />
        <Info />

        <Flex gap="3">
          <Cards
            title="Total Revenue"
            amount="$45,231.89"
            info="+20.1% from last month"
          />
          <Cards
            title="Subscriptions"
            amount="+2350"
            info="+180.1% from last month"
          />
          <Cards title="Sales" amount="+12,234" info="+19% from last month" />
          <Cards
            title="Active Now"
            amount="+5739"
            info="+201 since last hour"
          />
        </Flex>
        <Grid columns="2" gap="8">
          <Diagram />

          <Info />
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
