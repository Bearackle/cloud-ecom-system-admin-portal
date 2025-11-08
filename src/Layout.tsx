import * as React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  AppBar,
  Layout,
  Menu,
  InspectorButton,
  TitlePortal,
} from "react-admin";
import "./assets/app.css";

const MyAppBar = () => (
  <AppBar>
    <TitlePortal />
    <InspectorButton />
  </AppBar>
);

const MyMenu = () => (
  <Menu>
    <Menu.ResourceItem name="categories" keyboardShortcut="g>p" />
    <Menu.ResourceItem name="brands" keyboardShortcut="g>p" />
    <Menu.ResourceItem name="products" keyboardShortcut="g>p" />
    <Menu.ResourceItem name="variants" keyboardShortcut="g>p" />
  </Menu>
);

export default ({ children }) => (
  <>
    <Layout appBar={MyAppBar} menu={MyMenu}>
      {children}
    </Layout>
    <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
  </>
);
