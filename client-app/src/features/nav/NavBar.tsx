import React, {useContext} from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import ActivityStore from '../../app/stores/activityStore';
import {observer} from "mobx-react-lite";

const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header>
            {/* Ignore the warning. */}
            <img
              src='/assets/logo.png'
              alt='Logo'
              style={{ marginRight: 10 }}
            />
            Reactivities
          </Menu.Item>
          <Menu.Item name='Activities' />
          <Menu.Item>
            <Button onClick={activityStore.openCreateForm} positive content='CreateActivity' />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default observer(NavBar);
