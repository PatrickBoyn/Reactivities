import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import {observer} from "mobx-react-lite";
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header exact as={NavLink} to='/'>
            {/* Ignore the warning. */}
            <img
              src='/assets/logo.png'
              alt='Logo'
              style={{ marginRight: 10 }}
            />
            Reactivities
          </Menu.Item>
          <Menu.Item name='Activities'  
                     as={NavLink} to='/activities'/>
          <Menu.Item>
            <Button 
                as={NavLink}
                to='/createActivity'
                positive 
                content='CreateActivity' />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default observer(NavBar);
