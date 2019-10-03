import React, { Fragment } from 'react';
import { List, Segment, Item, Label, Image, ItemContent, ItemHeader, ItemExtra } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ActivityDetailedSidebar = () => {
    return (
        <Fragment>
            <Segment textAlign='center'
                     style={{ border: 'none' }}
                     attached='top'
                     secondary
                     inverted
                     color='teal'>
                3 People Going
            </Segment>
            <List relaxed divided>
                <Item style={{ position: 'relative' }}>
                    <Label style={{ position: 'absolute' }}
                           color='orange'
                           ribbon='right'>
                        Host
                    </Label>
                    <Image size='tiny' src={'/assets/user.png'}/>
                     <ItemContent verticalAlign='middle'>
                         <ItemHeader as='h3'>
                             <Link to={'#'}>Bob</Link>
                         </ItemHeader>
                         <ItemExtra style={{color: 'orange'}}>Following</ItemExtra>
                     </ItemContent>
                </Item>
                <Item style={{ position: 'relative' }}>
                    <Image size='tiny' src={'/assets/user.png'}/>
                    <ItemContent verticalAlign='middle'>
                        <ItemHeader as='h3'>
                            <Link to={'#'}>Jessica</Link>
                        </ItemHeader>
                        <ItemExtra style={{color: 'orange'}}>Following</ItemExtra>
                    </ItemContent>
                </Item>
                <Item style={{ position: 'relative' }}>
                    <Image size='tiny' src={'/assets/user.png'}/>
                    <ItemContent verticalAlign='middle'>
                        <ItemHeader as='h3'>
                            <Link to={'#'}>Eric</Link>
                        </ItemHeader>
                        <ItemExtra style={{color: 'orange'}}>Following</ItemExtra>
                    </ItemContent>
                </Item>
            </List>
        </Fragment>
    )
};

export default ActivityDetailedSidebar