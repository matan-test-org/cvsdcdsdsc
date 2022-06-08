import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { RvllVsdfList } from "./rvllVsdf/RvllVsdfList";
import { RvllVsdfCreate } from "./rvllVsdf/RvllVsdfCreate";
import { RvllVsdfEdit } from "./rvllVsdf/RvllVsdfEdit";
import { RvllVsdfShow } from "./rvllVsdf/RvllVsdfShow";
import { RgerrerList } from "./rgerrer/RgerrerList";
import { RgerrerCreate } from "./rgerrer/RgerrerCreate";
import { RgerrerEdit } from "./rgerrer/RgerrerEdit";
import { RgerrerShow } from "./rgerrer/RgerrerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="RvllVsdf"
          list={RvllVsdfList}
          edit={RvllVsdfEdit}
          create={RvllVsdfCreate}
          show={RvllVsdfShow}
        />
        <Resource
          name="Rgerrer"
          list={RgerrerList}
          edit={RgerrerEdit}
          create={RgerrerCreate}
          show={RgerrerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
