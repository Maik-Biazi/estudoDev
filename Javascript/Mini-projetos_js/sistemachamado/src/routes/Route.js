import { Route, Redirect } from 'react-router-dom'

export default function RouteWrapper({
    coomponent: Component,
    isPrivate,
    ...rest
}) {
    const loanding = false;
    const signed = false
    if (loanding) {
        return (
            <div>

            </div>
        )
    }
    if (!signed && isPrivate) {
        return <Redirect to="/" />
    }
    if(signed && !isPrivate) {
        return <Redirect to="/dashboard" />
    }

    return (
        <Route
            {...rest}
            render={props => (
                <Component {...props} />
            )}
        />

    )
}