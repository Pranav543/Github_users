import React from 'react'
import {Image, List} from 'semantic-ui-react'

const User = ({users}) => {
    return (
        <List.Item>
            <Image avatar src={users.avatar_url} />
            <List.Content>
                <List.Header>{users.login}</List.Header>
            </List.Content>
        </List.Item>
    )
}

export default User