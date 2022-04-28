import { NavigationContainer } from '@react-navigation/native';

export default function MainNavigation({children}) {
    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    );
}
