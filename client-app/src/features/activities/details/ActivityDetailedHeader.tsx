﻿import * as React from 'react';
import { Image, Item, Header, Segment, Button } from 'semantic-ui-react';
import { IActivity } from "../../../app/models/activity";
import { observer } from "mobx-react-lite";

export const ActivityDetailedHeader: React.FC<{ activity: IActivity }> = ({ activity }) => {
    const activityImageStyle = {
        filter: 'brightness(30%)'
    };
    
    const activityImageTextStyle = {
        position: 'absolute',
        bottom: '5%',
        left: '5%',
        width: '100%',
        height: 'auto',
        color: 'white'
    };
    
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{ padding: '0' }}>
                <Image src={`/assets/categoryImages/${activity.category}.jpg`} style={activityImageStyle}/>
                <Segment basic style={activityImageTextStyle}>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header size='huge' content={activity.title} style={{color: 'white'}}>
                                </Header>
                                <p>{activity.date}</p>
                                <p>
                                    Hosted by <strong>Bob</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Activity</Button>
                <Button>Cancel Attendance</Button>
                <Button color='orange' floated='right'>
                    Manage Event
                </Button>
            </Segment>
        </Segment.Group>
    );
};

export default observer(ActivityDetailedHeader);
