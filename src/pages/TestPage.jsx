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
                    <h3>count is {props.count}</h3>
                    <h3>text is  {value.text}</h3>
                    {/* <h3>anther Dynamic content {count}</h3> */}
                </div>
            )}
        </DataContext.Consumer>)

}

export default TestPage