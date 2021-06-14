import React , {useState} from 'react';
import CartSummary from './CartSummary';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import { useHistory } from 'react-router';

export default function Navi() {
    const [isAuthanticated, setIsAuthanticated] = useState(true);
    const history = useHistory();
    function handleSignOut(params) {
        setIsAuthanticated(false);
        history.push("/")
    }
    function handleSignIn(params) {
        setIsAuthanticated(true);
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthanticated?<SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
