import { useEffect, useState } from 'react';
import { DataContext } from '../App';
// const myCatr = 'test variable'e'

const TestPage = (props) => {
    console.log('rendered testpage, props', props)
    return (
        <DataContext.Consumer>
            {value => (
                < div >

                    <h3>Test Page</h3>
                    {props.count}
                    <h3>Dynamic content {value}</h3>
                    {/* <h3>anther Dynamic content {count}</h3> */}
                </div>
            )}
        </DataContext.Consumer>)

}

export default TestPage