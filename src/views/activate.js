import React from 'react'
import Card from '../components/Card';

export default function activate() {
    return (
        <div className='center' >
            <Card>
                <h3>Mail has been sent to your email, kindly verify it to proceed!</h3>
            </Card>
        </div>
    )
}
