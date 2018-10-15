import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AppContainer } from "react-hot-loader";
import routes from "./routes";
// import Nav from "./view/components/nav/index.js";

const renderIndex = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        {/* <Nav /> */}
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

renderIndex(routes);

if (module.hot) {
  module.hot.accept(() => renderIndex(routes));
}
