import React, {Fragment} from 'react'

 const Notfound = () => {
    return (
        <Fragment>
            <h1 className='x-large text-primary'>
                <i className='fas fa-exclamation-triangle'></i> Page Not Found
            </h1>
            <p className='large'>Page does not exist</p>
        </Fragment>
    )
}

export default Notfound;