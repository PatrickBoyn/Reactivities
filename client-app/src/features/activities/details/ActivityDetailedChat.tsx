import React, { Fragment } from 'react';
import {
    Header,
    Segment,
    CommentGroup,
    CommentAvatar,
    Comment,
    CommentAuthor,
    CommentContent, CommentMetadata, CommentText, CommentActions, Form, FormTextArea, Button
} from "semantic-ui-react";

const ActivityDetailedChat = () => {
    return (
        <Fragment>
            <Segment textAlign='center'
                     attached='top'
                     inverted
                     color='teal'
                     style={{border: 'none'}}>
                <Header>Chat about this event</Header>
            </Segment>
            <CommentGroup>
                <Comment>
                    <CommentAvatar src='/assets/user.png'/>
                    <CommentContent>
                        <CommentAuthor as='a'>Matt</CommentAuthor>
                        <CommentMetadata>
                            <div>Today at 5:42 pm</div>
                        </CommentMetadata>
                        <CommentText>How artistic!</CommentText>
                        <CommentActions>Reply</CommentActions>
                    </CommentContent>
                </Comment>
    
                <Comment>
                    <CommentAvatar src='/assets/user.png'/>
                    <CommentContent>
                        <CommentAuthor as='a'>Joe Henderson</CommentAuthor>
                        <CommentMetadata>
                            <div>5 days ago</div>
                        </CommentMetadata>
                        <CommentText>Dude, this is aweosme! Thanks so much.</CommentText>
                        <CommentActions>Reply</CommentActions>
                    </CommentContent>
                </Comment>
    
                <Form reply>
                    <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
            </CommentGroup>
        </Fragment>
    )
};

export default ActivityDetailedChat