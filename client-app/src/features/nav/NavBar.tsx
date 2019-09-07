import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header>
            <img
              src='/assets/logo.png'
              alt='Logo'
              style={{ marginRight: 10 }}
            />
            Reactivities
          </Menu.Item>
          <Menu.Item name='Activities' />
          <Menu.Item>
            <Button positive content='CreateActivity' />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default NavBar;
