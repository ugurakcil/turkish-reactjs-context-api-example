import React, { Component } from 'react'
import { OrdekTuketici } from './baglam'

export default class OrdekBelirleyici extends Component {
    render() {
        return (
            <OrdekTuketici>
                {({ordekmi, tersine, dispatch}) => {
                    return(<div>
                        <h2>Ördek Belirleyici</h2>
                        <div>Ördek mi? : { ordekmi ? 'vırak' : 'cik cik'}</div>
                        <br />
                        <button onClick={tersine}>
                            Tersine Çevir
                        </button>
                    </div>)
                }}
            </OrdekTuketici>
        )
    }
}
